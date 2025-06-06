import { FaServer } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiAppwrite, SiMongodb } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  inital: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className=" flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiMongodb className="text-7xl text-green-600" title="MongoDB" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <FaServer className="text-7xl text-white" title="Express" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" title="React" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <DiNodejs className="text-7xl text-green-500" title="NodeJs" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4 flex justify-center items-center"
        >
          <TbBrandReactNative
            className="text-7xl text-cyan-400"
            title="React Native"
          />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4 flex justify-center items-center"
        >
          <SiAppwrite className="text-7xl text-red-500" title="Appwrite" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
