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

        </div>
        );
    }
  }
  export default withCookies(Cart);
