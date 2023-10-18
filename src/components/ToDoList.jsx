

export default function ToDoList({myObjects, setMyObjects}) {

    console.log(myObjects)

    return (
        <>
            <h3>My ToDos</h3>
            <ul>
                {myObjects.map((obj) => <ItemBuilder key={obj.task} obj = {obj} myObjects= {myObjects} setMyObjects = {setMyObjects}/>)}
            </ul>
        </>
    )
}

function ItemBuilder ({obj, myObjects, setMyObjects}) {

    function deleteListItem (obj, myObjects, setMyObjects) {
        setMyObjects(myObjects.filter((element) => element.task !== obj.task))
    }

    return <li><p>{obj.task}</p><span className="editSpan"  >&#128393;</span><span onClick={() => deleteListItem(obj, myObjects, setMyObjects)}>&#x00d7;</span></li>
} 