import { Component } from "react";
import './AddItem.css'
import axios from "axios";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
const SERVER = "http://localhost:6969";

class AddItem extends Component{
    constructor(){
        super();
        this.state = {
          name: '',
          price: '',
          type: '',
          description: '',
          img:''
        }
      }
      uploadFile = () => {  // upload files to server

        let returnData;
        const file = document.getElementById("actual-btn").files[0];
        const formData = new FormData();
        formData.append("foodpic", file);
        axios
          .post(`${SERVER}/ServerPHP/imgupload.php`, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(res => {
            console.log("hellooooooo");

            console.log(res.data);
            this.setState({img: res.data});
            setTimeout(this.addNewItem, 500);
            console.log("hellooooooo");

            console.log(this.state.img);
            return res.data;
          })


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
            itemPic: this.state.img
          })
          .then((res) => {
            if (res.data == "error") {
              console.log("error adding item");
            } else {
              console.log(res.data);
              alert("item added");
            }
          });
      };



      render() {
      return (
      <body className="vhcntr">
      <div className="add-container col-md-5">
              <h1> Add a new Item  </h1>

              <Stack className="item-container">
                <div>
                <input type="text" className="add-box" placeholder="Name" onChange={this.onNameChange}/>
                </div>
                <div>
                <input type="text" className="add-box" placeholder="price" onChange={this.onPriceChange}/>
                </div>
                <div>
                {/* <input type="text" className="add-box" placeholder="type" onChange={this.ontypeChange}/> */}
                <select  id="type" className="add-box" placeholder="type" onChange={this.ontypeChange}>
                <option value="drinks">drinks</option>
                <option value="breakfast">breakfast</option>
                <option value="lunch">lunch</option>
                <option value="sandwich">sandwich</option>
                </select >
                </div>
                <div>
                <input type="text" className="add-box" placeholder="description" onChange={this.onDescriptionChange}/>
                </div>
                <div>
                <input type="file" id="actual-btn" hidden />
                 <label for="actual-btn" className="lbl-btn">
                  Choose File
                 </label>
                </div>
                <div>
                <button className="add-btn" onClick={this.uploadFile}>Add
                </button>
                </div>

              </Stack>
      </div>
      </body>
        );
    }
}

export default AddItem;