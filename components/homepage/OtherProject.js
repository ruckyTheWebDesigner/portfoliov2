// import { FaRegWindowRestore } from "react-icons/fa";
import { Card } from "@mantine/core";
import { AiOutlineFolder } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/go";

function OtherProject(props) {
  function openurl(url) {
    window.open(url, "_blank");
  }

  return (
    <Card className='cursor-pointer'>
      <div className='d-flex justify-content-between mt-4 mb-5 align-items-center'>
        <AiOutlineFolder className='others-icon1' />
        <div className='d-flex'>
          <a href={props.github} target='_blank' rel='noreferrer' className=''>
            <GoMarkGithub className='others-icon2 me-3' />
          </a>

          <a href={props.url} target='_blank' rel='noreferrer'>
            <FiExternalLink className='others-icon2' />
          </a>
        </div>
      </div>
      <div className='' onClick={() => openurl(props.url)}>
        <h3 className=''>{props.name}</h3>
        <h4>{props.title}</h4>
        <h6>{props.subtitle}</h6>
        <p className='on-active'>{props.description}</p>
      </div>
      <div className='d-flex mono'>
        <p>{props.description1}</p>
        <p className='mx-2'>{props.description2}</p>
        <p>{props.description3}</p>
      </div>
    </Card>
  );
}

export default OtherProject;
