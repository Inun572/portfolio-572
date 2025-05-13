/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { aboutData } from '../../constants.js';
import Avatar from '../../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import moment from 'moment';

const About = () => {
  const [index, setIndex] = useState(0);
  const workExp = moment().diff('2024-03-01', 'years');

  return (
    <div className="h-[110dvh] bg-transparent py-32 text-center xl:text-left">
      <motion.div
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex absolute -left-[400px] top-0"
      >
        <Avatar image="/depanHD1218.png" />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 relative">
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col justify-center"
        >
          <h2 className="h2">
            Captivating <span className="text-accent">stories</span> birth
            magnificent design
          </h2>
          <p className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl"mb-12 px-2 xl"px-0'>
            Since { workExp } years ago, I was starting to transition my carier into web
            development. Focusing on Frontend development, I am always seeking
            new challenges and learning new things, to make stunning design and
            best user experience.
          </p>
          <div className="hidden xl:flex xl:justify-evenly xl:items-center">
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 after:mr-4">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={workExp} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Years of experience
              </div>
            </div>
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 after:mr-4">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={5} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Satisfied clients
              </div>
            </div>
            <div className="relative flex-1">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={10} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Finished Projects
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData?.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    '!text-accent after:w-[100%] after:bg-accent after:transition-all after-duration-300'
                  } text-black/60 cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-3 items-center xl:items-start">
            {aboutData &&
              aboutData[index].info.map((item, itemIndex) => {
                return (
                  <motion.div
                    variants={fadeIn('left', 0.2*itemIndex, 10 + (2*itemIndex))}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    key={item.title}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-black/60"
                  >
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <div key={itemIndex} className="text-2xl">
                            {icon}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
