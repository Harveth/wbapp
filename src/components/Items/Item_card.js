import './Item_card.css'


const Item_card = (props) =>{

    return(
        <div>    
            <img src={props.imgPath} className="itm-img" alt="food image" />
            <p>{props.description}</p>
            <h4>10$</h4>
        </div>
    );
}

export default Item_card;