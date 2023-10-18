import addTask from "./components/addTask.jsx"

function App() {
  return (
    <div class="container">
      <div class="todo-app">
        <h2>To-Do List</h2>
          <div class="row">
            <addTask />
{/*Rick:    <input type="text" id="input-box" placeholder="Add your text">
            <button onclick="addTask()">Add</button>*/}
            </div>

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