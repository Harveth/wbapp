import { Component } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {GiTrophy} from "react-icons/gi";
import {RiStarSFill} from "react-icons/ri";
import {GiLaurelsTrophy} from "react-icons/gi";
import { RiMedalFill } from "react-icons/ri";
import {AiOutlineUnorderedList} from "react-icons/ai";
import {BsFillAwardFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./Landingpage.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


class Landingpage extends Component {
  render() {
    return (
      <div  className="container-fluid justify-content-center LandingPage">
        <section  className="row first">
          <div className="logo">
            <img data-aos="fade-up" src={require("../../Assets/Images/MainLogoClear.png")} />
          </div>
        </section>
        <section data-aos="fade-in" className="row second align-self-center">
          <div className="container2 d-flex justify-content-center ">

            <div className="menu col-4 align-self-center justify-content-center">
              <p className="menuQuote">
                <h3>Check out our menu!</h3>
                <blockquote>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </blockquote>
                <Link to="/menu" style={{ textDecoration: "none"}}>
                  <FaRegArrowAltCircleRight className="menuRedirect" />
                </Link>
              </p>
            </div>

            <div data-aos="fade-left" className="col-5 align-self-center justify-content-center">
              <Link to="/Menu"  className="img h-50">
                <img
                  className="img-fluid"
                  src={require("../../Assets/Images/fishG.png")}
                  alt="Menu Cover"
                />
              </Link>
            </div>

          </div>
        </section>
        <section className="row third  ">
          <div data-aos="fade-right" className="col  awards justify-content-center align-self-center "> 
            <p>
            <h1><GiTrophy style={{ color: "gold"}}/> Awards</h1>
            <h2><RiStarSFill style={{ color: "gold"}}/><RiStarSFill style={{ color: "gold"}}/><RiStarSFill style={{ color: "gold"}}/><RiStarSFill style={{ color: "gold"}}/><RiStarSFill/></h2>
            <br/>
            <br/>
            <h2><GiLaurelsTrophy style={{ color: "gold"}}/> MIU's Best Resturant</h2>
            <br/>
            <br/>
            <h2><RiMedalFill style={{ color: "silver"}}/> James Beard Foundation Award</h2>
            <br/>
            <br/>
            <h2><AiOutlineUnorderedList style={{ color: "blue"}}/> The World's 50 Best Restaurants</h2>
            <br/>
            <br/>
            <h2><BsFillAwardFill/> Restaurant & Bar Design Awards</h2>
            </p>
          </div>
          <div data-aos="fade-left" className="col justify-content-center">
            <div className="row chef">

              <p className="row align-self-center">
              <h2>
               Head chef's word:
              </h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                pellentesque porta lectus, quis iaculis arcu. Etiam non lectus
                ullamcorper, lacinia arcu nec, rhoncus nisi. Curabitur vel augue
                augue. Sed in volutpat nulla, sed consectetur leo.
                <div className="sign">-Mikkel</div>
              </p> 
            </div>
            <div className="row review justify-content-center"> 
            <h2>Reviews</h2>
            <Carousel data-aos="flip-down" className="col-md-9 align-self-center">
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={require("../../Assets/Images/inside2.jpeg")}
                  alt="GRND restaurant"
                />
                <Carousel.Caption>
                  <h3>GRND Restaurant</h3>
                  <p>
                    <blockquote>
                      Best expereince i ever had in a restaurant
                    </blockquote>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={require("../../Assets/Images/pizza.jpg")}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Speciality Pizzas</h3>
                  <p>
                  <blockquote>
                    A new meaning to pizza
                  </blockquote>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={require("../../Assets/Images/stuff.jpg")}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Signature Soufflete</h3>
                  <p>
                  <blockquote>
                    Perfect doesn't even suffice
                  </blockquote>
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Landingpage;
