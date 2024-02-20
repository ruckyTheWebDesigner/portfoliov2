"use client";
import { motion } from "framer-motion";
import Button from "../shared/Button";

import avatarsvg from "@/assets/3Davatar.png";
import Image from "next/image";

function Hero() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className='relative py-24 md:py-24 min-h-[80dvh] md:min-h-[75dvh] pr-4'>
      <motion.div
        className='hero max-w-2xl space-y-4 md:space-y-6 lg:space-y-7  pr-2 sm:pr-14 md:max-w-lg 
        '>
        <motion.h1 className=' text-teal-500 gs_reveal font-mono'>
          One line of code at a time,
        </motion.h1>
        <motion.h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold gs_reveal'>
          Transforming visionary ideas
          <motion.span
            initial={{
              rotate: 0,
            }}
            animate={{
              rotate: 360,
            }}>
            {""} 🌎
          </motion.span>{" "}
          into reality through quality softwares
        </motion.h2>
        <motion.h5
          className='text-2xl sm:text-3xl md:text-4xl
            font-semibold hero-subtitle mb-3 dark:text-slate-400 lg:pr-10'></motion.h5>
        <motion.h6 className='leading-relaxed dark:text-slate-500'>
          I&apos;m a Fractional CTO specializing in building innovative web and
          mobile applications for early-stage startups. Guiding cross-functional
          teams with Agile methodologies, I ensure timely product delivery and
          exceed client expectations. {""}
          <span className='text-teal-500'>
            Let&apos;s collaborate and build something extraordinary! 🔧🚀
          </span>
        </motion.h6>
        <motion.div className='pt-8'>
          <Button onClick={() => scrollToSection("about-me")} variant='outline'>
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
