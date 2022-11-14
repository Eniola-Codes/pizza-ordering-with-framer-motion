import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
        setTimeout(() => {
          setShowModal(true);
        },4000 )
  },[setShowModal])

  const containerVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        when: "beforeChildren",
        mass: 0.4,
        dampness: 10,
        staggerChildren: 2,
      },
    },
    exit: {
      x: "-100vw",
      transition: { ease: 'easeInOut' },
    },
  };

  const foodVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.div
      className="container order"
      variants={containerVariant}
      initial={"hidden"}
      animate="visible"
      exit='exit'
    >
       <h2 exit={{ y : -1000}}>Thank you for your order :)</h2>
      <motion.p variants={foodVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={foodVariant}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
