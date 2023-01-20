//dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Index from "./Pages/Index";
import Show from "./Pages/Show";

//components
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="">
      <h1>Tuner App</h1>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
