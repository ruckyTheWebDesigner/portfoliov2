"use client";

import { Container, Tooltip, useMantineColorScheme } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useColorScheme, useMediaQuery } from "@mantine/hooks";

import logo from "../../assets/logo.png";
import Button from "./Button";

import { FiMoon, FiSun } from "react-icons/fi";
import { AiFillSound } from "react-icons/ai";

import { GiSpeakerOff, GiSpeaker } from "react-icons/gi";
import { AnimatePresence } from "framer-motion";

interface NavBarProps {
  colorScheme?: string;
  toggleColorScheme?: () => void;
}
function NavBar() {
  const [sound, setSound] = React.useState(true);
  const mobile = useMediaQuery("(max-width: 700px)");
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <div>
      {mobile ? (
        <MobileNavBar />
      ) : (
        <DesktopNavBar
        // colorScheme={colorScheme}
        // toggleColorScheme={toggleColorScheme}
        />
      )}
    </div>
  );
}

function DesktopNavBar({ colorScheme, toggleColorScheme }: NavBarProps) {
  const [sound, setSound] = React.useState(true);

  // const audio = new Audio(
  //   "https://res.cloudinary.com/dzcmadjl1/video/uplo ad/v1629200009 /so much to say.mp3"
  // );

  return (
    <Container size={"lg"} mb={"lg"} className='space-x-4' py={"lg"}>
      <div className='flex items-center justify-between'>
        <div>
          <Link href={"/"}>
            <Image alt='logo' src={logo} width={50} height={100} />
          </Link>
        </div>
        <div>
          <div className='flex space-x-5 md:space-x-8 lg:space-x-12 items-center'>
            <Link href={"/#about-me"}>
              <nav className='flex items-center'>
                <h5 className='font-semibold mr-2'>01.</h5> <h4>About Me</h4>
              </nav>
            </Link>
            <Link href={"/blogs"}>
              <nav className='flex items-center'>
                <h5 className='font-semibold mr-2'>02.</h5> <h4>Blogs</h4>
              </nav>
            </Link>
            <Link href={"/#projects"}>
              <nav className='flex items-center'>
                <h5 className='font-semibold mr-2'>03.</h5> <h4>Projects</h4>
              </nav>
            </Link>

            <Button variant='outline'>Resume</Button>

            <div className='flex items-center space-x-6'>
              <AnimatePresence>
                <div className='text-2xl cursor-pointer'>
                  <Tooltip
                    label={
                      colorScheme === "light"
                        ? "Activate dark theme"
                        : "Activate light theme"
                    }>
                    <span
                      onClick={() => {
                        // sound && audio.play();
                        toggleColorScheme();
                      }}>
                      {colorScheme === "dark" ? <FiMoon /> : <FiSun />}
                    </span>
                  </Tooltip>
                </div>
              </AnimatePresence>

              <div className='text-2xl'>
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
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function MobileNavBar() {
  return (
    <Container mb={"lg"} className='space-x-4' py={"lg"}>
      MobileNavBar
    </Container>
  );
}
export default NavBar;
