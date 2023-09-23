import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      Profile
    </motion.div>
  );
};

export default Profile;
