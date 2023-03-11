import React from "react";
// import { Divider } from "@mui/material";
import { MdPlayArrow } from "react-icons/md";
import photo from "../../assets/photo.png";
// import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { Divider } from "@mantine/core";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

interface TechProps {
  name: string;
}

const technologies: TechProps[] = [
  {
    name: "Javascript (ES6+)",
  },
  {
    name: "React JS",
  },
  {
    name: "Next JS",
  },

  {
    name: "Node.js",
  },
  {
    name: "Framer Motion",
  },
  {
    name: "Git",
  },
  {
    name: "Express JS",
  },
  {
    name: "API",
  },
  {
    name: "MongoDB",
  },
];

function AboutMe() {
  const revealRefs = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     revealRefs.current,
  //     { autoAlpha: 0 },
  //     {
  //       duration: 1,
  //       autoAlpha: 1,
  //       scrollTrigger: {
  //         trigger: revealRefs.current,
  //         start: "top center+=100",
  //         end: "bottom bottom",
  //         toggleActions: "play none none reverse",
  //       },
  //     }
  //   );
  // }, [revealRefs]);

  return (
    <div id='about-me' className='space-y-6 md:space-y-8 lg:space-y-10'>
      <Divider
        my='xs'
        // color={"primary"}
        label={
          <div
            className='abouttitle text-lg md:text-xl flex items-center space-x-2'
            id='#About'>
            <h6 className='text-teal-400'>01.</h6>
            <h4 className='about dark:text-slate-300'>About Me</h4>
          </div>
        }
      />

      <div className='grid grid-cols-1 md:grid-cols-8 gap-6 md:gap-10 lg:gap-14'>
        <div
          className='about-content d-flex flex-column flex-md-row flex-lg-row col md:col-span-5 dark:text-slate-500'
          ref={revealRefs}>
          <div className='about-body space-y-3 md:space-y-5'>
            <p>
              Hello! My name is Rukewe and i enjoy creating things that live on
              the internet, My interest in web development started few years ago
              when i decided to try editing custom WordPress themes -- turns out
              to become a passion i enjoy!
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of working as a
              freelancer on my leisure time and contributed to several
              open-source projects. My main focus these days is solving day to
              day problems with modern technology.
            </p>

            <p>
              {` Here are a few technologies that I've been working with recently:`}
            </p>

            <div className='grid grid-cols-2 gap-2'>
              {technologies.map((tech) => {
                return (
                  <div className='flex items-center gap-3' key={tech.name}>
                    <MdPlayArrow className='text-teal-400' />
                    <p>{tech.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className='relative md:col-span-3'>
          {/* <div className='border border-teal-500 bg-transparent h-24 absolute left-4'></div> */}
          <Image
            src={photo}
            alt='rukewe joseph'
            className='rounded-md aspect-square opacity-90'
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
