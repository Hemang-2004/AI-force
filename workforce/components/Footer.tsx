import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>Email: info@aibpo.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>123 AI Street, Tech City, TC 12345</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li><Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-blue-400">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

