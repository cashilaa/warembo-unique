'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

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
}

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-teal-700 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        About WaremboUniqueOrg
      </motion.h1>
      
      <motion.section 
        className="mb-12"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-semibold mb-4 text-teal-600">Our Mission</motion.h2>
        <motion.div variants={fadeIn} className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="mb-4 text-lg">
              WaremboUniqueOrg is dedicated to supporting and empowering individuals through advocacy, 
              education, and community building. We strive to create a world where everyone is 
              recognized, respected, and protected, regardless of their background or circumstances.
            </p>
            <p className="mb-4 text-lg">
              Our mission is to promote dignity, equality, and diversity. We fight against 
              stigma, discrimination, and violence, while advocating for policies that respect and protect 
              the rights and safety of all individuals in our community.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/placeholder.svg" 
              alt="WaremboUniqueOrg team in action" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </motion.div>
      </motion.section>
      
      <motion.section 
        className="mb-12"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-semibold mb-4 text-teal-600">Our Vision</motion.h2>
        <motion.div variants={fadeIn} className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <p className="mb-4 text-lg">
              We envision a society where all individuals are treated with dignity and respect, free from 
              stigma, discrimination, and violence. We work towards full recognition of human rights and 
              equal opportunities for everyone.
            </p>
            <p className="mb-4 text-lg">
              In our vision, everyone has access to comprehensive healthcare, legal protection, 
              financial services, and educational opportunities. They are able to live and work safely, 
              organize collectively, and participate fully in the decisions that affect their lives.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/placeholder.svg" 
              alt="Diverse group of people representing our vision" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </motion.div>
      </motion.section>
      
      <motion.section 
        className="mb-12"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-semibold mb-4 text-teal-600">Our History</motion.h2>
        <motion.div variants={fadeIn} className="relative">
          <div className="absolute h-full w-1 bg-teal-200 left-1/2 transform -translate-x-1/2"></div>
          {[
            { year: 2010, event: "Founded by a group of activists in response to increasing discrimination in our community." },
            { year: 2013, event: "Launched our first community outreach program, providing health services and legal support." },
            { year: 2016, event: "Established legal aid services, offering free consultations and representation in cases of abuse and discrimination." },
            { year: 2019, event: "Organized our first national conference, bringing together community members, allies, researchers, and policymakers." },
            { year: 2022, event: "Expanded services to include mental health support, recognizing the unique challenges faced by our community." },
            { year: 2023, event: "Launched online education and training programs to reach individuals in remote areas and during global crises." }
          ].map((item, index) => (
            <div key={item.year} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-1/2"></div>
              <div className="w-6 h-6 bg-teal-600 rounded-full border-4 border-teal-200 absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="w-1/2 p-4 rounded-lg shadow-md bg-white">
                <h3 className="font-bold text-teal-600">{item.year}</h3>
                <p>{item.event}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.section>
      
      <motion.section 
        className="mb-12"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-semibold mb-4 text-teal-600">Our Team</motion.h2>
        <motion.p variants={fadeIn} className="mb-4 text-lg">
          WaremboUniqueOrg is led by a diverse team of dedicated individuals, including community members, 
          allies, legal experts, healthcare professionals, and human rights advocates. Our leadership 
          and staff reflect the communities we serve, ensuring that our work is grounded in 
          real experiences and needs.
        </motion.p>
        <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Jane Doe", role: "Executive Director", image: "/placeholder.svg?height=200&width=200" },
            { name: "John Smith", role: "Legal Advisor", image: "/placeholder.svg?height=200&width=200" },
            { name: "Emily Chen", role: "Community Outreach Coordinator", image: "/placeholder.svg?height=200&width=200" },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <Image 
                src={member.image} 
                alt={member.name} 
                width={200} 
                height={200} 
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-teal-600">{member.role}</p>
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
        <h2 className="text-3xl font-semibold mb-4 text-teal-600 text-center">Join Our Cause</h2>
        <div className="bg-teal-50 p-8 rounded-lg shadow-lg text-center">
          <p className="mb-4 text-lg">
            We're always looking for passionate individuals to join our mission. Whether you want to volunteer, 
            donate, or spread awareness, there's a place for you in our community.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-colors"
          >
            Get Involved Today
          </a>
        </div>
      </motion.section>
    </div>
  )
}

