import React from "react";
import "./style.css";

function TodoItem({ todo, onDone, onDel }) {
  const { id, title, body, isDone } = todo;
  return (
    <div className={`todo-item ${isDone ? "Done" : "not-Done"}`}>
      <div className="todo-title">{title}</div>
      <div className="todo-body">{body}</div>
      <div className="buttons">
        {todo.isDone === false ? (
          <button
            className="greenbtn"
            onClick={() => {
              onDone(id);
            }}
          >
            완료
          </button>
        ) : (
          <button
            className="pinkbtn"
            onClick={() => {
              onDone(id);
            }}
          >
            취소
          </button>
        )}
        <button
          className="redbtn"
          onClick={() => {
            onDel(id);
          }}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
