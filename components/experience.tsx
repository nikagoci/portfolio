import ExperienceCard from "./shared/experience-card";

const experienceData = [
    {
        name: 'Frontend Developer',
        description: 'I am a frontend developer with a passion for building beautiful and functional websites with animations.',
        img: '/images/frontend.jpeg'
    },
    {
        name: 'Backend Developer',
        description: 'I am a backend developer with the ability to write APIs to help with the communication of applications and databases.',
        img: '/images/backend.avif'
    },
    {
        name: 'Full Stack Developer',
        description: "I am a full stack developer by combining frontend and backend. I've worked on some full stack projects.",
        img: '/images/fullstack.webp'
    },
]

export default function Experience() {
  return (
    <section className="py-16">
      <div className="flex flex-col items-start justify-center w-[80%] lg:w-[60%] gap-y-8 def-container">
        <div className="relative">
          <h2 className="title-text">My Experience</h2>
        </div>
        <div className="flex flex-col flex-wrap justify-center w-full mt-4 md:flex-row gap-y-6 gap-x-4">
            
            {experienceData.map(experience => (
                <ExperienceCard key={experience.name} experience={experience}  />
            ))}
        </div>
      </div>
    </section>
  );
}