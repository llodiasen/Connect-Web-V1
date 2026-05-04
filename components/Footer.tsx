import Link from 'next/link'

const services = [
  ['Développement', '/services/developpement'],
  ['Sites Internet', '/services/sites'],
  ['Automation & IA', '/services/automation'],
  ['Solutions NFC', '/services/nfc'],
] as const

const company = [
  ['À propos', '/about'],
  ['Portfolio', '/portfolio'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
] as const

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-inter), sans-serif',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.45)',
  marginBottom: '16px',
  display: 'block',
}

const linkStyle: React.CSSProperties = {
  fontSize: '14px',
  color: 'rgba(255,255,255,0.72)',
  textDecoration: 'none',
  lineHeight: 1.5,
}

const listStyle: React.CSSProperties = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}

export default function Footer() {
  return (
    <footer style={{ background: '#1B3A5C', color: '#FFFFFF' }}>
      <div className="container" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '40px' }}
        >
          {/* Col 1 — Logo + tagline */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                display: 'block',
                marginBottom: '12px',
              }}
            >
              CONNECT WEB
            </span>
            <p
              style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.65,
                margin: 0,
                maxWidth: '200px',
              }}
            >
              Agence digitale dakaroise — sites, apps & automatisation.
            </p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <span style={labelStyle}>Services</span>
            <ul style={listStyle}>
              {services.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} style={linkStyle}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Entreprise */}
          <div>
            <span style={labelStyle}>Entreprise</span>
            <ul style={listStyle}>
              {company.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} style={linkStyle}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <span style={labelStyle}>Contact</span>
            <ul style={listStyle}>
              <li>
                <a href="tel:+221779006282" style={linkStyle}>
                  +221 77 900 62 82
                </a>
              </li>
              <li>
                <a href="mailto:contact@connect-web.tech" style={linkStyle}>
                  contact@connect-web.tech
                </a>
              </li>
              <li>
                <span style={{ ...linkStyle, cursor: 'default' }}>
                  G49 Scat Urbam, Dakar
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div
          className="container"
          style={{
            paddingBlock: '18px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', margin: 0 }}>
            © 2025 Connect Web
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', margin: 0, textAlign: 'right' }}>
            NINEA 011990604 · RCCM SN DKR 2025 A 10391
          </p>
        </div>
      </div>
    </footer>
  )
}
