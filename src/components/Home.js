import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const Home = () => {
  const buttonVariant = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px #FFF",
      boxShadow: "0px 0px 8px #FFF",
      transition: {
        yoyo: Infinity,
      },
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>
    </motion.div>
  );
};

export default Home;
