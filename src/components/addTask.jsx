import { useState } from "react";

function addTask() {

const [task, setTask] = useState(); 

function addToList(e) {
    e.preventDefault(); 
}

    return (
        <>
            <input 
                onChange={handleInput}
                type="text"
                name="name"
                id="input-box"
                placeholder="Add your task..."
            />
            <button type="submit">Add</button>
        </>
    )
}; 

export default addTask 