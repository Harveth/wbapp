import { Component } from "react";
import {FaRegArrowAltCircleRight} from "react-icons/fa";

import Navbar from "../Navbar/Navbar";
import "./Landingpage.css";

class Landingpage extends Component {
  render() {
    return (
      <div className="Landingpage">

        <Navbar/>

        <div className="Maincontainer container-fluid">

          <section className="mlogo">
            <img src={require("../../Assets/Images/MainLogoClear.png")} alt="lol" />
          </section>

          <section className="row menu align-items-center">

            <p className="col menuQuote align-self-center ml-30" >
              <h4>Check out our menu!</h4>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </blockquote>
              <a  href="#Menu"><FaRegArrowAltCircleRight className='menuRedirect'/></a>
            </p>

            <a href="#Menu" className="img col h-50">
              <img
              className="img-fluid"
                src={require("../../Assets/Images/fish.png")}
                alt="Menu Cover"
              />
            </a>
          </section>

          <section>Two</section>

          <section>Three</section>
          
        <footer className="bg-dark text-center text-white">
          About us:
        </footer>

        </div>
      </div>
    );
  }
}
export default Landingpage;
