import { Component } from "react";
import { yellow } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import "./Account.css";

const SERVER = "http://localhost:6969";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fn: "",
      ln: "",
      email: "",
      address: "",
      id:this.props.id
    };
  }
  phpTest = async () => {
    await axios
      .get(`${SERVER}/ServerPHP/users.php`, {
        id: this.state.id,
      })
      .then((res) => {
        if (res.data == "no") {
          console.log("error logging in");
        } else {
          console.log(res.data);
        }
      });
  };
  test = () => {
    console.log("attempting sign in");
    fetch("http://localhost:6969/signin/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.signInUsername,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "no") console.log("you logged in");
        else if (data === "no") console.log("you failed to log in");
      });

    this.props.sendData(this.state.signInUsername, this.state.signInPassword);
  };
  // POST
  // `id` int(11) NOT NULL,
  // `fname` varchar(40) DEFAULT NULL,
  // `lname` varchar(40) DEFAULT NULL,
  // `password` varchar(128) DEFAULT NULL,
  // `email` varchar(40) DEFAULT NULL,
  render() {
    return (
      <div className="main-container row p-3">
        <form>
          <Avatar sx={{ bgcolor: yellow[500] }}>F</Avatar>
          <div class="row">
            <div class="col">
              <label for="fn" class="form-label">
                First name
              </label>
              <input
                type="text"
                class="form-control"
                id="fn"
                placeholder="First name"
                aria-label="First name"
                value={this.state.fn}
              />
            </div>
            <div class="col">
              <label for="ln" class="form-label">
                Last name
              </label>
              <input
                type="text"
                class="form-control"
                id="ln"
                placeholder="Last name"
                aria-label="Last name"
                value={this.state.ln}
              />
            </div>
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="firstnname.lastname@mail.com"
              class="form-control"
              id="inputEmail4"
              value={this.state.email}
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={this.state.address}
            />
          </div>
        </form>
        {/* Name : USER_FULL_NAME
        Status : ACCOUNT_STATUS
        Phone : USER_PHONE
        Address : USER_ADDRESS */}
      </div>
    );
    // if (this.props.isActive)
    //   return (
    //         <div>
    //             <h1>Account Status : Activated</h1>
    //         </div>
    //       );
    //     return (
    //         <div>
    //             <h1>Account Status : Pending</h1>
    //         </div>
    //   );
  }
}
export default Account;
