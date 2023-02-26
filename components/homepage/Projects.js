import { useRef, useEffect } from "react";
import Project from "./Project";
import Projectsinfo from "./Projectsinfo";
import { motion } from "framer-motion";
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
    <div>
      <div className='abouttitle d-flex align-items-center line' id='projects'>
        <h6 className='green-text me-2'>02.</h6>
        <h4 className='about'>Some Things I've Built</h4>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
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
                with1={project.with[1]}
                with2={project.with[2]}
                with3={project.with[3]}
                with4={project.with[4]}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
