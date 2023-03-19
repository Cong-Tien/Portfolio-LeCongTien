import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>letien18102001@gmail.com</span>
        <div className="f-icons">
          <a target="_blank" href="https://github.com/Cong-Tien"><Insta color="white" size={"3rem"} /></a>
          <a target="_blank" href="https://www.facebook.com/tien.lequang.942"><Facebook color="white" size={"3rem"} /></a>
          <a target="_blank" href="https://github.com/Cong-Tien"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
