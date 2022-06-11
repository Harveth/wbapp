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
            <div className="menuitms">
                <div className="itms_row">
                    <div className="itms_col">
                        <h2>{this.props.foodName}</h2>
                                <div className='box-img'>    
                                <img src={this.props.imgPath} className="itm-img" alt="food image" />
                            </div>
                                <div>
                                    <p>{this.props.description}</p>
                                    <h4>{this.props.price} $</h4>
                                </div>
                                <button>Edit---</button>
                                <button onClick={this.deleteItemUtil}>--Delete</button>
                    </div>
                            
                </div>
            </div>
        )
   }
}

export default Item_card;