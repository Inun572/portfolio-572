/* eslint-disable react/jsx-key */
import React, { useState } from 'react';

import CountUp from 'react-countup';

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTailwindcss,
  SiAdobephotoshop,
  SiExpress,
  SiRedux,
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 title="HTML5" />,
          <FaCss3 title="CSS3" />,
          <FaJs title="Javascript" />,
          <FaReact title="React" />,
          <SiNextdotjs title="Next" />,
          <SiTailwindcss title="Tailwind CSS" />,
          <SiRedux title="Redux" />,
          <SiExpress title="Express" />,
          <GrMysql title="MySQL" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma title="Figma" />,
          <SiAdobephotoshop title="Adobe Photoshop" />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Marketing Staff - Quick Traktor',
        stage: '2017 - 2023',
      },
      {
        title: 'Freelance at Fastwork',
        stage: '2023 - present',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Fullstack Web Developer Bootcamp - Codemasters ID',
        stage: '2023',
      },
      {
        title: 'Backend Intermediate Class - Dicoding Indonesia',
        stage: '2023',
      },
      {
        title: 'Frontend Fundamental Class - Dicoding Indonesia',
        stage: '2023',
      },
      {
        title: 'Basic DevOps and AWS Cloud - Dicoding Indonesia',
        stage: '2023',
      },
      {
        title: 'Google Certification for Daya Analytics - Coursera',
        stage: '2022',
      },
      {
        title: 'React JS Junior Web Developer - Camp404',
        stage: '2022',
      },
      {
        title: 'Physics Engineering - Universitas Gadjah Mada',
        stage: '2009 - 2017',
      },
    ],
  },
];

import Avatar from '../../components/Avatar';

import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-transparent py-32 text-center xl:text-left">
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
            Since 1 years ago, I was starting to transition my carier into web
            development. Focusing on Frontend development, I am always seeking
            new challenges and learning new things, to make stunning design and
            best user experience.
          </p>
          <div className="hidden xl:flex xl:justify-evenly xl:items-center">
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 after:mr-4">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={1} duration={5} /> +
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
            {aboutData.map((item, itemIndex) => {
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
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
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
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
