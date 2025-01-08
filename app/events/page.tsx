'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const events = [
  {
    id: 1,
    title: "Know Your Rights Workshop",
    date: "July 15, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Community Center",
    description: "Learn about your legal rights as a sex worker and how to protect yourself."
  },
  {
    id: 2,
    title: "Self-Defense Class",
    date: "July 22, 2023",
    time: "6:00 PM - 8:00 PM",
    location: "Local Gym",
    description: "Basic self-defense techniques tailored for sex workers' safety."
  },
  {
    id: 3,
    title: "Mental Health Support Group",
    date: "Every Monday",
    time: "7:00 PM - 8:30 PM",
    location: "Online (Zoom)",
    description: "Weekly support group for sex workers to discuss mental health challenges and coping strategies."
  },
  {
    id: 4,
    title: "Annual Sex Workers' Rights Conference",
    date: "September 1-3, 2023",
    time: "9:00 AM - 5:00 PM daily",
    location: "City Convention Center",
    description: "Three-day conference featuring workshops, panel discussions, and networking opportunities."
  }
]

export default function Events() {
  return (
    <div className="container mx-auto">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-purple-700 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        Upcoming Events
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <motion.div 
            key={event.id}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-semibold mb-2 text-purple-600">{event.title}</h2>
            <p className="text-gray-600 mb-2"><strong>Date:</strong> {event.date}</p>
            <p className="text-gray-600 mb-2"><strong>Time:</strong> {event.time}</p>
            <p className="text-gray-600 mb-4"><strong>Location:</strong> {event.location}</p>
            <p className="mb-4">{event.description}</p>
            <Link href={`/events/${event.id}`} className="text-purple-600 hover:text-purple-800 transition-colors">
              Learn More & RSVP →
            </Link>
          </motion.div>
        ))}
      </div>
      
      <motion.section 
        className="mt-12 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-2xl font-semibold mb-4">Want to Host an Event?</h2>
        <p className="mb-4">
          We welcome community-led events and workshops. If you have an idea for an event that could 
          benefit our community, we'd love to hear from you!
        </p>
        <Link href="/contact" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors inline-block">
          Contact Us to Propose an Event
        </Link>
      </motion.section>
    </div>
  )
}

