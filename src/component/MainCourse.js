import React from "react";
import { useState, useEffect } from "react";
import { RCard } from "../component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const MainCourse = () => {
  const [mainCourse, setMainCourse] = useState([]);

  useEffect(() => {
    getMainCourse();
  }, []);

  const getMainCourse = async () => {
    const check = localStorage.getItem("mainCourse");

    if (check) {
      setMainCourse(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15&tags=main course`
      );
      const data = await api.json();
      localStorage.setItem("mainCourse", JSON.stringify(data.recipes));
      setMainCourse(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <>
      <div className="flex justify-center mb-10 ">
        <Swiper spaceBetween={15} slidesPerView={5}>
          {mainCourse.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <RCard recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MainCourse;
