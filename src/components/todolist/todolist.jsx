import React from "react";
import TodoItem from "../todoitem/todoitem";
import "./style.css";
function TodoList({ todos, onDone, onDel }) {
  return (
    <>
      <div className="list-title">
        <h3>🐣 Todo List</h3>
      </div>
      <div className="todo-container">
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => (
            <TodoItem todo={todo} key={todo.id} onDone={onDone} onDel={onDel} />
          ))}
      </div>
      <div className="list-title">
        <h3>🐥 Done List</h3>
      </div>
      <div className="done-container">
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => (
            <TodoItem todo={todo} key={todo.id} onDone={onDone} onDel={onDel} />
          ))}
      </div>
    </>
  );
}

export default TodoList;
