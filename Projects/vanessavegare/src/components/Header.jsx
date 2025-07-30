import React from "react";
import "./Header.css"

const Header = () => {
  function hamburgerFunc() {
    var x = document.getElementById("navlist2");
    var v = document.getElementById("mainHeader");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      v.style.display = "block";
      x.style.display = "block";
    }
  }
  return (
    <>
      <div id="mainHeader" className="header">
        <div className="mainHeader">
          <a href="/" id="capreLogo">
            <img id="capreHeader" src="https://res.cloudinary.com/dgqomo8og/image/upload/v1738616421/vanessavegare/logos-icons/agnhzirenrlukui1scnu.webp" alt="capreLogo" />
          </a>
          <div className="headerWords">
            <h2 className="headerText">Vanessa Vega</h2>
            <p className="headerText">DRE 02227468</p>
            <a href="tel:+1-909-746-9872" className="headerText">
              (909)746-9872
            </a>
          </div>

          <a href="#0;" id="hamDiv" onClick={hamburgerFunc}>
            <div id="hamburger1"></div>
            <div id="hamburger2"></div>
            <div id="hamburger3"></div>
          </a>
        </div>

        <ul id="navlist" className="navlist">
          <li className="navitems">
            <a className="navText" href="/#about">
              About
            </a>
          </li>
          <li className="navitems">
            <a className="navText" href="/listings">
              Listings
            </a>
          </li>
          <li className="navitems">
            <a className="navText" href="/#contact">
              Contact
            </a>
          </li>
        </ul>
        <ul id="navlist2" className="navlist">
          <li className="navitems">
            <a className="navText" href="/#about" onClick={hamburgerFunc}>
              About
            </a>
          </li>
          <li className="navitems">
            <a className="navText" href="/#listings" onClick={hamburgerFunc}>
              Listings
            </a>
          </li>
          <li className="navitems">
            <a className="navText" href="/#contact" onClick={hamburgerFunc}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
