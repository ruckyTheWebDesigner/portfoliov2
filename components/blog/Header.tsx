"use client";

import { Publication } from "@/utils/types";
import { Tooltip } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

function Header({ post }: Readonly<{ post: Publication["post"] }>) {
  return (
    <div className=' flex items-center justify-between py-5 container mx-auto lg:px-10 xl:px-20 px-4 mb-3'>
      <div className=' flex items-center space-x-4 lg:space-x-8'>
        <div>
          <Tooltip label={`Blog's Home`}>
            <Link href={"/blog"}>
              <IoArrowBackOutline className='text-2xl' />
            </Link>
          </Tooltip>
        </div>
        <div className='flex items-center space-x-4'>
          <Image
            alt='author'
            src={post.author.profilePicture}
            width={40}
            height={40}
            className='rounded-full'
          />
          <h4 className='font-bold text-sm md:text-lg lg:text-xl'>
            {`${post.author.name}'s`} Blog
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
