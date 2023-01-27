import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./EditSong.css";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function PlaylistEditform() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [playlist, setPlaylist] = useState({
    name: "",
    description: "",
  });

  const updatePlaylist = (updatedPlaylist) => {
    axios
      .put(`${API}/playlists/${id}`, updatedPlaylist)
      .then(() => {
        navigate(`/playlists/${id}`);
      })
      .catch((err) => console.log(err));
  };

  const handleTextChange = (event) => {
    setPlaylist({ ...playlist, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/playlists/${id}`)
      .then((res) => setPlaylist(res.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePlaylist(playlist, id);
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:{" "}
          <input
            id="name"
            value={playlist.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Enter a title..."
          />
        </label>
        <label htmlFor="description">
          Description:{" "}
          <input
            id="description"
            value={playlist.description}
            type="text"
            onChange={handleTextChange}
          />
        </label>

        <input type="submit" />
      </form>
      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
      <div>
        <button
          className="go_back"
          onClick={() => navigate(`/playlists/${id}`)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
