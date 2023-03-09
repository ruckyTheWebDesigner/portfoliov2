import { GoMarkGithub } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";

import Card from "../shared/Card";

function Project(props) {
  function openurl(url) {
    window.open(url, "_blank");
  }
  return (
    <Card>
      <div className='space-y-4' onClick={() => openurl(props.url)}>
        <div className='space-y-2'>
          <h5 className='text-teal-500 font-mono '>Featured Project</h5>

          <hr className='text-teal-500' />
        </div>

        <h4 className='text-xl lg:text-2xl font-semibold'>{props.name}</h4>
        <p className='dark:text-slate-300 text-sm leading-relaxed'>
          {props.description}
        </p>
        <div className='flex gap-4 justify-content-between flex-wrap align-items-center dark:text-slate-300 text-sm font-mono'>
          {Object.values(props.tags).map((tag) => {
            return (
              <p key={tag} className='mx-2'>
                {tag}
              </p>
            );
          })}
        </div>
      </div>

      <div className='flex gap-4'>
        <a href={props.github} target='_blank' rel='noreferrer'>
          {" "}
          <GoMarkGithub className='project-icons icons' />
        </a>
        <a href={props.url} target='_blank' rel='noreferrer'>
          {" "}
          <FiExternalLink className='ms-3 project-icons icons' />
        </a>
      </div>
    </Card>
  );
}

export default Project;
