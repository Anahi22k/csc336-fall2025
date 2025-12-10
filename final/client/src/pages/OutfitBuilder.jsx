import { useState, useEffect, useCallback } from "react";
import Mirror from "../components/Mirror.jsx";
import ClothingCard from "../components/ClothingCard.jsx";
import { fetchItems } from "../api.js";

// in case wardrobe is empty
const fallbackItems = [
  { id: 1, name: "Pink Sweater", category: "top" },
  { id: 2, name: "Blue Overalls", category: "bottom" },
  { id: 3, name: "Dress", category: "dress" },
  { id: 4, name: "Sneakers", category: "shoes" },
];

export default function OutfitBuilder() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    fetchItems()
      .then((data) => {
        setItems(data);
        setStatus("done");
      })
      .catch((err) => {
        console.error(err);
        setError("Could not load wardrobe items");
        setStatus("error");
      });
  }, []);

  const availableItems =
    status === "done" && items.length > 0 ? items : fallbackItems;

  function toggleItem(id) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  const selectedItems = availableItems.filter((i) =>
    selectedIds.includes(i.id)
  );

  // weather toast handler
  const handleWeatherTipClick = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=38.9072&longitude=-77.0369&current_weather=true"
      );
      const data = await response.json();

      const tempC = data?.current_weather?.temperature;
      if (typeof tempC !== "number") {
        throw new Error("No temperature data");
      }

      let label;
      let tip;
      if (tempC <= 5) {
        label = "Very cold";
        tip = "Choose a coat, warm layers, and boots.";
      } else if (tempC <= 15) {
        label = "Chilly";
        tip = "Light sweater or jacket.";
      } else if (tempC <= 24) {
        label = "Mild";
        tip = "Lighter layers and comfy sneakers.";
      } else {
        label = "Warm / Hot";
        tip = "Choose dresses, shorts, and sandals.";
      }

      const rounded = Math.round(tempC);

      if (!window.Toastify) {
        console.error("Toastify is not available on window.");
        return;
      }

      const html = `
        <div class="weather-toast-content">
          <div class="weather-toast-city">Washington, DC</div>
          <div class="weather-toast-main">
            <span class="weather-toast-temp">${rounded}°C</span>
            <span class="weather-toast-label">· ${label}</span>
          </div>
          <div class="weather-toast-tip">${tip}</div>
        </div>
      `;

      window.Toastify({
        text: html,
        escapeMarkup: false,
        close: true,
        duration: 0, // stay until user closes / is not closing check later
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        className: "weather-toast",
      }).showToast();
    } catch (err) {
      console.error(err);

      if (window.Toastify) {
        window.Toastify({
          text: "Could not load DC weather right now.",
          duration: 4000,
          gravity: "top",
          position: "right",
          className: "weather-toast weather-toast--error",
        }).showToast();
      }
    }
  }, []);

  return (
    <section className="page page-outfit">
      <h2 className="page-title">Dress Up</h2>
      <p className="page-subtitle">
        Tap pieces to add them to your outfit. Your picks will show up in the
        mirror ready to try on.
      </p>

      {error && <p className="field-error">{error}</p>}

      <div className="outfit-layout">
       
        <div className="outfit-mirror-column">
          <Mirror selectedItems={selectedItems} />

          <div className="outfit-selected">
            {selectedItems.length === 0 ? (
              <p className="outfit-selected-empty">
                No pieces selected yet. Tap an item on the right!
              </p>
            ) : (
              <>
                <p className="outfit-selected-title">Current outfit</p>
                <ul>
                  {selectedItems.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>


        <div className="outfit-wardrobe-column">
          <div className="outfit-header-row">
            <h3 className="small-heading">Pick your pieces</h3>
            <button
              type="button"
              className="btn-ghost btn-weather-tip"
              onClick={handleWeatherTipClick}
            >
              Todays weather outfit
            </button>
          </div>

          <div className="outfit-grid">
            {availableItems.map((item) => (
              <ClothingCard
                key={item.id}
                item={item}
                selected={selectedIds.includes(item.id)}
                onClick={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
