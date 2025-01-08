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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <motion.section 
          className="text-center py-16 animate-fade-in"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h1 
            variants={fadeIn}
            className="text-5xl font-bold text-gray-800 mb-6"
          >
            Welcome to WaremboUniqueOrg
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Empowering individuals through advocacy, resources, and community support. Together, we can create a world of equality and respect.
          </motion.p>
          <motion.div 
            variants={fadeIn}
            className="flex gap-4 justify-center"
          >
            <Link 
              href="/about"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-300 inline-block font-medium btn btn-primary"
            >
              Learn About Us
            </Link>
            <Link 
              href="/contact"
              className="bg-white text-teal-600 border-2 border-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors duration-300 inline-block font-medium btn btn-secondary"
            >
              Get Involved
            </Link>
          </motion.div>
        </motion.section>

        <motion.section 
          className="py-16"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-gray-800 mb-12 text-center"
          >
            Our Impact
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 card stat-card animate-fade-in"
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl text-teal-600 stat-number">5000+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Individuals Supported</h3>
              <p className="text-gray-600 text-center">Making a difference in our community</p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 card stat-card animate-fade-in" style={{ animationDelay: '0.2s' }}
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl text-teal-600 stat-number">200+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Events Organized</h3>
              <p className="text-gray-600 text-center">Creating opportunities for connection and growth</p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 card stat-card animate-fade-in" style={{ animationDelay: '0.4s' }}
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl text-teal-600 stat-number">50+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Policy Changes Influenced</h3>
              <p className="text-gray-600 text-center">Advocating for a more just and equitable society</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="py-16"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            Our Mission in Action
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 card animate-slide-in"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Workshop: Know Your Rights</h3>
              <p className="text-gray-600 mb-4">Join us for our monthly workshop on legal rights and safety. Learn about your rights, how to protect yourself, and connect with community resources.</p>
              <Link href="/events" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center btn btn-primary">Learn More →</Link>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 card animate-slide-in" style={{ animationDelay: '0.2s' }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Community Support Program Expanded</h3>
              <p className="text-gray-600 mb-4">We're excited to announce the expansion of our community support program, now offering more resources and services to those in need.</p>
              <Link href="/services" className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center btn btn-primary">Explore Services →</Link>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="py-16"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            Get Involved
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 card animate-fade-in"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-4">Join our team of dedicated volunteers and make a real difference in your community. We have opportunities for all skills and availability.</p>
              <Link href="/volunteer" className="text-teal-600 hover:text-teal-700 font-medium btn btn-primary">Become a Volunteer</Link>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 card animate-fade-in" style={{ animationDelay: '0.2s' }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Donate</h3>
              <p className="text-gray-600 mb-4">Your financial support helps us continue our vital work. Every contribution, no matter how small, makes a difference in the lives of those we serve.</p>
              <Link href="/donate" className="text-teal-600 hover:text-teal-700 font-medium btn btn-secondary">Make a Donation</Link>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="py-16"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            Testimonials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 card animate-slide-in"
            >
              <p className="text-gray-600 mb-4 italic">"WaremboUniqueOrg has been a lifeline for me. Their support and resources have helped me reclaim my life and find my voice."</p>
              <p className="text-teal-600 font-medium stat-number">- Sarah M.</p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 card animate-slide-in" style={{ animationDelay: '0.2s' }}
            >
              <p className="text-gray-600 mb-4 italic">"The community I've found through WaremboUniqueOrg is unlike any other. It's a place of acceptance, growth, and empowerment."</p>
              <p className="text-teal-600 font-medium stat-number">- Alex T.</p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}