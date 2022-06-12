import axios from "axios";
import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { withCookies, Cookies } from "react-cookie";
import {instanceOf} from "prop-types";
const SERVER = "http://localhost:6969";



class PromoteUserCard extends Component{
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
          .post(`${SERVER}/ServerPHP/.php`, {
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

      PromoteToQualityControl = async () => {
        await axios
          .post(`${SERVER}/ServerPHP/PromoteToQ.php`, {
              id: this.props.id
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

      PromoteToCashier = async () => {
        await axios
          .post(`${SERVER}/ServerPHP/PromoteToCashier.php`, {
              id: this.props.id
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


   render(){
        return(
                    <div className="itms_col col">   
                                    <h1>{this.props.id}</h1> 
                                    <p>{this.props.username}</p>
                                    <h4>{this.props.type}</h4>
                                <button className='btn-pos' onClick={this.PromoteToCashier}>Promote To Cashier</button>
                                <button className='btn-pos' onClick={this.PromoteToQualityControl}>Promote To Quality-Control</button>
                    </div>
        )
   }
}

export default withCookies(PromoteUserCard);