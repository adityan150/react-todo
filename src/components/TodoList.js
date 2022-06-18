import React, { useEffect, useState } from "react";
import { getData, removeData } from "../controller/firebase";
import ListItem from "./ListItem";

import "./TodoList.css";
function TodoList(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(setData);
  }, []);

  const removeItemHandler = async (targetId) => {
    removeData(targetId);
  };

  return (
    <ol className="todo-list">
      {data.length === 0 && <h2>No tasks in hand!</h2>}
      {data.map((item) => (
        <ListItem
          title={item.title}
          id={item.id}
          key={item.id}
          removeItem={removeItemHandler}
        />
      ))}
    </ol>
  );
}

export default TodoList;
