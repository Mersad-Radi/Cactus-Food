import React from "react";
import { useState, useEffect } from "react";
import { RCard } from "../component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Dessert = () => {
  const [dessert, setDessert] = useState([]);

  useEffect(() => {
    getDessert();
  }, []);

  const getDessert = async () => {
    const check = localStorage.getItem("dessert");

    if (check) {
      setDessert(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15&tags=dessert`
      );
      const data = await api.json();
      localStorage.setItem("dessert", JSON.stringify(data.recipes));
      setDessert(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <>
      <div className="flex justify-center mb-10 ">
        <Swiper spaceBetween={15} slidesPerView={5}>
          {dessert.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <RCard recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Dessert;
