import React from "react";
import InfoBox from "./InfoBox";

const Footer = () => {
  return (
    <>
      <div className="footer">
      <InfoBox/>
        <div className="footerLink">
          <a className="linksFooter" href="/">
            Home
          </a>
          <a className="linksFooter" href="/">
          Servizi
          </a>
          {/* <a className="linksFooter" href="#/find-us">
            Contattaci
          </a> */}
        </div>
        <p className="paragraph">© 2023 - 2024 Centro revisione Ienna - All Rights Reserved.</p>
      </div>

    </>
  );
};
export default Footer;
