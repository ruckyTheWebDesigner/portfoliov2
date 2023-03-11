// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { TextPlugin } from "gsap/TextPlugin";
import { motion } from "framer-motion";
import Button from "../shared/Button";

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
      className='hero max-w-2xl space-y-4 md:space-y-5 lg:space-y-7 py-24 md:py-24 min-h-[80dvh] pr-2'
      initial='hidden'
      animate='visible'
      variants={list}>
      <motion.h1 className=' text-teal-500 gs_reveal font-mono' variants={item}>
        Hi, my name is
      </motion.h1>
      <motion.h2
        className='text-3xl md:text-4xl lg:text-5xl  font-semibold gs_reveal'
        variants={item}>
        Rukewe Joseph.
      </motion.h2>
      <motion.h5
        className='text-4xl md:text-5xl lg:text-6xl font-semibold hero-subtitle mb-3 dark:text-slate-400 pr-10 lg:pr-44'
        variants={item}>
        I build things for the web
      </motion.h5>
      <motion.h6
        className='leading-relaxed dark:text-slate-500'
        variants={item}>
        I’m a web developer specializing in building immersive and exceptional
        web applications. Currently, I’m focused on building accessible,
        human-centered products that are easy to use with{" "}
        <span className='text-teal-500'>user-friendly experiences.</span>
      </motion.h6>
      <div className='pt-8'>
        <Button onClick={() => scrollToSection("about-me")} variant='outline'>
          More About Me
        </Button>
      </div>
    </motion.div>
  );
}

export default Hero;
