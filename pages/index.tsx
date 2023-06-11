import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

import ScrollSpy from "react-ui-scrollspy";

export default function Home() {
  return (
    <ScrollSpy>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact /> 
    </ScrollSpy>
  )
}
