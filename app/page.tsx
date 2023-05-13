import NavBar from "@/components/shared/NavBar";
import Hero from "@/components/homepage/Hero";
import AboutMe from "@/components/homepage/AboutMe";
import WorkHistory from "@/components/homepage/WorkHistory";
import Projects from "@/components/homepage/Projects";
import OtherProjects from "@/components/homepage/OtherProjects";
import Sidebar from "@/components/homepage/Sidebar";
import ContactMe from "@/components/homepage/ContactMe";

import { get } from "@vercel/edge-config";

export default async function Home() {
  const projects = await get("projects");
  const otherProjects = await get("otherProjects");
  const workHistory = await get("workHistory");

  return (
    <main>
      <NavBar />
      <div className='space-y-16 sm:space-y-24 md:space-y-32 md:max-w-3xl lg:max-w-4xl container mx-auto px-4'>
        <Hero />
        <AboutMe />
        <WorkHistory workHistory={workHistory} />
        <Projects projects={projects} />
        <OtherProjects projects={otherProjects} />
        <ContactMe />
        <Sidebar />
      </div>
    </main>
  );
}
