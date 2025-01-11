'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
    }, 1000)
  }

  const contactInfo = [
    {
      title: 'Visit Us',
      details: 'Nairobi, Kenya',
      icon: '📍'
    },
    {
      title: 'Call Us',
      details: '+254 123 456 789',
      icon: '📞'
    },
    {
      title: 'Email Us',
      details: 'contact@warembo.org',
      icon: '✉️'
    },
    {
      title: 'Hours',
      details: 'Mon-Fri: 9am - 5pm',
      icon: '🕒'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1>Contact Us</h1>
            <p className="text-lg mb-8">
              We're here to help. Reach out to us with any questions or concerns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input"
                    placeholder="Your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="form-input"
                    rows={5}
                    placeholder="Your message"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending...' :
                   formStatus === 'success' ? 'Message Sent!' :
                   'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h2>Emergency Support</h2>
              <p className="mb-6">
                If you need immediate assistance, please contact our 24/7 helpline:
              </p>
              <div className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-2">Helpline</h3>
                <p className="text-2xl text-primary">+254 789 012 345</p>
              </div>
              <div className="mt-8">
                <h3 className="mb-4">Additional Resources</h3>
                <ul className="space-y-2">
                  <li>• Emergency Services: 999</li>
                  <li>• Crisis Hotline: 116</li>
                  <li>• Women's Rights Helpline: +254 700 000 000</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <h2 className="text-center mb-8">Find Us</h2>
            <div className="aspect-video bg-gray-100 rounded-lg">
              {/* Add your map component here */}
              <div className="w-full h-full flex items-center justify-center">
                <p>Map Component</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
