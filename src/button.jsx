import "./button.css";
import { useState } from "react";

export default function Counter(){
    let[count,setCount] = useState(0);
      console.log(count);
      
    function incCount(){
       
        setCount(count+1);
       
    }

    return (
    <>
    <p>Counter valueee = {count}</p>
    <button onClick={incCount}>Increase value of count</button>
    </>)
}