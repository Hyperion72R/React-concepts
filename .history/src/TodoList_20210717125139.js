import React from "react";

export default function TodoList({ todoList }) {
  return (
    // <div>Lorem ipsum dolor sit amet consectetur adipisicing.{todoList}</div>
    // <div>{todoList.length}</div>

    todoList.map((item) => {
      return <div>{item}</div>;
    })
  );
}
