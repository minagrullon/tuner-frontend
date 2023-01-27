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
          identifier={song.id}
          toggleEditForm={toggleEditForm}
          viewEditForm={viewEditForm}
          handleSubmit={handleSubmit}
        />
      ) : (
        <tr>
          <td onClick={() => setShow(!show)}>
            {song.name}
            {show ? <SongInfo id={song.id} playlistId={playlistId} /> : null}
          </td>
          <td>
            <button className="go_back" onClick={toggleView}>
              edit
            </button>
          </td>
        </tr>
      )}
    </div>
  );
}
