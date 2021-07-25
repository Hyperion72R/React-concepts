import React from "react";
import Todo from "./Todo";

export default function TodoList({ todoList, toggleTodo }) {
  return (
    // <div>Lorem ipsum dolor sit amet consectetur adipisicing.{todoList}</div>

    // <div>{todoList.length}</div>

    // todoList.map((item) => {
    //   return <div>{item}</div>;
    // })

    todoList.map((todo) => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
    })
  );
}
