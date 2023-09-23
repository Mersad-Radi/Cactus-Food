import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Searchpopup = ({ onClose }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <motion.div
      className="popup fixed w-full h-screen top-0 left-0 flex justify-center"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <form
        className="popup-Form relative flex flex-col"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          name="text"
          className="popup-input"
          placeholder="Search..."
        />
        <div className="button-group">
          <button type="submit" className="searchButton hidden">
            Search
          </button>
          <button type="button" className="exitBtn" onClick={onClose}>
            x
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Searchpopup;
