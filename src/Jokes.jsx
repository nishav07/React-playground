import { useState,useEffect } from "react";

export default function Jokes(){
    let  [joke,setJoke] = useState("");
    let Url = 'https://official-joke-api.appspot.com/random_joke';

    let getJokes = async() => {
        let res = await fetch(Url);
        let data = await res.json();
        console.log(data);
        setJoke(data);
    }

    useEffect(() => {
        async function jokeInit() {
        let res = await fetch(Url);
        let data = await res.json();
        console.log(data);
        setJoke(data);
        }
        jokeInit()
    },[])
    return(<div>
        <h1>{joke.setup}</h1>
        <h1>{joke.punchline}</h1>
        <button onClick={getJokes}>Give Jokes</button>
    </div>)
}