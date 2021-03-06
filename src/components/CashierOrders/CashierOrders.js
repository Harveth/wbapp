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

          //console.log("displayin orders");
          //console.log(this.state.orders.length);
          // let rows = [];
          // for(let i = 0; i < this.state.orders.length; i++){
          //     rows.push(<CashierOrderItem id={this.state.orders[i].id} user={this.state.orders[i].username} foodName={this.state.orders[i].foodName}/>);
          // }
          //return rows;
          //this.state.items.map((item, i) =>{<Item_card className="itm-child" description={this.state.items[i].description}/>})

          let rows = [];
          let curIncluded = [];
          if(!(this.state.orders[0] === undefined || this.state.orders.length === 0 || this.state.orders === null)){
            for(let i = 0; i < this.state.orders.length; i++){
              if(curIncluded.includes(this.state.orders[i].id))
                continue;
              var foodNames = [];
              foodNames.push(this.state.orders[i].foodName)
              for(let j = i + 1; j < this.state.orders.length; j++){
                  if(this.state.orders[i].id === this.state.orders[j].id){
                    foodNames.push(this.state.orders[j].foodName)
                  }
              }
              curIncluded.push(this.state.orders[i].id);
              console.log(foodNames);
              rows.push(<CashierOrderItem id={this.state.orders[i].id} user={this.state.orders[i].username} names={foodNames}/>);
          }
          }



        const Testurl = "https://www.seriouseats.com/thmb/OBckE8o3ypWrULAwlkb11RvKD7w=/1000x1000/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg";
        return (
        <div className="container">
                <h1> Orders: </h1>
                <input type="text" className="inp-cshr" placeholder="Search Orders" onChange={this.onSearchChange}/>

              <Link className="cshr-lnkbtn" to="/additem" >Add</Link>

                <div className="item-container col">
                {rows}
                </div>
        </div>
          );
      }
  }

  export default CashierOrders;