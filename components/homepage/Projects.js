import { useRef, useEffect } from "react";
import Project from "./Project";
import Projectsinfo from "./Projectsinfo";
import { motion } from "framer-motion";
import { Divider } from "@mantine/core";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addtoRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // useEffect(() => {
  //   revealRefs.current.forEach((el) => {
  //     gsap.fromTo(
  //       el,
  //       { autoAlpha: 0 },
  //       {
  //         duration: 1,
  //         autoAlpha: 1,
  //         scrollTrigger: {
  //           trigger: el,
  //           start: "top center+=100",
  //           end: "bottom bottom",
  //           toggleActions: "play none none reverse",
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <div id='projects' className='space-y-6 md:space-y-8 lg:space-y-10'>
      <Divider
        my='xs'
        // color={"primary"}
        label={
          <div
            className='abouttitle text-lg md:text-xl flex items-center space-x-2'
            id='projects'>
            <h6 className='text-teal-400'>02.</h6>
            <h4 className='about dark:text-slate-300'>{`Some Things I've Built`}</h4>
          </div>
        }
      />

      <div className='grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2'>
        {Projectsinfo.map((project) => {
          return (
            <motion.div
              key={project.id}
              className=' mb-2'
              ref={addtoRefs}
              layout
              whileTap={{ scale: 1.1 }}
              whileHover={{
                y: -10,
                boxShadow: "10px rgba(0, 0, 0, 0.2)",
                transition: { duration: 1 },
              }}>
              <Project
                value={project}
                className='project-1'
                url={project.url}
                github={project.github}
                name={project.name}
                description={project.description}
                tags={project.with}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
