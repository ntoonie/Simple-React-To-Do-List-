import React, { useState } from "react";

function App() {

  const [todos, setTodos] = useState(["study", "work"]);
  const [text, setText] = useState("");

  function handleChange(event){
    const {value} = event.target;
    setText(value);
  }

  function buttonPressed(event){
    event.preventDefault();
    setTodos(prevTodos => [
      ...prevTodos, text
    ]);

    setText("");
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={buttonPressed}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
