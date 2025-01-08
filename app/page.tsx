'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

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

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="container mx-auto px-4">
      <motion.section 
        className="text-center py-12"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h1 variants={fadeIn} className="text-5xl font-bold mb-4 text-teal-700">Welcome to WaremboUniqueOrg</motion.h1>
        <motion.p variants={fadeIn} className="text-xl mb-8 max-w-2xl mx-auto">
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
        className="my-12"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6 text-center text-teal-600">Our Impact</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src="/placeholder.svg?height=100&width=100" alt="Community icon" width={100} height={100} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-teal-600">5000+</h3>
            <p>Individuals Supported</p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src="/placeholder.svg?height=100&width=100" alt="Event icon" width={100} height={100} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-teal-600">200+</h3>
            <p>Events Organized</p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image src="/placeholder.svg?height=100&width=100" alt="Advocacy icon" width={100} height={100} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-teal-600">50+</h3>
            <p>Policy Changes Influenced</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="my-12"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">Our Mission in Action</h2>
        <div className="relative aspect-video">
          <Image 
            src="/placeholder.svg?height=720&width=1280" 
            alt="WaremboUniqueOrg community event" 
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              onClick={() => setIsVideoPlaying(true)}
              className="bg-white bg-opacity-75 rounded-full p-4 hover:bg-opacity-100 transition-all"
              aria-label="Play video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        {isVideoPlaying && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl aspect-video">
              <iframe 
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" 
                title="WaremboUniqueOrg Mission Video"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <button 
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                aria-label="Close video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </motion.section>

      <motion.section 
        className="my-12"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6 text-center text-teal-600">Latest Updates</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg">
            <Image src="/placeholder.svg?height=200&width=300" alt="Event photo" width={300} height={200} className="w-full mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2 text-teal-600">Upcoming Workshop: Know Your Rights</h3>
            <p className="mb-4">Join us for our monthly workshop on legal rights and safety. Learn about your rights, how to protect yourself, and connect with community resources.</p>
            <Link href="/events" className="text-teal-600 hover:text-teal-800 transition-colors">Learn More →</Link>
          </motion.div>
          <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg">
            <Image src="/placeholder.svg?height=200&width=300" alt="Advocacy campaign photo" width={300} height={200} className="w-full mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2 text-teal-600">New Advocacy Campaign Launched</h3>
            <p className="mb-4">We've initiated a new campaign to push for policy changes that will better protect and support our community. Your voice matters!</p>
            <Link href="/blog" className="text-teal-600 hover:text-teal-800 transition-colors">Read More →</Link>
          </motion.div>
          <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-lg">
            <Image src="/placeholder.svg?height=200&width=300" alt="Community support photo" width={300} height={200} className="w-full mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2 text-teal-600">Community Support Program Expanded</h3>
            <p className="mb-4">We're excited to announce the expansion of our community support program, now offering more resources and services to those in need.</p>
            <Link href="/services" className="text-teal-600 hover:text-teal-800 transition-colors">Explore Services →</Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="my-12"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">Get Involved</h2>
        <div className="bg-teal-50 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-teal-600">Volunteer</h3>
              <p className="mb-4">Join our team of dedicated volunteers and make a real difference in your community. We have opportunities for all skills and availability.</p>
              <Link href="/volunteer" className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors inline-block">Become a Volunteer</Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-teal-600">Donate</h3>
              <p className="mb-4">Your financial support helps us continue our vital work. Every contribution, no matter how small, makes a difference in the lives of those we serve.</p>
              <Link href="/donate" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors inline-block">Make a Donation</Link>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="my-12"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4 italic">"WaremboUniqueOrg has been a lifeline for me. Their support and resources have helped me reclaim my life and find my voice."</p>
            <p className="font-semibold">- Sarah M.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4 italic">"The community I've found through WaremboUniqueOrg is unlike any other. It's a place of acceptance, growth, and empowerment."</p>
            <p className="font-semibold">- Alex T.</p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

