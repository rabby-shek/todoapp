import React, { useState } from "react";
import "./add.css";
import TodoList from "./TodoList";

const Add = (props) => {
  const [todo, setTodo] = useState({ title: "", des: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return {
        ...oldTodo,
        [name]: event.target.value,
      };
    });
  };
  const submitHandle = (event) => {
    event.preventDefault();
    console.log(todo);
    setTodo({ title: "", des: "" });
  };
  return (
    <>
      <div className="add" onSubmit={submitHandle}>
        <form action="" className="form">
          <label htmlFor="">Title : </label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={todo.title}
          />
          <br />
          <br />
          <label htmlFor="des">Description : </label>
          <br />
          <textarea
            type="text"
            id="des"
            name="des"
            onChange={handleChange}
            value={todo.des}
          />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
      <div>
      </div>
    </>
  );
};

export default Add;
