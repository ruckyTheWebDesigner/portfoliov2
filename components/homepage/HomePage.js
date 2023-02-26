"use client";

import Hero from "./Hero";
import AboutMe from "./AboutMe.tsx";
import Projects from "./Projects";
import OtherProjects from "./OtherProjects";
import ContactMe from "./ContactMe";
import Sidebar from "./Sidebar";
import Loading from "./loading";
// import Slider from "./Slider";
// import NavBar from "../shared/NavBar";
import { Container } from "@mantine/core";
import NavBar from "../shared/NavBar";
// import { type } from "os";

function HomePage() {
  return (
    <>
      <NavBar />
      <Container size={"md"} className='space-y-16 sm:space-y-24 md:space-y-32'>
        <Hero />
        <AboutMe className='gs_reveal' />
        <Projects />
        <OtherProjects />
        {/* <Slider /> */}
        <ContactMe />
        <Sidebar />
      </Container>
    </>
  );
}

export default HomePage;
