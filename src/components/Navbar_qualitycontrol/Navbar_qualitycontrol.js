import { NavDropdown } from 'react-bootstrap';
import { Component } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { BiPhotoAlbum } from "react-icons/bi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import {BiCart} from "react-icons/bi";
import React from 'react';
import './Navbar_qualitycontrol.css';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <RiAccountCircleLine className="account navbar-nav ms-auto mb-2 mb-lg-6 dropdown-toggle"/>
));

class Navbar_qualitycontrol extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: true};
  }
  render() {
    let logInStatus = this.state.isLoggedIn;
    let dropdownmenu;
    if(!logInStatus){
      dropdownmenu =
                <NavDropdown alignRight title={<RiAccountCircleLine className="account"/>} className="">
                  <Link to='/signin' className="dropdown-item">Sign In</Link>
                  <Link to='/signup' className="dropdown-item">Sign Up</Link>
                </NavDropdown>;
    }else{
      dropdownmenu =
                <NavDropdown alignRight title={<RiAccountCircleLine className="account"/>} className="">
                  <Link to='/home' className="dropdown-item">Home</Link>
                  <Link to='/account' className="dropdown-item">Account</Link>
                  <Link to='/cart' className="dropdown-item">Cart</Link>
                </NavDropdown>;
    }
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-transparent'>
          <div className='container-fluid'>
            <div className='navbar'>
            <ul className='navbar-nav me-auto mb-3 mb-lg-5'>
            <li className='nav-item'>
              <Link to="/home" style={{ textDecoration: "none" }}><AiOutlineHome className="navicon" />Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/menu" style={{ textDecoration: "none" }}><MdOutlineRestaurantMenu className="navicon" />Menu</Link>
            </li>
            <li className='nav-item'>
              <Link to="/gallery" style={{ textDecoration: "none" }}><BiPhotoAlbum className="navicon" />Gallery</Link>
            </li>
            <li className='nav-item'>
              <Link to="/gallery" style={{ textDecoration: "none" }}><BiPhotoAlbum className="navicon" />Comments</Link>
            </li>
            <li className='nav-item'>
              <Link to="/gallery" style={{ textDecoration: "none" }}><BiPhotoAlbum className="navicon" />Reports</Link>
            </li>
            <li className='nav-item'>
              <Link to="/promoteusers" style={{ textDecoration: "none" }}><BiPhotoAlbum className="navicon" />Promote Users</Link>
            </li>
            </ul>
            <ul className='navbar-nav ms-2 ms-lg me-5 mb-4'>
            <li>
            <Link to="/Cart"  style={{ textDecoration: "none",paddingTop:'80' }}><BiCart className="navicon" /></Link>
            </li>
          
            <li className=''>
              {/* <Link to="/signin" className="account navbar-nav ms-auto mb-2 mb-lg-0"><RiAccountCircleLine className="account navbar-nav ms-auto mb-2 mb-lg-0"/></Link> */}
              {/* <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
                </Dropdown.Toggle>
              </Dropdown> */}
                {dropdownmenu}
            </li>
            </ul>
            </div>

            </div>
        </nav>
    );
  }
}
export default Navbar_qualitycontrol;