import Link from 'next/link'

const navServices = [
  ['Applications web & mobile', '/services/developpement'],
  ['E-commerce', '/services/sites'],
  ['ERP & automatisation', '/services/automation'],
  ['Solutions NFC', '/services/nfc'],
  ['Logiciels SaaS', '/contact'],
] as const

const navCompany = [
  ['Process', '/#process'],
  ['Packages', '/offres'],
  ['Réalisations', '/portfolio'],
  ['Contact', '/contact'],
] as const

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--surface)' }}>
      <div className="container" style={{ paddingBlock: 'clamp(56px, 8vw, 80px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
          }}
        >
          {/* Col 1 — Identity */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '18px',
                fontWeight: 400,
                color: 'var(--surface)',
                display: 'block',
                marginBottom: '12px',
                letterSpacing: '0.02em',
              }}
            >
              Connect WebTech
            </span>
            <p
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '12px',
                color: 'oklch(92% 0.008 85 / 0.45)',
                lineHeight: 1.65,
                margin: '0 0 16px',
                maxWidth: '200px',
              }}
            >
              Agence technique
              <br />
              Dakar, Sénégal
            </p>
            <a
              href="mailto:contact@connect-web.tech"
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '12px',
                color: 'var(--accent)',
                textDecoration: 'none',
              }}
            >
              contact@connect-web.tech
            </a>
          </div>

          {/* Col 2 — Services */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: 'oklch(92% 0.008 85 / 0.35)',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              Services
            </span>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navServices.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="footer-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Navigation */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: 'oklch(92% 0.008 85 / 0.35)',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              Navigation
            </span>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navCompany.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="footer-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid oklch(92% 0.008 85 / 0.08)' }}>
        <div
          className="container"
          style={{
            paddingBlock: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '11px',
              color: 'oklch(92% 0.008 85 / 0.30)',
              margin: 0,
            }}
          >
            © 2025 Connect WebTech · Dakar, Sénégal
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '11px',
              color: 'oklch(92% 0.008 85 / 0.20)',
              margin: 0,
              textAlign: 'right',
            }}
          >
            NINEA 011990604 · RCCM SN DKR 2025 A 10391
          </p>
        </div>
      </div>
    </footer>
  )
}
