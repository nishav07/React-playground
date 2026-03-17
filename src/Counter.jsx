import { useState,useEffect } from "react";

export default function Counter(){
    const[count,setCount] = useState(0);

    let updateCount = () => {
        setCount((prev) => prev + 1)
    }

    useEffect(function print(){
        console.log("use effect has been calleddd") //koi bhi sate variable chnage pe ye chlane lagta hai
    })

    return(<div>
        <h1>count = {count}</h1>
        <button onClick={updateCount}>Increase Count</button>
    </div>)
}