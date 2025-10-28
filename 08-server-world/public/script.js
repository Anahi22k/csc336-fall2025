//In your front end (index.html and script.js):
//Fetch /world on load and display the world information dynamically (i.e. generate HTML code for the data).
//Provide at least one input and button that lets the user make a change to the world (for example: add a person, change an item a person carries, or add a new town, etc.). The input should make use of a form and the FormData pattern to create a JSON object from the inputs.
//When the user submits the form, use fetch('/update', { method: 'POST', ... }) to send the new information.


async function loadWorld() {
    const res = await fetch("/world");
    const data = await res.json();
  
    let information = "";
  
    for (let region of data.regions) {
        information += `<h2>${region.name} (${region.climate})</h2>`;
  
      for (let town of region.towns) {
        information += `<h3>${town.name} — Population: ${town.population}</h3><ul>`;
  
        for (let person of town.notable_people) {
            information += `<li><strong>${person.name}</strong> (${person.role})<ul>`;
  
          // loop through their items (you said every person has items)
          for (let item of person.items) {
            let details = "";
          
    
            for (let key in item) {
                details += `${key}: ${item[key]}, `;
              }
          
            information += `<li>${details}</li>`;
          }
          
  
        information += `</ul>`; // close town list
      }
    }
  
    document.getElementById("worldDiv").innerHTML = information;
  }
}
  

//function will run when the script is loaded
loadWorld();

let nameForm = document.querySelector("#nameForm");

// When the user clicks the button, the event listener will read the text in the
// form, construct an object and send it over to the servers /update route using
// a POST HTTP request 
//server side, it finds the correct region and town and adds the new person there
// It then writes it back to world.json and returns

nameForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let formData = new FormData(nameForm);
    let formDataInObjectForm = Object.fromEntries(formData.entries());

    // send the new person info to the server’s /update route
    const res = await fetch("/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataInObjectForm)
    });

    const updatedWorld = await res.json();

    // Refresh the data displayed on the front end
    loadWorld();
});
