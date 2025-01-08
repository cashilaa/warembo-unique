'use client'

import { motion } from 'framer-motion'

export default function AnimatedMain({ children }: { children: React.ReactNode }) {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-4 md:p-8"
    >
      {children}
    </motion.main>
  )
}

