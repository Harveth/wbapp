import { Component } from 'react';
import './App.css';
import Signin from './components/Signin/Signin';

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
      <div className="App">
        <h1>app lol</h1>
          <div className='Signin-wrap'>
            <Signin sendData={this.setUsername}/>
          </div>
        
      </div>
    );
  }
}

export default App;
