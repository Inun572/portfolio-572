// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
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
      link: 'https://mybookshelfapp.vercel.app',
      desc: 'A web application for managing the book you read, uses local storage in the browser to save the data.',
      tech: 'HTML, CSS, Javascript',
    },
    {
      title: 'My Notes App',
      path: '/mynotesapp.jpg',
      link: 'https://mynote-572.netlify.app',
      desc: 'A web application for manage your precious notes.',
      tech: 'React, CSS',
    },
    {
      title: 'Pohon Tautanku',
      path: '/pohontautanku.jpg',
      link: 'https://helmiainun-link3.netlify.app',
      desc: 'A Linktree clone for my link to social media and my website.',
      tech: 'HTML, CSS, Javascript',
    },
    {
      title: 'Gradient Color Generator',
      path: '/gradient-color-generator.jpg',
      link: 'https://another-gradients-generator.netlify.app',
      desc: 'A tool for generating linear gradient color.',
      tech: 'React, Tailwind CSS',
    },
    {
      title: 'Bookoe App',
      path: '/bookoe-app.jpg',
      link: 'https://bookoe-project.vercel.app',
      desc: 'A website application for your literature references.',
      tech: 'React, Tailwind CSS, SWR, Zustand',
    },
  ]);
}
