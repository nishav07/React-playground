import "./button.css";

function sayHi(){
    console.log("hello broooooooo")
}

function lol(){
    console.log("lollllllllllllllllll")
}

function Btn({text,nxt}){
    return(<>
    <button onClick={sayHi}>{text}</button>
    <button onScroll={lol} >{nxt}</button>
    </>)
}

export default Btn