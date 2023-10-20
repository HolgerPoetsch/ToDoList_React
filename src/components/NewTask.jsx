import { useState } from "react";

function NewTask () {
  const [textinput, setTextinput] = useState(""); 

  const changeText = (e) => {
    setTextinput(e.target.value); 
  }

  const submit = (e) => {
    e.preventDefault();
    const newTodos = [...todos, {task : textinput, status: false}]; 
    setTask(myObjects); 
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add your task..."
        onChange={changeText}
      />
      <button type="submit" onClick={submit}>Add</button>
    </>
  );
}
export default NewTask;