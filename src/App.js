import { Component } from 'react';
import './App.css';
import Landingpage from './components/Landingpage/Landingpage';
import Navbar from './components/Navbar/Navbar';
import Navbar_cashier from './components/Navbar_cashier/Navbar_cashier'
import Navbar_qualitycontrol from './components/Navbar_qualitycontrol/Navbar_qualitycontrol'
import Menu from'./components/Menu/Menu';
import Gallery from'./components/Gallery/Gallery';
import Account from'./components/Account/Account';
import Footer from './components/Footer/Footer';
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import Items from './components/Items/Items'
import Not_Found from './components/Not_found/Not_Found';
import Cart from './components/Cart/Cart';
import AddItem from './components/AddItem/AddItem';
import EditItem from './components/EditItem/EditItem';
import CashierOrders from './components/CashierOrders/CashierOrders'
import PromoteUsers from './components/PromoteUsers/PromoteUsers'


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
      type: 'cashier',
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
    console.log(this.state);
  }

  getDataFromSignIn = (usernam, id) =>{
    console.log(usernam);
    this.setState({username: usernam}, () => { console.log(this.state)});
    this.setState({id: id}, () => { console.log(this.state)});
    this.setState({isAccountActive: false});
    console.log(this.state);
  }


  changeToCashier = () =>{
    this.setState({type: 'cashier'});
  }

  render(){
    let {type} = this.state;
    const renderNav = () =>{
      if(type == 'client'){
        return <Navbar/>
      }else if(type == 'cashier'){
        return <Navbar_cashier/>
      }else{
        return <Navbar_qualitycontrol/>
      }
    }

    return (
        <div id='container'>
          {renderNav()}
          {//<Navbar/>
          }
          <div id='main-content'>
          <Routes>
            <Route path='/' element={<Landingpage/>}/>
            <Route path='/home' element={<Landingpage/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/account' element={<Account id={this.state.id}/>}/>
            <Route path='/signin' element={<Signin sendData={this.getDataFromSignIn} />}/>
            <Route path='/signup' element={<Signup sendData={this.getDataFromSignUp}/>}/>
            <Route path='/items' element={<Items/>}/>
            <Route path='/cart' element={<Cart id={this.state.id}/>}/>
            <Route path='/additem' element={<AddItem/>}/>
            <Route path='/edititem' element={<EditItem/>}/>
            <Route path='/cashierorders' element={<CashierOrders/>}/>
            <Route path='/promoteusers' element={<PromoteUsers/>}/>
            <Route path='*' element={<Not_Found/>} />
          </Routes>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default App;