import { Component } from "react";
import "./Signup.css";
import { Navigate } from 'react-router-dom'
import axios from "axios";
const SERVER = "http://localhost:6969";


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpUsername: "",
      signUpPassword: "",
      signUpEmail: "",
      signUpPhoneNumber: "",
      signUpNationalID: "",
      signUpPicture: "",
      signUpSuccessful: false
    };
  }

  uploadFile = () => {  // upload files to server
    let returnData;
    const file = document.getElementById("actual-btn").files[0];
    const file2 = document.getElementById("actual-btn-2").files[0];
    const formData = new FormData();
    formData.append("nationalID", file);
    formData.append("picture", file2);
    axios
      .post(`${SERVER}/ServerPHP/upload.php`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => {
        console.log(res.data);
        this.setState({signUpNationalID: res.data[0]});
        this.setState({signUpPicture: res.data[1]});
        setTimeout(this.su, 500);
        return res.data;
      })
  }
  su = () => {
    axios
      .post(`${SERVER}/ServerPHP/register.php`, {
        email: this.state.signUpEmail,
        password: this.state.signUpPassword,
        username: this.state.signUpUsername,
        phoneNumber: this.state.signUpPhoneNumber,
        nationalID: this.state.signUpNationalID,
        picture: this.state.signUpPicture
      })
      .then((res) => {
        if (res.data == "error") {
          console.log("error creating user");
        } else {
          console.log(res.data);
          this.props.sendData(res.data.username);
          this.setState({signUpSuccessful : true});
        }
      });
  };

  onUsernameChange = (event) => {
    this.setState({ signUpUsername: event.target.value });
    console.log(this.state);
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
      if(this.state.signUpSuccessful)
        return <Navigate to="/home"/>
    return (
      <body className="bgrnd1">
        <div className="Signup-Inputs">
        <div className="containerMini">
          <h1>Sign Up</h1>
          <input
            className="input-box"
            placeholder="Email Address"
            onChange={this.onEmailChange}
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

          <input
            className="input-box"
            placeholder="Phone number"
            onChange={this.onPhoneNumberChange}
          ></input>

          <input type="file" id="actual-btn" hidden/>
          <label for="actual-btn" className="lbl-btn">Choose File</label>
          <span id="file-chosen" className="span-txt">Upload your national ID</span>

          <input type="file" id="actual-btn-2" hidden/>
          <label for="actual-btn-2" className="lbl-btn">Choose File</label>
          <span id="file-chosen" className="span-txt">Upload a picture</span>

          <p className="smol">
            Already have an account? <a href="/Signin">Sign in</a>
          </p>
          <p>
            {" "}
            <input type="checkbox"></input>I Agree to the{" "}
            <a href="#">terms and conditions</a>{" "}
          </p>
          <button className="signup-btn" onClick={this.uploadFile}>
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
