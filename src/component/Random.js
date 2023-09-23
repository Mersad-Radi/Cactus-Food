import React, { useEffect, useState } from "react";
import { RCard } from "../component";

const Random = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const check = localStorage.getItem("randomRecipes");

    if (check) {
      setRecipes(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`
      );
      const data = await api.json();
      localStorage.setItem("randomRecipes", JSON.stringify(data.recipes));
      setRecipes(data.recipes);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <button
          type="button"
          className="random-button r-button font-medium text-sm text-center mt-5 text-black"
        >
          Random Feast
        </button>
      </div>
      <div className="flex justify-around flex-wrap">
        {recipes.map((recipe) => (
          <RCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Random;

