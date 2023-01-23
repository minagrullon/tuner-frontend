import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewSong.css";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function NewSongForm() {
  const navigate = useNavigate();

  const addSong = (newSong) => {
    axios
      .post(`${API}/songs`, newSong)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((err) => console.log(err));
  };
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const handleTextChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(song);
  };

  return (
    <div className="new_form">
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
            id="album"
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
      <div class="droplets">
        <div class="droplet droplet-1"></div>
        <div class="droplet droplet-2"></div>
        <div class="droplet droplet-3"></div>
        <div class="droplet droplet-4"></div>
        <div class="droplet droplet-5"></div>
      </div>
      <div>
        <button className="go_back" onClick={() => navigate("/songs")}>
          Back to Songs
        </button>
      </div>
    </div>
  );
}
