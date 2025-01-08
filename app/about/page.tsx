'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="container">
      <section className="section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center animate-fade-in"
        >
          <h1>About WaremboUniqueOrg</h1>
          <p className="text-lg mb-8">Dedicated to empowering and supporting our community through advocacy, education, and direct support.</p>
        </motion.div>

        <div className="grid grid-3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card animate-slide-in"
          >
            <h3>Our Mission</h3>
            <p>To create a safe, supportive, and empowering environment where every individual can thrive, access resources, and build a better future.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card animate-slide-in"
          >
            <h3>Our Vision</h3>
            <p>A world where every person is treated with dignity, respect, and has equal access to opportunities and support systems.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card animate-slide-in"
          >
            <h3>Our Values</h3>
            <p>Dignity, Respect, Empowerment, Community, and Advocacy form the foundation of our work and relationships.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          Our History
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card animate-fade-in"
        >
          <p className="text-lg">Founded in 2020, WaremboUniqueOrg has grown from a small community initiative to a comprehensive support organization. Our journey has been marked by continuous growth, learning, and adaptation to meet the evolving needs of our community.</p>
        </motion.div>
      </section>

      <section className="section">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          Our Team
        </motion.h2>
        <div className="grid grid-3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card team-card animate-fade-in"
          >
            <h3>Leadership</h3>
            <p>Our dedicated leadership team brings diverse experience in advocacy, social work, and community organizing.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card team-card animate-fade-in"
          >
            <h3>Support Staff</h3>
            <p>Our trained support staff provides compassionate, professional assistance to all community members.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card team-card animate-fade-in"
          >
            <h3>Volunteers</h3>
            <p>Our amazing volunteers are the heart of our organization, dedicating their time and skills to support our mission.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          Our Impact
        </motion.h2>
        <div className="grid grid-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card stat-card animate-fade-in"
          >
            <div className="stat-number">5000+</div>
            <p>Community Members Supported</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card stat-card animate-fade-in"
          >
            <div className="stat-number">200+</div>
            <p>Successful Programs Launched</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card stat-card animate-fade-in"
          >
            <div className="stat-number">50+</div>
            <p>Partner Organizations</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
