import React, { useState } from "react";
import "./AddItem.css";

function AddItem(props) {
  const [isValid, setValidity] = useState(true);
  const [title, setTitle] = useState("");

  const inputValueHandler = (event) => {
    setTitle(event.target.value);
    setValidity(true);
  };

  const submitFormHandler = (event) => {
    setTitle("");
    event.preventDefault();
    const title = event.target[0].value;
    if (title.trim().length === 0) {
      setValidity(false);
      setTimeout(() => {
        setValidity(true);
      }, 5000);
    } else {
      const inputData = {
        id: Math.random(),
        title: title,
      };
      props.onFormSubmit(inputData);
    }
  };

  return (
    <form className={"add-item"} onSubmit={submitFormHandler}>
      <input
        className={isValid ? "text-input" : "text-input invalid"}
        type="text"
        name="title"
        placeholder="Enter a task..."
        value={title}
        onChange={inputValueHandler}
      />
      <input className="submit" type="submit" value="Add" />
    </form>
  );
}

export default AddItem;
