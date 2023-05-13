"use client";
import Project from "./Project";
import { motion } from "framer-motion";
import { Divider } from "@mantine/core";

function Projects({ projects }) {
  return (
    <div id='projects' className='space-y-6 md:space-y-8 lg:space-y-10'>
      <Divider
        my='xs'
        label={
          <div className='abouttitle text-lg md:text-xl flex items-center space-x-2'>
            <h6 className='text-teal-400'>02.</h6>
            <h4 className='about dark:text-slate-300'>{`Some Things I've Built`}</h4>
          </div>
        }
      />

      <div className='grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2'>
        {projects.map((project) => {
          return (
            <motion.div key={project.id} className=' mb-2'>
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
