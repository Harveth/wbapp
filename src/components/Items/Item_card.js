import './Item_card.css'
import axios from "axios";
import { Component } from 'react';
const SERVER = "http://localhost:6969";



class Item_card extends Component{
    constructor(props) {
        super(props);
      }


    deleteItem = async (id) => {
        console.log("deleting in progress")
        await axios
          .post(`${SERVER}/ServerPHP/deleteitem.php`, {
              id: id
          })
          .then((res) => {
            if (res.data == "error") {
                console.log("error");
              } else {
                console.log("loggin response");
                console.log(res.data);
                window.location.reload(false);
               
              }
          });
      };
    
      deleteItemUtil = () =>{
        this.deleteItem(this.props.id);
      }


   render(){
        return(
                    <div className="itms_col col">   
                                <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=556,505" className="itm-img" alt="food image" />
                                    <h1>{this.props.foodName}</h1> 
                                    <p>{this.props.description}</p>
                                    <h4>{this.props.price} $</h4>
                                <button className='btn-pos'>Edit</button>
                                <button className='btn-pos' onClick={this.deleteItemUtil}>Delete</button>
                    </div>
        )
   }
}

export default Item_card;