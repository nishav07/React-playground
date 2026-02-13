import './Card.css';
import Price from './Price';
import Title from './Title';
import Btn from '../button';

function Card({heading,tags,oldPrice,newPrice}){
    return (
        <div id="cards">
            <Title heading={heading}  tags={tags}/>
            <Price oldPrice={oldPrice} newPrice={newPrice}/>
            <Btn text={"click meee!!"}/>
        </div>
    )
}

export default Card;