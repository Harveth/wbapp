import { Component } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "../Navbar/Navbar";
import "./Landingpage.css";

class Landingpage extends Component {
  render() {
    return (
      <div className="Landingpage">
        <Navbar />

        <div className="Maincontainer container-fluid">
          <section className="mlogo">
            <img
              src={require("../../Assets/Images/MainLogoClear.png")}
              alt="GoldenFish"
            />
          </section>

          <section className="row menu align-items-center">
            <p className="col menuQuote align-self-center">
              <h4>Check out our menu!</h4>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </blockquote>
              <a href="#Menu">
                <FaRegArrowAltCircleRight className="menuRedirect" />
              </a>
            </p>

            <a href="#Menu" className="img col h-50">
              <img
                className="img-fluid"
                src={require("../../Assets/Images/fishG.png")}
                alt="Menu Cover"
              />
            </a>
          </section>

          <section className="row chef align-items-center">
            <div className="col chefW">
            <GiChefToque className="icon"/>
              <h2 className="row">
                World Renowned Chefs
              </h2>
              <p className="row align-self-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                pellentesque porta lectus, quis iaculis arcu. Etiam non lectus
                ullamcorper, lacinia arcu nec, rhoncus nisi. Curabitur vel augue
                augue. Sed in volutpat nulla, sed consectetur leo. Nullam
                viverra elit a gravida pharetra. Nullam posuere fermentum enim
                ac volutpat.
                <sign>-Mikkel</sign>
              </p>
            </div>
            <img
              className="col align-self-center"
              src={require("../../Assets/Images/chef.png")}
              alt="Mikkel"
            />
          </section>

          <section className="row gallery">
            <Carousel className="col-md-5 align-self-center">
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={require("../../Assets/Images/inside2.jpeg")}
                  alt="GRND restaurant"
                />
                <Carousel.Caption>
                  <h3>GRND Restaurant</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src={require("../../Assets/Images/pizza.jpg")}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Speciality Pizzas</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                  <h3>Signature Soufflé</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div className="col align-self-center">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et.</h2>
              <h7>In vel eleifend nisl, eget.</h7>
            </div>
          </section>
        </div>
        <footer className="bg-dark text-center text-white text-muted">
            <section className="row">
              <div className="col">
                  Contacts
              </div>
              <div className="col">
                   Working hours
              </div>
              <div className="col">
                  About us
              </div>
            </section>
          </footer>
      </div>
    );
  }
}
export default Landingpage;
