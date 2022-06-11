// import '/Users/hassanreda/Desktop/pp/wbapp/src/components/Items/Item_card.css'
// import './Menu.css';
import'./menuCard.css'
import axios from "axios";
import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import EditItem from '../EditItem/EditItem';
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
                        <button className="btn" style={{ backgroundColor: 'goldenrod' }} onClick={() => this.addToCart(1)}>Add To Cart</button>
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