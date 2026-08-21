import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
>
  <p>
    I’m a Computer Programming and Analysis graduate from Durham College with
    a 4.87/5.0 GPA and President’s Honour Roll recognition. I’m passionate
    about building reliable, user-focused software and turning complex
    problems into thoughtful, practical solutions.
  </p>

  <p className='mt-5'>
    Through my Technical Analyst co-op experience and academic projects, I’ve
    developed a strong foundation in software development while strengthening
    my ability to approach problems analytically, communicate effectively,
    and collaborate within a team. I’m naturally curious, adaptable, and always
    looking for opportunities to learn, improve, and take on new challenges.
  </p>

  <p className='mt-5'>
    I’m excited to contribute to meaningful projects, continue growing as a
    software professional, and build technology that makes a real difference.
  </p>
</motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
