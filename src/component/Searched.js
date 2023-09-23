import React from "react";
import { useEffect, useState } from "react";
import { RCard } from "../component";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Searched = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name, page) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        process.env.REACT_APP_API_KEY
      }&number=20&query=${name}&offset=${(page - 1) * 25}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    setTotalPages(Math.ceil(recipes.totalResults / 25));
  };

  useEffect(() => {
    getSearched(params.search, currentPage);
  }, [params.search, currentPage]);

  const handlePageClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="sliderHeader flex justify-center mb-5 mt-10">Results</h2>
      <div className=" justify-center flex mt-10">
        <div
          className=" flex flex-wrap justify-between"
          style={{ width: "80%" }}
        >
          {searchedRecipes.map((recipe) => {
            return (
              <div key={recipe.id}>
                <RCard recipe={recipe} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-6 mb-10">
        <button
          type="button"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className="menu-button m-button font-medium text-sm text-center text-black"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="menu-button m-button font-medium text-sm text-center text-black ml-8"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default Searched;
