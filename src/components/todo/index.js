import React, { useState } from "react";
import { Link } from "react-router-dom";

import TodoList from "./todoList/todoList";
import Input from "./input/input";

function Main() {
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
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/kobe">Kobe</Link>
        </li>
      </ul>
      <Input onchange={onInputChangeHandler} value={inputVal} />{" "}
      <button onClick={onButtonClick}>Add</button>
      <TodoList todos={todos} ondelete={onDeleteButtonClick} />
    </div>
  );
}

export default Main;
