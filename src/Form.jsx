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
    <label htmlFor="input">Full name</label>
    <input type="text" placeholder="enter your name" id="input"  onChange={updateInput} />
    <p>{fullName}</p>
    <button>Submit</button>
    </form>
    </>)
}