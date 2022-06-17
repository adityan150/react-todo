import React, { useState, useEffect } from "react";
import AddItem from "./AddItem";
import TodoList from "./TodoList";

import "./Todo.css";

const DUMMY_LIST = [
  {
    id: 1,
    title: "JavaScript prototype",
  },
  {
    id: 2,
    title: "Maths linear regression",
  },
  {
    id: 3,
    title: "Study dynamic programming",
  },
];

function Todo() {
  let initialData = JSON.parse(localStorage.getItem("listData"));
  if (initialData === null) {
    initialData = DUMMY_LIST;
  }
  const [data, setData] = useState(initialData);

  useEffect(() => {
    localStorage.setItem("listData", JSON.stringify(data));
  }, [data]);

  const addItemHandler = (inputData) => {
    setData([...data, inputData]);
  };

  const removeItemHandler = (idToRemove) => {
    setData(data.filter((item) => item.id !== idToRemove));
  };

  return (
    <div className="todo">
      <h1>ToDo</h1>
      <AddItem onFormSubmit={addItemHandler} />
      <TodoList list={data} deleteItem={removeItemHandler} />
    </div>
  );
}

export default Todo;