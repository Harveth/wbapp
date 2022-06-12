import axios from "axios";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './CashierOrderItem.css'
const SERVER = "http://localhost:6969";



class CashierOrderItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
      }

      cancelOrder = async () => {
        await axios
          .post(`${SERVER}/ServerPHP/deleteOrder.php`, {
              id : this.props.id
          })
          .then((res) => {
            if (res.data == "error") {
                console.log("error");
              } else {
                console.log("loggin response");
                console.log(res.data);
               
               
              }
          });
      };


   render(){
        return(
            <div className="menuitms">
                <div className="itms_row">
                    <div className="cshr_itms col">
                        <h2 className="cshr_hdr">Order Number : {this.props.id}</h2>
                        <h4>Customers name : {this.props.user}</h4>
                                <div className='box-img'>    
                                {//<img src={this.props.imgPath} className="itm-img" alt="food image" />
                                }
                            </div>
                                <div>
                                    <p>{this.props.foodName}</p>
                                    
                                </div>
                                

                                
                                <button className="cshr_btn">Approve</button>
                                <button className="cshr_btn two" onClick={this.cancelOrder}>Cancel</button>
                    </div>
                            
                </div>
            </div>
        )
   }
}

export default CashierOrderItem;