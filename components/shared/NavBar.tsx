"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AiOutlineMenu } from "react-icons/ai";
import logo from "./logo.png";
import Button from "./Button";

import { FiMoon, FiSun } from "react-icons/fi";
import { AiFillSound } from "react-icons/ai";

import { GiSpeakerOff, GiSpeaker } from "react-icons/gi";
import { AnimatePresence } from "framer-motion";

import Drawer from "./Drawer";

import { scrollIntoView } from "@/helpers/snippets";

function openPDF(pdfUrl: string) {
  window.open(pdfUrl, "_blank");
}

interface NavBarProps {
  colorScheme?: string;
  toggleColorScheme: () => void;
}
function NavBar() {
  const [sound, setSound] = React.useState(true);

  return (
    <div>
      <div className='md:hidden block'>
        <MobileNavBar />
      </div>

      <div className='hidden md:block'>
        <DesktopNavBar />
      </div>
    </div>
  );
}

function DesktopNavBar() {
  const [sound, setSound] = React.useState(true);
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  // const audio = new Audio(
  //   "https://res.cloudinary.com/dzcmadjl1/video/uplo ad/v1629200009 /so much to say.mp3"
  // );

  return (
    <div className='py-8 container mx-auto lg:px-10 xl:px-20'>
      <div className='flex items-center justify-between space-x-1'>
        <div>
          <Link href={"/"} className='hover:border-b transition-all pb-2 group'>
            <h1 className='font-medium text-2xl font-serif dark:text-slate-100 group-hover:border-b transition-all  group-hover:pb-1 '>
              Ru<span className='text-teal-600'>k</span>ewe Joseph
            </h1>
          </Link>
        </div>
        <div>
          <div className='flex space-x-5 md:space-x-8 lg:space-x-12 items-center'>
            <Link href={"/"}>
              <nav
                className='flex items-center cursor-pointer'
                onClick={() => scrollIntoView("about")}>
                <h5 className='font-semibold mr-2 text-teal-500'>01.</h5>{" "}
                <h4>About Me</h4>
              </nav>
            </Link>
            <Link href={"/blogs"}>
              <nav className='flex items-center'>
                <h5 className='font-semibold mr-2 text-teal-500'>02.</h5>{" "}
                <h4 className=''>Blogs</h4>
              </nav>
            </Link>
            <Link href={"/"}>
              <nav
                className='flex items-center cursor-pointer'
                onClick={() => scrollIntoView("projects")}>
                <h5 className='font-semibold mr-2 text-teal-500'>03.</h5>{" "}
                <h4>Projects</h4>
              </nav>
            </Link>

            <Button onClick={() => openPDF("/resume.pdf")} variant='outline'>
              Resume
            </Button>

            <div className='flex items-center space-x-6'>
              <AnimatePresence>
                <div className='text-2xl cursor-pointer'>
                  {/* <Tooltip
                    label={
                      colorScheme === "light"
                        ? "Activate dark theme"
                        : "Activate light theme"
                    }>
                    <span
                      onClick={() => {
                        // sound && audio.play();
                        console.log("clicked");
                        toggleColorScheme();
                      }}>
                      {colorScheme === "dark" ? <FiMoon /> : <FiSun />}
                    </span>
                  </Tooltip> */}
                </div>
              </AnimatePresence>

              {/* <div className='text-2xl'>
                <Tooltip label={sound ? "Mute sound" : "Activate sound"}>
                  <a href='#'>
                    {sound ? (
                      <GiSpeaker onClick={() => setSound(false)} />
                    ) : (
                      <GiSpeakerOff onClick={() => setSound(true)} />
                    )}
                  </a>
                </Tooltip>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NavLinks = [
  {
    link: "/#about-me",
    title: "About Me",
    number: "01.",
  },
  {
    link: "/blogs",
    title: "Blogs",
    number: "02.",
  },
  {
    link: "/#projects",
    title: "Projects",
    number: "03.",
  },
];

function MobileNavBar() {
  return (
    <>
      <div className='py-5 px-4 flex items-center justify-between'>
        <div>
          <Link href={"/"} className=' transition-all pb-2 group'>
            <h1 className='font-medium text-2xl font-serif dark:text-slate-100 group-hover:border-b transition-all  group-hover:pb-1 '>
              Ru<span className='text-teal-600'>k</span>ewe Joseph
            </h1>
          </Link>
        </div>

        <Drawer openButton={<AiOutlineMenu size={30} />} open={true}>
          <div className='flex flex-col items-center justify-center min-h-[70vh] gap-8'>
            {NavLinks.map((link) => (
              <Link key={link.title} href={link.link}>
                <nav className='flex flex-col items-center'>
                  <h5 className='font-semibold mr-2 text-teal-500 '>
                    {link.number}
                  </h5>{" "}
                  <h4 className='text-slate-300'>{link.title}</h4>
                </nav>
              </Link>
            ))}
            <div>
              <Button variant='outline' onClick={() => openPDF("/resume.pdf")}>
                Resume
              </Button>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
}
export default NavBar;
