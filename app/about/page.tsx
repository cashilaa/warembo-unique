'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const team = [
    {
      name: 'Margaret Wamaitha',
      role: 'Executive Director',
      bio: 'With over 15 years of experience in community advocacy.',
      image: '/warembo 1.jpg'
    },
    {
      name: 'Lisa Thompson',
      role: 'Outreach Coordinator',
      bio: 'Passionate about connecting with and supporting community members.',
      image: '/warembo 2.jpg'
    }
  ]

  const values = [
    {
      title: 'Dignity',
      description: 'We believe in treating every individual with respect and dignity.',
      icon: '👤'
    },
    {
      title: 'Empowerment',
      description: 'We work to empower individuals to take control of their lives.',
      icon: '💪'
    },
    {
      title: 'Community',
      description: 'We build strong, supportive communities that lift each other up.',
      icon: '🤝'
    },
    {
      title: 'Advocacy',
      description: 'We advocate for policies that protect and support our community.',
      icon: '📢'
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
            <h1>About WaremboUniqueOrg</h1>
            <p className="text-lg mb-8">
              Dedicated to empowering and supporting individuals through advocacy,
              resources, and community building since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h2>Our Mission</h2>
              <p>
                To empower and support individuals through comprehensive services,
                advocacy, and community building, ensuring dignity, respect, and
                equal opportunities for all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h2>Our Vision</h2>
              <p>
                A world where every individual has access to support, resources,
                and opportunities to thrive in a safe and inclusive environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            Our Team
          </motion.h2>
          <div className="grid grid-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="relative w-64 h-64 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-lg font-medium mb-2">{member.role}</div>
                <p className="text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card text-center"
          >
            <h2>Join Our Mission</h2>
            <p className="mb-8">
              Together, we can create positive change and build a stronger community.
              Get involved today and be part of our mission.
            </p>
            <motion.a
              href="/contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
