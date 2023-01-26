import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Playlist({ playlist }) {
  const { id, name, description } = playlist;
  const navigate = useNavigate();
  return (
    <div className="playlist">
      <h3>
        <Link to={`/playlists/${id}`}>{name}</Link>
      </h3>

      <h5 onClick={() => navigate(`/playlists/${id}`)}>{description}</h5>
      {/* <td>{song.is_favorite === true ? "🥰" : "😷"}</td>
      <td>{song.time}</td> */}
    </div>
  );
}
