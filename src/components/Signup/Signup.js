import { Component } from "react";
import './Signup.css'

class Signup extends Component{
    render(){
        return(
            <div className="Signup-Inputs">
                <body></body>
                <h1>Sign Up</h1>
                <input className="input-box" placeholder="Email Address"></input><br/>
                <input className="input-box" placeholder="Username"></input><br/>
                <input type="password" className="input-box" placeholder="Password"></input><br/>
                <input className="input-box" placeholder="Phone number"></input><br/>
                <p className="smol">Already have an account? <a href="#">Sign in</a></p>
                <p> <input type="checkbox"></input>I Agree to the <a href="#">terms and conditions</a> </p>
                <button className="signup-btn"> Sign Up</button>

            </div>
        );
    }
}

export default Signup