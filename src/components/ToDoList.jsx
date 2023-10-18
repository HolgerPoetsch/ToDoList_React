export default function ToDoList(props) {
    return (
        <>
            <h3>My ToDos</h3>
            <ul>
                {props.myObjects.map((obj) => <li>{obj.task}</li>)}
            </ul>
        </>
    )
}