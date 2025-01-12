"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Home, LayoutDashboard, Calendar, Book, BarChart, Users, Settings } from 'lucide-react'

const links = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Scheduler', href: '/scheduler', icon: Calendar },
  { name: 'Knowledge Base', href: '/knowledge-base', icon: Book },
  { name: 'Reports', href: '/reports', icon: BarChart },
  { name: 'User Tracking', href: '/user-tracking', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function NavMenu() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center">
                <span className="text-black text-xl font-bold">AI</span>
              </div>
              <span className="text-xl font-bold text-white hidden md:inline">
                AI Workforce
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-md text-base font-medium transition-colors",
                  pathname === item.href
                    ? "text-yellow-400 bg-yellow-400/10"
                    : "text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="hidden md:inline">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

