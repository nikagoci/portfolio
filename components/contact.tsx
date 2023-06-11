import Button from "./shared/button";

import {motion} from 'framer-motion'

export default function Contact() {
  return (
    <section className="py-16" id="contact">
      <motion.div initial={{opacity:0}} whileInView={{opacity: 1, transition: {delay: 0.3, duration: 0.3}}} className="flex flex-col items-center justify-center w-[80%] lg:w-[500px] gap-y-8 def-container">
          <h2 className="text-5xl font-extrabold tracking-wider text-center text-lightslate">Get In Touch</h2>

        <div className="flex flex-col items-center mx-auto gap-y-8" >
          <p className="text-sm leading-6 tracking-wide text-center sm:text-base">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <div className="flex flex-col items-center gap-y-6">
            <a href="mailto:gocinikusha@gmail.com">
              <Button px="px-8" py="py-3">
                Say Hello
              </Button>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" className="text-base font-bold tracking-wider underline text-lightslate">Contact With LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
