import './Item_card.css'
import axios from "axios";
import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EditItem from '../EditItem/EditItem';
import { withCookies, Cookies } from "react-cookie";
import {instanceOf} from "prop-types";
const SERVER = "http://localhost:6969";



class Item_card extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
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

      sendCookie = () =>{
        const { cookies } = this.props;
        cookies.set("editId", this.props.id, { path: "/" });
        cookies.set("editName", this.props.foodName, { path: "/" });
        cookies.set("editPrice", this.props.price, { path: "/" });
        cookies.set("editType", this.props.type, { path: "/" });
        cookies.set("editDescription", this.props.description, { path: "/" });
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

                                

                                <button onClick={this.deleteItemUtil}>--Delete</button>
                    </div>
                            
                </div>
            </div>
        )
   }
}

export default withCookies(Item_card);