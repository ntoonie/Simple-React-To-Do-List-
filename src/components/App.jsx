import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {

  const [todos, setTodos] = useState(["study", "work"]);

  function buttonPressed(text){
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
        <InputArea onAdd={buttonPressed}/>
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
