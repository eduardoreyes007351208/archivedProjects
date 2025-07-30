import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./Listings.css"; // Your existing styles
import Header from "../components/Header";
import Footer from "../components/Footer";

const Listings = () => {
  const [listingData, setListingData] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [showSold, setShowSold] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "listings"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setListingData(data);
      setFilteredListings(data.filter((listing) => listing.forSale === true));
    };
    fetchData();
  }, []);

  const toggleListings = () => {
    setShowSold(!showSold);
    if (showSold) {
      setFilteredListings(
        listingData.filter((listing) => listing.forSale === true)
      );
    } else {
      setFilteredListings(
        listingData.filter((listing) => listing.forSale === false)
      );
    }
  };

  return (
    <div id="listingsWrapper">
      <Header />
      <section id="listings">
        <div id="centerDiv">
          <div id="listingText">
            <h1>Listings</h1>
          </div>
          <div className="buttonsDiv">
            <a href="/">
              <button className="listingButton">Home</button>
            </a>

            <button className="listingButton" onClick={toggleListings}>
              {showSold ? "Show For Sale" : "Show Sold"}
            </button>
          </div>
          <div id="activeListingDiv">
            {filteredListings.length === 0 ? (
              <p>No Listings Available</p>
            ) : (
              filteredListings.map((listing) => (
                <div key={listing.id} id="listingCard">
                  <img src={listing.imageURL} alt="" id="listingImage" />
                  <div className="listingTextDiv">
                    <p className="listingCardText">
                      Address: {listing.address}
                    </p>
                    <p className="listingCardText">Price: {listing.price}</p>
                    <p className="listingCardText">
                      Lot Size: {listing.lotSize}
                    </p>
                    <p className="listingCardText">
                      House Size: {listing.houseSize}
                    </p>
                    <button id="listingButton">
                      <a href={listing.propertyLink} target="_blank">
                        View Property
                      </a>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Listings;
