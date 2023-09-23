import React from "react";
import { motion } from "framer-motion";


const Signuppopup = () => {

  return (
    <motion.div
      className="popup fixed w-full h-screen top-0 left-0 flex justify-center"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <form className="signup-popup" action="">
        <p className="heading">Signup</p>
        <input
          type="email"
          autoComplete="off"
          name="text"
          className="signup-popup-input"
          placeholder="Email"
        />
        <input
          type="password"
          autoComplete="off"
          name="text"
          className="signup-popup-input"
          placeholder="Password"
        />
        <button className="exitBtn">x</button>
        <button className="spB" type="submit">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default Signuppopup;
