import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  // image,
  linkedin,
}) => ( 
  <motion.div
    // variants={fadeIn("", "spring", index * 0.5, 0.75)}
    variants={fadeIn("up", "spring", index * 0.15, 0.6)}
    className="bg-black-200 p-6 sm:p-10 rounded-3xl w-full xs:w-[320px]"
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        {/* <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div> */}
        <div className='flex-1 flex flex-col'>
          <div className='flex items-center gap-3'>
            <p className='text-white font-medium text-[16px]'>
              {name}
            </p>

            <a
              href={linkedin}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Visit ${name}'s LinkedIn profile`}
              className='text-secondary hover:text-white transition-colors duration-300'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path d='M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.46v6.28zM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.54 9h3.56v11.45H3.54V9z' />
              </svg>
            </a>
          </div>

          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        {/* <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        /> */}
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
