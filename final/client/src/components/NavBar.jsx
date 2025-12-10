import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="nav">
      <div className="nav-left">
        <span className="brand-logo"> </span>
        <span className="brand-name">Visualize</span>
      </div>
      <nav className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/wardrobe" className="nav-link">
          Wardrobe
        </NavLink>
        <NavLink to="/outfits" className="nav-link">
          Dress Up
        </NavLink>
        <NavLink to="/add" className="nav-link nav-pill">
          Add Clothes
        </NavLink>
      </nav>
    </header>
  );
}
