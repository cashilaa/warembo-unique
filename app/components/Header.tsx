'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-teal-700 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold">WaremboUniqueOrg</Link>
        </motion.div>
        <div className="hidden md:block">
          <motion.ul 
            className="flex space-x-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            <motion.li whileHover={{ scale: 1.1 }}><Link href="/">Home</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link href="/about">About Us</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link href="/services">What We Offer</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link href="/contact">Contact Us</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link href="/faq">FAQ</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link href="/blog">Blog</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link href="/events">Events</Link></motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><Link href="/gallery">Gallery</Link></motion.li>
          </motion.ul>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <ul className="flex flex-col space-y-2 mt-4">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)}>What We Offer</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
            <li><Link href="/faq" onClick={() => setIsOpen(false)}>FAQ</Link></li>
            <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
            <li><Link href="/events" onClick={() => setIsOpen(false)}>Events</Link></li>
            <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          </ul>
        </motion.div>
      )}
    </header>
  )
}

export default Header

