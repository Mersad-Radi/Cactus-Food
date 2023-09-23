import React from "react";
import "../index.css";
import { Slider, MenuPannel, About, Random } from "../component";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="home"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Slider />
      <MenuPannel />
      <About />
      <Random />
    </motion.div>
  );
};

export default Home;
