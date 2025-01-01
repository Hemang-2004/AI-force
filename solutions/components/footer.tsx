"use client"

import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react'

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
  { icon: Phone, href: '#', label: 'Phone' },
]

export function Footer() {
  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Glowing background */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social links */}
          <div className="flex gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
                aria-label={social.label}
              >
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
                <div className="relative h-12 w-12 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-white/20">
                  <social.icon className="h-5 w-5 text-white" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AI BPO Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

