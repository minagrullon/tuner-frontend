import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./SongInfo.css";
const API = process.env.REACT_APP_API_URL;

export default function SongInfo({ id, playlistId }) {
  // const { id } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState({});

  const handleDelete = () => {
    deleteSong();
    window.location.reload();
  };

  useEffect(() => {
    axios
      .get(`${API}/playlists/${playlistId}/songs/${id}`)
      .then(
        (res) =>
          // console.log(res.data);
          setSong(res.data),
        (error) => navigate(`/*`)
      )
      .catch((err) => console.log(err));
  }, [id]);

  const deleteSong = () => {
    axios
      .delete(`${API}/playlists/${playlistId}/songs/${id}`)
      .then(() => {
        navigate(`/playlists/${playlistId}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="song_dets_contain">
      <div className="song_details">
        <article>
          <h3 className="song_title">{song.name}</h3>
          Is fav? {song.is_favorite ? "🥰" : "😷"}
          <h4>
            Artist:{" "}
            <span style={{ color: "rgb(84, 68, 140)" }}>{song.artist}</span>
          </h4>
          <h5>Album Title: {song.album}</h5>
          <p>Song Duration: {song.time}</p>
          <div className="show_buttons">
            <div>
              {/* <Link to={`/playlists/${id}`}>
                <button>Back</button>
              </Link> */}
            </div>
            {/* <div>
              <Link to={`/songs/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </div> */}
            <div>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
