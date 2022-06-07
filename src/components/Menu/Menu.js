import { Component } from "react";
import './Menu.css';
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cookies: new Cookies(),
    }
}

  static propTypes = {
    cookies: instanceOf(Cookies)
  };

  state = {
    cart: this.props.cookies.get("cart") || ""
  };
  doesInclude = (currCart, foodID) => {
    for(let i = 0; i < currCart.length; i++){
        if(currCart[i].foodID === foodID){
            return true;
        }
    }
    return false;
  }
  indexOfFood = (currCart, foodID) => {
    for(let i = 0; i < currCart.length; i++){
        if(currCart[i].foodID === foodID){
            return i;
        }
    }
    return -1;
  }
  addToCart = (foodID) =>{
    const { cookies } = this.props;
    let currCart = cookies.get("cart");
    console.log("ZEFT CURRENT NILA");
    console.log(currCart);
    if(currCart === null || currCart === undefined){
      currCart = [];
    }
    else{
        // currCart = JSON.parse(currCart);
    }
    if(!this.doesInclude(currCart, foodID)){
      currCart.push({foodID: foodID, quantity: 1});
    }
    else if(this.doesInclude(currCart, foodID)){
      console.log("KILL AMR");
      currCart[this.indexOfFood(currCart, foodID)].quantity = currCart[this.indexOfFood(currCart, foodID)].quantity + 1;
    }

    cookies.set("cart", JSON.stringify(currCart), { path: "/" });
  }
    render() {
      const { cookies } = this.props;
      console.log(cookies.get("cart"));
      return (
        <div className="container">
              <button onClick={() => this.addToCart(2)}>Add Item Number 2 To Cart :D</button>
              <br></br>
              <br></br>
              <br></br>
              <button onClick={() => this.addToCart(1)}>Add Item Number 1 To Cart :D</button>
        </div>
        );
    }
  }
  export default withCookies(Menu);