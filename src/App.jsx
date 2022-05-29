import React, { useState } from "react";
import "./styles.css";
import { InputToDo } from "./components/inputToDo";
import { IncompleteToDos } from "./components/incompleteToDos";
import { CompleteToDos } from "./components/completeToDos";

export const App = () => {
  const [toDoText, setToDoText] = useState("");
  const [incompleteToDos, setIncompleteToDos] = useState([]);
  const [completeToDos, setCompleteToDos] = useState([]);

  const onChangeToDoText = (event) => setToDoText(event.target.value);

  const onClickAdd = () => {
    if (toDoText === "") return;
    const newToDos = [...incompleteToDos, toDoText];
    setIncompleteToDos(newToDos);
    setToDoText("");
  };

  const onClickDeleat = (index) => {
    const newToDos = [...incompleteToDos];
    newToDos.splice(index, 1);
    setIncompleteToDos(newToDos);
  };

  const onClickComplete = (index) => {
    const newIncompleteToDos = [...incompleteToDos];
    newIncompleteToDos.splice(index, 1);
    const newCompleteToDos = [...completeToDos, incompleteToDos[index]];
    setIncompleteToDos(newIncompleteToDos);
    setCompleteToDos(newCompleteToDos);
  };

  const onClickBack = (index) => {
    const newCompleteToDos = [...completeToDos];
    newCompleteToDos.splice(index, 1);
    const newInCompleteToDos = [...incompleteToDos, completeToDos[index]];
    setCompleteToDos(newCompleteToDos);
    setIncompleteToDos(newInCompleteToDos);
  };

  return (
    <>
      <InputToDo
        toDoText={toDoText}
        onChange={onChangeToDoText}
        onClick={onClickAdd}
        disabled={incompleteToDos.length >= 5}
      />
      {incompleteToDos.length >= 5 && (
        <p style={{ color: "red" }}>5個以上のタスクは消化してください</p>
      )}
      <IncompleteToDos
        todos={incompleteToDos}
        onClickComplete={onClickComplete}
        onClickDeleat={onClickDeleat}
      />
      <CompleteToDos todos={completeToDos} onClickBack={onClickBack} />
    </>
  );
};
