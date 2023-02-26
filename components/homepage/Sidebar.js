import React from "react";

import { FiTwitter, FiGithub } from "react-icons/fi";

function Sidebar() {
  return (
    <>
      <div className='sidebar'>
        <a href='/'>contact@rukewe@gmail.com</a>
      </div>

      <div className='sidebar-right'>
        <a
          href='https://twitter.com/Ruckysleek'
          target='_blank'
          rel='noreferrer'>
          <FiTwitter className='icons mb-4' />
        </a>
        <a
          href='https://github.com/ruckyTheWebDesigner'
          target='_blank'
          rel='noreferrer'>
          <FiGithub className='icons' />
        </a>
      </div>

      <div className='footer'>
        <div className='footer-icons d-flex align-items-center justify-content-center'>
          <a
            href='https://twitter.com/Ruckysleek'
            target='_blank'
            rel='noreferrer'
            className='my-2 mx-3'>
            <FiTwitter className='icons' />
          </a>
          <a
            href='https://github.com/ruckyTheWebDesigner'
            target='_blank'
            rel='noreferrer'>
            <FiGithub className='icons' />
          </a>
        </div>
        <h6 className='text-center'>Designed & Built by Rukewe Joseph</h6>
      </div>
    </>
  );
}

export default Sidebar;
