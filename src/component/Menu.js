import React from "react";
import {
  PopularFoods,
  Dessert,
  MainCourse,
  Appetizer,
  Drink,
  Search,
} from "../component";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Search />
      <h2 className="sliderHeader flex justify-center mb-5 mt-10">Popular</h2>
      <PopularFoods />
      <h2 className="sliderHeader flex justify-center mb-5 mt-10">
        Main Course
      </h2>
      <MainCourse />
      <Link to={"/MoreFood/main course"} className="flex justify-center">
        <button
          type="button"
          className="menu-button m-button font-medium text-sm text-center text-black"
        >
          More...
        </button>
      </Link>
      <h2 className="sliderHeader flex justify-center mb-5 mt-10">Appetizer</h2>
      <Appetizer />
      <Link to={"/MoreFood/Appetizer"} className="flex justify-center">
        <button
          type="button"
          className="menu-button m-button font-medium text-sm text-center text-black"
        >
          More...
        </button>
      </Link>
      <h2 className="sliderHeader flex justify-center mb-5 mt-10">Dessert</h2>
      <Dessert />
      <Link to={"/MoreFood/Dessert"} className="flex justify-center">
        <button
          type="button"
          className="menu-button m-button font-medium text-sm text-center text-black"
        >
          More...
        </button>
      </Link>
      <h2 className="sliderHeader flex justify-center mb-5 mt-10">Drink</h2>
      <Drink />
      <Link to={"/MoreFood/Drink"} className="flex justify-center">
        <button
          type="button"
          className="menu-button m-button font-medium text-sm text-center text-black"
        >
          More...
        </button>
      </Link>
    </motion.div>
  );
};

export default Menu;
