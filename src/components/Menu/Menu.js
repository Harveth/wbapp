import Menucard from "./Menucard.js";
import './Menu.css';
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
const SERVER = "http://localhost:6969";
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
    const displayItems = () =>{
      for(let i = 0;i<this.state.item.length;i++){
        return<Menucard className="" 
        name ={this.state.item[i].name} 
        description={this.state.item[i].description} 
        type ={this.state.item[i].type} 
        price={this.state.item[i].price} 
        image={this.state.item[i].image}/>
        
         }
    }
    let rows=[];
    for(let i = 0;i<this.state.items.length;i++){
      rows.push(<Menucard className=""  description={this.state.items[i].description} />)
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
              </ul>
            </div>
          </div>
        </nav>
        <section className="menuu wrapper" id="menuu">
          <div className="box-container">
            <div className="box" style={{ backgroundColor: 'rgb(0, 0, 0,0.7)' }}>
              <div className="image">
                <img style={{ maxWidth: '100%' }} src={require("../../Assets/Images/Appetizers/ChickenDynamite.jpg")}></img>
              </div>
              <div className="content">
                <h3>Name</h3>
                <p>Description</p>
                <p className="price">89.9</p>
                <button className="btn" style={{ backgroundColor: '#5e503f' }} onClick={() => this.addToCart(1)}>Add To Cart</button>
              </div>
              {rows}
            </div>
          </div>
        </section>
      </div>

    );
  }
}
export default withCookies(Menu);
                {/* <button className="btn" style={{ backgroundColor: '#5e503f' }} onClick={() => this.addToCart(2)}>Add To Cart</button> */}
// import { Component } from "react";
// import './Menu.css';
// import { instanceOf } from "prop-types";
// import { withCookies, Cookies } from "react-cookie";


// class Menu extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         cookies: new Cookies(),
//     }
// }

//   static propTypes = {
//     cookies: instanceOf(Cookies)
//   };

//   state = {
//     cart: this.props.cookies.get("cart") || ""
//   };
//   doesInclude = (currCart, foodID) => {
//     for(let i = 0; i < currCart.length; i++){
//         if(currCart[i].foodID === foodID){
//             return true;
//         }
//     }
//     return false;
//   }
//   indexOfFood = (currCart, foodID) => {
//     for(let i = 0; i < currCart.length; i++){
//         if(currCart[i].foodID === foodID){
//             return i;
//         }
//     }
//     return -1;
//   }
//   addToCart = (foodID) =>{
//     const { cookies } = this.props;
//     let currCart = cookies.get("cart");
//     console.log("ZEFT CURRENT NILA");
//     console.log(currCart);
//     if(currCart === null || currCart === undefined){
//       currCart = [];
//     }
//     else{
//         // currCart = JSON.parse(currCart);
//     }
//     if(!this.doesInclude(currCart, foodID)){
//       currCart.push({foodID: foodID, quantity: 1});
//     }
//     else if(this.doesInclude(currCart, foodID)){
//       console.log("KILL AMR");
//       currCart[this.indexOfFood(currCart, foodID)].quantity = currCart[this.indexOfFood(currCart, foodID)].quantity + 1;
//     }

//     cookies.set("cart", JSON.stringify(currCart), { path: "/" });
//   }
//     render() {
//       const { cookies } = this.props;
//       console.log(cookies.get("cart"));
//       return (
//         <div className="container">
//               <button onClick={() => this.addToCart(2)}>Add Item Number 2 To Cart :D</button>
//               <br></br>
//               <br></br>
//               <br></br>
//               <button onClick={() => this.addToCart(1)}>Add Item Number 1 To Cart :D</button>
//         </div>
//         );
//     }
//   }
//   export default withCookies(Menu);