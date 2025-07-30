import React from "react";
import "./Footer.css"

const Footer = () => {
    

  return (
    <>
      <div id="footer" className="footer">
        <div id="footer">
          <div id="footerContent">
            <div id="copyright">
              <img src="https://res.cloudinary.com/dgqomo8og/image/upload/v1738616421/vanessavegare/logos-icons/agnhzirenrlukui1scnu.webp" alt="CaproLogo" id="footerLogo" />
              <p>© 2023 Capre</p>
            </div>
            <div id="footerLinks">
              <ul id="linkList">
                <li id="linkItem">
                  <a href="/#mainHeader">
                    <p>Home</p>
                  </a>
                </li>
                <li id="linkItem">
                  <a href="/#about">
                    <p>About</p>
                  </a>
                </li>
                <li id="linkItem">
                  <a href="/listings">
                    <p>Listings</p>
                  </a>
                </li>
                <li id="linkItem">
                  <a href="/#contact">
                    <p>Contact</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
