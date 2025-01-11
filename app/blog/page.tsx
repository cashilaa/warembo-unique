'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

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
    excerpt: "A comprehensive exploration of decriminalization, its global implications, and the path to protecting sex workers' rights.",
    fullContent: `Decriminalization is more than a legal term—it's a fundamental human rights issue. This article delves deep into the complexities of sex work legislation, examining how current laws impact the safety, health, and dignity of sex workers worldwide.

Key points:
- The current global landscape of sex work laws
- Health and safety risks under criminalization
- Economic and social impacts of decriminalization
- International case studies and successful models
- The role of community advocacy in driving change`,
    date: "January 15, 2024",
    author: "Dr. Elena Rodriguez",
    readTime: "8 min read",
    tags: ["Policy", "Rights", "Human Rights"],
    imageUrl: "/blog-images/decriminalization.jpg"
  },
  {
    id: 2,
    title: "Holistic Health Approaches for Sex Workers",
    excerpt: "Exploring comprehensive healthcare strategies that address physical, mental, and emotional well-being.",
    fullContent: `Healthcare for sex workers goes beyond medical check-ups. This article presents a holistic approach that considers the unique challenges and needs of sex workers.

Key focus areas:
- Mental health support and trauma-informed care
- Sexual health screenings and preventive care
- Nutrition and wellness programs
- Access to confidential and non-judgmental healthcare services
- Community-based health initiatives`,
    date: "December 10, 2023",
    author: "Maria Santos, RN",
    readTime: "7 min read",
    tags: ["Health", "Wellness", "Mental Health"],
    imageUrl: "/blog-images/health-wellness.jpg"
  },
  {
    id: 3,
    title: "Financial Empowerment and Alternative Careers",
    excerpt: "Strategies for economic independence, skill development, and exploring diverse career pathways.",
    fullContent: `Economic empowerment is crucial for sex workers seeking alternative career opportunities. This comprehensive guide offers practical insights and resources.

Comprehensive guide includes:
- Skills assessment and career counseling
- Vocational training programs
- Financial literacy workshops
- Entrepreneurship support
- Networking and mentorship opportunities
- Overcoming systemic barriers to employment`,
    date: "November 22, 2023",
    author: "Alex Johnson",
    readTime: "9 min read",
    tags: ["Career", "Finance", "Empowerment"],
    imageUrl: "/blog-images/financial-empowerment.jpg"
  },
  {
    id: 4,
    title: "Community Support and Peer Networks",
    excerpt: "The transformative power of community support, peer networks, and collective advocacy.",
    fullContent: `Community is more than a support system—it's a lifeline. This article explores the critical role of peer networks in empowerment and resilience.

Highlights:
- Building supportive and non-judgmental communities
- Peer counseling and support group models
- Collective advocacy and rights protection
- Combating stigma through solidarity
- Creating safe spaces for dialogue and healing`,
    date: "October 5, 2023",
    author: "Sarah Thompson",
    readTime: "6 min read",
    tags: ["Community", "Support", "Advocacy"],
    imageUrl: "/blog-images/community-support.jpg"
  }
]

export default function Blog() {
  const [filter, setFilter] = useState('All')
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  const tags = ['All', ...new Set(blogPosts.flatMap(post => post.tags))]

  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(filter))

  const handlePostClick = (postId: number) => {
    setSelectedPost(postId)
  }

  return (
    <div className="container section">
      <motion.h1 
        className="text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        Our Blog
      </motion.h1>
      
      <div className="blog-filter">
        {tags.map(tag => (
          <button 
            key={tag}
            className={`blog-filter-tag ${filter === tag ? 'active' : ''}`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      
      <div className="grid grid-3">
        {filteredPosts.map((post) => (
          <motion.article 
            key={post.id}
            className="blog-post"
            initial="initial"
            animate="animate"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            onClick={() => handlePostClick(post.id)}
          >
            <div className="blog-post-image-container">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="blog-post-image" 
              />
              <div className="blog-post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="blog-post-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="blog-post-content">
              <div className="blog-post-meta">
                <span className="blog-post-author">{post.author}</span>
                <span className="blog-post-date">{post.date}</span>
                <span className="blog-post-read-time">{post.readTime}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </div>
          </motion.article>
        ))}
      </div>
      
      {selectedPost !== null && (
        <motion.div 
          className="blog-post-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPost(null)}
        >
          <div className="blog-post-modal-content">
            <button 
              className="blog-post-modal-close"
              onClick={() => setSelectedPost(null)}
            >
              ✕
            </button>
            <div className="blog-post-modal-header">
              <h2>{blogPosts[selectedPost].title}</h2>
              <div className="blog-post-modal-meta">
                <span>{blogPosts[selectedPost].author}</span>
                <span>{blogPosts[selectedPost].date}</span>
                <span>{blogPosts[selectedPost].readTime}</span>
              </div>
            </div>
            <img 
              src={blogPosts[selectedPost].imageUrl} 
              alt={blogPosts[selectedPost].title} 
              className="blog-post-modal-image" 
            />
            <div className="blog-post-modal-body">
              <p>{blogPosts[selectedPost].fullContent}</p>
            </div>
          </div>
        </motion.div>
      )}
      
      <motion.section 
        className="mt-12 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h2>Want to Contribute?</h2>
        <p className="mb-4">
          We welcome guest posts from sex workers, allies, and experts in related fields. 
          Share your experiences, insights, and knowledge with our community.
        </p>
        <Link href="/contact" className="btn btn-secondary">
          Submit a Post
        </Link>
      </motion.section>
    </div>
  )
}
