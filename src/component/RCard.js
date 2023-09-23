import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const RCard = ({ recipe }) => {
  if (!recipe) {
    return null;
  }

  return (
    <Link to={"/recipe/" + recipe.id}>
      <div className="mb-6">
        <div className="r-card mt-2" key={recipe.id}>
          <div className="r-card-img">
            <img src={recipe.image} className="img-thumb" alt={recipe.title} />
          </div>
          <div className="r-card-info mt-6 text-center">
            <span className="discount-tag">{recipe.title}</span>
          </div>
          <button className="r-card-button">Recipe</button>
        </div>
      </div>
    </Link>
  );
};

export default RCard;
