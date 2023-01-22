import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Song({ song }) {
  const navigate = useNavigate();
  return (
    <tr>
      <td>
        <Link to={`/songs/${song.id}`}>{song.name}</Link>
      </td>

      <td onClick={() => navigate(`/songs/${song.id}`)}>{song.artist}</td>
      <td>{song.is_favorite === true ? "🥰" : "😷"}</td>
      <td>{song.time}</td>
    </tr>
  );
}
