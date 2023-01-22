import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./SongInfo.css";
const API = process.env.REACT_APP_API_URL;

export default function SongInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState({});

  const handleDelete = () => {
    deleteSong();
  };

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
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
      .delete(`${API}/songs/${id}`)
      .then(() => {
        navigate(`/songs`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <article>
      <h3 className="song_title">
        {song.is_favorite ? "🥰" : "😷"} {song.name}
      </h3>
      <h4>Artist: {song.artist}</h4>
      <h5>{song.album}</h5>
      <p>{song.time}</p>
      <div className="show_buttons">
        <div>
          <Link to={`/songs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}
