import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Playlist from "./Playlist";
// import "./Songs.css";
import "./Playlists.css";

const API = process.env.REACT_APP_API_URL;

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/playlists`)
      .then((res) => {
        console.log(res.data);
        setPlaylists(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="playlists">
      {playlists.map((playlist) => {
        return <Playlist key={playlist.id} playlist={playlist} />;
      })}
    </div>
  );
}
