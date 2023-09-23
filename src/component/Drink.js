import React from "react";
import { useState, useEffect } from "react";
import { RCard } from ".";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Drink = () => {
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    getDrink();
  }, []);

  const getDrink = async () => {
    const check = localStorage.getItem("drink");

    if (check) {
      setDrink(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15&tags=drink`
      );
      const data = await api.json();
      localStorage.setItem("drink", JSON.stringify(data.recipes));
      setDrink(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <>
      <div className="flex justify-center mb-10 ">
        <Swiper spaceBetween={15} slidesPerView={5}>
          {drink.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <RCard recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Drink;
