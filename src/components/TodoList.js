import React from "react";
import ListItem from "./ListItem";

import "./TodoList.css";
function TodoList(props) {
  return (
    <ol className="todo-list">
      {props.list.length === 0 && <h2>No tasks in hand!</h2>}
      {props.list.map((item) => (
        <ListItem
          title={item.title}
          id={item.id}
          key={item.id}
          deleteItem={props.deleteItem}
        />
      ))}
    </ol>
  );
}

export default TodoList;
