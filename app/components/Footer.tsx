import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">WaremboUniqueOrg</h3>
          <p>Supporting and empowering individuals through advocacy, resources, and community.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-teal-300 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-teal-300 transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-teal-300 transition-colors">What We Offer</Link></li>
            <li><Link href="/contact" className="hover:text-teal-300 transition-colors">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-teal-300 transition-colors">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <ul className="space-y-2">
            <li>Email: contact@waremboorg.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: PO Box 12345, City, State, ZIP</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; 2023 WaremboUniqueOrg. All rights reserved.</p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li><Link href="/privacy" className="hover:text-teal-300 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-teal-300 transition-colors">Terms of Service</Link></li>
            <li><Link href="/safety" className="hover:text-teal-300 transition-colors">Safety Tips</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

