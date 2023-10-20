import NewTask from "./components/AddTask.jsx"
import ToDoList from "./components/ToDoList"
import ClearAllBtn from "./components/ClearAllBtn"
import { useState } from "react"

// Dieses Array an Objekten kann zum Testen verwendet werden.
// Rick: Objekte hinzufügen
// Holger: Objekte löschen
// Nora: Objekte anzeigen und bearbeiten
const myTestObjects = [
  {
    task: "Staubsaugen",
    status: true
  },
  {
    task: "Wäsche waschen",
    status: true
  },
  {
    task: "Spazieren gehen",
    status: true
  }
]


function App() {
  const [myObjects, setMyObjects] = useState(myTestObjects)
  return (
    <div className="container">
      <div className="todo-app">
        <h2>To-Do List</h2>
        <div className="row">
          <NewTask myObjects={myObjects} setMyObjects={setMyObjects}/>
          {/* <input type="text" id="input-box" placeholder="Add your text" /> */}
            {/*Rick:    <input type="text" id="input-box" placeholder="Add your text">
            <button onclick="addTask()">Add</button>*/}
        </div>
        <ToDoList myObjects={myObjects} setMyObjects={setMyObjects} />
        {/*Nora    <ul id="list-container">

            </ul>*/}
      </div>
        <div>
        <ClearAllBtn myObjects={myObjects} setMyObjects={setMyObjects}/>
        </div>
    </div>
  )
}

export default App