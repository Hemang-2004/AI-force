"use client"

import Link from 'next/link'

export function NavMenu() {
  return (
    <nav className="flex items-center space-x-8">
      {[
        { name: 'Home', href: '#' },
        { name: 'Features', href: '#features' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
      ].map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-300"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

