import { Component } from "react";
import './Footer.css';


class Footer extends Component {
  render() {
    return (
      
        <footer className="bg-dark text-center text-white mt-auto">
          <div className=" p-4">
            <section className="mb-4">

              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i className="fab fa-facebook-f"></i></a>
              
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i className=""></i></a>
            </section>
          </div> 
          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2022 Copyright:
            <a href="https://miuegypt.edu.eg/">MIU</a>
          </div>
        </footer>
    );
  }
}
export default Footer;