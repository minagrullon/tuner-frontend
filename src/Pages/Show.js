import React from "react";
import SongInfo from "../Components/SongInfo";

export default function Show() {
  return (
    <div className="show">
      <h4 className="show_title">
        <em>Selected Song</em>
      </h4>
      <SongInfo />
    </div>
  );
}
