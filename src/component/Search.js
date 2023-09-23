import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/"+ input);
  };

  return (
    <form className=" flex justify-center mt-10" onSubmit={submitHandler}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoComplete="off"
        name="text"
        className="popup-input"
        placeholder="Search..."
        style={{ width: "300px" }}
      />
    </form>
  );
};

export default Search;
