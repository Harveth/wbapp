import { Component } from "react";
import Item_card from "./Item_card";
import axios from "axios";
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
                    price: res.data[i].price
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