import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';




export default function TodoList () {
    let [todo,setTodo] = useState([{task:"sample task", id:uuidv4()}]);
    let [newTodo,setNewTodo] = useState([""])
    // console.log(`todo before rendered ${todo.id}`);

    let updateTodo = (e) => {
        // console.log(e.target.value);
        setNewTodo(e.target.value);
    }

    

    let addNewTask = () => {
        console.log("Naya todo hai ye",newTodo);
        console.log("new task add krna haii");
        setTodo((prevTodo) => {
            return [...prevTodo,{task:newTodo,id:uuidv4()}];
        })
        setNewTodo("");
    }

    let deleteFromTodo = (id) => {
        console.log("trying to delete this shitt",id);
    }

    return (<div>
        <input type="text" placeholder="enter your work" value={newTodo} onChange={updateTodo} />
<button onClick={addNewTask}>Add</button>
<br />
<br />
<br />

<ul>
    {todo.map((todos) => (
        <li key={todos.id}>
            <span>{todos.task}</span>
            &nbsp;
            &nbsp;
            <button onClick={() => {
                deleteFromTodo(todos.id)
            }}>delete</button>
        </li>

        
    ))}
</ul>
    </div>
    )
}