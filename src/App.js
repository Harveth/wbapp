import { Component } from 'react';
import './App.css';
import Landingpage from './components/Landingpage/Landingpage';
import Navbar from './components/Navbar/Navbar';
import Menu from'./components/Menu/Menu';
import Gallery from'./components/Gallery/Gallery';
import Account from'./components/Account/Account';
import Footer from './components/Footer/Footer';
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Routes} from 'react-router-dom';
class App extends Component {
  constructor(){
    super();
    this.state = {
      rout: 'signin',
      isSignedIn: false,
      id: '',
      username: '',
      email: '',
      type: '',
      isAccountActive: false

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

  getDataFromSignUp = (usernam) =>{
    console.log(usernam);
    this.setState({username: usernam}, () => { console.log(this.state)});
    this.setState({isAccountActive: false});
    //console.log(this.state);
  }

  render(){
    return (
        <div id='container'>
          <Navbar/>
          <div id='main-content'>
          <Routes>
            <Route path='/' element={<Landingpage/>}/>
            <Route path='/home' element={<Landingpage/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/account' element={<Account isActive={this.state.isAccountActive}/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup sendData={this.getDataFromSignUp}/>}/>
          </Routes>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default App;