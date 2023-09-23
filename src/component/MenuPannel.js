import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import appetizer from "../utils/img/appetizer.png";
import dessert from "../utils/img/dessert.png";
import drinks from "../utils/img/drinks.png";
import mainCourse from "../utils/img/mainCourse.png";

const MenuPannel = () => {
  return (
    <>
      <h1 className="flex justify-center mt-5 text-black">
        MENU
      </h1>
      <div className="">
        <div className="columns-4 mt-2 cards flex justify-around">
          <Link to={"/MoreFood/Appetizer"} className="card">
            <div className="cursor-pointer card-img">
              <img src={appetizer} alt="appetizer" />
            </div>
          </Link>
          <Link to={"/MoreFood/Drink"} className="card">
            <div className="cursor-pointer card-img">
              <img src={drinks} alt="drinks" />
            </div>
          </Link>
          <Link to={"/MoreFood/Dessert"} className="card">
            <div className="cursor-pointer card-img">
              <img src={dessert} alt="dessert" />
            </div>
          </Link>
          <Link to={"/MoreFood/MainCourse"} className="card">
            <div className="cursor-pointer card-img">
              <img src={mainCourse} alt="maincourse" />
            </div>
          </Link>
        </div>
        <div className=" columns-4 text-white mt-5">
          <Link to={"/MoreFood/Appetizer"} className="flex justify-center">
            <button
              type="button"
              className="menu-button m-button font-medium text-sm text-center text-black"
            >
              Appetizerr
            </button>
          </Link>
          <Link to={"/MoreFood/Drink"} className="flex justify-center">
            <button
              type="button"
              className="menu-button m-button font-medium rounded-lg text-sm text-center text-black"
            >
              Drinks
            </button>
          </Link>
          <Link to={"/MoreFood/Dessert"} className="flex justify-center">
            <button
              type="button"
              className="menu-button m-button font-medium rounded-lg text-sm text-center text-black"
            >
              Dessert
            </button>
          </Link>
          <Link to={"/MoreFood/MainCourse"} className="flex justify-center">
            <button
              type="button"
              className="menu-button m-button font-medium rounded-lg text-sm text-center text-black"
            >
              Main <span className="m-c-button">Course</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuPannel;
