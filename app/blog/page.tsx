'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const blogPosts = [
  {
    id: 1,
    title: "Understanding Sex Work Decriminalization",
    excerpt: "An in-depth look at what decriminalization means for sex workers and society at large.",
    date: "June 15, 2023",
    author: "Jane Doe"
  },
  {
    id: 2,
    title: "Health and Safety Tips for Sex Workers",
    excerpt: "Essential guidelines for maintaining physical and mental health in the sex work industry.",
    date: "June 1, 2023",
    author: "Dr. Smith"
  },
  {
    id: 3,
    title: "Navigating Financial Services as a Sex Worker",
    excerpt: "Strategies for managing finances and overcoming banking obstacles in the sex work industry.",
    date: "May 20, 2023",
    author: "Alex Johnson"
  },
  {
    id: 4,
    title: "The Impact of COVID-19 on Sex Work",
    excerpt: "Examining the challenges faced by sex workers during the global pandemic and strategies for adaptation.",
    date: "May 5, 2023",
    author: "Sam Lee"
  }
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-purple-700 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        Blog
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <motion.article 
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-purple-600">{post.title}</h2>
            <p className="text-gray-600 mb-4">By {post.author} | {post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-purple-600 hover:text-purple-800 transition-colors">
              Read More →
            </Link>
          </motion.article>
        ))}
      </div>
      
      <motion.section 
        className="mt-12 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Want to Contribute?</h2>
        <p className="mb-4">
          We welcome guest posts from sex workers, allies, and experts in related fields. 
          Share your experiences, insights, and knowledge with our community.
        </p>
        <Link href="/contact" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors inline-block">
          Contact Us to Submit a Post
        </Link>
      </motion.section>
    </div>
  )
}

