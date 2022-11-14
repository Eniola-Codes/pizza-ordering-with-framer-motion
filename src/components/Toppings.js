import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];


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

  return (
    <motion.div
      className="container toppings"
      variants={containerVariant}
      initial={"hidden"}
      animate="visible"
      exit='exit'
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}  whileHover={{
              scale: 1.3,
              originX: 0,
              color: "#FFFF00",
            }}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonVariant} whileHover='hover'>
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;