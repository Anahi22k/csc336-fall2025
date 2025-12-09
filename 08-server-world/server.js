import express from "express";
import fs from "fs"; 

const app = express();


//Serves static files from the public directory.
app.use(express.static("./public"));

//allows express to read JSON from POST requests
app.use(express.json());


//Has a GET /world route that sends the contents of world.json from the server.
app.get("/world", async (req, res) => {
    // Read the data and send as JSON
    const dataString = await fs.readFileSync("world.json", "utf-8");
    const dataObject = JSON.parse(dataString);
    res.json(dataObject);
  });

//Has a POST /update route that reads the existing world.json, modifies it 
//based on the client request, writes it back to disk, and sends the 
//updated data as the response.
app.post("/update", async (req, res) => {
    // Read the existing world data
    const dataString = await fs.readFileSync("world.json", "utf-8");
    const world = JSON.parse(dataString);

    // Get new person data from the client

    const newPerson = req.body;
    //when submitting an item it would seperate it by commas, solution:
    if (typeof newPerson.items === "string") {
        // Split if commas are present, otherwise wrap in array
        if (newPerson.items.includes(",")) {
          newPerson.items = newPerson.items.split(",").map(i => i.trim());
        } else {
          newPerson.items = [newPerson.items.trim()];
        }
      }
 // newPerson should look like:
  // {
  //   region: "Rainforest District",
  //   town: "Treehouse",
  //   name: "New Person",
  //   role: "Explorer",
  //   items: [{ name: "compass" }, { name: "map" }]
  // }
    // Find the region and town where this person should go
    for (let region of world.regions) {
        if (region.name === newPerson.region) {
        for (let town of region.towns) {
            if (town.name === newPerson.town) {
            // Add the new person to that town
            town.notable_people.push({
                name: newPerson.name,
                role: newPerson.role,
                items: newPerson.items || []
            });
            }
        }
        }
    }

    // write updated data back to world.json
    await fs.writeFileSync("world.json", JSON.stringify(world, null, 2));

  // Send updated data back to the client
    res.json(world);
});
// Start server

app.listen(3000, () => console.log("Server running on http://localhost:3000"));


