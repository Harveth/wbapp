import { Component } from "react";
import './Cart.css';
import { withCookies, Cookies } from "react-cookie";
import {instanceOf} from "prop-types";
import axios from "axios";

class Cart extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };


    getFoodFromCart(){
        const { cookies } = this.props;
        let currCart = cookies.get("cart");
        if(currCart === null || currCart === undefined){
            currCart = [];
        }
        return currCart;
    }

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
          currCart[this.indexOfFood(currCart, foodID)].quantity = currCart[this.indexOfFood(currCart, foodID)].quantity + 1;
        }

        cookies.set("cart", JSON.stringify(currCart), { path: "/" });
      }

    checkout(){
        let currCart = this.getFoodFromCart();
        axios.post(`http://localhost:6969/ServerPHP/makeorder.php`, {
            currCart: currCart,
            userId: 153
        }).then(res => {
            if(res.data == 'no'){
                console.log('error');
            }
            else {
                console.log(res.data);
            }
        })
    }

    render() {
        let currCart = this.getFoodFromCart();
      return (

        <div className="smol-container cart-pg">
            <table className="cart-table">
                <thead>
                    <tr>
                    <th className="cart-head">Item Name</th>
                    <th className="cart-head">Quantity</th>
                    <th className="cart-head">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {currCart.map(item => {
                    return (
                        <tr key={item.foodID}>
                         <td className="cart-tbdata">
                            <div className="cart-info">
                                <img src="https://www.seriouseats.com/thmb/OBckE8o3ypWrULAwlkb11RvKD7w=/1000x1000/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg" width={200}></img>
                                <div>
                                <h5>{ item.foodID }</h5>
                                <small>Price : 37$</small>
                                <br />
                                <a href="#">Remove</a>
                                </div>
                            </div>
                         </td>
                        <td className="cart-tbdata">{ item.quantity}</td>
                        <td className="cart-tbdata"> 37$</td>
                        </tr>

                    );
                    })}
                </tbody>
            </table>
                    <button className="checkout-btn" onClick={() => this.checkout()}>Checkout</button>
                    <button className="addtocart-btn" onClick={() => this.addToCart("1")}>Add to cart</button>
                    <button className="addtocart2-btn" onClick={() => this.addToCart("2")}>Add to cart</button>
        </div>
        );
    }
  }
  export default withCookies(Cart);
