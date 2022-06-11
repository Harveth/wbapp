import Menucard from "./Menucard.js";
import './Menu.css';
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { Link } from "react-router-dom";
import { Component } from "react";
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

class Menu extends Component {
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
          for (let i = 0; i < res.data.length; i++) {
            const item = {
              id: res.data[i].id,
              name: res.data[i].name,
              description: res.data[i].description,
              type: res.data[i].type,
              price: res.data[i].price,
              image: res.data[i].image,
            }
            this.setState(prevState => ({
              items: [...prevState.items, item]
            }), () => { console.log(this.state); })
          }
          console.log("running state")
          console.log(this.state)
        }
      });
  };
  static propTypes = {
    cookies: instanceOf(Cookies)
  };
  state = {
    cart: this.props.cookies.get("cart") || ""
  };
  doesInclude = (currCart, foodID) => {
    for (let i = 0; i < currCart.length; i++) {
      if (currCart[i].foodID === foodID) {
        return true;
      }
    }
    return false;
  }
  indexOfFood = (currCart, foodID) => {
    for (let i = 0; i < currCart.length; i++) {
      if (currCart[i].foodID === foodID) {
        return i;
      }
    }
    return -1;
  }
  addToCart = (foodID) => {
    const { cookies } = this.props;
    let currCart = cookies.get("cart");
    console.log("ZEFT CURRENT NILA");
    console.log(currCart);
    if (currCart === null || currCart === undefined) {
      currCart = [];
    }
    else {
      // currCart = JSON.parse(currCart);
    }
    if (!this.doesInclude(currCart, foodID)) {
      currCart.push({ foodID: foodID, quantity: 1 });
    }
    else if (this.doesInclude(currCart, foodID)) {
      console.log("KILL AMR");
      currCart[this.indexOfFood(currCart, foodID)].quantity = currCart[this.indexOfFood(currCart, foodID)].quantity + 1;
    }

    cookies.set("cart", JSON.stringify(currCart), { path: "/" });
  }
  componentDidMount() {
    this.loadItems();
  }
  render() {
    const { cookies } = this.props;
    // const displayItems = () =>{
    //   for(let i = 0;i<this.state.item.length;i++){
    //     return<Menucard className="" 
    //     name ={this.state.item[i].name} 
    //     description={this.state.item[i].description} 
    //     type ={this.state.item[i].type} 
    //     price={this.state.item[i].price} 
    //     image={this.state.item[i].image}/>
        
    //      }
    // }
    // let rows=[];
    // for(let i = 0;i<this.state.items.length;i++){
    //   rows.push(<Menucard className=""  description={this.state.items[i].description} />)
    // }
    let rows = [];
          for(let i = 1; i < this.state.items.length; i++){
            if(this.state.items[i].name.toLowerCase().includes(this.state.searchString.toLowerCase())){
              rows.push(<Menucard className="itm-child" id={this.state.items[i].id} name={this.state.items[i].name} price={this.state.items[i].price} description={this.state.items[i].description} type={this.state.items[i].type} image={this.state.items[i].image}/>);
            }
          }
    console.log(cookies.get("cart"));
    return (
      <div className="menuback">
        <nav className='navbar navbar-expand-lg navbar-dark bg-transparent'>
          <div className='container-fluid'>
            <div className='navbar bg-trans'>
              <ul className='navbar-nav me-auto mb-3 mb-lg-5' style={{ paddingLeft: 365 }}>
                <li className='nav-item'>
                  <Link to="/home" style={{ textDecoration: "none", fontSize: '15px' }}> Appetizers</Link>
                </li>
                <li>
                  <Link to="/gallery" style={{ textDecoration: "none", fontSize: '15px' }}>Salads</Link>
                </li>
                <li>
                  <Link to="/gallery" style={{ textDecoration: "none", fontSize: '15px' }}>Soups</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/menu" style={{ textDecoration: "none", fontSize: '15px' }}>Beef</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/gallery" style={{ textDecoration: "none", fontSize: '15px' }}>Chicken</Link>
                </li>
                <li>
                  <Link to="/gallery" style={{ textDecoration: "none", fontSize: '15px' }}>Pizza</Link>
                </li>
                <li>
                  <Link to="/gallery" style={{ textDecoration: "none", fontSize: '15px' }}>Pasta</Link>
                </li>
                <li>
                  <Link to="/gallery" style={{ textDecoration: "none", fontSize: '15px' }}>Sandwiches</Link>
                </li>
                <li>
                  <Link to="/gallery" style={{ textDecoration: "none", fontSize: '15px' }}>Desserts</Link>
                </li>
                <li>
                  <Link to="/sand" style={{ textDecoration: "none", fontSize: '15px' }}>Compose a Sandwich</Link>
                </li>
              </ul>
            </div>
            {/* {rows} */}
          </div>
        </nav>
       {rows}
      </div>

    );
  }
}
export default withCookies(Menu);
