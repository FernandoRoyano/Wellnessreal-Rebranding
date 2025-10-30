'use client'

import Link from 'next/link'
import { useState } from 'react'
import Container from './Container'
import { Menu, X } from 'lucide-react'

const navigationItems = [
  { href: '/filosofia', label: 'Filosofía' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/tarifas', label: 'Tarifas' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header style={{ backgroundColor: '#16122B' }} className="sticky top-0 z-50 shadow-sm border-b" style={{ borderBottomColor: '#662D91' }}>
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-sans text-2xl font-bold">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg, #FCEE21 0%, #662D91 100%)' }}>
              W
            </div>
            <span style={{ color: '#FCEE21' }}>
              Wellness<span style={{ color: '#FCEE21' }}>Real</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg font-bold transition-all"
              style={{ backgroundColor: '#FCEE21', color: '#16122B' }}
            >
              Primera sesión gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-opacity-20"
            style={{ color: '#FCEE21' }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t" style={{ borderTopColor: '#662D91' }}>
            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-2 rounded-lg font-bold transition-all mt-2"
                style={{ backgroundColor: '#FCEE21', color: '#16122B' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Primera sesión gratis
              </Link>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}
