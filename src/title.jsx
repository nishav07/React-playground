import "./Title.css";

function Title(){
    let chennel = "NISHAV CODE";
    let views = "10M";
    let time = "23 hours ago";
    return (
        <div>
            <h1>How to beacme a dev</h1>
            <p id="Cname">{chennel}</p>
            <p>{views} . {time}</p>
        </div>
    )
}

export default Title;