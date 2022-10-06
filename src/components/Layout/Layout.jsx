import React, { useState } from "react";
import TodoInput from "../form/Form";
import TodoList from "../list/List";
import "./style.css";

function Layout() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "공부하기",
      body: "공부를 열심히 하자 ;-;",
      isDone: false,
    },
    {
      id: 2,
      title: "뚜비랑놀기",
      body: "뚜비랑 놀장! >.<",
      isDone: true,
    },
  ]);

  const [input, setInput] = useState({
    title: "",
    body: "",
  });
  const { title, body } = input;

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!title) {
      alert("제목을 입력하세요!");
      return;
    } else if (!body) {
      alert("내용을 입력하세요!");
      return;
    }
    const num = todos.length;
    const todo = {
      id: num + 1,
      title,
      body,
      isDone: false,
    };
    setTodos([...todos, todo]);
    setInput({
      title: "",
      body: "",
    });
  };

  const onDel = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="Layout">
      <TodoInput
        title={title}
        body={body}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
      />
      <div className="list-container">
        <TodoList todos={todos} onDone={onDone} onDel={onDel} />
      </div>
    </div>
  );
}

export default Layout;
