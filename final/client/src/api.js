const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

export async function fetchItems() {
  const res = await fetch(`${API_BASE_URL}/api/items`);
  if (!res.ok) throw new Error("Failed to load wardrobe.");
  return res.json();
}

export async function createItem(item) {
  const res = await fetch(`${API_BASE_URL}/api/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item)
  });

  const data = await res.json();

  if (!res.ok) {
    // server-side error message
    throw new Error(data.error || "Failed to save item.");
  }

  return data;
}
