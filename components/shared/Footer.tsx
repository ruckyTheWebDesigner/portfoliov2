"use client";

import { Anchor } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

// import logo from "@/assets/logo.png";

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

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

const openLink = (link: string) => {
  window.open(link, "_blank");
};

export function FooterCentered({ links }: FooterCenteredProps) {
  const items = links.map((link) => (
    <Anchor<"a">
      color='dimmed'
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size='sm'>
      {link.label}
    </Anchor>
  ));

  return (
    <div className='container mx-auto lg:px-10 xl:px-20 px-4'>
      <div className='mt-12 border-t dark:border-slate-600 py-4'>
        <div className='flex flex-column md:flex-row justify-between'>
          <Link href={"/"} className=' transition-all pb-2 group'>
            <h1 className='font-medium text-2xl font-serif dark:text-slate-100 group-hover:border-b transition-all  group-hover:pb-1 '>
              Ru<span className='text-teal-600'>k</span>ewe Joseph
            </h1>
          </Link>
          {/* <Image alt='logo' src={logo} width={50} height={100} /> */}

          <div className='flex flex-col gap-4'>{items}</div>
          <div className='flex flex-wrap items-center gap-4'>
            {socials.map((social) => (
              <div
                key={social.name}
                onClick={() => openLink(social.link)}
                className='p-2 hover:cursor-pointer rounded-full border dark:border-slate-600'>
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
