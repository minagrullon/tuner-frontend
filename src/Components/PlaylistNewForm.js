import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewSong.css";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function PlaylistNewForm() {
  const navigate = useNavigate();

  const addPlaylist = (newPlaylist) => {
    axios
      .post(`${API}/playlists`, newPlaylist)
      .then(() => {
        navigate(`/playlists`);
      })
      .catch((err) => console.log(err));
  };
  const [playlist, setPlaylist] = useState({
    name: "",
    description: "",
  });

  const handleTextChange = (e) => {
    setPlaylist({ ...playlist, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlaylist(playlist);
  };

  return (
    <div className="new_form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:{" "}
          <input
            id="name"
            value={playlist.name}
            type="text"
            onChange={handleTextChange}
            placeholder="Name for playlist..."
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
      <div className="droplets">
        <div className="droplet droplet-1"></div>
        <div className="droplet droplet-2"></div>
        <div className="droplet droplet-3"></div>
        <div className="droplet droplet-4"></div>
        <div className="droplet droplet-5"></div>
      </div>
      <div>
        <button className="go_back" onClick={() => navigate("/playlists")}>
          Back to Songs
        </button>
      </div>
    </div>
  );
}
