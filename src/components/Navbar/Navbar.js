import { Component } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { BiPhotoAlbum } from "react-icons/bi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BsInfoSquare } from "react-icons/bs";
import {RiAccountCircleLine} from "react-icons/ri"
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
            <a  href="#Home"><li><AiOutlineHome className="navicon"/>Home</li></a>
            <a  href="#Menu"><li><MdOutlineRestaurantMenu className="navicon"/>Menu</li></a>
            <a  href="#Gallery"><li><BiPhotoAlbum className="navicon"/>Gallery</li></a>
            <a  href="#About"><li><BsInfoSquare className="navicon"/>About</li></a>
            <a  href="#Account" className="account"><li><RiAccountCircleLine /></li></a>
          </ul>
          </nav>
        </div>
      );
    }
  }
export default Navbar;