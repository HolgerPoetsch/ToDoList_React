import { useState } from "react"

export default function ToDoList({ myObjects, setMyObjects }) {
    return (
        <>
            <h3>My ToDos</h3>
            <ul id="list-container">
                {myObjects.map((obj) => <ItemBuilder key={obj.id} obj={obj} myObjects={myObjects} setMyObjects={setMyObjects} />)}
            </ul>
        </>
    )
}

function ItemBuilder({ obj, myObjects, setMyObjects }) {

    const [[editIcon, hideText], setEditState] = useState(["\u{1F589}", { "display": "inline" }])
    const [inputEdit, setInputEdit] = useState(null);

    function deleteListItem(obj, myObjects, setMyObjects) {
        setMyObjects(myObjects.filter((element) => element.id !== obj.id))
        localStorage.removeItem(obj.id)
    }

    function editListItem(obj, myObjects, setMyObjects) {
        const myNewObject = myObjects.map((element) => {
            if (element.task !== obj.task) {
                return element;
            } else if (inputEdit) {
                element.task = inputEdit;
                setEditState(["\u{1F589}", { "display": "inline" }])
                setInputEdit(null)
                return element
            } else {
                setEditState(["\u{1F5AB}", { "display": "none" }])
                setInputEdit(element.task)
                return element;
            }
        })
        setMyObjects(myNewObject)
    }

    function checkListItem() {
        const myNewObject = myObjects.map((element) => {
            element.id == obj.id ? obj.status = !obj.status : obj.status = obj.status;
            return element;
        })
        setMyObjects(myNewObject)
    }

    return (
        <li className={obj.status ? "checked" : ""} onClick={(e) => e.target.tagName=="LI" && checkListItem()}>
            <input value={inputEdit} type={!inputEdit && "hidden"} onChange={(e) => setInputEdit(e.target.value)} /><p style={hideText}>{obj.task}</p>
            <span className="editSpan" onClick={() => editListItem(obj, myObjects, setMyObjects)} >{editIcon}</span>
            <span onClick={() => deleteListItem(obj, myObjects, setMyObjects)}>{"\u{00d7}"}</span>
        </li>)
} 