import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <h4>TUNER APP</h4>
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
