import { Component } from "react";
import './Cart.css';
import { withCookies, Cookies } from "react-cookie";
import {instanceOf} from "prop-types";

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
    render() {
        let currCart = this.getFoodFromCart();
      return (

        <div className="container">
            <table>
                <thead>
                    <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {currCart.map(item => {
                    return (
                        <tr key={item.foodID}>
                        <td>{ item.foodID }</td>
                        <td>{ item.quantity}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
        );
    }
  }
  export default withCookies(Cart);
