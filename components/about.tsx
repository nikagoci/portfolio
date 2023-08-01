import { AiOutlineCaretRight } from "react-icons/ai";
import { SiTailwindcss, SiTypescript, SiPrisma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { DiCss3, DiReact, DiMongodb } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";

import { motion } from "framer-motion";

const icons1 = [
  {
    icon: GrGraphQl,
    name: "graphql",
  },
  {
    icon: DiCss3,
    name: "css",
  },
  {
    icon: SiTailwindcss,
    name: "tailwind",
  },
  {
    icon: IoLogoJavascript,
    name: "javascript",
  },
  {
    icon: DiReact,
    name: "react",
  },
];

const icons2 = [
  {
    icon: SiTypescript,
    name: "typescript",
  },
  {
    icon: FaNodeJs,
    name: "node",
  },
  {
    icon: DiMongodb,
    name: "mongo",
  },
  {
    icon: TbBrandNextjs,
    name: "next",
  },
  {
    icon: SiPrisma,
    name: "prisma",
  },
];

const technologies = [
  "Javascript (ES6+)",
  "React",
  "Node.js",
  "Typescript",
  "MongoDB",
  "Next",
  "Tailwind",
  "GraphQL",
  "Angular",
  "Express"
];

export default function About() {
  return (
    <section className="mt-[1px]" id="about">
      <div className="flex items-center def-container w-[80%] md:w-[80%] lg:w-[60%]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.3, duration: 0.2 },
          }}
          className="flex flex-col items-start py-8 mx-0 gap-y-8"
        >
          <div className="relative">
            <h2 className="title-text ">About Me</h2>
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="space-y-4 text-[17px] leading-7 basis-3/5">
              <p>
                Hello! My name is Nika and I enjoy creating things that live on
                the internet. My interest in web development started back in
                2020 when I decided to try creating custom website. After that moment, I realized how much I love this job and decided to become a programmer
              </p>
              <p>
                From 2020 I am creating websites with and without mentorship. I gained enough knowledge to successfully create
                fully functional websites. You can check some of my full stack projects on &nbsp;
                <a href="#projects">
                <span className="relative cursor-pointer text-green group">
                  Projects section
                  <span className="span-design"></span>
                </span>
                </a>
                &nbsp; for a variety of clients.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="grid grid-cols-2 pt-2 text-sm gap-y-3">
                {technologies.map((technology, idx) => (
                  <li key={idx} className="flex items-center gap-x-1">
                    <AiOutlineCaretRight className="text-green" />
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 mt-16 md:gap-4 md:flex-row md:mt-0 basis-2/5">
              <div className="flex flex-row md:flex-col gap-y-9 gap-x-4 md:gap-x-0">
                {icons1.map((icon) => (
                  <div
                    key={icon.name}
                    className="flex flex-col p-2 transition duration-300 border rounded-sm sm:p-4 border-green hover:bg-lightgreen"
                  >
                    <icon.icon size={25} className="text-lightslate" />
                  </div>
                ))}
              </div>
              <div className="flex flex-row md:flex-col gap-y-9 gap-x-4 md:gap-x-0">
                {icons2.map((icon) => (
                  <div
                    key={icon.name}
                    className="flex flex-col p-2 transition duration-300 border rounded-sm sm:p-4 border-green hover:bg-lightgreen"
                  >
                    <icon.icon size={25} className="text-lightslate" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
