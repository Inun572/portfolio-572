import WorkSlider from '../../components/WorkSlider';
import ServiceSlider from '../../components/ServiceSlider';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-40 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My Work
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Portofolio and bootcamp projects
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[70%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
