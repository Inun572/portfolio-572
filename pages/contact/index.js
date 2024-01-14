import { BsArrowRight } from 'react-icons/bs';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById('my-form');
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    }).then(() => {
      alert('Your Message sent!');
    });
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            id="my-form"
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-1 flex-col gap-6 w-full mx-auto"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbxMhz9PwyOkaXSzjEZwNmGh_i5X0mxd5Q3J8zkq8kwL3OXKRie--viFEy-JNFbUSuLK/exec"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input"
                name="Name"
                required
              />
              <input
                type="text"
                placeholder="email"
                className="input"
                name="Email"
                required
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              name="Subject"
            />
            <textarea
              placeholder="message"
              className="textarea"
              name="Message"
            ></textarea>
            <button className="btn rounded-full bg-accent hover:bg-transparent hover:border hover:border-accent max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden group">
              <span className="text-primary group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
                Send me!
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group:hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-accent" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
