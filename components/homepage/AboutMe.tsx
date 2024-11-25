"use client";
import React from "react";
import { MdPlayArrow } from "react-icons/md";
import photo from "../../assets/photo.png";
import Image from "next/image";
import { Divider } from "@mantine/core";

import { motion } from "framer-motion";

import Button from "../shared/Button";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Link from "next/link";
interface TechProps {
  name: string;
}

const technologies: TechProps[] = [
  {
    name: "Javascript (ES6+)",
  },
  {
    name: "React JS",
  },
  {
    name: "Next JS",
  },

  {
    name: "React Native",
  },
  {
    name: "AI & Machine Learning",
  },
  {
    name: "Node.js",
  },
  {
    name: "Express JS",
  },

  {
    name: "AWS | Cloud Computing",
  },
  {
    name: "React Query",
  },
  {
    name: "Framer Motion",
  },
  {
    name: "Git | GitHub",
  }
];

const socials = [
  {
    name: "Github",
    link: "https://github.com/ruckyTheWebDesigner",
    icon: <FiGithub />,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/rukewe-joseph-085499219 ",
    icon: <FiLinkedin />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/rukewej_dev",
    icon: <FiTwitter />,
  },
];

function AboutMe() {
  return (
    <motion.div id='about-me' className='space-y-6 md:space-y-8 lg:space-y-10'>
      <Divider
        my='xs'
        label={
          <div
            className='abouttitle text-lg md:text-xl flex items-center space-x-2'
            id='#About'>
            <h6 className='text-teal-400'>01.</h6>
            <h4 className='about dark:text-slate-300'>About Me</h4>
          </div>
        }
      />

      <div className='grid grid-cols-1 md:grid-cols-8 gap-12 lg:gap-14'>
        <div className='about-content d-flex flex-column flex-md-row flex-lg-row col md:col-span-5 dark:text-slate-500'>
          <div className='about-body space-y-3 md:space-y-5'>
            <p>
              Hello! My name is Rukewe and i enjoy creating things that live on
              the internet, My interest in web development started few years ago
              when i decided to try editing custom WordPress themes -- turns out
              to become a passion i enjoy!
            </p>

            <p>
            Today, as a Freelance Developer, I specialize in crafting advanced AI solutions, web, and mobile applications for businesses of all sizes. From building intelligent AI agents to delivering scalable, high-performance software, I combine creativity with technical expertise to help clients achieve their goals. I thrive on solving complex problems and turning ambitious ideas into reality with a strong focus on quality and user satisfaction.
            </p>

            <p>
              Here are a few of the technologies I&apos;ve honed to deliver exceptional results for my clients:
            </p>

            <div className='grid grid-cols-2 gap-2'>
              {technologies.map((tech) => {
                return (
                  <div className='flex items-center gap-3' key={tech.name}>
                    <MdPlayArrow className='text-teal-400' />
                    <p>{tech.name}</p>
                  </div>
                );
              })}
            </div>

            <div className='flex flex-wrap gap-4 pt-5'>
              {socials.map((social) => {
                return (
                  <div key={social.name}>
                    <Link href={social.link} target='_blank'>
                      <Button leftIcon={social.icon} variant='outline'>
                        {social.name}
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className='relative md:col-span-3'>
          <Image
            src={photo}
            // width={400}
            loading='lazy'
            alt='rukewe joseph photo'
            className='rounded-md  opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer'
          />
        </div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
