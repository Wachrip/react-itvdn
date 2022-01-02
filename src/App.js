import React, { useState } from "react";

import TodoList from "./components/todo/todoList/todoList";
import Input from "./components/todo/input/input";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  let onInputChangeHandler = (val) => {
    setInputVal(val);
    // console.log(inputVal);
  };

  let onButtonClick = () => {
    setTodos(todos.concat(inputVal));
    console.log(todos);
  };

  let onDeleteButtonClick = (id) => {
    setTodos(todos.filter((it, index) => index !== id));
  };

  return (
    <div className="App">
      <Input onchange={onInputChangeHandler} value={inputVal} />{" "}
      <button onClick={onButtonClick}>Add</button>
      <TodoList todos={todos} ondelete={onDeleteButtonClick} />
    </div>
  );
}

export default App;
