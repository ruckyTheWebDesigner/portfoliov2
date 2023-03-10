import { Container } from "@mantine/core";
import React from "react";

import { FiTwitter, FiGithub } from "react-icons/fi";

function Sidebar() {
  return (
    <Container size={"lg"} className='relative'>
      <div
        id='email'
        className='hidden md:block fixed font-mono bottom-2 right-3 lg:right-24 text-md'>
        <a href='/'>contact@rukewe@gmail.com</a>
      </div>

      <div className='hidden md:block fixed bottom-2 left-3 lg:left-24 text-xl'>
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

      <div className='flex flex-col items-center py-4 dark:text-slate-400'>
        <div className='flex items-center'>
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
    </Container>
  );
}

export default Sidebar;
