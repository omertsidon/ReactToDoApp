import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(""); // State for input text
  const [items, setItems] = useState([]); // State for list items

  function handleChange(event) {
    setInputText(event.target.value); // Update input text state
  }

  function addItem() {
    if (inputText.trim() !== "") {
      setItems((prevItems) => [...prevItems, inputText]); // Add new item to the list
      setInputText(""); // Clear input field
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Dynamic To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Enter a task..."
          value={inputText}
          onChange={handleChange} // Handle input changes
        />
        <button onClick={addItem}> {/* Add item on button click */}
          <span>Add Task</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li> // Render list items dynamically
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

