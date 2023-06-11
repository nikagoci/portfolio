import Image from "next/image";

interface Props {
  experience: {
    name: string;
    description: string;
    img: string;
  };
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className="flex flex-col items-center p-4 transition duration-300 border rounded-lg hover:bg-lightgreen hover:text-lightslate hover:-translate-y-2 border-green basis-[46%] xl:basis-[30%] gap-y-6">
      <Image
        src={experience.img}
        alt={experience.name}
        width={384}
        height={384}
        className="h-auto w-96"
      />
      <h3>{experience.name}</h3>
      <p className="text-center">{experience.description}</p>
    </div>
  );
}
