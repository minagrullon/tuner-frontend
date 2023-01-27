import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Songs from "./Songs";

import "./SongInfo.css";
const API = process.env.REACT_APP_API_URL;

export default function SongInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState({});

  const handleDelete = () => {
    deletePlaylist();
  };

  useEffect(() => {
    axios
      .get(`${API}/playlists/${id}`)
      .then(
        (res) =>
          // console.log(res.data);
          setPlaylist(res.data),
        (error) => navigate(`/*`)
      )
      .catch((err) => console.log(err));
  }, [id]);

  const deletePlaylist = () => {
    axios
      .delete(`${API}/playlists/${id}`)
      .then(() => {
        navigate(`/playlists`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="">
        <article>
          <h4>
            Name:{" "}
            <span style={{ color: "rgb(84, 68, 140)" }}>{playlist.name}</span>
          </h4>
          <h5>
            <em>Description: </em>
            {playlist.description}
          </h5>
          <div className="show_buttons">
            <div>
              <Link to={`/playlists`}>
                <button>Back</button>
              </Link>
            </div>
            <div>
              <Link to={`/playlists/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </div>
            <div>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </article>
        <br></br>
      </div>
      <div className="songs_in_playlists">
        <h4 style={{ color: "maroon", textAlign: "center" }}>
          Songs in this playlist
        </h4>
        <Songs playlistId={playlist.id} />
      </div>
    </>
  );
}
