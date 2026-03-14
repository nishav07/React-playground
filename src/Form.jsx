import { useState } from "react";

export default function Form(){
    let [fullName,setFullName] = useState("");

    function updateInput(e){
        let curr = e.target.value;
        console.log(curr)
       setFullName(curr)
    }
    return(<>
    <form action="/">
    <input type="text" placeholder="enter your name"  onChange={updateInput} />
    <p>{fullName}</p>
    <button>Submit</button>
    </form>
    </>)
}