'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
  const quickLinks = [
    { href: '/contact', label: 'Contact Us' },
    { href: '/faq', label: 'FAQ' },
    { href: '/gallery', label: 'Gallery' }
  ]

  const contactInfo = [
    { label: 'Email', value: 'warembounique1981@gmail.com' },
    { label: 'Phone', value: '+254 720 340781' },
    { label: 'Address', value: 'Nairobi, Kenya' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="footer-section"
          >
            <h4>WaremboUniqueOrg</h4>
            <p>Supporting and empowering individuals through advocacy, resources, and community.</p>
            <div className="social-links">
              {[
                { icon: 'facebook', href: 'https://facebook.com/warembo', label: 'Facebook' },
                { icon: 'twitter', href: 'https://twitter.com/warembo', label: 'Twitter' },
                { icon: 'instagram', href: 'https://instagram.com/warembo', label: 'Instagram' }
              ].map((social) => (
                <a 
                  key={social.icon} 
                  href={social.href} 
                  className="social-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-section"
          >
            <h4>Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map((link) => (
                <motion.div 
                  key={link.href}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="footer-section"
          >
            <h4>Contact Us</h4>
            <div className="footer-contact">
              {contactInfo.map((info) => (
                <div key={info.label} className="contact-item">
                  <strong>{info.label}:</strong> {info.value}
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn btn-secondary mt-4">
              Get in Touch
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="footer-bottom"
        >
          <p>
            {new Date().getFullYear()} WaremboUniqueOrg. All Rights Reserved.
          </p>
          <div className="footer-legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
