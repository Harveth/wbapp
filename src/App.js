import { Component } from 'react';
import './App.css';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Landingpage from './components/Landingpage/Landingpage';
import Navbar from './components/Navbar/Navbar';
class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
      password: "",
      rout: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        username: '',
        password: '',
        joined: new Date()
      }
    }
  }

  componentDidMount(){
      // fetch('http://localhost:6969/')
      //   .then(response => response.json())
      //   .then(console.log);
  }

  setUsername = (val, pass) =>{
    console.log(val);
    const user = {...this.state.user, name: val};
    user.password = pass;
    this.setState({user});
  }


  render(){
    return (
        <div>
        <Navbar/>
        <Landingpage/>
        </div>
    );
  }
}

export default App;
