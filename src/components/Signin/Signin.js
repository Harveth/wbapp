import { Component } from 'react';
import "./Signin.css";
import axios from 'axios';

const SERVER = 'http://localhost:6969';
class Signin extends Component{
    constructor(props){
        super(props);
        this.state = {
            signInUsername: '',
            signInPassword: ''
        }
    }

    phpTest = async () => {
        await axios.post(`${SERVER}/ServerPHP/login.php`, {
            email: this.state.signInUsername,
            password: this.state.signInPassword
        }).then(res => {
            if(res.data == 'no'){
                console.log('error logging in');
            }
            else {
                console.log(res.data);
            }
        })
    }
    test = () =>{
        console.log("attempting sign in");
        fetch('http://localhost:6969/signin/', {
            method: "POST",
            headers: {"Content-Type" : 'application/json'},
            body: JSON.stringify({
                username: this.state.signInUsername,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data === 'no')
                console.log("you logged in");
            else if(data === 'no')
                console.log("you failed to log in");
        })

        this.props.sendData(this.state.signInUsername, this.state.signInPassword);
    }

    test2 = () =>{
        this.props.sendData()
    }

    onUsernameChange = (event) =>{
        this.setState({signInUsername: event.target.value});
    }

    onPasswordChange = (event) =>{
        this.setState({signInPassword: event.target.value});
    }

    on
    render(){
        return(
            <body className="bgrnd">
            <div className="Signup-Inputs">
                <div className="containerMini">
                <h1>Sign In</h1>
                    <div className="SignIn-Inputs">
                        <input className="input-box" placeholder="Username" onChange={this.onUsernameChange}/><br/>
                        <input type="password" className="input-box" placeholder="Password" onChange={this.onPasswordChange}/><br/>
                        <p className="smol">Don't have an account? <a href="/Signup">Sign Up</a></p>
                    </div>
                    <button className="signup-btn" onClick={this.phpTest}> Sign In</button>
                </div>
            </div>
            </body>
        );
    }
}

export default Signin;