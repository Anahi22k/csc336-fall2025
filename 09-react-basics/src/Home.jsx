
import { useState } from "react"
import ListItem from "./ListItem.jsx"
import Section from "./Section.jsx"
import "./App.css"


// Components are reusable pieces of UI that can have their own state and logic
function Home() {

  const [inputValue, setInputValue] = useState("")
  const [items, setItems] = useState([
    { text: "English Bulldog", important: true},
    { text: "Old English Sheepdog", important: false},
    { text: "Havanese", important: false}
  ])

  // Function to add a new item to the list 
  function addItem() {
    if (inputValue.trim() === "") return;
  
    setItems([...items, { text: inputValue, important: false }]);
    setInputValue("");
  }
  

  return (
    <div className="app">
      <h1 className="app-title">What are the BEST dog Breeds?</h1>

      {/* this is a reusable component  */}
      <Section title="Add a dog breed">

        <input
          className="add-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a dog breed here..."
        />

        {/* When the button is clicked, call addItem() */}
        <button className="add-button" onClick={addItem}>
          Add Breed
        </button>
      </Section>

      {/*2. Display the List*/}

      {/* reuse the Section component again */}
  
      <Section title="The best dog breeds">
        <ul className="cat-list">
          {items.map((item) => (
            <ListItem item={item} key={item.id} />
          ))}
        </ul>
      </Section>
    </div>
  )
}

export default Home

