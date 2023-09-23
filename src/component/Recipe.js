import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Recipe = () => {
  const [details, setDetails] = useState({});
  let params = useParams();

  const getDetails = async () => {
    const check = localStorage.getItem("detail");

    if (check) {
      setDetails(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();
      localStorage.setItem("detail", JSON.stringify(detailData));
      setDetails(detailData);
    }
  };

  useEffect(() => {
    getDetails();
  }, [params.name]);

  return (
    <motion.div
      className="flex justify-center mt-10"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div style={{ width: "80%" }}>
        <div className=" flex items-baseline justify-between">
          <p className="mb-7 text-2xl">{details.title} </p>
          <label class="ui-bookmark">
            <input type="checkbox" />
            <div class="bookmark">
              <svg viewBox="0 0 32 32">
                <g>
                  <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
                </g>
              </svg>
            </div>
          </label>
        </div>
        <div className="recipe-page flex flex-col">
          <div className=" flex justify-center">
            <img
              src={details.image}
              className="rounded-xl shadow-i "
              alt={details.title}
            />
          </div>
          <div className="mt-4 recipe-s">
            <p className=" text-lg s-header">Summary :</p>
            <p dangerouslySetInnerHTML={{ __html: details.summary }} />
          </div>
          <div className="mt-4">
            <p className=" text-lg s-header">Instruction :</p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }} />
          </div>
          {details.extendedIngredients ? (
            <div className="mt-4">
              <p className="text-lg s-header">Ingredients :</p>
              <ul>
                {details.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="flex justify-start flex-col w-full mt-4">
            <p className=" text-lg s-header">Info :</p>
            <p>Ready in {details.readyInMinutes} minutes</p>
            <p>Servings : {details.servings}</p>
            <p>Health score : {details.healthScore} %</p>
            <p>Price per serving : {details.pricePerServing} $</p>
            <p>
              {details.glutenFree ? "It's gluten free" : "It's not gluten free"}
            </p>
            <p>{details.vegan ? "It's vegan" : "It's not vegan"}</p>
            <p>
              {details.vegetarian ? "It's vegetarian" : "It's not vegetarian"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Recipe;
