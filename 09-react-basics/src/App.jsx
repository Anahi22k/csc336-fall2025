import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import DogGallery from "./DogGallery.jsx";
import "./App.css";

function App() {
    return (
      <>
        <BrowserRouter>
          <nav className="nav">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/dogs" className="nav-link">
              Random Dogs
            </NavLink>
          </nav>
  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dogs" element={<DogGallery />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  
  export default App;