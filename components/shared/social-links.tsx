import { FiGithub } from "react-icons/fi";

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
                <li
                  className="transition duration-300 cursor-pointer hover:-translate-y-2 hover:text-green"
                >
                  <FiGithub size={25} />
                </li>
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
