"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/gallery", label: "Gallery" },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="logo"
        >
          <Link href="/" className="logo">
            <img src="/warembo logo.jpg" alt="Logo" className="h-8 w-auto logo-icon" style={{ maxHeight: "32px" }} />
            WaremboUniqueOrg
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navLinks.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)} whileTap={{ scale: 0.95 }}>
          <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="mobile-menu-content">
                <button className="mobile-menu-close" onClick={() => setIsOpen(false)}>
                  ✕
                </button>
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.href} className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
