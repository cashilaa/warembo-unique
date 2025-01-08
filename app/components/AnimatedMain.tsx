'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedMainProps {
  children: ReactNode
}

export default function AnimatedMain({ children }: AnimatedMainProps) {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }}
      className="min-h-screen py-8"
    >
      {children}
    </motion.main>
  )
}
