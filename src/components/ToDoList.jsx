import { useState } from "react"

export default function ToDoList({ myObjects, setMyObjects }) {

    return (
        <>
            <h3>My ToDos</h3>
            <ul>
                {myObjects.map((obj) => <ItemBuilder key={obj.task} obj={obj} myObjects={myObjects} setMyObjects={setMyObjects} />)}
            </ul>
        </>
    )
}

function ItemBuilder({ obj, myObjects, setMyObjects }) {

    // Das mit den Icons zu wechseln hat irgendwie noch nicht funktioniert :(
    const [icons, setIcons] = useState(["\u{1F589}", "\u{00d7}"])

    const [inputEdit, setInputEdit] = useState(null);
    const [hideText, setHideText] = useState({"display": "inline"})

    function deleteListItem(obj, myObjects, setMyObjects) {
        setMyObjects(myObjects.filter((element) => element.task !== obj.task))
    }

    function editListItem(obj, myObjects, setMyObjects) {
        const myNewObject = myObjects.map((element) => {
            if (element.task !== obj.task) {
                return element;
            } else if (inputEdit) {
                element.task = inputEdit;
                setHideText({"display":"inline"})
                setInputEdit(null)
                setIcons(["\u{1F589}", "\u{00d7}"])
                return element
            } else {
                setHideText({"display":"none"})
                setInputEdit(element.task)
                setIcons(["\u{1F5AB}", "\u{00d7}"])
                return element;
            }
        })
        setMyObjects(myNewObject)
    }

    return (
        <li>
            <input value={inputEdit} type={!inputEdit && "hidden"} onChange={(e) => setInputEdit(e.target.value)} /><p style={hideText}>{obj.task}</p>
            <span className="editSpan" onClick={() => editListItem(obj, myObjects, setMyObjects)} >{icons[0]}</span>
            <span onClick={() => deleteListItem(obj, myObjects, setMyObjects)}>{icons[1]}</span>
        </li>)
} 