import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import boy from "../../img/boy.png";
import Resume from '../Services/cv_lecongtien.pdf';
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        {/* <div className="n-name" style={{color:"white"}}>Tien</div> */}
        <img style={{borderRadius:"100%"}} width={50} src={boy}></img>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        {/* <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        
        </Link> */}
        <a href={Resume} download>
          <button className="button n-button">Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default navbar;
