import { projects } from '@/lib/projects'

export const metadata = {
  title: 'Portfolio — 14 projets livrés | Connect Web Dakar',
  description: 'Découvrez les sites web, applications et solutions digitales livrées par Connect Web à Dakar et en Afrique de l\'Ouest.',
}

const domains = [
  { key: 'all', label: 'Tous' },
  { key: 'sites', label: 'Sites' },
  { key: 'developpement', label: 'Développement' },
  { key: 'automation', label: 'Automation & IA' },
  { key: 'nfc', label: 'Solutions NFC' },
]

export default function PortfolioPage() {
  return (
    <main className="section-base" style={{ background: '#0D1117', minHeight: '100vh' }}>
      <div className="container">
        <h1 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#E6EDF3', marginBottom: '16px' }}>
          14+ projets livrés
        </h1>
        <p style={{ color: '#8B949E', marginBottom: '48px', fontSize: '1.05rem' }}>
          Sites, apps, automatisations et solutions NFC pour des PME à Dakar et en Afrique de l&apos;Ouest.
        </p>

        {/* Filtres */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {domains.map((d) => (
            <button
              key={d.key}
              style={{
                background: '#161B22',
                border: '1px solid #30363D',
                color: '#E6EDF3',
                padding: '8px 18px',
                borderRadius: '6px',
                fontSize: '0.875rem',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Grille projets */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                background: '#161B22',
                border: '1px solid #30363D',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              {/* Image placeholder */}
              <div style={{ height: '180px', background: '#1C2128', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#30363D', fontSize: '0.8rem' }}>Image projet</span>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ color: '#E85D04', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                  {project.domain}
                </div>
                <h3 style={{ color: '#E6EDF3', fontWeight: 600, fontSize: '1rem', marginBottom: '8px' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#8B949E', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  {project.description}
                </p>
                <div style={{ background: '#0D1117', borderRadius: '6px', padding: '10px 14px', fontSize: '0.85rem', color: '#E85D04', fontWeight: 600 }}>
                  {project.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <a href="/contact" className="btn-primary">Démarrer mon projet →</a>
        </div>
      </div>
    </main>
  )
}
