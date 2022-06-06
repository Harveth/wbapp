import { Component } from "react";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import './Footer.css';


class Footer extends Component {
  render() {
    return (
      <div className="containerFooter">
        <footer className="bg-dark text-center text-white mt-auto">
          <div >
            <section className="mb-4">

              <a href="https://Facebook.com/GRND" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-floating m-1"
              ><RiFacebookFill/></a>
              <a a href="https://twitter.com/GrndRestaurant" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-floating m-1" role="button"
              ><RiTwitterFill/></a>
              
            </section>
          </div> 
          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2022 Copyright:
            <a href="https://miuegypt.edu.eg/">MIU</a>
          </div>
        </footer>
        </div>
    );
  }
}
export default Footer;