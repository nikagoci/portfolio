import Button from "../../shared/button";

import { motion } from "framer-motion";

interface Props {
  navTexts: {
    text: string;
    to: string;
    scrollTar?: string
  }[];
  px?: string;
  py?: string;
  mobile: boolean;
}

export default function Navlinks({ navTexts, px, py, mobile }: Props) {
  return (
    <>
      {navTexts.map((el, index) => (

        <motion.a
          href={el.to}
          initial={{
            [mobile ? "x" : "y"]: mobile ? 340 : -60,
            
          }}
          animate={{
            [mobile ? "x" : "y"]: 0,
            transition: { delay: index * 0.2 },
          }}
          className="self-center transition duration-300 cursor-pointer text-lightslate hover:text-green"
          data-to-scrollspy-id={el.scrollTar}
        >
          {el.text}
        </motion.a>
      ))}
      <div
      >
        {px && py ? (
          <motion.div
            initial={{
              [mobile ? "x" : "y"]: mobile ? 340 : -60,
            }}
            animate={{
              [mobile ? "x" : "y"]: 0,
              transition: { delay: 1.7 },
            }}
          >
            <Button px={px} py={py}>
              Resume
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{
              [mobile ? "x" : "y"]: mobile ? 340 : -60,
            }}
            animate={{
              [mobile ? "x" : "y"]: 0,
              transition: { delay: 1.2 },
            }}
          >
            <Button>Resume</Button>
          </motion.div>
        )}
      </div>
    </>
  );
}
