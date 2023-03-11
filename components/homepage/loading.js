import React from "react";
import Gif from "../../assets/Book.gif";
import { motion } from "framer-motion";
import Image from "next/image";

function Loading() {
  return (
    <motion.div
      className='loading-container '
      animate={{
        opacity: 0.9,
      }}
      transition={{ ease: "easeOut", duration: 3 }}>
      <Image className='loading' src={Gif} alt='loading' />
    </motion.div>
  );
}

export default Loading;
