import { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import CashierOrderItem from "../CashierOrderItem.js/CashierOrderItem";
const SERVER = "http://localhost:6969";


class CashierOrders extends Component {
    constructor(props) {
      super(props);
      this.state = {
        orders: [
            {
                id: '',
                name: '',
                description: '',
                rating: ''
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
                // const item = {
                //   id: res.data.id,
                //   name: res.data.name,
                //   type: res.data.type,
                //   price: res.data.price

                // }
                // console.log("loggin item");
                // console.log(item);
                // this.setState(prevState => ({
                //   items : [...prevState.items, item]
                // }))
                // console.log("loggin state");
                // console.log(this.state);
                
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
        //   let rows = [];
        //   for(let i = 1; i < this.state.items.length; i++){
        //     if(this.state.items[i].name.toLowerCase().includes(this.state.searchString.toLowerCase())){
        //       rows.push(<Item_card className="itm-child" id={this.state.items[i].id} foodName={this.state.items[i].name} price={this.state.items[i].price} description={this.state.items[i].description} type={this.state.items[i].type}/>);
        //     }
        //   }
          //return rows;
          //this.state.items.map((item, i) =>{<Item_card className="itm-child" description={this.state.items[i].description}/>})


        const Testurl = "https://www.seriouseats.com/thmb/OBckE8o3ypWrULAwlkb11RvKD7w=/1000x1000/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg";
        return (
        <div className="container">
                <h1> Orders: </h1>
                <input type="text" placeholder="Search Items" onChange={this.onSearchChange}/>
                <p>
              <Link to="/additem" >Add</Link>
                </p>
                <div className="item-container">
                  {/*<Item_card className="itm-child" imgPath={Testurl} description="this is a test description"/>
                  <Item_card className="itm-child" imgPath={Testurl} description="this is a test description"/>
                  <Item_card className="itm-child" imgPath={Testurl} description="this is a test description"/>
                  <Item_card className="itm-child" imgPath={Testurl} description="this is a test description"/>
                  <Item_card className="itm-child" imgPath={Testurl} description="this is a test description"/>
                */}
                <CashierOrderItem/>
    
                </div>
        </div>
          );
      }
  }
  
  export default CashierOrders;