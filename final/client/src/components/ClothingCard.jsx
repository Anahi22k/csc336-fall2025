
export default function ClothingCard({ item, selected, onClick }) {
    return (
      <button
        className={`clothing-card ${selected ? "clothing-card--selected" : ""}`}
        type="button"
        onClick={onClick}
      >
        <div className="clothing-visual">
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.name}
              className="clothing-image"
            />
          ) : (
            <span className="clothing-emoji">{item.emoji}</span>
          )}
        </div>
        <div className="clothing-name">{item.name}</div>
        <div className="clothing-tag">{item.category}</div>
      </button>
    );
  }
  
  