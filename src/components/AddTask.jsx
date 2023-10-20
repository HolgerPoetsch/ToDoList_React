import { useState } from "react";

function AddTask({ myObjects, setMyObjects }) {
  const [textinput, setTextinput] = useState("");

  const changeText = (e) => {
    setTextinput(e.target.value);
  };

  const handleOnClick = () => {
    // const newTodos = [...todos, {task : textinput, status: false}];
    setMyObjects((prev) => [...prev, {id : crypto.randomUUID(), task : textinput, status: false}]);
  };

  return (
    <>
      <input type="text" placeholder="Add your task..." onChange={changeText} />
      <button type="submit" onClick={handleOnClick}>
        Add
      </button>
    </>
 );
}
export default AddTask;
