import Button from "./shared/button";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id='home' className="h-[100vh] pt-24 sm:pt-0 flex flex-col items-start justify-center w-[80%] lg:w-[60%] gap-y-8 def-container header-height">
      <motion.h3
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1.4 } }}
        className="text-xl font-light tracking-wide text-green"
      >
        Hi, my name is
      </motion.h3>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1.6 } }}
        className="space-y-6 font-extrabold tracking-wide lg:tracking-wider "
      >
        <h1 className="text-5xl leading-tight sm:text-6xl text-lightslate">Nika Gotsiridze.</h1>
        <h2 className="text-3xl sm:text-5xl text-slate">I Am Full Stack Developer.</h2>
      </motion.div>
      <motion.p
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1.8 } }}
        className="text-md sm:text-lg tracking-wide max-w-[600px]"
      >
        I’m a software engineer specializing in building frontend with backend services. I have worked on some projects and gained experience. Currently have 3 years experince.
      </motion.p>
      <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 2 } }}>
        <a href="#projects">
          <Button px="px-6" py="py-4">
            Check out my portfolio!
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
{
}
