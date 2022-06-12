import { Component } from "react";
import axios from "axios";
import PromoteUserCard from "../PromoteUsersCard/PromoteUserCard";
const SERVER = "http://localhost:6969";



class PromoteUsers extends Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
            {
                id: '',
                username: '',
                type: ''
            }
        ],
        searchString: ''
      };
    }

    loadUsers = async () => {
        await axios
          .post(`${SERVER}/ServerPHP/promoteUser.php`, {
              
          })
          .then((res) => {
            if (res.data == "error") {
                console.log("error");
              } else {
                console.log("loggin response");
                console.log(res.data);
                for(let i = 0; i < res.data.length; i++){
                    const user = {
                      id: res.data[i].id,
                      username: res.data[i].username,
                      type: res.data[i].type,
                    }
                      this.setState(prevState => ({
                      users : [...prevState.users, user]
                  }), () =>{ console.log(this.state);})
                 
                  }
              }
          });
      };

      

    componentDidMount(){
        this.loadUsers();
        
    }

    onSearchChange = (event) =>{
      //console.log(event.target.value);
      this.setState({searchString: event.target.value});
      //console.log(this.state);
    }
    
  
  
    render() {

        //   console.log("displayin items");
        //   console.log(this.state.items.length);
          let rows = [];
          for(let i = 1; i < this.state.users.length; i++){
            if(this.state.users[i].username.toLowerCase().includes(this.state.searchString.toLowerCase())){
              rows.push(<PromoteUserCard username={this.state.users[i].username} id={this.state.users[i].id} type={this.state.users[i].type}/>);
            }
          }
          //return rows;
          //this.state.items.map((item, i) =>{<Item_card className="itm-child" description={this.state.items[i].description}/>})


        
        return (
        <div className="container">
                <h1> Users: </h1>
                <input type="text" placeholder="Search Items" className="srchbar" onChange={this.onSearchChange}/>

                <div className="item-container row">
                {rows}
                </div>
        </div>
          );
      }
  }
  
  export default PromoteUsers;