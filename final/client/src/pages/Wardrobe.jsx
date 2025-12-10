
import { useEffect, useState } from "react";
import WardrobeGrid from "../components/WardrobeGrid.jsx";
import { fetchItems } from "../api.js";

export default function Wardrobe() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchItems()
      .then((data) => {
        setItems(data);
        setStatus("done");
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load wardrobe");
        setStatus("error");
      });
  }, []);

  return (
    <section className="page">
      <h2 className="page-title">Wardrobe</h2>
      <p className="page-subtitle">
      </p>

      {status === "loading" && <p>Loading wardrobe…</p>}
      {status === "error" && <p className="field-error">{error}</p>}
      {status === "done" && <WardrobeGrid items={items} />}
    </section>
  );
}
