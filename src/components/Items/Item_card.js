import './Item_card.css'


const Item_card = (props) =>{

    return(
        <div className="menuitms">
            <div className="itms_row">
                <div className="itms_col">
                    <h2>Food</h2>
                            <div className='box-img'>    
                            <img src={props.imgPath} className="itm-img" alt="food image" />
                        </div>
                            <div>
                                <p>{props.description}</p>
                                <h4>10$</h4>
                            </div>
                </div>
                        
            </div>
        </div>
    );
}

export default Item_card;