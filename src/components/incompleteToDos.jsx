import React from "react";

export const IncompleteToDos = (props) => {
  const { todos, onClickComplete, onClickDeleat } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のToDo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDeleat(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
