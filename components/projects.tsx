import Image from "next/image";

import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const allProject = [
  {
    title: "Charma",
    description:
      "Charma is charity website for helping people who can’t help themselves.",
    technologies: ["Next", "Typescript", "Tailwind", "MongoDB"],
    img: "/images/charma.png",
    links: [
      {
        to: "https://gifting-web-enbz.vercel.app/",
        icon: AiFillEye,
      },
      {
        to: "https://github.com/nikagoci/gifting-web",
        icon: AiFillGithub,
      },
    ],
  },
  {
    title: "Elite Residence",
    description:
      "Elite Residence is flat search website where people can easily find their dream house.",
    technologies: ["Next", "MongoDB", "Prisma", "GraphQL"],
    img: "/images/elite-residence.png",
    links: [
      {
        to: "https://github.com/nikagoci/residence-company",
        icon: AiFillGithub,
      },
    ],
  },
  {
    title: "Pomofocus Timer",
    description:
      "Pomofocus is website which help people track time for productivity.",
    technologies: ["Next", "Framer", "Typescript", "Tailwind"],
    img: "/images/pomofocus.png",
    links: [
      {
        to: "https://pomofocus-gamma.vercel.app/",
        icon: AiFillEye,
      },
      {
        to: "https://github.com/nikagoci/pomofocus-timer",
        icon: AiFillGithub,
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className="py-16" id="projects">
      <div className="flex flex-col items-start justify-center w-[80%] lg:w-[60%] gap-y-8 def-container">
        <div className="relative">
          <h2 className="title-text ">Projects I’ve Built</h2>
        </div>
        <div className="flex flex-col items-center w-full gap-y-10">
          {allProject.map((project, index) => (
            <motion.div
              initial={{opacity:0, x: -100}}
              whileInView={{opacity: 1, x: 0, transition: {delay: index * 0.3}}}
              key={project.title}
              className="flex flex-col items-center p-4 rounded-md gap-y-4 sm:flex-row bg-lightgreen"
            >
              <div className="flex flex-col items-center basis-3/5">
                <div className="relative group w-[60%]">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={1200}
                    height={200}
                    className="w-full h-[200px]"
                  />
                  <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition duration-300 bg-black opacity-0 gap-x-4 group-hover:opacity-80">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.to}
                        target="_blank"
                        className="px-2 py-2 transition duration-300 rounded-full cursor-pointer bg-slate hover:-translate-y-2"
                      >
                        <link.icon size={35} className="text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center px-2 gap-y-4 basis-2/5">
                <h3 className="text-xl font-bold tracking-wide text-lightslate">
                  {project.title}
                </h3>
                <p className="text-center">{project.description}</p>
                <div className="grid w-full grid-cols-2 gap-2 lg:gap-6 ">
                  {project.technologies.map((technology) => (
                    <div
                      key={technology}
                      className="py-1 text-sm text-center transition duration-300 border lg:py-2 text-lightslate rounded-xl border-green hover:bg-lightgreen"
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}