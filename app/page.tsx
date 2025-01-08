'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.section 
          className="text-center py-12"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h1 
            variants={fadeIn} 
            className="text-5xl font-bold mb-4 text-teal-700"
            transition={{ duration: 0.5 }}
          >
            Welcome to WaremboUniqueOrg
          </motion.h1>
          <motion.p 
            variants={fadeIn} 
            className="text-xl mb-8 max-w-2xl mx-auto"
            transition={{ duration: 0.5 }}
          >
            Empowering individuals through advocacy, resources, and community support. Together, we can create a world of equality and respect.
          </motion.p>
          <motion.div variants={fadeIn} className="space-x-4">
            <Link href="/about" className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-colors inline-block">
              Learn About Us
            </Link>
            <Link href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors inline-block">
              Get Involved
            </Link>
          </motion.div>
        </motion.section>

        <motion.section 
          className="my-16"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h2 
            variants={fadeIn} 
            className="text-3xl font-bold mb-12 text-center text-teal-600"
          >
            Our Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300"
              variants={fadeIn}
            >
              <Image src="/community-icon.svg" alt="Community icon" width={100} height={100} className="mx-auto mb-6" priority />
              <h3 className="text-2xl font-semibold mb-2 text-teal-600">5000+</h3>
              <p className="text-gray-600">Individuals Supported</p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300"
              variants={fadeIn}
            >
              <Image src="/events-icon.svg" alt="Event icon" width={100} height={100} className="mx-auto mb-6" priority />
              <h3 className="text-2xl font-semibold mb-2 text-teal-600">200+</h3>
              <p className="text-gray-600">Events Organized</p>
            </motion.div>
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-1 transition-transform duration-300"
              variants={fadeIn}
            >
              <Image src="/advocacy-icon.svg" alt="Advocacy icon" width={100} height={100} className="mx-auto mb-6" priority />
              <h3 className="text-2xl font-semibold mb-2 text-teal-600">50+</h3>
              <p className="text-gray-600">Policy Changes Influenced</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="my-16"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold mb-8 text-center text-teal-600"
          >
            Our Mission in Action
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Upcoming Workshop: Know Your Rights</h3>
              <p className="text-gray-600 mb-4">Join us for our monthly workshop on legal rights and safety. Learn about your rights, how to protect yourself, and connect with community resources.</p>
              <Link href="/events" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                Learn More →
              </Link>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Community Support Program Expanded</h3>
              <p className="text-gray-600 mb-4">We're excited to announce the expansion of our community support program, now offering more resources and services to those in need.</p>
              <Link href="/services" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                Explore Services →
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="my-16"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold mb-8 text-center text-teal-600"
          >
            Get Involved
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Volunteer</h3>
              <p className="text-gray-600 mb-4">Join our team of dedicated volunteers and make a real difference in your community. We have opportunities for all skills and availability.</p>
              <Link href="/volunteer" className="text-teal-600 hover:text-teal-700 font-medium">
                Become a Volunteer
              </Link>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              variants={fadeIn}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Donate</h3>
              <p className="text-gray-600 mb-4">Your financial support helps us continue our vital work. Every contribution, no matter how small, makes a difference in the lives of those we serve.</p>
              <Link href="/donate" className="text-teal-600 hover:text-teal-700 font-medium">
                Make a Donation
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="my-16"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold mb-8 text-center text-teal-600"
          >
            Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              variants={fadeIn}
            >
              <p className="text-gray-600 mb-4 italic">"WaremboUniqueOrg has been a lifeline for me. Their support and resources have helped me reclaim my life and find my voice."</p>
              <p className="text-teal-600 font-medium">- Sarah M.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              variants={fadeIn}
            >
              <p className="text-gray-600 mb-4 italic">"The community I've found through WaremboUniqueOrg is unlike any other. It's a place of acceptance, growth, and empowerment."</p>
              <p className="text-teal-600 font-medium">- Alex T.</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}