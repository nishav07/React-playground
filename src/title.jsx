import "./Title.css";

function Title({heading,chennel,views,time,tags}){
    const tag = tags.map((t) => <li>{t}</li>);
    return (
        <div>
            <h1>{heading}</h1>
            <p id="Cname">{chennel}</p>
            <p>{views} . {time}</p>
            <p>tags:{tag}</p>
        </div>
    )
}

export default Title;