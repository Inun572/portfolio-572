import { useState } from 'react';

const TypingText = () => {
  return (
    <div className="animated-text">
      <span className="relative">I am </span>
      <span className="typing before:text-accent"></span>
    </div>
  );
};

export default TypingText;
