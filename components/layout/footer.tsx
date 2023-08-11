import { FiGithub } from "react-icons/fi";
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="pt-16 pb-8">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 0.3, duration: 0.2 } }} className="flex flex-col items-center justify-center w-[80%] lg:w-[60%] gap-y-8 def-container">
        <div className="flex items-center gap-x-4">
          <a
            target="_blank"
            href='https://github.com/nikagoci'
            className="p-3 transition duration-300 border rounded-full hover:bg-lightgreen border-green"
          >
            <FiGithub size={20} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
