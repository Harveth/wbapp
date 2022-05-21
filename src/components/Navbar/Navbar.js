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
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='container-fluid'>
            <div className='navbar'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to="/home" style={{ textDecoration: "none" }}><AiOutlineHome className="navicon" />Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/menu" style={{ textDecoration: "none" }}><MdOutlineRestaurantMenu className="navicon" />Menu</Link>
            </li>
            <li className='nav-item'>
              <Link to="/gallery" style={{ textDecoration: "none" }}><BiPhotoAlbum className="navicon" />Gallery</Link>
            </li>
            </ul>
            <ul className='navbar-nav ms-2 ms-lg me-4 mb-4'>
            <li className=''>
              <Link to="/account" className="account navbar-nav ms-auto mb-2 mb-lg-0"><RiAccountCircleLine /></Link>
            </li>
            </ul>
            </div>

            </div>
        </nav>
        // <div className='row navbar'>
        //   <ul>
        //     <div className='row'>
        //     <li className='col'>
        //       <Link to="/home" style={{ textDecoration: "none" }}><AiOutlineHome className="navicon" />Home</Link>
        //     </li>
        //     <li className='col'>
        //       <Link to="/menu" style={{ textDecoration: "none" }}><MdOutlineRestaurantMenu className="navicon" />Menu</Link>
        //     </li>
        //     <li className='col'>
        //       <Link to="/gallery" style={{ textDecoration: "none" }}><BiPhotoAlbum className="navicon" />Gallery</Link>
        //     </li>
        //     <li className='col align-content-end' style={{textAlign: 'right'}}>
        //       <Link to="/account" className="account" style={{ textDecoration: "none", float:"right"}}><RiAccountCircleLine /></Link>
        //     </li>
        //     </div>
        //   </ul>
        // </div>


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