import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const containerVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 120 },
    },
    exit: {
      x: "-100vw",
      transition: { ease: 'easeInOut' },
    },
  };

  const nextVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const buttonVariant = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px #FFF",
      boxShadow: "0px 0px 8px #FFF",
      transition : {
        yoyo : Infinity
      }
    },
  };

  return (
    <motion.div
      className="base container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit='exit'
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "#FFFF00",
              }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariant}
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariant} whileHover='hover'
            >
              Next
            </motion.button >
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
