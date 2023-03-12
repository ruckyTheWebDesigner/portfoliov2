import { AiOutlineFolder } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/go";

import Card from "../shared/Card";

function OtherProject(props) {
  function openurl(url) {
    window.open(url, "_blank");
  }
  return (
    <Card className='cursor-pointer'>
      <div className='flex w-full justify-between mt-4 mb-5 items-center'>
        <AiOutlineFolder className='text-3xl text-teal-500' />
        <div className='flex gap-4 text-lg dark:text-slate-300'>
          <a
            href={props.github}
            className='hover:scale-125 dark:text-slate-300 hover:text-slate-100 transition duration-500 ease-in-out'
            target='_blank'
            rel='noreferrer'>
            <GoMarkGithub />
          </a>

          <a
            href={props.url}
            className='hover:scale-125 dark:text-slate-300 hover:text-slate-100 transition duration-500 ease-in-out'
            target='_blank'
            rel='noreferrer'>
            <FiExternalLink />
          </a>
        </div>
      </div>
      <div className='space-y-2'>
        <h3 className='text-lg font-semibold dark:text-slate-300'>
          {props.name}
        </h3>
        <p className='dark:text-slate-400 text-sm leading-relaxed'>
          {props.description}
        </p>
      </div>
      <div className=' flex font-mono dark:text-slate-400'>
        {Object.values(props.tags).map((tag) => {
          return (
            <p key={tag} className='mx-2'>
              {tag}
            </p>
          );
        })}
      </div>
    </Card>
  );
}

export default OtherProject;
