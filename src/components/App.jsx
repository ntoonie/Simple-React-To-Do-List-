import React, { useState } from "react";
import TodoItem from "./TodoItem";

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
  
  function deleteItem(id){
    setTodos((prevTodos) => {
      return prevTodos.filter((todos, index) => {
        return index != id;
      })
    })
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
          <TodoItem key = {index} id = {index} text = {todo}
          onChecked = {deleteItem}
          />
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
