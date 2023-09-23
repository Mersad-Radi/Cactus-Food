import React from "react";
import { useState, useEffect } from "react";
import { RCard } from "../component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const PopularFoods = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <>
      <div className="flex justify-between mb-10 ">
        <Swiper spaceBetween={15} slidesPerView={5}>
          {popular.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <RCard recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default PopularFoods;
