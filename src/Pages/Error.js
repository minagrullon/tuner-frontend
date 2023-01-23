import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h2>Error</h2>
      <button onClick={() => navigate("/songs")}>GO BACK!</button>
    </div>
  );
}
