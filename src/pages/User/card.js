import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import '../User/card.css'; 

const Card = () => {
    const [isOpen , setIsOpen]=useState(false);
  return (
   <div class="car">
    <motion.div transition={{layout:{duration:1,type:"spring"}}}
        layout onClick={() =>setIsOpen(!isOpen)}className="card">
        <motion.img layout="position" src="/public/images/My-Password.png"/>
        {isOpen && (
        <motion.div className="expand">
          <p>
            loremloremloremloremloremloremloremloremloremlore
            mloremloremloremloremloremloremloremloremloremloreml
            oremloremloremloremloremloremloremloremloremloremlore
            mloremloremloremloremlorem
          </p>
          <p>
            eferfrefkmkglklktlngjtngjtrbiglbbbbbrsglllll
            lltsflgfgtrbhghlrbhgrtflbbgtlrbgt
          </p>
        </motion.div>
        )}
      </motion.div>
   </div>
  );
};

export default Card;
