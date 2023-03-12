import { GoMarkGithub } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";

import Card from "../shared/Card";

function Project(props) {
  function openurl(url) {
    window.open(url, "_blank");
  }
  return (
    <Card>
      <a
        href={props.url}
        target='_blank'
        rel='noreferrer'
        className='space-y-4'>
        <div className='space-y-2'>
          <h5 className='text-teal-500 font-mono '>Featured Project</h5>

          <hr className='text-teal-500 ' />
        </div>

        <h4 className='text-xl lg:text-2xl font-semibold dark:text-slate-300'>
          {props.name}
        </h4>
        <p className='dark:text-slate-400 text-sm leading-relaxed pr-3'>
          {props.description}
        </p>
        <div className='flex gap-4 justify-content-between flex-wrap align-items-center dark:text-slate-300 text-sm font-mono'>
          {Object.values(props.tags).map((tag) => {
            return (
              <p key={tag} className='mx-2 dark:text-slate-400'>
                {tag}
              </p>
            );
          })}
        </div>
      </a>

      <div className='flex gap-4 pt-3'>
        <a
          href={props.github}
          className='hover:scale-125 dark:text-slate-300 hover:text-slate-100 transition duration-500 ease-in-out'
          target='_blank'
          rel='noreferrer'>
          {" "}
          <GoMarkGithub className='project-icons icons ' />
        </a>
        <a
          href={props.url}
          className='hover:scale-125 dark:text-slate-300 hover:text-slate-100 transition duration-500 ease-in-out'
          target='_blank'
          rel='noreferrer'>
          {" "}
          <FiExternalLink className='ms-3 project-icons icons dark:text-slate-300 ' />
        </a>
      </div>
    </Card>
  );
}

export default Project;
