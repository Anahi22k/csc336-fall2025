const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;
const DATA_FILE = path.join(__dirname, "data.json");

app.use(cors());
// had to replace size because files after the bacground removal was too large
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

async function readItems() {
  const data = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(data || "[]");
}

//write items
async function writeItems(items) {
  await fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2));
}


app.get("/api/items", async (req, res) => {
  try {
    const items = await readItems();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to read wardrobe data." });
  }
});



app.post("/api/items", async (req, res) => {
  try {
    const { name, category, imageUrl, emoji } = req.body;

    
    if (!name || !name.trim()) {
      return res.status(400).json({ error: "Name is required." });
    }
    if (!category) {
      return res.status(400).json({ error: "Category is required." });
    }
    if (!imageUrl) {
      return res.status(400).json({ error: "imageUrl is required." });
    }

    if (!imageUrl || !imageUrl.startsWith("http")) {
      return res
        .status(400)
        .json({ error: "imageUrl must be a valid http/https URL." });
    }
    

   

    const items = await readItems();


    if (items.some((item) => item.name.toLowerCase() === name.toLowerCase())) {
      return res
        .status(400)
        .json({ error: "You already have an item with that name." });
    }

    const newItem = {
      id: Date.now(),
      name: name.trim(),
      category,
      imageUrl,
      emoji: emoji || "✨",
    };

    items.push(newItem);
    await writeItems(items);

    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save wardrobe item." });
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

