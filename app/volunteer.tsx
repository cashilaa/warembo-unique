'use client'

import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Volunteer() {
  return (
    <div className="container mx-auto px-4">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-teal-700 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 0.5 }} // Move transition here
      >
        Volunteer with Us
      </motion.h1>
      <p className="text-lg mb-4">
        We are always looking for passionate individuals to join our team of dedicated volunteers. Your support makes a real difference in the lives of those we serve.
      </p>
      {/* Add a form or further details here */}
    </div>
  );
}