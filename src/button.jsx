import "./button.css";

function sayHi(){
    console.lpg("hello broooooooo")
}


function Btn({text}){
    return(<>
    <button onClick={sayHi}>{text}</button>
    </>)
}

export default Btn