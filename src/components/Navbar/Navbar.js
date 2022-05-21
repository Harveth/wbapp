import { Component } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { BiPhotoAlbum } from "react-icons/bi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <div className='row navbar'>
          <ul>
            <div className='row row-cols-4'>
            <li className='col'>
              <Link to="/home" style={{ textDecoration: "none" }}><AiOutlineHome className="navicon" />Home</Link>
            </li>
            <li className='col'>
              <Link to="/menu" style={{ textDecoration: "none" }}><MdOutlineRestaurantMenu className="navicon" />Menu</Link>
            </li>
            <li className='col'>
              <Link to="/gallery" style={{ textDecoration: "none" }}><BiPhotoAlbum className="navicon" />Gallery</Link>
            </li>
            <li className='col text-right'>
              <Link to="/account" className="account" style={{ textDecoration: "none", float:"right"}}><RiAccountCircleLine /></Link>
            </li>
            </div>
          </ul>
        </div>

      
      // <div className="Navbar">
      //   <nav>
      //   <ul className='col'>
      //     <li>
      //       <Link to="/home" style={{textDecoration:"none"}}><AiOutlineHome className="navicon"/>Home</Link>
      //     </li>
      //     <li>
      //       <Link to="/menu" style={{textDecoration:"none"}}><MdOutlineRestaurantMenu className="navicon"/>Menu</Link>
      //     </li>
      //     <li>
      //       <Link to="/gallery" style={{textDecoration:"none"}}><BiPhotoAlbum className="navicon"/>Gallery</Link>
      //     </li>
      //     <li>
      //       <Link to="/account" className="account" style={{textDecoration:"none"}}><RiAccountCircleline /></Link>
      //     </li>
      //   </ul>
      //   </nav>
      // </div>
    );
  }
}
export default Navbar;