'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const faqs = [
  {
    question: "What is WaremboUniqueOrg?",
    answer: "WaremboUniqueOrg is a non-profit organization dedicated to supporting and advocating for the rights of individuals in our community. We provide resources, education, and community support to empower and uplift our members."
  },
  {
    question: "How can I get involved with WaremboUniqueOrg?",
    answer: "There are many ways to get involved! You can attend our events, volunteer for our programs, make a donation, or participate in our advocacy campaigns. Check our 'What We Offer' page for more information on current opportunities."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Yes, we take privacy very seriously. All personal information shared with us is kept strictly confidential. We do not share or sell any information to third parties. You can read more about our privacy practices in our Privacy Policy."
  },
  {
    question: "Do you offer legal advice?",
    answer: "While we can provide general information about legal rights, we are not lawyers and cannot offer specific legal advice. However, we can refer you to trusted legal services that specialize in issues relevant to our community."
  },
  {
    question: "How can I access your support services?",
    answer: "You can access our support services by contacting us through our website, email, or phone. We also have drop-in hours at our physical location. Check our 'Contact Us' page for more details."
  },
  {
    question: "Are your events and workshops free?",
    answer: "Many of our events and workshops are free to attend. Some specialized workshops or larger events may have a nominal fee to cover costs. We always strive to keep our services as accessible as possible, and fee waivers are available for those who need them."
  },
  {
    question: "Can I volunteer if I'm not a member of the community you serve?",
    answer: "We welcome allies who are committed to our cause. There are many ways to contribute, from administrative tasks to event planning. All volunteers receive training to ensure they understand our mission and the needs of our community."
  },
  {
    question: "How do you use donations?",
    answer: "Donations are used to fund our programs, maintain our support services, organize events, and advocate for policy changes. We are committed to transparency and publish an annual report detailing our use of funds."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="container section">
      <motion.h1 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h1>
      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div 
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <span className="faq-toggle">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="faq-answer"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="mb-4">
          Don't see your question here? Feel free to reach out to us directly.
        </p>
        <Link 
          href="/contact" 
          className="btn btn-secondary"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  )
}
