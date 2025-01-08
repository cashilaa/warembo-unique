'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-primary text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold hover:text-gray-100">
              WaremboUniqueOrg
            </Link>
          </motion.div>
          
          <div className="hidden md:block">
            <motion.ul 
              className="flex space-x-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/about" className="hover:text-gray-200 transition-colors">About Us</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/services" className="hover:text-gray-200 transition-colors">What We Offer</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/contact" className="hover:text-gray-200 transition-colors">Contact Us</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/faq" className="hover:text-gray-200 transition-colors">FAQ</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/blog" className="hover:text-gray-200 transition-colors">Blog</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/events" className="hover:text-gray-200 transition-colors">Events</Link>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }}>
                <Link href="/gallery" className="hover:text-gray-200 transition-colors">Gallery</Link>
              </motion.li>
            </motion.ul>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none hover:text-gray-200 transition-colors"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <ul className="flex flex-col space-y-3">
              <li><Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-gray-200 transition-colors">Home</Link></li>
              <li><Link href="/about" onClick={() => setIsOpen(false)} className="block hover:text-gray-200 transition-colors">About Us</Link></li>
              <li><Link href="/services" onClick={() => setIsOpen(false)} className="block hover:text-gray-200 transition-colors">What We Offer</Link></li>
              <li><Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-gray-200 transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" onClick={() => setIsOpen(false)} className="block hover:text-gray-200 transition-colors">FAQ</Link></li>
              <li><Link href="/blog" onClick={() => setIsOpen(false)} className="block hover:text-gray-200 transition-colors">Blog</Link></li>
              <li><Link href="/events" onClick={() => setIsOpen(false)} className="block hover:text-gray-200 transition-colors">Events</Link></li>
              <li><Link href="/gallery" onClick={() => setIsOpen(false)} className="block hover:text-gray-200 transition-colors">Gallery</Link></li>
            </ul>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header
