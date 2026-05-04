'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Développement', href: '/services/developpement' },
  { label: 'Sites', href: '/services/sites' },
  { label: 'Automation', href: '/services/automation' },
  { label: 'NFC', href: '/services/nfc' },
  { label: 'Réalisations', href: '/portfolio' },
  { label: 'Offres', href: '/offres' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
        }}
      >
        <div
          className="container"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}
        >
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              color: '#1B3A5C',
              textDecoration: 'none',
              letterSpacing: '0.06em',
            }}
          >
            CONNECT WEB
          </Link>

          <nav className="hidden md:flex" style={{ gap: '28px', alignItems: 'center' }}>
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#1B3A5C',
                  textDecoration: 'none',
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="btn-primary"
                style={{ height: '40px', padding: '0 20px', fontSize: '14px' }}
              >
                Estimation gratuite
              </Link>
            </div>
            <button
              className="md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#1B3A5C',
                padding: '8px',
              }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 49,
            background: 'rgba(0, 0, 0, 0.4)',
          }}
        />
      )}

      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '280px',
          background: '#FFFFFF',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        aria-hidden={!open}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            height: '64px',
            borderBottom: '1px solid #E5E7EB',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '16px',
              fontWeight: 700,
              color: '#1B3A5C',
              letterSpacing: '0.06em',
            }}
          >
            CONNECT WEB
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1B3A5C',
            }}
          >
            <X size={22} />
          </button>
        </div>

        <nav style={{ flex: 1, overflowY: 'auto' }}>
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '16px 24px',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                color: '#1B3A5C',
                textDecoration: 'none',
                borderBottom: '1px solid #F3F4F6',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div style={{ padding: '24px', flexShrink: 0 }}>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Estimation gratuite
          </Link>
        </div>
      </div>
    </>
  )
}
