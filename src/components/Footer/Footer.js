import { Component } from "react";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { BsFillClockFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="containerFooter ">
        <footer className="bg-dark text-center text-white mt-auto">
          <div>
            <section className="mb-1">
              <a
                href="https://www.facebook.com/GRND-106369172103339"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-floating m-1"
              >
                <RiFacebookFill />
              </a>
              <a
                a
                href="https://twitter.com/GrndRestaurant"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <RiTwitterFill />
              </a>
            </section>
            <hr />
            <div className="row mb-2 info">
              <section className="col contact">
                <h6>
                  <BsFillTelephoneFill /> Contact us:
                </h6>
                <p className="align-text-center">
                  Landline: +22-XXX-XXX
                  <br />
                  Mobile: +201-XXX-XXX-XXX
                  <br />
                  E-Mail: miu.restaurant.grnd@gmail.com
                </p>
              </section>
              <div class="vr" />
              <section className="col mb-2 align-self-center lcoation">
                <h6>
                  <ImLocation2 />
                  Visit us:{" "}
                </h6>
                <br />
                KM 28 Cairo – Ismailia Road Ahmed Orabi District, Cairo – Egypt
              </section>
              <div class="vr" />
              <section className="col mb-2 align-self-center work">
                <h6>
                  <BsFillClockFill />
                  Working Hours:
                </h6>
                <br />
                <p>
                  Everyday from 10AM <AiOutlineArrowRight /> 12PM
                </p>
              </section>
            </div>
          </div>
          <div
            className="text-center p-0.5"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
            <a href="https://miuegypt.edu.eg/">MIU</a>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
