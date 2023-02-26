// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { TextPlugin } from "gsap/TextPlugin";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";

// gsap.registerPlugin(TextPlugin);

function Hero() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        // duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      hidden: {
        opacity: 0,
        transition: {
          when: "afterChildren",
        },
      },
    },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <motion.div
      className='hero max-w-2xl space-y-3 md:space-y-5 lg:space-y-10 py-14 md:py-16'
      initial='hidden'
      animate='visible'
      variants={list}>
      <motion.h1 className=' text-teal-400 gs_reveal' variants={item}>
        Hi, my name is
      </motion.h1>
      <motion.h2 className='text-3xl font-semibold gs_reveal' variants={item}>
        Rukewe Joseph.
      </motion.h2>
      <motion.h5
        className='text-3xl md:text-5xl lg:text-6xl font-semibold hero-subtitle mb-3 '
        variants={item}>
        I build things for the web
      </motion.h5>
      <motion.h6 className='leading-relaxed' variants={item}>
        I’m a web developer specializing in building immersive and exceptional
        web applications. Currently, I’m focused on building accessible,
        human-centered products that are easy to use with{" "}
        <span className='text-teal-400'>user-friendly experiences.</span>
      </motion.h6>
      {/* <motion.button
        className='button'
        variants={item}
       >
   
      </motion.button> */}
      <Button onClick={() => scrollToSection("about-me")} variant='outline'>
        More About Me
      </Button>
    </motion.div>
  );
}

export default Hero;
