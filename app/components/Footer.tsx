'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'What We Offer' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
    { href: '/events', label: 'Events' }
  ]

  const contactInfo = [
    { label: 'Email', value: 'contact@warembo.org' },
    { label: 'Phone', value: '+254 123 456 789' },
    { label: 'Address', value: 'Nairobi, Kenya' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="footer-section"
          >
            <h3 className="footer-title">WaremboUniqueOrg</h3>
            <p className="footer-text">Supporting and empowering individuals through advocacy, resources, and community.</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-section"
          >
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="footer-section"
          >
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
              {contactInfo.map((info) => (
                <li key={info.label} className="contact-item">
                  <strong>{info.label}:</strong> {info.value}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="footer-bottom"
        >
          <p className="copyright">
            {new Date().getFullYear()} WaremboUniqueOrg. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
