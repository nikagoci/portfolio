import { AiOutlineCaretRight, AiOutlineHtml5 } from "react-icons/ai";
import {
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

import { DiCss3, DiReact, DiMongodb } from "react-icons/di";

const icons1 = [
  {
    icon: AiOutlineHtml5,
    name: "html",
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
  "Prisma",
];

export default function About() {
  return (
    <section>
      <div className="flex items-center def-container w-[80%] md:w-[80%] lg:w-[60%]">
        <div className="flex flex-col items-start py-8 mx-0 gap-y-8">
          <div className="relative">
            <h2 className="title-text ">About Me</h2>
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="space-y-4 text-[17px] leading-7 basis-3/5">
              <p>
                Hello! My name is Nika and I enjoy creating things that live on
                the internet. My interest in web development started back in
                2019 when I decided to try creating custom website — turns out
                hacking together a custom reblog button taught me a lot about
                HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at &nbsp;
                <span className="relative cursor-pointer text-green group">
                  Upstatement
                  <span className="span-design"></span>
                </span>
                &nbsp; for a variety of clients.
              </p>
              <p>
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
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
                  <div className="flex flex-col p-2 border rounded-sm sm:p-4 border-green hover:bg-lightgreen">
                    <icon.icon size={25} className="text-lightslate" />
                  </div>
                ))}
              </div>
              <div className="flex flex-row md:flex-col gap-y-9 gap-x-4 md:gap-x-0">
                {icons2.map((icon) => (
                  <div className="flex flex-col p-2 border rounded-sm sm:p-4 border-green hover:bg-lightgreen">
                    <icon.icon size={25} className="text-lightslate" />
                  </div>
                ))}
              </div>
              {/* <div className='p-4 border border-slate'>
                <SiTailwindcss size={25} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
