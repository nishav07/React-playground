import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';




export default function TodoList () {
    let [todo,setTodo] = useState([{task:"sample task", id:uuidv4(),done:false}]);
    let [newTodo,setNewTodo] = useState([""])
    // console.log(`todo before rendered ${todo.id}`);

    let updateTodo = (e) => {
        // console.log(e.target.value);
        e.preventDefault();
        setNewTodo(e.target.value);
    }

    

    let addNewTask = () => {
        console.log("Naya todo hai ye",newTodo);
        console.log("new task add krna haii");
        setTodo((prevTodo) => {
            return [...prevTodo,{task:newTodo,id:uuidv4(),done:false}];
        })
        setNewTodo("");
    }

    let deleteFromTodo = (id) => {
        console.log("trying to delete this shitt",id);
        setTodo((prev) => prev.filter((t) => t.id != id))// delete kek liyee humeshaaaaa fiilter use krkna ha
    }

    let upperCaseAll = () => {
        setTodo( (prev)  => {
            return prev.map((todo) => {  //sab array mai change krne ke liye mapppppp use krna hai
                return {
                    ...todo,
                    task:todo.task.toUpperCase(),
                    
                }
            })
        })
    }

    let reverseArr = () => {
        let nxtTodo = [...todo];
        let revsseTodo = nxtTodo.reverse();
        setTodo(revsseTodo);

    }

    ////////////////////////////////////////////////

    let markAsDone = (id) => {
        setTodo( (prev)  =>  prev.map((t) => {  //single index of array mai bhi change krne ke liye map hi use krna hai
                if(id === t.id){
                    return {...t,done:true}
                } else {
                    return t
                }
            })
        )
    }

    return (<div>
        <input type="text" placeholder="enter your work" value={newTodo} onChange={updateTodo} />
<button onClick={addNewTask}>Add</button>
<br />
<br />
<br />

<ul>
    { todo.map((todos) => (
        <li key={todos.id}>
            <span style={{textDecoration:todos.done? "line-through":"none"}}>{todos.task}</span>
            &nbsp;
            &nbsp;
            <button onClick={() => {
                deleteFromTodo(todos.id)
            }}>delete</button>
            <button onClick={() => {
                markAsDone(todos.id)
            }}>Mark As Done</button>
        </li>

        
    ))}
</ul>

<button onClick={upperCaseAll}>ToUpperCase</button>
<button onClick={reverseArr}>Reverse</button>
    </div>
    )
}