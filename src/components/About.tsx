import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.section 
      id="about" 
      className="py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            As an Informatics Engineering student who is passionate about web development, I have a special interest in front-end user interface development. I am committed to learning and improving my skills in creating attractive and responsive interfaces. Currently, I am also actively seeking professional mentorship to accelerate my career development in the tech industry.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;