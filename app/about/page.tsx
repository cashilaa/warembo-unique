"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  const team = [
    {
      name: "Margaret Wamaitha",
      role: "Executive Director",
      bio: "With over 15 years of experience in community advocacy, Margaret has dedicated her life to empowering vulnerable communities. Her passion for social justice and community development has been the driving force behind Warembo Unique. Margaret believes in creating sustainable solutions that address the root causes of social challenges.",
      image: "/warembo 1.jpg",
    },
    {
      name: "Lisa Thompson",
      role: "Outreach Coordinator",
      bio: "Lisa brings a wealth of experience in community outreach and program development. Her innovative approach to connecting with community members has significantly expanded our reach. She is passionate about creating safe spaces where individuals can access support without judgment and find pathways to personal and economic empowerment.",
      image: "/warembo 2.jpg",
    },
  ]

  const values = [
    {
      title: "Dignity",
      description: "We believe in treating every individual with respect and dignity.",
      icon: "👤",
    },
    {
      title: "Empowerment",
      description: "We work to empower individuals to take control of their lives.",
      icon: "💪",
    },
    {
      title: "Community",
      description: "We build strong, supportive communities that lift each other up.",
      icon: "🤝",
    },
    {
      title: "Advocacy",
      description: "We advocate for policies that protect and support our community.",
      icon: "📢",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1>About WaremboUniqueOrg</h1>
            <p className="text-lg mb-8">
              Dedicated to empowering and supporting individuals through advocacy, resources, and community building
              since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h2>Our Mission</h2>
              <p>
                To empower and support individuals through comprehensive services, advocacy, and community building,
                ensuring dignity, respect, and equal opportunities for all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h2>Our Vision</h2>
              <p>
                A world where every individual has access to support, resources, and opportunities to thrive in a safe
                and inclusive environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-12">
            Our Values
          </motion.h2>
          <div className="grid grid-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-12">
            Our Team
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-36 h-36 rounded-full overflow-hidden shrink-0">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="object-cover"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <div className="text-lg font-medium mb-3">{member.role}</div>
                    <p>{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Description Section (Replacing Join Our Mission) */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card"
          >
            <h2 className="text-center mb-6">The Heart of Warembo Unique</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  Margaret and Lisa are the driving force behind Warembo Unique Organization. Their combined experience
                  in community development, advocacy, and outreach has enabled the organization to make a significant
                  impact in the lives of many.
                </p>
                <p>
                  Both leaders bring unique perspectives and complementary skills to the organization. Margaret's
                  strategic vision and Lisa's hands-on approach to community engagement create a powerful leadership
                  dynamic that has guided Warembo Unique through challenges and growth.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Their commitment to the organization's values of dignity, empowerment, community, and advocacy is
                  evident in every initiative they lead. They have built a team that shares their passion for creating
                  positive change.
                </p>
                <p>
                  Under their leadership, Warembo Unique has expanded its programs, reached more community members, and
                  strengthened its partnerships with other organizations and stakeholders. Their dedication continues to
                  inspire both the team and the community they serve.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
