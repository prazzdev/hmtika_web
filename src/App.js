import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Event from './Pages/Event';
import Info from './Pages/Info';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/event" element={<Event />} />
        <Route path="/info" element={<Info />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
