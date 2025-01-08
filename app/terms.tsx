'use client'

import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Terms() {
  return (
    <div className="container mx-auto px-4">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-teal-700 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        Terms and Conditions
      </motion.h1>
      <p className="text-lg mb-4">
        Please read these terms and conditions carefully before using our services.
      </p>
      {/* Add terms and conditions content here */}
    </div>
  );
}