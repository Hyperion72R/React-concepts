import React from "react";

export default function Todo({ todo }) {
  return (
    <div>
      <input type="checkbox" defaultChecked={todo.complete} />
      <label>{todo.name}</label>
    </div>
  );
}
