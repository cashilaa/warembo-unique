'use client'

import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: 'Health Services',
      description: 'Access to comprehensive healthcare services including regular check-ups, counseling, and wellness programs.',
      features: [
        'Regular health check-ups',
        'Mental health support',
        'Wellness workshops',
        'Nutritional guidance'
      ],
      icon: '🏥'
    },
    {
      title: 'Legal Support',
      description: 'Professional legal assistance and advocacy services to protect your rights and interests.',
      features: [
        'Legal consultation',
        'Rights education',
        'Document assistance',
        'Advocacy support'
      ],
      icon: '⚖️'
    },
    {
      title: 'Education & Training',
      description: 'Comprehensive educational programs and skill development opportunities for personal growth.',
      features: [
        'Vocational training',
        'Financial literacy',
        'Digital skills',
        'Language courses'
      ],
      icon: '📚'
    },
    {
      title: 'Community Support',
      description: 'A strong network of support services and resources for community members.',
      features: [
        'Support groups',
        'Mentorship programs',
        'Social activities',
        'Resource sharing'
      ],
      icon: '🤝'
    }
  ]

  const programs = [
    {
      title: 'Skills Development',
      description: 'Learn valuable skills for personal and professional growth.',
      schedule: 'Weekly workshops',
      icon: '💡'
    },
    {
      title: 'Support Groups',
      description: 'Connect with others in a safe and supportive environment.',
      schedule: 'Bi-weekly meetings',
      icon: '👥'
    },
    {
      title: 'Health Workshops',
      description: 'Learn about health, wellness, and self-care practices.',
      schedule: 'Monthly sessions',
      icon: '❤️'
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
            <h1>Our Services</h1>
            <p className="text-lg mb-8">
              Comprehensive support and resources designed to empower and uplift our community members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-primary">•</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            Current Programs
          </motion.h2>
          <div className="grid grid-3">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3>{program.title}</h3>
                <p className="mb-4">{program.description}</p>
                <div className="text-primary font-medium">{program.schedule}</div>
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
            <h2>Need Support?</h2>
            <p className="mb-8">
              We're here to help. Contact us to learn more about our services
              and how we can support you on your journey.
            </p>
            <motion.a
              href="/contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}