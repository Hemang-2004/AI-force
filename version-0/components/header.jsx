import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    (<header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">AI BPO Solutions</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/placeholder.svg?height=40&width=120"
                alt="AI BPO Solutions Logo" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              href="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link
              href="/features"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
              Features
            </Link>
            <Link
              href="/solutions"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
              Solutions
            </Link>
            <Link
              href="/technology"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
              Technology
            </Link>
            <Link
              href="/contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact Us
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>)
  );
}

