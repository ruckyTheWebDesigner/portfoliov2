import Link from "next/link";

import Button from "./Button";

import ActiveLink from "./ActiveLink";
import MobileNavBar from "./MobileNavBar";

function NavBar() {
  return (
    <>
      <div className='md:hidden block'>
        <MobileNavBar />
      </div>

      <div className='hidden md:block'>
        <DesktopNavBar />
      </div>
    </>
  );
}

function DesktopNavBar() {
  return (
    <div className='py-8 container mx-auto lg:px-10 xl:px-20'>
      <div className='flex items-center justify-between space-x-1'>
        <ActiveLink href={"/"} className=' pb-2'>
          <h1 className='font-medium text-2xl font-serif dark:text-slate-100 '>
            Ru<span className='text-teal-600'>k</span>ewe Joseph
          </h1>
        </ActiveLink>
        <div>
          <div className='flex space-x-5 md:space-x-8 lg:space-x-12 items-center'>
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
    link: "/blog",
    title: "Blogs",
    number: "02.",
  },
  {
    link: "/#projects",
    title: "Projects",
    number: "03.",
  },
];

export default NavBar;
