import Button from "../../shared/button";

import { motion } from "framer-motion";

interface Props {
  navTexts: {
    text: string;
    to: string;
  }[];
  px?: string;
  py?: string;
  mobile: boolean;
}

export default function Navlinks({ navTexts, px, py, mobile }: Props) {
  return (
    <>
      {navTexts.map((el, index) => (
        <motion.li
          key={el.text}
          initial={{
            [mobile ? "x" : "y"]: mobile ? 340 : -60,
            
          }}
          animate={{
            [mobile ? "x" : "y"]: 0,
            transition: { delay: index * 0.3 },
          }}
          className="self-center transition duration-300 cursor-pointer text-lightslate hover:text-green"
        >
          {el.text}
        </motion.li>
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
              transition: { delay: 1.7 },
            }}
          >
            <Button>Resume</Button>
          </motion.div>
        )}
      </div>
    </>
  );
}
