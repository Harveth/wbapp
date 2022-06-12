import { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import CashierOrderItem from "../CashierOrderItem.js/CashierOrderItem";
import './CashierOrders.css'
const SERVER = "http://localhost:6969";


class CashierOrders extends Component {
    constructor(props) {
      super(props);
      this.state = {
        orders: [
            {
                id: '',
                name: '',
                foodName: ''
            }
        ],
        searchString: ''
      };
    }

    loadOrders = async () => {
        await axios
          .post(`${SERVER}/ServerPHP/cashierOrders.php`, {
              req: "requestforitems"
          })
          .then((res) => {
            if (res.data == "error") {
                console.log("error");
              } else {
                console.log("loggin response");
                console.log(res.data);
                for(let i = 0; i < res.data.length; i++){
                  const order = {
                    id: res.data[i].id,
                    username: res.data[i].user,
                    foodName: res.data[i].item,
                  }
                    this.setState(prevState => ({
                    orders : [...prevState.orders, order]
                }), () =>{ console.log(this.state);})
                }
                
              }
          });
      };

      

    componentDidMount(){
        this.loadOrders();
    }

    onSearchChange = (event) =>{
      //console.log(event.target.value);
      this.setState({searchString: event.target.value});
      //console.log(this.state);
    }
    
  
  
    render() {

          console.log("displayin orders");
          console.log(this.state.orders.length);
          let rows = [];
          this.state.orders.sort((a, b) => (a.id > b.id) ? 1 : -1)
          for(let i = 1; i < this.state.orders.length; i++){
              rows.push(<CashierOrderItem id={this.state.orders[i].id} user={this.state.orders[i].username} foodName={this.state.orders[i].foodName}/>);

          }
          //return rows;
          //this.state.items.map((item, i) =>{<Item_card className="itm-child" description={this.state.items[i].description}/>})


        const Testurl = "https://www.seriouseats.com/thmb/OBckE8o3ypWrULAwlkb11RvKD7w=/1000x1000/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg";
        return (
        <div className="container">
                <h1> Orders: </h1>
                <input type="text" className="inp-cshr" placeholder="Search Items" onChange={this.onSearchChange}/>
                
              <Link className="cshr-lnkbtn" to="/additem" >Add</Link>
                
                <div className="item-container col">
                {rows}
                </div>
        </div>
          );
      }
  }
  
  export default CashierOrders;