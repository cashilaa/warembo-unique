'use client'

import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Donate() {
  return (
    <div className="container mx-auto px-4">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-teal-700 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        Make a Donation
      </motion.h1>
      <p className="text-lg mb-4">
        Your financial support helps us continue our vital work. Every contribution, no matter how small, 
        makes a difference in the lives of those we serve.
      </p>
      <p className="text-lg mb-4">
        Click the button below to make a donation.
      </p>
      {/* Add donation link or button here */}
    </div>
  );
}