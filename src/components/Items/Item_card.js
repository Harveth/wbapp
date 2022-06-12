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
                    <div className="itms_col col">   
                                <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=556,505" className="itm-img" alt="food image" />
                                    <h1>{this.props.foodName}</h1> 
                                    <p>{this.props.description}</p>
                                    <h4>{this.props.price} $</h4>
                                    <Link to="/edititem">
                                        <button type="button" className='btn-pos' onClick={this.sendCookie}>
                                              Edit
                                        </button>
                                    </Link>
                                <button className='btn-pos' onClick={this.deleteItemUtil}>Delete</button>
                    </div>
        )
   }
}

export default withCookies(Item_card);