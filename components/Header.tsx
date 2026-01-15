'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Startseite' },
    { href: '/services', label: 'Beratungen & Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/netzwerk', label: 'Bezirke' },
    { href: '/projektidee', label: 'Projektidee' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#7FBF97] shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative flex items-center group h-full">
            <div className="relative w-20 h-20 overflow-hidden flex items-center justify-center bg-white shadow-sm">
              <Image
                src="/fotos/portrait_1.png"
                alt="Logo Bewegungskoordinator"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute pointer-events-none" style={{ top: '15px', left: '30px', width: '90px', height: '90px' }}>
              <Image
                src="/logo/pfeil.png"
                alt="Hinweis-Pfeil"
                fill
                className="object-contain"
                sizes="90px"
                style={{ transform: 'rotate(-40deg)' }}
                quality={100}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-gray-900 hover:text-white hover:bg-[#6ba87f] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-900 hover:bg-[#6ba87f] hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#6ba87f]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-gray-900 hover:text-white hover:bg-[#6ba87f] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

