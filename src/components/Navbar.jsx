import React from 'react'
import { Menu, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#tech', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#9B59B6] to-[#4B70E2]" />
          <span className="text-sm sm:text-base font-semibold font-poppins text-gray-900">Nurkalam Abdurrahman</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-gray-700 hover:text-[#4B70E2] transition-colors text-sm font-medium">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:nurkalam@example.com" className="p-2 rounded-md hover:bg-gray-100 text-gray-700" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
          <a href="#" className="p-2 rounded-md hover:bg-gray-100 text-gray-700" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="p-2 rounded-md hover:bg-gray-100 text-gray-700" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        <button className="md:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
