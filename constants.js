/* eslint-disable react/jsx-key */
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import {
  SiAdobephotoshop,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';

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
          <SiRedux FaCss3title="Redux" />,
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

export const workSlides = [
  {
    title: 'PokecardDex',
    path: '/pokecard-dex.vercel.app.jpeg',
    link: 'https://pokecard-dex.vercel.app',
    desc: 'A website contains a Pokemon TCG Gallery up-to-date from an integrated API.',
    tech: 'HTML, CSS, Javascript',
  },
  {
    title: 'Bookshelf App',
    path: '/BookshelfApp.jpg',
    link: 'https://mybookshelfapp.vercel.app/',
    desc: 'A web application for managing the book you read, uses local storage in the browser to save the data.',
    tech: 'HTML, CSS, Javascript',
  },
  {
    title: 'My Notes App',
    path: '/mynotesapp.jpg',
    link: 'https://mynote-572.netlify.app//',
    desc: 'A web application for manage your precious notes.',
    tech: 'React, CSS',
  },
  {
    title: 'Pohon Tautanku',
    path: '/pohontautanku.jpg',
    link: 'https://helmiainun-link3.netlify.app/',
    desc: 'A Linktree clone for my link to social media and my website.',
    tech: 'HTML, CSS, Javascript',
  },
  {
    title: 'Gradient Color Generator',
    path: '/gradient-color-generator.jpg',
    link: 'https://another-gradients-generator.netlify.app/',
    desc: 'A tool for generating linear gradient color.',
    tech: 'React, Tailwind CSS',
  },
  {
    title: 'Bookoe App',
    path: '/bookoe-app.jpg',
    link: 'https://bookoe-project.vercel.app/',
    desc: 'A website application for your literature references.',
    tech: 'React, Tailwind CSS, SWR, Zustand',
  },
];
