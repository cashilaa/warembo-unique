"use client"

import { motion } from "framer-motion"

export default function Contact() {
  const contactInfo = [
    {
      title: "Visit Us",
      details: "Nairobi, Kenya",
      icon: "📍",
    },
    {
      title: "Call Us",
      details: "+254 720 340781",
      icon: "📞",
    },
    {
      title: "Email Us",
      details: "warembounique1981@gmail.com",
      icon: "✉️",
    },
    {
      title: "Hours",
      details: "Mon-Fri: 9am - 5pm",
      icon: "🕒",
    },
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
            <p className="text-lg mb-8">We're here to help. Reach out to us with any questions or concerns.</p>
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
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card max-w-2xl w-full"
            >
              <h2 className="text-center">Contact Us Directly</h2>
              <p className="mb-6 text-center">If you need assistance, please contact us using the information below:</p>

              <div className="text-center mb-8">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-xl text-primary">warembounique1981@gmail.com</p>
              </div>

              <div className="text-center mb-8">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-xl text-primary">+254 720 340781</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🚨</div>
                <h3 className="text-xl font-bold mb-2">Emergency Support</h3>
                <p className="text-xl text-primary">+254 789 012 345</p>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-center">Additional Resources</h3>
                <ul className="space-y-2 max-w-md mx-auto">
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
