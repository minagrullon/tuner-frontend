import React from "react";

import PlaylistDetails from "../Components/PlaylistDetails";
import SongInfo from "../Components/SongInfo";

export default function Show() {
  return (
    <div className="show">
      <h4 className="show_title">
        <em>Selected Playlist</em>
      </h4>
      <PlaylistDetails />
    </div>
  );
}
