import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { values } from "../constants";

const Services = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My work principles</p>
          <h2 className={styles.sectionHeadText}>Professional Values.</h2>
        </motion.div>
      </div>

      <div className={`-mt-10 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            variants={fadeIn("", "spring", index * 0.3, 0.75)}
            className="bg-black-200 p-8 rounded-2xl xs:w-[320px] w-full"
          >
            <h3 className="text-white text-[20px] font-semibold">
              {value.title}
            </h3>
            <p className="mt-3 text-secondary text-[14px] leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Services, "");
