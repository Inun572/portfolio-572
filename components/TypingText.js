'use client';

import { useEffect } from 'react';
import Typed from 'typed.js';
const TypingText = () => {
  useEffect(() => {
    const typed = new Typed('.typing', {
      strings: ['Developer', 'Web Designer', 'Freelancer'],
      typeSpeed: 30,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  });
  return (
    <div className="animated-text">
      <span className="relative text-black">I am </span>
      <span className="typing text-accent"></span>
    </div>
  );
};

export default TypingText;
