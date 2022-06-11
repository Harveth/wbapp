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


   render(){
        return(
            <div className="menuitms">
                <div className="itms_row">
                    <div className="itms_col">
                        <h2>{this.props.foodName}</h2>
                        <h4>{this.props.type}</h4>
                                <div className='box-img'>    
                                <img src={this.props.imgPath} className="itm-img" alt="food image" />
                            </div>
                                <div>
                                    <p>{this.props.description}</p>
                                    <h4>{this.props.price} $</h4>
                                </div>
                                <Link to="/edititem" onClick={this.sendCookie}>Edit</Link>

                                

                                <button>--Delete</button>
                    </div>
                            
                </div>
            </div>
        )
   }
}

export default CashierOrderItem;