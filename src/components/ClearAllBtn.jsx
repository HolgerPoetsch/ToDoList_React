

function ClearAllBtn({myObjects, setMyObjects}) {
  return (
    <div>
      <div className="todo-delete">
      <button className="delete-button" onClick={() => setMyObjects([])} >
        Delete All</button>
      </div>
    </div>
  )
}

export default ClearAllBtn