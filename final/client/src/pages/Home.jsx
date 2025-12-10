import { useNavigate } from "react-router-dom";
import Mirror from "../components/Mirror.jsx";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="page page-home">
      <div className="home-left">
        <h1 className="home-title">Plan out outfits.</h1>
        <p className="home-subtitle">
          Upload clothes to build outfits 
        </p>
        <div className="home-actions">
          <button
            className="btn-primary"
            onClick={() => navigate("/outfits")}
          >
            Dress Up
          </button>
          <button
            className="btn-ghost"
            onClick={() => navigate("/wardrobe")}
          >
            View Wardrobe
          </button>
        </div>
      </div>
      <div className="home-right">
        <Mirror />
      </div>
    </section>
  );
}
