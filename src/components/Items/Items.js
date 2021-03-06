import { Component } from "react";
import Item_card from "./Item_card";
import { Link } from 'react-router-dom';
import axios from "axios";
import './items.css'
const SERVER = "http://localhost:6969";

class item{
    constructor(id, name, description, rating){
        this.id = id;
        this.name = name;
        this.description = description;
        this.rating = rating;
    }
}

class Items extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [
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

    loadItems = async () => {
        await axios
          .post(`${SERVER}/ServerPHP/items.php`, {
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
                for(let i = 0; i < res.data.length; i++){
                  const item = {
                    id: res.data[i].id,
                    name: res.data[i].name,
                    type: res.data[i].type,
                    price: res.data[i].price,
                    description: res.data[i].description
                  }
                    this.setState(prevState => ({
                    items : [...prevState.items, item]
                }), () =>{ console.log(this.state);})
               
                }
              }
          });
      };

      

    componentDidMount(){
        this.loadItems();
        
    }

    onSearchChange = (event) =>{
      //console.log(event.target.value);
      this.setState({searchString: event.target.value});
      //console.log(this.state);
    }
    
  
  
    render() {

          console.log("displayin items");
          console.log(this.state.items.length);
          let rows = [];
          for(let i = 1; i < this.state.items.length; i++){
            if(this.state.items[i].name.toLowerCase().includes(this.state.searchString.toLowerCase())){
              rows.push(<Item_card className="itm-child" id={this.state.items[i].id} foodName={this.state.items[i].name} price={this.state.items[i].price} description={this.state.items[i].description} type={this.state.items[i].type}/>);
            }
          }
          //return rows;
          //this.state.items.map((item, i) =>{<Item_card className="itm-child" description={this.state.items[i].description}/>})


        const Testurl = "https://www.seriouseats.com/thmb/OBckE8o3ypWrULAwlkb11RvKD7w=/1000x1000/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg";
        return (
        <div className="main">
        <div className="container row-xs-1-md-2">
                <h1 className="header"> Items: </h1>
                <input type="text" placeholder="Search Items" className="srchbar" onChange={this.onSearchChange}/>
                <Link className="lnkbtn" to="/additem" >Add</Link>
                <div className="item-container row mw-25">
                {rows}
                </div>
        </div>
        </div>
          );
      }
  }
  
  export default Items;