import React from "react";
import SocialBox from "./SocialBox"
import Logo from "../assets/img/Logo.png"

const Navbar = () => {
  return (
    <header className="header">
      <div className="navigation">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <ul className="menu">
          <li>
            <a className="aNav" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="aNav" href="/Discover">
              Servizi
            </a>
          </li>
          <li>
            <a className="aNav" href="/AboutUs">
              Contattaci
            </a>
          </li>
        </ul>
        <SocialBox />
      </div>
    </header>
  );
};

export default Navbar;
