import React from "react";
import { useState, useEffect } from "react";
import "../index.css";
import burgerBanner from "../utils/img/Banner/burgerbanner.png";
import cactusBanner from "../utils/img/Banner/cactusbanner.jpg";
import tacoBanner from "../utils/img/Banner/tacobanner.jpg";
import meatBanner from "../utils/img/Banner/meatbanner.jpg";

const Slider = () => {
  const images = [cactusBanner, burgerBanner, tacoBanner, meatBanner];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    setIntervalId(interval);

    return () => clearInterval(interval);
  },[]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [, setIntervalId] = useState(null);

  return (
    <div className="slider">
      <img className="slider" src={images[currentSlide]} alt="Slide" />
    </div>
  );
};

export default Slider;
