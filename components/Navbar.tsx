'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '/services/developpement' },
  { label: 'Process', href: '/#process' },
  { label: 'Packages', href: '/offres' },
  { label: 'Réalisations', href: '/portfolio' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'var(--surface)',
          borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
          transition: 'border-color 200ms ease-out',
        }}
      >
        <div
          className="container"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: '18px',
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: 'var(--ink)',
              textDecoration: 'none',
            }}
          >
            Connect WebTech
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex"
            style={{ gap: '36px', alignItems: 'center' }}
          >
            {navLinks.map(({ label, href }) => (
              <Link key={href} href={href} className="nav-link">
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="btn-primary"
                style={{ height: '38px', padding: '0 20px', fontSize: '14px' }}
              >
                Décrire mon projet
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
                color: 'var(--ink)',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 49,
            background: 'oklch(18% 0.015 260 / 0.5)',
          }}
        />
      )}

      {/* Mobile drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '280px',
          background: 'var(--surface)',
          borderLeft: '1px solid var(--line)',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms cubic-bezier(0.25, 0, 0, 1)',
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
            borderBottom: '1px solid var(--line)',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: '18px',
              fontWeight: 400,
              color: 'var(--ink)',
            }}
          >
            Connect WebTech
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--ink-muted)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={20} />
          </button>
        </div>

        <nav style={{ flex: 1, overflowY: 'auto', paddingTop: '8px' }}>
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '14px 24px',
                fontFamily: 'var(--font-instrument), system-ui, sans-serif',
                fontSize: '15px',
                fontWeight: 400,
                color: 'var(--ink)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--line)',
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
            Décrire mon projet
          </Link>
        </div>
      </div>
    </>
  )
}
