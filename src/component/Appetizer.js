import React from "react";
import { useState, useEffect } from "react";
import { RCard } from "../component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Appetizer = () => {
  const [appetizer, setAppetizer] = useState([]);

  useEffect(() => {
    getAppetizer();
  }, []);

  const getAppetizer = async () => {
    const check = localStorage.getItem("appetizer");

    if (check) {
      setAppetizer(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15&tags=appetizer`
      );
      const data = await api.json();
      localStorage.setItem("appetizer", JSON.stringify(data.recipes));
      setAppetizer(data.recipes);
    }
  };

  return (
    <>
      <div className="flex justify-center mb-10 ">
        <Swiper spaceBetween={15} slidesPerView={5}>
          {appetizer.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <RCard recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Appetizer;
