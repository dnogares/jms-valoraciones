'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/',          label: 'Inicio' },
  { href: '/sobre-mi',  label: 'Sobre mí' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/contacto',  label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-verde-800 text-xl tracking-tight">
          <span className="text-verde-600">JMS</span>
          <span className="text-gray-700 font-normal text-base hidden sm:inline">Valoraciones</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-verde-700 border-b-2 border-verde-700 pb-0.5'
                  : 'text-gray-600 hover:text-verde-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:+34653350031"
          className="hidden md:flex items-center gap-2 bg-verde-700 hover:bg-verde-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <Phone size={15} />
          653 35 00 31
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-base font-medium ${
                pathname === link.href ? 'text-verde-700' : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+34653350031"
            className="flex items-center gap-2 text-verde-700 font-semibold"
          >
            <Phone size={16} /> 653 35 00 31
          </a>
        </div>
      )}
    </header>
  )
}
