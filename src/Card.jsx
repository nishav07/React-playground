import './Card.css';
import Thumbnail from './thumbnail';
import './Thumbnail.css'
import Title from './title';

function Card({heading,chennel,views,time}){
    return (
        <div id="cards">
            <Thumbnail/>
            <Title heading={heading} chennel={chennel} views={ views }time={ time }/>
        </div>
    )
}

export default Card;