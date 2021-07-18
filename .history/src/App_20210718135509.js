import React, { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, name: "Todo 1", complete: true },
  ]);

  const todoNameRef = useRef();

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((test) => {
      const x = [{ id: 1, name: name, complete: false }];
      const y = [];

      test = x + y;
    });
    console.log(todos);
    // todoNameRef.current.value = null
  }

  return (
    <>
      <TodoList todoList={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
