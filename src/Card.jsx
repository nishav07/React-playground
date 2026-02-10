import './Card.css';
import Price from './Price';
import Title from './title';

function Card({heading,tags,oldPrice,newPrice}){
    return (
        <div id="cards">
            <Title heading={heading}  tags={tags}/>
            <Price oldPrice={oldPrice} newPrice={newPrice}/>
        </div>
    )
}

export default Card;