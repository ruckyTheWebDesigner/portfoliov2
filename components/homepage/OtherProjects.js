import React from "react";

// import { useRef, useEffect } from "react";
import OtherProject from "./OtherProject";
import OtherprojectsNotes from "./OtherProjectNotes";
// import { gsap } from "gsap";
import { useRef, useEffect } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

function OtherProjects() {
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

  function openurl(url) {
    window.open(url, "_blank");
  }

  return (
    <div>
      <h4 className='text-center others-heading'>Other Noteworthy Projects</h4>
      <h6 className='green-text text-center'>view the archive</h6>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {OtherprojectsNotes.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              className=' mb-2'
              ref={addtoRefs}
              whileHover={{
                y: -10,
                transition: { duration: 1 },
                boxShadow: "10px rgba(0, 0, 0, 0.2)",
              }}
              layout
              whileTap={{ scale: 1.1 }}
              onClick={() => openurl(project.url)}>
              <OtherProject
                key={index}
                value={project}
                className=''
                github={project.github}
                url={project.url}
                name={project.name}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                description1={project.with[1]}
                description2={project.with[2]}
                description3={project.with[3]}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default OtherProjects;
