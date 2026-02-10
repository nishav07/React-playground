import "./Title.css";

function Title({heading,tags}){
    const tag = tags.map((t) => <li>{t}</li>);
    return (
        <div>
            <h1>{heading}</h1>
            <p>tags:{tag}</p>
        </div>
    )
}

export default Title;