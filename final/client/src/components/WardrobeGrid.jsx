
import ClothingCard from "./ClothingCard.jsx";

export default function WardrobeGrid({ items }) {
  return (
    <div className="wardrobe-grid">
      {items.map((item) => (
        <ClothingCard key={item.id} item={item} />
      ))}
    </div>
  );
}
