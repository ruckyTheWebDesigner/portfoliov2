import { Container } from "@mantine/core";
import React from "react";

import { FiTwitter, FiGithub } from "react-icons/fi";

function Sidebar() {
  return (
    <Container size={"lg"} className='relative'>
      <div className='fixed bottom-0 right-3 lg:right-24 after:w-3 after:h-4'>
        <a href='/'>contact@rukewe@gmail.com</a>
      </div>

      <div className='fixed bottom-0 left-3 lg:left-24'>
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

      <div className='flex flex-col items-center py-8'>
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
