import { Component } from "react";
import { Link } from "react-router-dom";
import './AddItem.css'
import axios from "axios";
const SERVER = "http://localhost:6969";

class AddItem extends Component{
    constructor(){
        super();
        this.state = {
          name: '',
          price: '',
          type: '',
          description: ''
    
        }
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

      addNewItem = async () => {
        await axios
          .post(`${SERVER}/ServerPHP/addItem.php`, {
            name: this.state.name,
            price: this.state.price,
            type: this.state.type,
            description: this.state.description,
          })
          .then((res) => {
            if (res.data == "error") {
              console.log("error creating user");
            } else {
              console.log(res.data);
              
            }
          });
      };

      

      render() {
      return (
      <div className="container">
              <h1> Add a new Item  </h1>
              
              <div className="item-container">
                <h2>Name</h2>
                <input type="text" placeholder="Name" onChange={this.onNameChange}/>
                <h2>price</h2>
                <input type="text" placeholder="price" onChange={this.onPriceChange}/><br/>
                <h2>type</h2>
                <input type="text" placeholder="type" onChange={this.ontypeChange}/>
                <h2>description</h2>
                <input type="text" placeholder="description" onChange={this.onDescriptionChange}/>

                <button onClick={this.addNewItem}>Add</button>
  
              </div>
      </div>
        );
    }
}

export default AddItem;