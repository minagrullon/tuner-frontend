import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Song from "./Song";
import "./Songs.css";

const API = process.env.REACT_APP_API_URL;

export default function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/songs`)
      .then((res) => {
        console.log(res.data);
        setSongs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="songs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>

              <th>fav?</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
