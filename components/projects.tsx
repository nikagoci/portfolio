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
    title: "Forkify",
    description:
      "Forkify is recipe search website for helping people find recipes easily.",
    technologies: ["React", "Express", "Material UI", "MongoDB"],
    img: "/images/forkify.png",
    links: [
      {
        to: "https://fullforkify.onrender.com/",
        icon: AiFillEye,
      },
      {
        to: "https://github.com/nikagoci/forkify-client",
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
                <div className="relative group w-[90%]">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={300}
                    height={300}
                    className="w-auto h-auto"
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

{
  /* <div className="flex p-4 rounded-md bg-lightgreen">
            <div className="flex items-center basis-3/5">
              <div className="relative group">
                <Image
                  src="/images/charmity.png"
                  alt="charmity"
                  width={350}
                  height={500}
                />
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition duration-300 bg-black opacity-0 gap-x-4 group-hover:opacity-80">
                  <div className="px-2 py-2 border rounded-full cursor-pointer border-slate bg-slate">
                    <AiFillEye size={35} className="text-white " />
                  </div>
                  <div className="px-2 py-2 border rounded-full cursor-pointer border-slate bg-slate">
                    <AiFillGithub size={35} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center px-2 gap-y-4 basis-2/5">
              <h3 className="text-xl font-bold tracking-wide text-lightslate">
                Charmy
              </h3>
              <p className="text-center">
                Charmy is charity website for helping people who can’t help
                themselves.
              </p>
              <div className="grid w-full grid-cols-2 gap-2 ">
                <div className="py-1 text-center transition duration-300 border text-lightslate rounded-xl border-green hover:bg-lightgreen">
                  Nextjs
                </div>
                <div className="py-1 text-center border rounded-xl border-slate">
                  Typesript
                </div>
                <div className="py-1 text-center border rounded-xl border-slate">
                  Tailwind
                </div>
                <div className="py-1 text-center border rounded-xl border-slate">
                  MongoDB
                </div>
              </div>
            </div>
          </div> */
}
