//dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Error from "./Pages/Error";

//components
import Navbar from "./Components/Navbar";
import SongInfo from "./Components/SongInfo";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlists" element={<Index />} />
            <Route path="/playlists/new" element={<New />} />
            <Route path="/playlists/:id" element={<Show />} />
            <Route path="/playlists/:id/edit" element={<Edit />} />
            <Route path="/playlists/:id/songs/:id" element={<SongInfo />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
