"use client";

import Hero from "./Hero";
import AboutMe from "./AboutMe.tsx";
import Projects from "./Projects";
import OtherProjects from "./OtherProjects";
import ContactMe from "./ContactMe";
import WorkHistory from "./WorkHistory";
import Sidebar from "./Sidebar";
import { Container } from "@mantine/core";
import NavBar from "../shared/NavBar";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className='space-y-16 sm:space-y-24 md:space-y-32 md:max-w-3xl lg:max-w-4xl container mx-auto px-4'>
        <Hero />
        <AboutMe className='gs_reveal' />
        <WorkHistory />
        <Projects />
        <OtherProjects />
        {/* <Slider /> */}
        <ContactMe />
        <Sidebar />
      </div>
    </>
  );
}

export default HomePage;
