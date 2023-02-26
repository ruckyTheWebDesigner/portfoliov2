import React from "react";
import Gif from "../../assets/Book.gif";
import { motion } from "framer-motion";

function Loading() {
  return (
    <motion.div
      className='loading-container '
      animate={{
        opacity: 0.9,
      }}
      transition={{ ease: "easeOut", duration: 3 }}>
      <img className='loading' src={Gif} alt='loading' />
    </motion.div>
  );
}

export default Loading;
