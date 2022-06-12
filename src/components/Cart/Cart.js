import { Component } from "react";
import './Cart.css';
import { withCookies, Cookies } from "react-cookie";
import {instanceOf} from "prop-types";
import axios from "axios";

class Cart extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };

      constructor(props){
        super(props);
        this.state = {


        }
      }
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

      removeAllItemFromCart = (foodID) => {
        const { cookies } = this.props;
        let currCart = cookies.get("cart");
        if (currCart === null || currCart === undefined) {
          currCart = [];
        } else {
          // currCart = JSON.parse(currCart);
        }
        if (!this.doesInclude(currCart, foodID)) {
          return;
        } else if (this.doesInclude(currCart, foodID)) {
            currCart.splice(this.indexOfFood(currCart, foodID), 1);
        }
        cookies.set("cart", JSON.stringify(currCart), { path: "/" });
      };

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
      removeAllFromCart = () => {
        const { cookies } = this.props;
        let currCart = [];
        cookies.set("cart", JSON.stringify(currCart), { path: "/" });
      };
    checkout(){
         console.log(this.props);
        let currCart = this.getFoodFromCart();
        axios.post(`http://localhost:6969/ServerPHP/makeorder.php`, {
            currCart: currCart,
            userId: this.props.id
        }).then(res => {
            if(res.data == 'no'){
                console.log('problem doing things');
            }
            else {
                alert('order placed');
                this.removeAllFromCart();
                console.log(res.data);
            }
        })
    }

    render() {
        let currCart = this.getFoodFromCart();
        console.log("loggin id")
        console.log(this.props.id);
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
                                <img src={this.foodImage} width={200}></img>
                                <div>
                                <h5>{ item.foodName }</h5>
                                <small>{}</small>
                                <br />
                                <a href="#" onClick={()=>{this.removeAllItemFromCart(item.foodID)}}>Remove</a>
                                </div>
                            </div>
                         </td>
                        <td className="cart-tbdata">{ item.quantity}</td>
                        <td className="cart-tbdata"> ${item.singleFoodPrice*item.quantity}</td>
                        </tr>

                    );
                    })}
                </tbody>
            </table>
                    <button className="checkout-btn" onClick={() => this.checkout()}>Checkout</button>
        </div>
        );
    }
  }
  export default withCookies(Cart);
