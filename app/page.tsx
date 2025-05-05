"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Force video reload on component mount
    if (videoRef.current) {
      const video = videoRef.current
      video.load()
    }
  }, [])

  const stats = [
    { number: "1000+", label: "Lives Impacted" },
    { number: "50+", label: "Community Programs" },
    { number: "10+", label: "Years Experience" },
    { number: "100+", label: "Partners Worldwide" },
  ]

  const services = [
    {
      title: "Health Services",
      description:
        "Comprehensive healthcare support, including medical check-ups, STI screening, mental health counseling, and holistic wellness programs.",
      icon: "🏥",
      link: "/services/health",
    },
    {
      title: "Legal Protection",
      description:
        "Professional legal assistance, rights education, protection from discrimination, and advocacy for decriminalization and worker safety.",
      icon: "⚖️",
      link: "/services/legal",
    },
    {
      title: "Skills & Education",
      description:
        "Empowerment through skill development, vocational training, financial literacy, and alternative career pathway programs.",
      icon: "📚",
      link: "/services/education",
    },
    {
      title: "Community Support",
      description:
        "Safe spaces, peer support networks, counseling, crisis intervention, and resources for personal and professional growth.",
      icon: "🤝",
      link: "/services/community",
    },
  ]

  const testimonials = [
    {
      quote:
        "This organization gave me hope when I thought I had none. They didn't just provide support; they helped me rebuild my life.",
      name: "Maria S.",
      role: "Community Member",
    },
    {
      quote:
        "The legal aid and health services have been life-changing. I feel safer and more empowered than ever before.",
      name: "Alex T.",
      role: "Advocate",
    },
  ]

  const keyInitiatives = [
    {
      title: "Rights Awareness Campaign",
      description: "Educating the public and policymakers about sex workers' rights and challenging stigma.",
      icon: "👥",
    },
    {
      title: "Health Access Program",
      description: "Providing free and confidential health screenings and mental health support.",
      icon: "❤️",
    },
    {
      title: "Skills Empowerment",
      description: "Offering vocational training and career development resources.",
      icon: "💪",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content"
          >
            <h1>Dignity, Safety, and Empowerment for All</h1>
            <p>
              We are a dedicated organization committed to supporting, protecting, and empowering sex workers through
              comprehensive services, advocacy, and community-driven initiatives.
            </p>
            <div className="hero-cta">
              <Link href="/about" className="btn btn-primary">
                Our Mission
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Image Section */}
      <section className="community-image-section py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="image-container"
            >
              <Image
                src="/warembo15.jpg?height=400&width=600"
                alt="Our community coming together"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="community-content"
            >
              <h3 className="text-2xl font-bold mb-4">Our Community</h3>
              <p className="mb-4">
                At Warembo Unique, we believe in the power of community. Our gatherings bring together individuals from
                all walks of life, creating a supportive environment where everyone can thrive.
              </p>
              <p className="mb-4">
                Through our community programs, we foster connections, build trust, and create opportunities for growth
                and empowerment. Together, we work towards a future where everyone is treated with dignity and respect.
              </p>
              <p>
                Our community members support each other through challenges and celebrate successes together, creating a
                network of care that extends beyond our physical spaces.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="stat-card"
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beadwork Video Section */}
      <section className="beadwork-section py-16">
        <div className="container">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-title text-center mb-8">
            Our Beadwork Program
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="video-container"
            >
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <video ref={videoRef} controls preload="auto" className="w-full h-full object-cover">
                  <source src="/warembo34.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="beadwork-content"
            >
              <h3 className="text-2xl font-bold mb-4">Traditional Beadwork Skills</h3>
              <p className="mb-4">
                Our beadwork program is a cornerstone of our skills development initiative, preserving cultural heritage
                while creating economic opportunities. Participants learn traditional beading techniques passed down
                through generations.
              </p>
              <p className="mb-4">
                Through this program, we not only teach valuable crafting skills but also provide a therapeutic creative
                outlet and a path to financial independence. The intricate beadwork pieces created by our community
                members are sold in local markets and through our online store.
              </p>
              <p>
                Each piece tells a story of resilience, creativity, and cultural pride. The income generated supports
                the artisans and helps fund our community programs.
              </p>
              {/* Link removed as requested */}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="beadwork-image-container mt-12 grid md:grid-cols-2 gap-8 items-center"
          >
            <div>
              <Image
                src="/warembo16.jpg?height=400&width=600"
                alt="Community members creating beadwork"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">The Art of Beadwork</h3>
              <p className="mb-4">
                Beadwork is more than just a craft—it's an art form that connects our community to their cultural roots
                while providing sustainable income opportunities.
              </p>
              <p>
                Our skilled artisans create beautiful beadwork pieces that celebrate our cultural heritage and showcase
                the incredible talent within our community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-title">
            Comprehensive Support Services
          </motion.h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={service.link} className="service-link">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="initiatives-section">
        <div className="container">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-title">
            Our Key Initiatives
          </motion.h2>
          <div className="initiatives-grid">
            {keyInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="initiative-card"
              >
                <div className="initiative-icon">{initiative.icon}</div>
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="section-title">
            Voices of Empowerment
          </motion.h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="testimonial-card"
              >
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <span className="testimonial-name">{testimonial.name}</span>
                  <span className="testimonial-role">{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="cta-card"
          >
            <h2>Be the Change</h2>
            <p>
              Your support can transform lives. Whether through volunteering, donation, or spreading awareness, you can
              make a meaningful impact.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-secondary">
                Volunteer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
