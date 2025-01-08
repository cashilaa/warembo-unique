'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Services() {
  return (
    <div className="container mx-auto px-4">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-teal-700 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        What We Offer
      </motion.h1>
      
      <motion.section 
        className="mb-12"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-semibold mb-6 text-teal-600 text-center">Our Services</motion.h2>
        <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Advocacy and Awareness", 
              description: "We lobby for policy changes, run public education campaigns, and work to reduce stigma through media representation.", 
              image: "/placeholder.svg?height=200&width=300"
            },
            { 
              title: "Support and Counseling", 
              description: "Our support services include peer support groups, mental health counseling, and career transition assistance.", 
              image: "/placeholder.svg?height=200&width=300"
            },
            { 
              title: "Legal Aid", 
              description: "We provide legal consultations and representation for cases related to discrimination, abuse, and rights violations.", 
              image: "/placeholder.svg?height=200&width=300"
            },
            { 
              title: "Health Services", 
              description: "We offer health education, screenings, and referrals to ensure our community has access to comprehensive healthcare.", 
              image: "/placeholder.svg?height=200&width=300"
            },
            { 
              title: "Education and Training", 
              description: "Our workshops and training programs cover a wide range of topics, from legal rights to personal development.", 
              image: "/placeholder.svg?height=200&width=300"
            },
            { 
              title: "Community Building", 
              description: "We organize events, support groups, and networking opportunities to foster a strong, supportive community.", 
              image: "/placeholder.svg?height=200&width=300"
            }
          ].map((service, index) => (
            <motion.div 
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image 
                src={service.image} 
                alt={service.title} 
                width={300} 
                height={200} 
                className="w-full mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2 text-teal-600">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section 
        className="mb-12"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-semibold mb-6 text-teal-600 text-center">Upcoming Events</motion.h2>
        <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { 
              title: "Know Your Rights Workshop", 
              date: "July 15, 2023", 
              description: "Learn about your legal rights and how to protect yourself in various situations." 
            },
            { 
              title: "Mental Health Support Group", 
              date: "Every Monday", 
              description: "Join our weekly support group to discuss mental health challenges and coping strategies." 
            },
          ].map((event) => (
            <div key={event.title} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 text-teal-600">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p className="mb-4">{event.description}</p>
              <Link href="/events" className="text-teal-600 hover:text-teal-800 transition-colors">Learn More →</Link>
            </div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section 
        className="mb-12"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold mb-6 text-teal-600 text-center">Resources</h2>
        <div className="bg-teal-50 p-8 rounded-lg shadow-lg">
          <p className="mb-4 text-lg text-center">
            We offer a variety of resources to support our community. Check out our online library for educational materials, 
            guides, and helpful links.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/resources" 
              className="inline-block bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors"
            >
              Access Resources
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="mb-12"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-semibold mb-6 text-teal-600 text-center">How to Access Our Services</motion.h2>
        <motion.div variants={fadeIn} className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-lg mb-4">
            All of our services are confidential and designed to be accessible to everyone in our community. To access our services or learn more about what we offer:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Visit our office during drop-in hours (check our Events page for current schedule)</li>
            <li>Call our confidential helpline: (555) 123-4567</li>
            <li>Email us at support@waremboorg.com</li>
            <li>Attend one of our community events or workshops</li>
          </ul>
          <p className="text-lg mt-4">
            Remember, your privacy and safety are our top priorities. All interactions with WaremboUniqueOrg are kept 
            strictly confidential.
          </p>
        </motion.div>
      </motion.section>

      <motion.section 
        className="mb-12"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold mb-6 text-teal-600 text-center">Get Involved</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <p className="mb-4 text-lg">
            We're always looking for passionate individuals to join our cause. Whether you want to volunteer your time, 
            share your skills, or support our work financially, there's a place for you at WaremboUniqueOrg.
          </p>
          <Link 
            href="/get-involved" 
            className="inline-block bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors"
          >
            Learn How to Get Involved
          </Link>
        </div>
      </motion.section>
    </div>
  )
}

