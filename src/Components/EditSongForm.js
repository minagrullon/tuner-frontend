import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./EditSong.css";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function NewSongForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const updateSong = (updatedSong) => {
    axios
      .put(`${API}/songs/${id}`, updatedSong)
      .then(() => {
        navigate(`/songs/${id}`);
      })
      .catch((err) => console.log(err));
  };

  const updateBookmark = (updatedBookmark) => {
    axios
      .put(`${API}/bookmarks/${id}`, updatedBookmark)
      .then(
        () => {
          navigate(`/bookmarks/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((res) => setSong(res.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong(song, id);
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Title:{" "}
          <input
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Enter a title..."
          />
        </label>
        <label htmlFor="artist">
          Artist:{" "}
          <input
            id="artist"
            value={song.artist}
            type="text"
            onChange={handleTextChange}
            placeholder="Enter an artist..."
          />
        </label>
        <label htmlFor="album">
          Album:{" "}
          <input
            id="Album"
            value={song.album}
            type="text"
            onChange={handleTextChange}
            placeholder="Enter album name..."
          />
        </label>
        <label htmlFor="time">
          Duration of Song:{" "}
          <input
            id="time"
            value={song.time}
            type="text"
            onChange={handleTextChange}
            placeholder="00:00"
          />
        </label>
        <label htmlFor="is_favorite">
          Favorite:{" "}
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
          />
        </label>
        <input type="submit" />
      </form>
      <div class="drops">
        <div class="drop drop-1"></div>
        <div class="drop drop-2"></div>
        <div class="drop drop-3"></div>
        <div class="drop drop-4"></div>
        <div class="drop drop-5"></div>
      </div>
      <div>
        <button className="go_back" onClick={() => navigate("/songs")}>
          Go Back
        </button>
      </div>
    </div>
  );
}
