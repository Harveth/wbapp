import { Component } from 'react';
import './Signin.css'
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
            <div className='SignIn-outerouter'>
                <div className="Signin-outer">
                <h1 className="SignIn-Title">Sign In</h1>
                    <div className="SignIn-Inputs">
                        <input className="form-username" placeholder="username" onChange={this.onUsernameChange}/><br/>
                        <input className="form-password" placeholder="password" onChange={this.onPasswordChange}/><br/>
                    </div>
                    <button className="Signin-btn" onClick={this.phpTest}> Sign In</button>
                </div>
            </div>
        );
    }
}

export default Signin;