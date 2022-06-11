import { Component } from "react";
import "./Signup.css";
import { Navigate } from 'react-router-dom'
import axios from "axios";
const SERVER = "http://localhost:6969";


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpFn:"",
      signUpLn:"",
      signUpUsername: "",
      signUpPassword: "",
      signUpEmail: "",
      signUpPhoneNumber: "",
      signUpSuccessful: false
    };
  }


  su = async () => {
    await axios
      .post(`${SERVER}/ServerPHP/register.php`, {
        email: this.state.signUpUsername,
        password: this.state.signUpPassword,
        username: this.state.signUpUsername,
        phoneNumber: this.state.signUpPhoneNumber,
        firstname: this.state.signUpFn,
        firstname: this.state.signUpln
      })
      .then((res) => {
        if (res.data == "error") {
          console.log("error creating user");
        } else {
          console.log(res.data);
          console.log(res.data.username);
          this.props.sendData(res.data.username);
          this.setState({signUpSuccessful : true});
        }
      });
  };

  onFnChange = (event) => {
    this.setState({ signUpFn: event.target.value });
  };
  onLnChange = (event) => {
    this.setState({ signUpLn: event.target.value });
  };
  onUsernameChange = (event) => {
    this.setState({ signUpUsername: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ signUpEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signUpPassword: event.target.value });
  };
  onPhoneNumberChange = (event) => {
    this.setState({ signUpPhoneNumber: event.target.value });
  };


  logState = () => {
    console.log(this.state);
  };

  render() {
      if(this.state.signUpSuccessful){
        <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Success!</h4>
        <p>You completed Sign up .</p>
        <hr/>
        <p className="mb-0">A request has been sent to the Quality Control department.</p>
      </div>
      }
    return (
      <body className="bgrnd1">
        <div className="Signup-Inputs">
        <div className="containerMini">
          <h1>Sign Up</h1>
          <input
            className="input-box"
            placeholder="First name"
            onChange={this.onFnChange}
          ></input>
          <br />
          <input
            className="input-box"
            placeholder="Last name"
            onChange={this.onLnChange}
          ></input>
          <br />
          <input
            className="input-box"
            placeholder="Username"
            onChange={this.onUsernameChange}
          ></input>
          <br />
          <input
            type="password"
            className="input-box"
            placeholder="Password"
            onChange={this.onPasswordChange}
          ></input>
          <br />
          <input
            className="input-box"
            placeholder="Email Address"
            onChange={this.onEmailChange}
          ></input>
          <br />
          <input
            className="input-box"
            placeholder="Phone number"
            onChange={this.onPhoneNumberChange}
          ></input>

          <input type="file" id="actual-btn" hidden/>
          <label for="actual-btn" className="lbl-btn">Choose File</label>
          <span id="file-chosen" className="span-txt">Upload your national ID</span>

          <input type="file" id="actual-btn" hidden/>
          <label for="actual-btn" className="lbl-btn">Choose File</label>
          <span id="file-chosen" className="span-txt">Upload a picture</span>

          <p className="smol">
            Already have an account? <a href="/Signin">Sign in</a>
          </p>
          <p>
            {" "}
            <input type="checkbox"></input>I Agree to the{" "}
            <a href="#">terms and conditions</a>{" "}
          </p>
          <button className="signup-btn" onClick={this.su}>
            {" "}
            Sign Up
          </button>
        </div>
      </div>
      </body>
    );
  }
}

export default Signup;
