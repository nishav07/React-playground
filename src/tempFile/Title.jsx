import "./Title.css";

function Title({heading,tags}){
    const tag = tags.map((t,i) => <li key={i}>{t}</li>);
    return (
        <div>
            <h1>{heading}</h1>
            <p>tags:{tag}</p>
        </div>
    )
}

export default Title;