import React from "react";
import "./style.css";

function TodoInput({ title, body, onChangeHandler, onSubmitHandler }) {
  return (
    <div className="form-container">
      <form>
        <div className="titleinput">
          제목
          <input
            name="title"
            type="text"
            className="inputbox"
            value={title}
            onChange={onChangeHandler}
          />
        </div>
        <div className="bodyinput">
          내용
          <input
            name="body"
            type="text"
            className="inputbox"
            value={body}
            onChange={onChangeHandler}
          />
        </div>
        <button
          id="submit"
          type="submit"
          className="addbtn"
          onClick={onSubmitHandler}
        >
          추가하기
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
