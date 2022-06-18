import React from "react";

import "./ListItem.css";

function ListItem(props) {
  const deleteButtonHandler = (event) => {
    event.preventDefault();
    props.removeItem(props.id);
  };
  return (
    <div className="list-item">
      <li>{props.title}</li>
      <button onClick={deleteButtonHandler}>X</button>
    </div>
  );
}

export default ListItem;
