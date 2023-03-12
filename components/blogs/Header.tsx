"use client";

import { Container, Tooltip } from "@mantine/core";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { IoArrowBackOutline } from "react-icons/io5";

function Header({ data }: any) {
  const [theme, setTheme] = React.useState("light");
  const [sound, setSound] = React.useState(true);
  return (
    <div className=' flex items-center justify-between py-5 container mx-auto lg:px-10 xl:px-20 px-4 mb-3'>
      <div className=' flex items-center space-x-4 lg:space-x-8'>
        <div>
          <Tooltip label={`Blog's Home`}>
            <Link href={"/blogs"}>
              <IoArrowBackOutline className='text-2xl' />
            </Link>
          </Tooltip>
        </div>
        <div className='flex items-center space-x-4'>
          <Image
            alt='author'
            src={data?.post.author.photo}
            width={40}
            height={40}
            className='rounded-full'
          />
          <h4 className='font-bold text-sm md:text-lg lg:text-xl'>
            {`${data?.post.author.name}'s`} Blog
          </h4>
        </div>
      </div>

      <div className='flex items-center space-x-3 md:space-x-6'>
        {/* <AnimatePresence>
          <div className='text-2xl cursor-pointer'>
            <Tooltip
              label={
                theme === "light"
                  ? "Activate dark theme"
                  : "Activate light theme"
              }>
              <Link href={"#"}>
                {theme === "light" ? (
                  <FiMoon onClick={() => setTheme("dark")} />
                ) : (
                  <FiSun onClick={() => setTheme("light")} />
                )}
              </Link>
            </Tooltip>
          </div>
        </AnimatePresence> */}

        {/* <AnimatePresence>
          <div className='text-2xl cursor-pointer'>
            <Tooltip label={sound ? "Mute sound" : "Activate sound"}>
              <a href='#'>
                {sound ? (
                  <GiSpeaker onClick={() => setSound(false)} />
                ) : (
                  <GiSpeakerOff onClick={() => setSound(true)} />
                )}
              </a>
            </Tooltip>
          </div>
        </AnimatePresence> */}
      </div>
    </div>
  );
}

export default Header;
