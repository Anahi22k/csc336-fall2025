import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Wardrobe from "./pages/Wardrobe.jsx";
import AddItem from "./pages/AddItem.jsx";
import OutfitBuilder from "./pages/OutfitBuilder.jsx";

export default function App() {
  return (
    <div className="app-root">
      <NavBar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/outfits" element={<OutfitBuilder />} />
        </Routes>
      </main>
    </div>
  );
}
