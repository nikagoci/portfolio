import { FaFacebookF } from "react-icons/fa";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const socialNetwork = [
  {
    icon: FaFacebookF,
    to: "https://www.facebook.com/",
    name: "facebook",
  },
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

export default function Footer() {
  return (
    <footer className="pt-16 pb-8">
      <div className="flex flex-col items-center justify-center w-[80%] lg:w-[60%] gap-y-8 def-container">
        <div className="flex items-center gap-x-4">
          {socialNetwork.map((social) => (
            <a
              key={social.name}
              target="_blank"
              href={social.to}
              className="p-3 transition duration-300 border rounded-full hover:bg-lightgreen border-green"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
        <h2 className="text-sm font-light tracking-widest">
          Built by Nika Gotsiridze
        </h2>
      </div>
    </footer>
  );
}
