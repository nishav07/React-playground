import { useState,useEffect } from "react";

export default function Counter(){
    const[countx,setCountx] = useState(0);
    const[county,setCounty] = useState(0);

    let updateCountx = () => {
        setCountx((prev) => prev + 1)
    }

    let updateCounty = () => {
        setCounty((prev) => prev + 1)
    }


    useEffect(function print(){
        console.log("use effect has been calleddd") //koi bhi sate variable chnage pe ye chlane lagta hai
    },[county])

    // [ arr mai state variable names as refrece for specific useeffect], [] empty err for only one time , and no array for every re rendrendering

    return(<div>
        <h1>countx = {countx}</h1>
        <button onClick={updateCountx}>Increase Count</button>
        <h1>county = {county}</h1>
        <button onClick={updateCounty}>Increase Count</button>
    </div>)
}