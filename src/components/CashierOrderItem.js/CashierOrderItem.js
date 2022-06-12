import axios from "axios";
import { Component } from 'react';
import { Link } from 'react-router-dom';
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
    // let rows = [];
    //     for(let i = 0; i < this.props.names.length; i++){
    //         rows.push(<p>{this.props.names[i]}</p>);
    //       }
        return(
            <div className="menuitms">
                <div className="itms_row">
                    <div className="itms_col">
                        <h2>{this.props.id}</h2>
                        <h4>{this.props.user}</h4>
                                <div className='box-img'>    
                                {//<img src={this.props.imgPath} className="itm-img" alt="food image" />
                                }
                            </div>
                                <div>
                                    <p>{this.props.foodName}</p>
                                    
                                </div>
                                

                                
                                <button>--Approve</button>
                                <button onClick={this.cancelOrder}>--Cancel</button>
                    </div>
                            
                </div>
            </div>
        )
   }
}

export default CashierOrderItem;