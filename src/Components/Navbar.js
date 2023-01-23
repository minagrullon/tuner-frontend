import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <h4 onClick={() => navigate("/")}>TUNER APP</h4>
      <h1>
        <Link className="nav_h1" to="/songs">
          Songs
        </Link>
      </h1>
      <button className="nav_button">
        <Link to="/songs/new">New</Link>
      </button>
    </nav>
  );
}
