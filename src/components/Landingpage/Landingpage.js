import { Component } from 'react';
import { Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import './Landingpage.css'

class Landingpage extends Component {
    
    render() {
      return (
        <div className='Landingpage'>
          <Navbar/>
          <div className='container'>
            <div className='mlogo'>
              <img src={require('../../Assets/Images/clearbg.png')} alt="lol"/>
            </div>
            <div className='menu'>  
            <p className='menuQuote'>
            <h4>Check out our menu!</h4>
            <blockquote> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote>
            <Button variant="primary">Menu</Button>
            </p>
            <a href='#Menu'><img src={require('../../Assets/Images/fish.png')} alt="Menu Cover"/></a>
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