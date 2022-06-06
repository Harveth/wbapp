import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import './Gallery.css';


class Gallery extends Component {
    render() {
      return (
          <div>
            <section className="pics">
            <Carousel data-aos="fade-up" className="col-md-11 align-self-center container-fluid">
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={require("../Gallery/1.jpg")}
                  alt="GRND restaurant"
                />
              </Carousel.Item>
              
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={require("../Gallery/2.jpg")}
                  alt="GRND restaurant"
                />
              </Carousel.Item>

              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src={require("../Gallery/3.jpg")}
                  alt="Second slide"
                />

              </Carousel.Item>

              <Carousel.Item  interval={2000}>
                <img
                  className="d-block w-100"
                  src={require("../Gallery/4.jpg")}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item  interval={2000}>
                <img data-aos="fade-right"
                  className="d-block w-100"
                  src={require("../Gallery/5.jpg")}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </section>
          </div>
        );
    }
  }
  export default Gallery;