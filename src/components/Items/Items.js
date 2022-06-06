import { Component } from "react";
import Item_card from "./Item_card";

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
        ]
      };
    }
  
  
    render() {
        const Testurl = "https://www.seriouseats.com/thmb/OBckE8o3ypWrULAwlkb11RvKD7w=/1000x1000/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg";
        return (
          <div> 
                <h1> Items: </h1>
                <input type="text" placeholder="Search Items"/>
                <Item_card imgPath={Testurl} description="this is a test description"/>
          </div>
          );
      }
  }
  
  export default Items;