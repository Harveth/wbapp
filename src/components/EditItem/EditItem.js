import { Component } from "react";
import axios from "axios";
import { withCookies, Cookies } from "react-cookie";
import {instanceOf} from "prop-types";
import './EditItem.css'
import { Stack } from "react-bootstrap";
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
        <body className="edcntr">
      <div className="edit-container col-md-5">
              <h1>  Edit Item  </h1>
              
              <Stack className="item-container">
                <input type="text" className="edit-box" placeholder="New Name" onChange={this.onNameChange} value={this.state.name}/>
                <input type="text" className="edit-box" placeholder="New price" onChange={this.onPriceChange} value={this.state.price}/>
                <input type="text" className="edit-box" placeholder="New type" onChange={this.ontypeChange} value={this.state.type}/>
                <input type="text" className="edit-box" placeholder="New description" onChange={this.onDescriptionChange} value={this.state.description}/>
                <button className="edit-btn" onClick={this.editItem}>Edit</button>
  
              </Stack>
      </div>
      </body>
        );
    }
}

export default withCookies(EditItem);