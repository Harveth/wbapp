import { Component } from "react";
import axios from "axios";
import { withCookies, Cookies } from "react-cookie";
import {instanceOf} from "prop-types";
const SERVER = "http://localhost:6969";


class EditItem extends Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
      };
    constructor(props){
        super(props);
        const { cookies } = this.props;
        this.state = {
          id: cookies.get("editId"),
          name: cookies.get("editName"),
          price: cookies.get("editPrice"),
          type: cookies.get("editType"),
          description: cookies.get("editDescription")
          
        }
        console.log(this.state);
        console.log(cookies);
        // cookies.remove("editId");
        // cookies.remove("editName");
      }

      onNameChange = (event) =>{
        this.setState({name : event.target.value});
        console.log(this.state);
      }

      onPriceChange = (event) =>{
        this.setState({price : event.target.value});
        console.log(this.state);
      }

      ontypeChange = (event) =>{
        this.setState({type : event.target.value});
        console.log(this.state);
      }

      onDescriptionChange = (event) =>{
        this.setState({description : event.target.value});
        console.log(this.state);
      }

      editItem = async () => {
        await axios
          .post(`${SERVER}/ServerPHP/editItem.php`, {
            id: this.state.id,
            name: this.state.name,
            price: this.state.price,
            type: this.state.type,
            description: this.state.description,
          })
          .then((res) => {
            if (res.data == "error") {
              console.log("error editing user");
            } else {
                console.log("logging response")
              console.log(res.data);
              
            }
          });
      };

      

      render() {
      return (
      <div className="container">
              <h1>  Edit Item  </h1>
              
              <div className="item-container">
                <h2>Name</h2>
                <input type="text" placeholder="New Name" onChange={this.onNameChange} value={this.state.name}/>
                <h2>price</h2>
                <input type="text" placeholder="New price" onChange={this.onPriceChange} value={this.state.price}/><br/>
                <h2>type</h2>
                <input type="text" placeholder="New type" onChange={this.ontypeChange} value={this.state.type}/>
                <h2>description</h2>
                <input type="text" placeholder="New description" onChange={this.onDescriptionChange} value={this.state.description}/>

                <button onClick={this.editItem}>Edit</button>
  
              </div>
      </div>
        );
    }
}

export default withCookies(EditItem);