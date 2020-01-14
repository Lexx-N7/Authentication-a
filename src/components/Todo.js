import React, { useContext } from "react";
import { MyContext } from "../context";

export default function Todo({ todo }) {
  let context = useContext(MyContext);

  let { id, completed } = todo;
  let stylingTodo = () => {
    return {
      border: "1px solid #333",
      textDecoration: completed ? "line-through" : "none"
    };
  };
  return (
    <div style={stylingTodo()}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => context.markTodo(id)}
      />
      <p>{todo.title}</p>
      <button
        type="button"
        className="btn btn-danger m-1 p-1"
        onClick={() => context.deleteTodo(id)}
      >
        delete
      </button>
    </div>
  );
}
