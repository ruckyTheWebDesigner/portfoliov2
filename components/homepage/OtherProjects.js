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
    <div className='space-y-10 md:space-y-14'>
      <div className='space-y-2 text-center'>
        <h4 className='text-lg md:text-2xl font-semibold'>
          Other Noteworthy Projects
        </h4>
        <h6 className='text-teal-500 '>view the archive</h6>
      </div>
      <div className='grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2'>
        {OtherprojectsNotes.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              className=' mb-2'
              onClick={() => openurl(project.url)}>
              <OtherProject
                key={project.name}
                value={project}
                className=''
                github={project.github}
                url={project.url}
                name={project.name}
                title={project.title}
                subtitle={project.subtitle}
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

export default OtherProjects;
