import { FiLinkedin, FiGithub } from "react-icons/fi";

const socialNetwork = [
  {
    icon: FiGithub,
    to: "https://github.com/",
    name: "github",
  },
  {
    icon: FiLinkedin,
    to: "https://linkedin.com/",
    name: "linkedin",
  },
];

interface Props {
  leftSide: boolean;
}

export default function SocialLinks({ leftSide }: Props) {
  return (
    <>
      {leftSide ? (
        <div className="fixed bottom-0 hidden md:block left-10">
          <div className="after:content-[''] after:block  after:w-[1px] after:mx-auto after:h-[120px] after:bg-white">
            <ul className="flex flex-col mb-8 gap-y-8">
              {socialNetwork.map((social) => (
                <li
                  key={social.name}
                  className="transition duration-300 cursor-pointer hover:-translate-y-2 hover:text-green"
                >
                  <social.icon size={25} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="fixed bottom-0 hidden md:block right-10">
          <div className="after:content-[''] after:block  after:w-[1px] after:mx-auto after:h-[120px] after:bg-white">
            <div className="mb-3">
              <a
                href="mailto:gocinikusha@gmail.com"
                style={{ writingMode: "vertical-rl" }}
                className="text-sm tracking-widest transition duration-300 cursor-pointer hover:-translate-y-2 hover:text-green"
              >
                gocinikusha@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
