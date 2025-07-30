import React, { useEffect, useState } from 'react';
import { db } from "../firebaseConfig";
import "./Carousel.css"
import { collection, getDocs, query, where } from 'firebase/firestore';

const Carousel = () => {
    const [listingImages, setListingImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);

    const fetchImages = async () => {
        const queryS = await getDocs(query(collection(db, 'listings'), where('forSale', '==', true)));

        const data = queryS.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        setListingImages(data.map((listingImage) => listingImage.imageURL));
    };

    useEffect(() => {
        fetchImages();
    }, []);

    useEffect(() => {
        if (listingImages.length > 0) {
            const intervalId = setInterval(() => {
                setCurrentImage((prevIndex) => (prevIndex + 1) % listingImages.length);
            }, 4000);

            return () => clearInterval(intervalId);
        }
    }, [listingImages]);

  return (
    <>
        {listingImages.length > 0 ? (
            <img src={listingImages[currentImage]} alt="carousel" className='carouselImage' />
        ) : (
            <p>Loading Images...</p>
        )}
    </>
  )
}

export default Carousel