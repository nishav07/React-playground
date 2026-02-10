
import "./Price.css";

function Price({oldPrice,newPrice}){
    return (
        <div id="price">
            <span id="oldPrice">${oldPrice}</span> &nbsp; <span id="newPrice">${newPrice}</span>
        </div>
    )
}
 

export default Price;