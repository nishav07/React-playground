import "./Msgbox.css";

function Msgbox({user,color}){
    let styles = {backgroundColor:{color}}
    return(
        <div>
            <h1 style={styles}>Hi,{user}</h1>
        </div>
    )
}

export default Msgbox