import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Song from "./Song";
import NewSongForm from "./NewSongForm";
import "./Songs.css";

const API = process.env.REACT_APP_API_URL;

export default function Songs({ playlistId }) {
  const { id } = useParams();
  const [songs, setSongs] = useState([]);

  const handleAdd = (newSong) => {
    axios
      .post(`${API}/playlists/${playlistId}/songs`, newSong)
      .then(
        (res) => {
          console.log(res.data);
          setSongs([res.data, ...songs]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/playlists/${id}/songs/${id}`)
      .then(
        (response) => {
          const copySongsArray = [...songs];
          const indexDeletedSong = copySongsArray.findIndex((song) => {
            return song.id === id;
          });
          copySongsArray.splice(indexDeletedSong, 1);
          setSongs(copySongsArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedSong) => {
    axios
      .put(`${API}/playlists/${id}/songs/${updatedSong.id}`, updatedSong)
      .then((response) => {
        const copySongsArray = [...songs];
        const indexUpdatedSong = copySongsArray.findIndex((song) => {
          return song.id === updatedSong.id;
        });
        copySongsArray[indexUpdatedSong] = response.data;
        setSongs(copySongsArray);
      })
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios
      .get(`${API}/playlists/${id}/songs`)
      .then((res) => {
        console.log(res.data);
        setSongs(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="songs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              {/* <th>Artist</th>

              <th>fav?</th>
              <th>Time</th> */}
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return (
                <Song
                  key={song.id}
                  song={song}
                  playlistId={playlistId}
                  handleDelete={handleDelete}
                  handleSubmit={handleEdit}
                />
              );
            })}
          </tbody>
        </table>
      </section>
      <div className="form-box">
        <NewSongForm playlistId={playlistId} handleAdd={handleAdd} />
      </div>
    </div>
  );
}
