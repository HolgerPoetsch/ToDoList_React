import { useState } from "react";

function AddTask({ myObjects, setMyObjects }) {
  const [textinput, setTextinput] = useState("");

  const changeText = (e) => {
    setTextinput(e.target.value);
  };

  const handleOnClick = () => {
    // const newTodos = [...todos, {task : textinput, status: false}];
    const newId = crypto.randomUUID()
    setMyObjects((prev) => [...prev, {id : newId, task : textinput, status: false}]);
    localStorage.setItem([newId], JSON.stringify({ task: textinput, status: false }))
    setTextinput(""); 
  };

  return (
    <>
      <input value={textinput} type="text" placeholder="Add your task..." onChange={changeText} />
      <button type="submit" onClick={handleOnClick}>
        Add
      </button>
    </>
 );
}
export default AddTask;
