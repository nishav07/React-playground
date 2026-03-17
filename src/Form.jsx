import { useState } from "react";

export default function Form(){
    // let [fullName,setFullName] = useState("");
    let [formInputs,setInputs] = useState({
        userName:"",age:"",password:""
    })

    let inputHandler = (e) => {
        const eventName = e.target.name;
        console.log("eventName:",eventName);
        const eventValue = e.target.value;
        console.log("event value",eventValue)

        setInputs((currData) => {
            currData[eventName] = eventValue;
            return{...currData};
        })
    }
    // function updateInput(e){
    //     let curr = e.target.value;
    //     console.log(curr)
    //    setFullName(curr)
    // }
    return(<>
    <form action="/">
    <label htmlFor="userName">Full name</label>
    <input type="text" placeholder="enter your name" id="userName" name="userName"  onChange={inputHandler} />
    <input type="text" placeholder="enter your age" id="age" name="age"  onChange={inputHandler} />
    <input type="password" placeholder="enter your age" id="age" name="password"  onChange={inputHandler} />
    <p>{formInputs.userName},   {formInputs.age},    {formInputs.password}</p>
    <button>Submit</button>
    </form>
    </>)
}