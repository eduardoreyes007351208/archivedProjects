import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Carousel from "../components/Carousel.jsx";
import "./Home.css";

const Home = () => {
  const [location, setLocation] = useState([]);
  const [contact, setContact] = useState([]);
  const [listingThumbnail, setlistingThumbnail] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const fetchlocalData = async () => {
      const locationData = await fetch("/data/locations.json").then(
        (response) => response.json()
      );
      const contactData = await fetch("/data/contact.json").then((response) =>
        response.json()
      );
      return [locationData, contactData];
    };

    const fetchFSData = async () => {
      const querySnapshot = await getDocs(collection(db, "listings"));
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    };

    Promise.all([fetchlocalData(), fetchFSData()])
      .then(([localData, listingThumbnail]) => {
        setlistingThumbnail(
          listingThumbnail.filter((listThumb) => listThumb.forSale === true)
        );
        setLocation(localData[0]);
        setContact(localData[1]);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <Header />

      <section id="hero">
        <div id="heroDiv">
          <div id="heroText">
            <h1>Turning The Key to Your Future</h1>
            <p>Your CAPRE Real Estate Partner</p>
            <a href="/#about">
              <button id="heroBttn">Meet Vanessa</button>
            </a>
          </div>
          <div id="heroImage">
            <img
              src="https://res.cloudinary.com/dgqomo8og/image/upload/v1738616421/vanessavegare/logos-icons/gnkjqms9j3p0sar6fckm.webp"
              alt="headshot"
              id="headshot"
            />
          </div>
        </div>
        <div id="heroDiv2">
          <div id="heroText">
            <h1>Turning The Key to Your Future</h1>
          </div>
          <div id="heroImage">
            <img
              src="https://res.cloudinary.com/dgqomo8og/image/upload/v1738616421/vanessavegare/logos-icons/gnkjqms9j3p0sar6fckm.webp"
              alt="headshot"
              id="headshot"
            />
          </div>
          <div id="heroText">
            <p>Your CAPRE Real Estate Partner</p>
            <a href="/#about">
              <button id="heroBttn">Meet Vanessa</button>
            </a>
          </div>
        </div>
      </section>

      <section id="about">
        <div id="abouth1">
          <h1>Get to Know Me</h1>
        </div>

        <div id="aboutDiv">
          <div id="aboutTB">
            <div id="aboutText">
              <p>
                I am so excited to share with you all the BIG NEWS! I am a Real
                Estate Agent! I have recently joined the amazing team at CAPRE.
                I thought I would take this time to introduce myself! My name is
                Vanessa Vega. I am an alumni from CSUSB where I received my
                bachelors in Business Admin with a concentration in Real Estate.
                I also love helping people making their home the home of their
                dreams with interior design! I pride myself on helping others
                achieve all their goals! Whether your looking to buy, sell, or
                see where the market is at, I would love to help you navigate
                the current market!
              </p>
            </div>
            <div id="aboutBttns">
              <a href="/#contact">
                <button id="aboutBttn">Contact Me</button>
              </a>
              <a href="/listings">
                <button id="aboutBttn">View Listings</button>
              </a>
            </div>
          </div>
          <div id="aboutImage">
            <img
              src="https://res.cloudinary.com/dgqomo8og/image/upload/v1738616421/vanessavegare/logos-icons/gnkjqms9j3p0sar6fckm.webp"
              alt="headshot"
              id="aboutheadshot"
            />
          </div>
        </div>

        <div id="aboutDiv2">
          <div id="abouth1-2">
            <h1>Get to Know Me</h1>
          </div>
          <div id="aboutImage">
            <img
              src="https://res.cloudinary.com/dgqomo8og/image/upload/v1738616421/vanessavegare/logos-icons/gnkjqms9j3p0sar6fckm.webp"
              alt="headshot"
              id="aboutheadshot"
            />
          </div>

          <div id="aboutText">
            <p>
              I am so excited to share with you all the BIG NEWS! I am a Real
              Estate Agent! I have recently joined the amazing team at CAPRE. I
              thought I would take this time to introduce myself! My name is
              Vanessa Vega. I am an alumni from CSUSB where I received my
              bachelors in Business Admin with a concentration in Real Estate. I
              also love helping people making their home the home of their
              dreams with interior design! I pride myself on helping others
              achieve all their goals! Whether your looking to buy, sell, or see
              where the market is at, I would love to help you navigate the
              current market!
            </p>
          </div>
          <div id="aboutBttns">
            <a href="/#contact">
              <button id="aboutBttn">Contact Me</button>
            </a>
            <a href="/listings">
              <button id="aboutBttn">View Listings</button>
            </a>
          </div>
        </div>
      </section>

      <section id="locations">
        <div id="locationDiv">
          <div id="locationTB">
            <div id="locationText">
              <h1>Need Help in These Areas?</h1>
            </div>
            <div id="locationButtons">
              <a href="/#contact">
                <button id="locationButton">Contact to Sell</button>
              </a>
              <a href="/listings">
                <button id="locationButton">Listings</button>
              </a>
            </div>
          </div>
          <div id="locationTiles">
            {location.map((loc, index) => {
              return (
                <div id="locationTile" key={index}>
                  <p>{loc.city}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div id="locationDiv2">
          <div id="locationText">
            <h1>Need Help in These Areas?</h1>
          </div>

          <div id="locationTiles">
            {location.map((loc, index) => {
              return (
                <div id="locationTile" key={index}>
                  <p>{loc.city}</p>
                </div>
              );
            })}
          </div>
          <div id="locationButtons">
            <a href="/#contact">
              <button id="locationButton">Contact to Sell</button>
            </a>
            <a href="/listings">
              <button id="locationButton">View Listings</button>
            </a>
          </div>
        </div>
      </section>

      <section id="listings">
        <div className="centerDiv">
          <div className="listingHalf">
            {listingThumbnail && listingThumbnail.length > 0 ? (
              <h1 className="listingText">There are currently {listingThumbnail.length} active listings</h1>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="listingHalf">
            <div className="thumbnailDiv">
              <Carousel />
            </div>
          </div>
          <div className="listingHalf">
            <a href="/listings">
              <button className="locationButton">View Listings</button>
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div id="contactDiv">
          <div id="contactHeading">
            <h1>Ready to Buy or Sell? Get in Touch Today!</h1>
          </div>
          <div id="contactText">
            <h2>Vanessa Vega</h2>
          </div>
          <div id="contactCards">
            {contact.map((cont) => {
              return (
                <div key={cont.id} id="contactCard">
                  <a href={cont.href} id="contactA" target="_blank">
                    <svg
                      id="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width={cont.size}
                      height={cont.size}
                      fill="#c49841"
                      viewBox="-4.25 0 24 24"
                    >
                      <path d={cont.path} />
                      <path d={cont.path2} />
                    </svg>
                    <p>{cont.text}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div id="contactDiv2">
          <div id="contactHeading">
            <h1>Ready to Buy or Sell? Get in Touch Today!</h1>
          </div>
          <div id="contactText">
            <h2>Vanessa Vega</h2>
          </div>
          <div id="contactCards">
            {contact.map((cont) => {
              return (
                <div key={cont.id} id="contactCard">
                  <a href={cont.href} id="contactA" target="_blank">
                    <svg
                      id="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width={cont.size}
                      height={cont.size}
                      fill="#c49841"
                      viewBox="-4.25 0 24 24"
                    >
                      <path d={cont.path} />
                      <path d={cont.path2} />
                    </svg>
                    <p>{cont.text}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
