import AddTask from "./components/AddTask.jsx"
import ToDoList from "./components/ToDoList"
import ClearAllBtn from "./components/ClearAllBtn"
import { useState } from "react"

// Falls man den localStorage per Script mal füllen möchte, diese Zeile deaktivieren:
/* localStorage.setItem(crypto.randomUUID(), JSON.stringify({ task: "Staubsaugen", status: true })) */

let myTestObjects = []

for (let i = 0; i < localStorage.length; i++) {
  let aTask = JSON.parse(localStorage.getItem(localStorage.key(i)))
  aTask["id"] = localStorage.key(i)
  myTestObjects.push(aTask)
}

function App() {
  const [myObjects, setMyObjects] = useState(myTestObjects)
  return (
    <div className="container">
      <div className="todo-app">
        <h2>To-Do List</h2>
        <div className="row">
          <AddTask myObjects={myObjects} setMyObjects={setMyObjects} />
          {/* <input type="text" id="input-box" placeholder="Add your text" /> */}
          {/*Rick:    <input type="text" id="input-box" placeholder="Add your text">
            <button onclick="addTask()">Add</button>*/}
        </div>
        <ToDoList myObjects={myObjects} setMyObjects={setMyObjects} />
        {/*Nora    <ul id="list-container">

            </ul>*/}
      </div>
      <div>
        <ClearAllBtn myObjects={myObjects} setMyObjects={setMyObjects} />
      </div>
    </div>
  )
}

export default App