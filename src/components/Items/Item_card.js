import './Item_card.css'


const Item_card = (props) =>{

    return(
        <div className='cont'>
            <h2>item</h2>
            <img src={props.imgPath}  alt="food image" width={150} />
            <p>{props.description}</p>
        </div>
    );
}

export default Item_card;