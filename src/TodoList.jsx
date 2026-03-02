import { useState } from "react";


export default function TodoList () {
    let [todo,setTodo] = useState(["sample task"]);
    let [newTodo,setNewTodo] = useState([""])
    console.log(`todo before rendered ${todo}`);

    let updateTodo = (e) => {
        console.log(e.target.value);
        setNewTodo(e.target.value);
    }

    

    let addNewTask = () => {
        console.log("Naya todo hai ye",newTodo);
        console.log("new task add krna haii");
        setTodo((prevTodo) => {
            return [...prevTodo,newTodo];
        })
        setNewTodo("");
    }
    return (<div>
        <input type="text" placeholder="enter your work" value={newTodo} onChange={updateTodo} />
<button onClick={addNewTask}>Add</button>
<br />
<br />
<br />

<ul>
    {todo.map((todos) => (
        <li>{todos}</li>
    ))}
</ul>
    </div>
    )
}