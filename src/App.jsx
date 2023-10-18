import AddTask from "./components/addTask.jsx"
import ToDoList from "./components/ToDoList"

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
  return (
    <div className="container">
      <div className="todo-app">
        <h2>To-Do List</h2>
          <div class="row">
            <AddTask />
/*Rick:    <input type="text" id="input-box" placeholder="Add your text">

        <div className="row">
          {/*Rick:    <input type="text" id="input-box" placeholder="Add your text">
            <button onclick="addTask()">Add</button>*/}
        </div>
        <ToDoList myObjects={myTestObjects}/>
        {/*Nora    <ul id="list-container">

            </ul>*/}
      </div>
      {/*Holger <div id="todo-delete">
          <button id="delete-button">Delete All</button>
          </div>*/}
    </div>
  )
}

export default App