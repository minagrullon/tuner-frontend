import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditSongForm from "./EditSongForm";
import SongInfo from "./SongInfo";

export default function Song({ song, playlistId, handleDelete, handleSubmit }) {
  const [show, setShow] = useState(false);
  const [viewEditForm, toggleEditForm] = useState(false);
  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className="single_song">
      {viewEditForm ? (
        <EditSongForm
          playlistId={playlistId}
          handleSubmit={handleSubmit}
          song={song}
        />
      ) : (
        <tr>
          <td onClick={() => setShow(!show)}>
            {/* <Link to={`/playlists/${playlistId}/songs/${song.id}`}> */}
            {song.name}
            {show ? <SongInfo id={song.id} playlistId={playlistId} /> : null}
            {/* </Link> */}
          </td>
          <td>
            <button onClick={toggleView}>edit this song</button>
          </td>
        </tr>
      )}
    </div>
  );
}
