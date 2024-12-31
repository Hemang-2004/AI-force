import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Company Logo" width={150} height={40} />
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
              <li><Link href="/features" className="text-gray-700 hover:text-blue-600">Features</Link></li>
              <li><Link href="/solutions" className="text-gray-700 hover:text-blue-600">Solutions</Link></li>
              <li><Link href="/technology" className="text-gray-700 hover:text-blue-600">Technology</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

