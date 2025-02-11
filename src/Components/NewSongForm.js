import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./NewSong.css";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function NewSongForm({ playlistId, handleAdd }) {
  // const navigate = useNavigate();
  let { id } = useParams();
  // const { songInfo } = props;
  // const addSong = (newSong) => {
  //   axios
  //     .post(`${API}/playlists/${playlistId}/songs`, newSong)
  //     .then(() => {
  //       navigate(`/playlists/${playlistId}`);
  //     })
  //     .catch((err) => console.log(err));
  // };

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
    setSong({ ...song, is_favorite: !song.is_favorite, playlist_id: id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(song, id);

    setSong({
      name: "",
      artist: "",
      album: "",
      time: "",
      is_favorite: false,
      // playlist_id: id,
    });
  };

  return (
    <div className="song_form">
      <h3
        style={{
          color: "white",
          textShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        Add a Song to the playlist
      </h3>
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
    </div>
  );
}
