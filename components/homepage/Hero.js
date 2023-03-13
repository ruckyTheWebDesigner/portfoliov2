import { motion } from "framer-motion";
import Button from "../shared/Button";

import avatarsvg from "@/assets/3Davatar.png";
import Image from "next/image";

function Hero() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        // duration: 0.2,
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
    <div className='relative py-24 md:py-24 min-h-[80dvh] md:min-h-[75dvh] pr-4'>
      <motion.div
        className='hero max-w-2xl space-y-4 md:space-y-6 lg:space-y-7  pr-2 sm:pr-14 md:max-w-lg 
        '
        initial='hidden'
        animate='visible'
        variants={list}>
        <motion.h1
          className=' text-teal-500 gs_reveal font-mono'
          variants={item}>
          One line of code at a time,
        </motion.h1>
        <motion.h2
          className='text-2xl md:text-3xl lg:text-4xl font-semibold gs_reveal'
          variants={item}>
          Making the{" "}
          <motion.span
            initial={{
              rotate: 0,
            }}
            animate={{
              rotate: 360,
            }}>
            🌎
          </motion.span>{" "}
          a better place
        </motion.h2>
        <motion.h5
          className='text-2xl sm:text-3xl md:text-4xl
            font-semibold hero-subtitle mb-3 dark:text-slate-400 lg:pr-10'
          variants={item}>
          through quality softwares
        </motion.h5>
        <motion.h6
          className='leading-relaxed dark:text-slate-500'
          variants={item}>
          I’m a web developer specializing in building immersive and exceptional
          web applications. Currently, I’m focused on building accessible,
          human-centered products that are easy to use with{" "}
          <span className='text-teal-500'>user-friendly experiences.</span>
        </motion.h6>
        <motion.div className='pt-8' variants={item}>
          <Button onClick={() => scrollToSection("about")} variant='outline'>
            More About Me
          </Button>
        </motion.div>
      </motion.div>

      <div
        className='absolute top-10 right-[-40px] lg:right-[-90px] xl:right-[-120px] hidden lg:block z-50 
      '>
        <Image
          priority
          src={avatarsvg}
          alt='Illustration of Kody the Koala standing on a onewheel surrounded by green leaves, a battery, two skies, a snowboard, a solar panel, and a recycle logo.'
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}

export default Hero;
