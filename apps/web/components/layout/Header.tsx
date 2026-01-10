'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Les Chiffres', href: '/messages' },
  { name: 'Paris', href: '/donnees' },
  { name: 'Programme', href: '/programme' },
  { name: 'S\'engager', href: '/engagement' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-reconquete-navy sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-white font-display text-xl font-bold">
                Sarah Knafo
              </span>
              <span className="text-reconquete-gold text-sm font-semibold">
                2026
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-reconquete-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/engagement"
              className="bg-reconquete-red hover:bg-reconquete-red-light text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Je soutiens
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-reconquete-gold py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/engagement"
                className="block bg-reconquete-red hover:bg-reconquete-red-light text-white px-4 py-2 rounded-lg font-semibold text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Je soutiens
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
