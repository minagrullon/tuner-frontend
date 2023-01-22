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

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
