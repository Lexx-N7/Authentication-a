import React, { useState, useContext } from "react";
import { MyContext } from "../context";

export default function AddTodo() {
  let context = useContext(MyContext);
  let [values, setValues] = useState({
    title: ""
  });

  let handleOnChange = e => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  let handleOnSubmit = e => {
    e.preventDefault();
    context.addTodo(values.title)
    setValues({title: ''})
  };
  return (
    <form className="form-inline"  onSubmit={handleOnSubmit}>
      <input
        type="text"
        className="form-control"
        name="title"
        value={values.title}
        onChange={handleOnChange}
      />
      <button className="btn btn-primary m-3">
        add
      </button>
    </form>
  );
}
