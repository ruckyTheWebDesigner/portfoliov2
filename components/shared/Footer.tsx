"use client";

import { Anchor } from "@mantine/core";
import Image from "next/image";
import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

import logo from "@/assets/logo.png";

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

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
    <div className='container mx-auto lg:px-10 xl:px-20'>
      <div className='mt-12 border-t dark:border-slate-600 py-4'>
        <div className='flex flex-column md:flex-row justify-between'>
          <Image alt='logo' src={logo} width={50} height={100} />

          <div className='flex flex-col gap-4'>{items}</div>

          <div className='flex flex-wrap items-center gap-4'>
            <div className='p-2 rounded-full border dark:border-slate-600'>
              <FiTwitter size={18} />
            </div>
            <div className='p-2 rounded-full border dark:border-slate-600'>
              <FiYoutube size={18} />
            </div>
            <div className='p-2 rounded-full border dark:border-slate-600'>
              <FiInstagram size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
