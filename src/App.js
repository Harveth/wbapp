import { Component } from 'react';
import './App.css';
import Landingpage from './components/Landingpage/Landingpage';
import Navbar from './components/Navbar/Navbar';
import Menu from'./components/Menu/Menu';
import Gallery from'./components/Gallery/Gallery';
import Account from'./components/Account/Account';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Routes} from 'react-router-dom';
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
            <Routes>
            <Route path='/' element={<Landingpage/>}/>
            <Route path='/home' element={<Landingpage/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/account' element={<Account/>}/>
          </Routes>
          <Navbar/>
        </div>
    );
  }
}

export default App;