'use client'

import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Safety() {
  return (
    <div className="container mx-auto px-4">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-teal-700 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        Safety Tips
      </motion.h1>
      
      <motion.section 
        className="mb-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-2xl font-semibold mb-4 text-teal-600">Personal Safety</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Always trust your instincts. If a situation feels unsafe, it probably is.</li>
          <li>Keep your personal information private. Be cautious about sharing details online or with new acquaintances.</li>
          <li>Use a buddy system when possible, especially in unfamiliar situations or locations.</li>
          <li>Have an exit strategy. Always know how to leave a situation quickly if needed.</li>
          <li>Keep your phone charged and easily accessible. Consider having an emergency contact on speed dial.</li>
        </ul>
      </motion.section>

      <motion.section 
        className="mb-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-2xl font-semibold mb-4 text-teal-600">Online Safety</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use strong, unique passwords for all your accounts. Consider using a password manager.</li>
          <li>Be cautious about clicking on links or downloading attachments from unknown sources.</li>
          <li>Use privacy settings on social media to control who can see your information.</li>
          <li>Be aware of phishing scams. Don't share sensitive information via email or unsecured websites.</li>
          <li>Consider using a VPN for added privacy when browsing online.</li>
        </ul>
      </motion.section>

      <motion.section 
        className="mb-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-2xl font-semibold mb-4 text-teal-600">Health and Wellness</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Regular health check-ups are important. Don't neglect your physical or mental health.</li>
          <li>Practice safe sex. Use protection and get regular STI screenings.</li>
          <li>Be aware of the signs of burnout and compassion fatigue. Take breaks and practice self-care regularly.</li>
          <li>Stay hydrated and maintain a balanced diet to support your overall health.</li>
          <li>Engage in regular physical activity to reduce stress and improve mental well-being.</li>
        </ul>
      </motion.section>

      <motion.section 
        className="mb-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-2xl font-semibold mb-4 text-teal-600">Community Safety</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Look out for one another. If you see someone in distress, offer help or alert authorities if necessary.</li>
          <li>Report suspicious activities or behavior to the appropriate channels.</li>
          <li>Participate in community safety workshops and training sessions when available.</li>
          <li>Know your rights and the local laws that affect you and your community.</li>
          <li>Build a support network. Having people you can trust and rely on is crucial for overall safety and well-being.</li>
        </ul>
      </motion.section>

      <motion.section 
        className="mb-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h2 className="text-2xl font-semibold mb-4 text-teal-600">Emergency Preparedness</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Keep an emergency contact list easily accessible.</li>
          <li>Know the location of the nearest hospital, police station, and safe spaces in your area.</li>
          <li>Consider creating an emergency kit with essential items like first aid supplies, flashlight, and important documents.</li>
          <li>Familiarize yourself with basic first aid and CPR techniques.</li>
          <li>Have a plan for various emergency scenarios, including natural disasters specific to your area.</li>
        </ul>
      </motion.section>

      <motion.div 
        className="bg-teal-100 border-l-4 border-teal-500 text-teal-700 p-4 mb-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <p className="font-bold">Remember:</p>
        <p>Your safety is paramount. These tips are general guidelines, and it's important to adapt them to your specific situation. If you ever feel unsafe or in danger, don't hesitate to seek help from trusted individuals or professional services.</p>
      </motion.div>
    </div>
  )
}

