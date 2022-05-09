import { Component } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { BiPhotoAlbum } from "react-icons/bi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BsInfoSquare } from "react-icons/bs";
import logo from '../../Assets/Images/minilogo.png';
import './Navbar.css';

class Navbar extends Component {
    render() {
      return (
        <div className="Navbar">
          <nav>
          <ul>
            <a href="#Home">
            <img src={logo} alt="Logo" className="logo" />
            </a>
            <li><AiOutlineHome className="navicon"/>Home</li>
            <li><MdOutlineRestaurantMenu className="navicon"/>Menu</li>
            <li><BiPhotoAlbum className="navicon"/>Gallery</li>
            <li><BsInfoSquare className="navicon"/>About</li>
          </ul>
          </nav>
        </div>
      );
    }
  }
export default Navbar;