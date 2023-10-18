// import { useState } from "react";

export default function AddTask() {
//   const [task, setTask] = useState();

//   function addToList(e) {
//     e.preventDefault();
//   }

  return (
    <>
      <input
        // onChange={handleInput}
        type="text"
        name="name"
        id="input-box"
        placeholder="Add your task..."
      />
      <button type="submit">Add</button>
    </>
  );
}
