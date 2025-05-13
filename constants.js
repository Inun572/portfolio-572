/* eslint-disable react/jsx-key */
import { FaFigma, FaGit, FaJs, FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import {
  SiAdobephotoshop,
  SiBootstrap,
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedux,
  SiSupabase,
  SiSvelte,
  SiTailwindcss,
  SiVuedotjs,
} from 'react-icons/si';

export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend',
        icons: [
          <FaJs title="Javascript" />,
          <FaReact title="React" />,
          <SiNextdotjs title="Next" />,
          <SiVuedotjs title='Vue' />,
          <SiSvelte title='Svelte' />,
          <SiTailwindcss title="Tailwind CSS" />,
          <SiBootstrap title='Bootstrap CSS' />,
          <SiRedux FaCss3title="Redux" />,
          <FaGit title='Git' />
        ],
      },
      {
        title: 'Backend',
        icons: [
          <SiExpress title="Express" />,
          <GrMysql title="MySQL" />,
          <SiPostgresql title='PostgreSQL' />,
          <SiPrisma title='Prisma ORM'/>,
          <SiSupabase title='Supabase' />,
          <SiFirebase title='Firebase' />
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
        title: 'Frontend Engineer - Volantis Technology',
        stage: '2024 - present',
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
    slug: 'poke-card-dex'
  },
  {
    title: 'Bookshelf App',
    path: '/BookshelfApp.jpg',
    link: 'https://mybookshelfapp.vercel.app',
    desc: 'A web application for managing the book you read, uses local storage in the browser to save the data.',
    tech: 'HTML, CSS, Javascript',
    slug: 'bookshelf-app'
  },
  {
    title: 'My Notes App',
    path: '/mynotesapp.jpg',
    link: 'https://mynote-572.netlify.app',
    desc: 'A web application for manage your precious notes.',
    tech: 'React, CSS',
    slug: 'my-notes-app'
  },
  {
    title: 'Pohon Tautanku',
    path: '/pohontautanku.jpg',
    link: 'https://helmiainun-link3.netlify.app',
    desc: 'A Linktree clone for my link to social media and my website.',
    tech: 'HTML, CSS, Javascript',
    slug: 'pohon-tautanku'

  },
  {
    title: 'Gradient Color Generator',
    path: '/gradient-color-generator.jpg',
    link: 'https://another-gradients-generator.netlify.app',
    desc: 'A tool for generating linear gradient color.',
    tech: 'React, Tailwind CSS',
    slug: 'gradient-color-generator'
  },
  {
    title: 'Bookoe App',
    path: '/bookoe-app.jpg',
    link: 'https://bookoe-project.vercel.app',
    desc: 'A website application for your literature references.',
    tech: 'React, Tailwind CSS, SWR, Zustand',
    slug: 'bookoe-app'
  },
];
