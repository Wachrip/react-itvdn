import React from "react";
import Todo from "../todo/todo";
import styles from "./todoList.module.scss";

let TodoList = (props) => {
  let onDelete = (id) => {
    props.ondelete(id);
  };
  return (
    <ul>
      {props.todos.map((it, index) => {
        return (
          <div className={styles.wrapper}>
            <Todo key={index} text={it} />
            <button onClick={() => onDelete(index)}>del</button>
          </div>
        );
      })}
    </ul>
  );
};

export default TodoList;
