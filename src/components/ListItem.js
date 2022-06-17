import React from "react";

import "./ListItem.css";

function ListItem(props) {
  const deleteItemHandler = (event) => {
    event.preventDefault();
    props.deleteItem(props.id);
  };
  return (
    <div className="list-item">
      <li>{props.title}</li>
      <button onClick={deleteItemHandler}>X</button>
    </div>
  );
}

export default ListItem;
