import React, { useState, useEffect } from "react";
import "./Admin.css";
import { auth, db } from "../firebaseConfig";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import axios from "axios";

const Admin = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [lotSize, setLotSize] = useState("");
  const [houseSize, setHouseSize] = useState("");
  const [price, setPrice] = useState("");
  const [propertyLink, setPropertyLink] = useState("");
  const [forSale, setForSale] = useState(true);
  const [listings, setListings] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);

  // Editing state
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingListing, setEditingListing] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const getListings = async () => {
      const querySnap = await getDocs(collection(db, "listings"));
      const data = querySnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setListings(data);
    };

    if (user) {
      getListings();
    }

    return () => unsub();
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  // Upload image to Cloudinary
  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
    formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/image/upload`,
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Image upload failed!");
      return null;
    }
  };

  // Add listing to Firestore with image URL
  const addListing = async (e) => {
    e.preventDefault();

    if (imageFile) {
      const imageURL = await uploadImageToCloudinary(imageFile);
      if (!imageURL) {
        return;
      }

      await addDoc(collection(db, "listings"), {
        address,
        imageURL,
        lotSize,
        houseSize,
        price,
        propertyLink,
        forSale,
      });

      setFormVisible(false);
      alert("Listing added!");

      // Clear form fields
      setAddress("");
      setLotSize("");
      setHouseSize("");
      setPrice("");
      setPropertyLink("");
      setImageFile(null);
    } else {
      alert("Please select an image.");
    }
  };

  // Delete listing from Firestore
  const deleteListing = async (listingId) => {
    await deleteDoc(doc(db, "listings", listingId));
    alert("Listing deleted!");
    setListings(listings.filter((listing) => listing.id !== listingId));
  };

  // Start editing a listing
  const startEditListing = (listing) => {
    setIsEditMode(true);
    setEditingListing(listing);
    setAddress(listing.address);
    setPrice(listing.price || "");
    setForSale(listing.forSale);
    setFormVisible(true);
  };

  // Update listing details in Firestore
  const updateListing = async (e) => {
    e.preventDefault();
    if (!editingListing) return;

    const listingRef = doc(db, "listings", editingListing.id);

    // Directly pass price as string to Firestore
    await updateDoc(listingRef, {
      price, // No need to parse to number, treat as string
      forSale,
    });

    setListings((prevListings) =>
      prevListings.map((listing) =>
        listing.id === editingListing.id
          ? { ...listing, price, forSale } // Make sure price stays as a string
          : listing
      )
    );

    alert("Listing updated!");
    setIsEditMode(false);
    setFormVisible(false);
    setEditingListing(null);
  };

  return user ? (
    <div className="mainAdminDiv">
      <h1 className="text">Admin Panel</h1>
      <div>
        <button className="adminButton" onClick={logout}>
          Logout
        </button>
        {!isFormVisible && (
          <button className="adminButton" onClick={() => setFormVisible(true)}>
            Add Listing
          </button>
        )}
      </div>
      {isFormVisible && (
        <form
          className="form"
          onSubmit={isEditMode ? updateListing : addListing}
        >
          <div id="formDiv" className="formDiv">
            {isEditMode && <h4>Editing: {address}</h4>}
            {!isEditMode && (
              <>
                <input
                  className="formInput"
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  className="formInput"
                  type="text"
                  placeholder="Lot Size"
                  value={lotSize}
                  onChange={(e) => setLotSize(e.target.value)}
                />
                <input
                  className="formInput"
                  type="text"
                  placeholder="House Size"
                  value={houseSize}
                  onChange={(e) => setHouseSize(e.target.value)}
                />
                <input
                  className="formInput"
                  type="text"
                  placeholder="Property Link"
                  value={propertyLink}
                  onChange={(e) => setPropertyLink(e.target.value)}
                />
                <input
                  className="formInput"
                  type="file"
                  onChange={(e) => setImageFile(e.target.files[0])}
                />
              </>
            )}
            <input
              className="formInput"
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            {/* Checkbox for "For Sale" */}
            <label>
              <input
                type="checkbox"
                checked={forSale}
                onChange={(e) => setForSale(e.target.checked)}
              />
              For Sale
            </label>

            <div className="listingCardButtonDiv">
              <button className="listingCardButton" type="submit">
                {isEditMode ? "Update Listing" : "Add Listing"}
              </button>
              <button
                className="listingCardButton"
                type="button"
                onClick={() => {
                  setAddress("");
                  setPrice(""); // Reset price to an empty string (not NaN)
                  setIsEditMode(false); // Reset edit mode
                  setFormVisible(false); // Hide the form
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}
      <h3 className="text">Current Listings</h3>
      <div className="adminListingsDiv">
        {listings.length === 0 ? (
          <p>No listings available</p>
        ) : (
          listings.map((listing) => (
            <div className="listingCard" key={listing.id}>
              <img src={listing.imageURL} alt="Listing" width="200" />
              <div className="adminListingTextDiv">
                <h4 className="listingCardText">{listing.address}</h4>
                <p className="listingCardText">Price: {listing.price}</p>
                <p className="listingCardText">
                  House Size: {listing.houseSize}
                </p>
                <p className="listingCardText">Lot Size: {listing.lotSize}</p>
                <p className="listingCardText">
                  Status: {listing.forSale ? "For Sale" : "Sold"}
                </p>
                <div className="listingCardButtonDiv">
                  <button
                    className="listingCardButton"
                    onClick={() => deleteListing(listing.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="listingCardButton"
                    onClick={() => startEditListing(listing)}
                  >
                    <a href="/admin#formDiv">Edit</a>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  ) : (
    <div className="loginDiv">
      <div className="contentDiv">
        <img
          src="https://res.cloudinary.com/dgqomo8og/image/upload/v1738616421/vanessavegare/logos-icons/agnhzirenrlukui1scnu.webp"
          alt=""
        />
      </div>
      <div className="contentDiv">
        <form onSubmit={handleLogin}>
          <h1 className="adminText">Admin Login</h1>
          <div className="inputDiv">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="loginInput"
            />
            <button type="submit" className="loginButton">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
