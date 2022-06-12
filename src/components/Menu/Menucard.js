// import '/Users/hassanreda/Desktop/pp/wbapp/src/components/Items/Item_card.css'
// import './Menu.css';
import'./menuCard.css'
import axios from "axios";
import { Component } from 'react';
import { withCookies, Cookies } from "react-cookie";
import {instanceOf} from "prop-types";
const SERVER = "http://localhost:6969";



class Menucard extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
      }
      state = {
        cart: this.props.cookies.get("cart") || "",
      };
      doesInclude = (currCart, foodID) => {
        for (let i = 0; i < currCart.length; i++) {
          if (currCart[i].foodID === foodID) {
            return true;
          }
        }
        return false;
      };
      indexOfFood = (currCart, foodID) => {
        for (let i = 0; i < currCart.length; i++) {
          if (currCart[i].foodID === foodID) {
            return i;
          }
        }
        return -1;
      };
      addToCart = (foodID, foodName, singleFoodPrice, foodImage) => {
        const { cookies } = this.props;
        let currCart = cookies.get("cart");
        console.log(currCart);
        if (currCart === null || currCart === undefined) {
          currCart = [];
        } else {
          // currCart = JSON.parse(currCart);
        }
        if (!this.doesInclude(currCart, foodID)) {
          currCart.push({ foodID: foodID, quantity: 1, foodName: foodName, singleFoodPrice: singleFoodPrice, foodImage: foodImage });
        } else if (this.doesInclude(currCart, foodID)) {
          currCart[this.indexOfFood(currCart, foodID)].quantity =
            currCart[this.indexOfFood(currCart, foodID)].quantity + 1;
        }

        cookies.set("cart", JSON.stringify(currCart), { path: "/" });
      };

      removeItemFromCart = (foodID) => {
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
          currCart[this.indexOfFood(currCart, foodID)].quantity =
            currCart[this.indexOfFood(currCart, foodID)].quantity - 1;
          if (currCart[this.indexOfFood(currCart, foodID)].quantity === 0) {
            currCart.splice(this.indexOfFood(currCart, foodID), 1);
          }
        }
        cookies.set("cart", JSON.stringify(currCart), { path: "/" });
      };
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
      removeAllFromCart = () => {
        const { cookies } = this.props;
        cookies.set("cart", "", { path: "/" });
      };
    deleteItem = async (id) => {
        console.log("deleting in progress")
        await axios
          .post(`${SERVER}/ServerPHP/deleteitem.php`, {
              id: id
          })
          .then((res) => {
            if (res.data == "error") {
                console.log("error");
              } else {
                console.log("loggin response");
                console.log(res.data);
                window.location.reload(false);

              }
          });
      };

      deleteItemUtil = () =>{
        this.deleteItem(this.props.id);
      }

      sendCookie = () =>{
        const { cookies } = this.props;
        cookies.set("editId", this.props.id, { path: "/" });
        cookies.set("editName", this.props.name, { path: "/" });
        cookies.set("editPrice", this.props.price, { path: "/" });
        cookies.set("editType", this.props.type, { path: "/" });
        cookies.set("editDescription", this.props.description, { path: "/" });
        cookies.set("image", this.props.image, { path: "/" });
      }


   render(){
        return(
            <section className="menuu wrapper" id="menuu">
                <div className="box-container col">
                    <div className="box" style={{backgroundColor:'rgb(0,0,0,0.7)'}}>
                    <div className='image'>
                                <img src={this.props.image} alt="food image" />
                            </div>
                            <div className="content">
                        <h3>{this.props.name}</h3>
                        <h3>{this.props.type}</h3>
                        <p>{this.props.description}</p>
                        <h4>{this.props.price} $</h4>
                        <button className="btn" style={{ backgroundColor: 'goldenrod' }} onClick={() => this.addToCart(this.props.id, this.props.name, this.props.price, this.props.image)}>Add To Cart</button>
                                {/* <Link to="/edititem" onClick={this.sendCookie}>Edit</Link>



                                <button onClick={this.deleteItemUtil}>--Delete</button> */}
                                </div>
                    </div>

                </div>
            </section>
        )
   }
}

export default withCookies(Menucard);
// import './menuCard.css'
// const Menucard = (props) =>{

//     return(
//         <section className="menuu wrapper" id="menuu">
//         <div className="box-container">
//           <div className="box" style={{ backgroundColor: 'rgb(0, 0, 0,0.7)' }}>
//             <div className="image">
//               <img src={this.props.image}/>
//             </div>
//             <div className="content">
//               <h3>{this.props.name}</h3>
//               <p>{this.props.description}</p>
//               <p className="price">{this.props.price}</p>

//             </div>

//           </div>
//         </div>
//         </section>
//     );
// }

// export default Menucard;