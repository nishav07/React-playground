import "./Title.css";

function Title({heading,chennel,views,time}){
    return (
        <div>
            <h1>{heading}</h1>
            <p id="Cname">{chennel}</p>
            <p>{views} . {time}</p>
        </div>
    )
}

export default Title;