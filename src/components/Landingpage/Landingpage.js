import { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Landingpage.css'

class Landingpage extends Component {
    
    render() {
      return (
        <div className='Landingpage'>
          <Navbar/>
          <div className='container'>
            <div className='mlogo'>
              <img src={require('../../Assets/Images/main_logo.png')} alt="lol"/>
            </div>
            <div className='menu'>
              <p>
            Check out the menu!
            <button>Explore Menu</button>
            </p>
            <img src={require('../../Assets/Images/fish.png')} alt="lol"/>
            </div>
            <div>Two</div>
            <div>Three</div>
          </div>
          <footer></footer>
        </div>
      );
    }
  }
export default Landingpage;