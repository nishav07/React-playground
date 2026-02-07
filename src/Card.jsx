import './Card.css';
import Thumbnail from './thumbnail';
import './Thumbnail.css'
import Title from './title';

function Card(){
    return (
        <div id="cards">
            <Thumbnail/>
            <Title/>
        </div>
    )
}

export default Card;