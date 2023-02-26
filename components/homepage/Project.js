import { GoMarkGithub } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";
import { Card } from "@mantine/core";

function Project(props) {
  function openurl(url) {
    window.open(url, "_blank");
  }
  return (
    <Card className='cursor-pointer'>
      <div
        className='project-header mt-5 mb-4 min-h-full'
        onClick={() => openurl(props.url)}>
        <h5>
          Featured Project <hr />
        </h5>

        <h4 className='project-title mb-4'>{props.name}</h4>
        <p>{props.description}</p>
        <div className='d-flex justify-content-between flex-wrap align-items-center'>
          <p>{props.with1}</p>
          <p>{props.with2}</p>
          <p>{props.with3}</p>
          <p>{props.with4}</p>
        </div>
      </div>

      <div className='d-flex mb-3'>
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
