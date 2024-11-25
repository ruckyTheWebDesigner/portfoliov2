"use client";

import { Burger, Button, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import React from "react";
import ActiveLink from "./ActiveLink";

function MobileNavBar() {
  return (
    <div className='py-5 px-4 flex items-center justify-between'>
      <Link href={"/"} className=' transition-all pb-2 group'>
        <h1 className='font-medium text-2xl font-serif dark:text-slate-100 group-hover:border-b transition-all  group-hover:pb-1 '>
          Ru<span className='text-teal-600'>k</span>ewe Joseph
        </h1>
      </Link>

      <NavMenu />
    </div>
  );
}

function NavMenu() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Menu shadow='md' width={240}>
      <Menu.Target>
        <Burger
          opened={opened}
          onClick={toggle}
          aria-label='Toggle navigation'
        />
      </Menu.Target>

      <Menu.Dropdown>
        <div className='flex flex-col justify-center items-center space-y-6 p-4 sm:p-8 md:p-10'>
          <ActiveLink href={"/#about-me"} activeClassName={"border-b"}>
            <nav className='flex items-center cursor-pointer'>
              <h5 className='font-semibold mr-2 text-teal-500'>01.</h5>{" "}
              <h4>About Me</h4>
            </nav>
          </ActiveLink>

          <ActiveLink href={"/blog"} activeClassName={"border-b"}>
            <nav className='flex items-center'>
              <h5 className='font-semibold mr-2 text-teal-500'>02.</h5>{" "}
              <h4 className=''>Blog</h4>
            </nav>
          </ActiveLink>
          <Link href={"/#projects"}>
            <nav className='flex items-center cursor-pointer'>
              <h5 className='font-semibold mr-2 text-teal-500'>03.</h5>{" "}
              <h4>Projects</h4>
            </nav>
          </Link>

          <Link href={"/#get-in-touch"}>
            <Button variant='outline'>Get in Touch</Button>
          </Link>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
}
export default MobileNavBar;
