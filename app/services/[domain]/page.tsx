import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { developpementData } from '@/lib/services/developpement'
import { sitesData } from '@/lib/services/sites'
import { automationData } from '@/lib/services/automation'
import { nfcData } from '@/lib/services/nfc'

const serviceMap = {
  developpement: developpementData,
  sites: sitesData,
  automation: automationData,
  nfc: nfcData,
} as const

type Domain = keyof typeof serviceMap

interface Props {
  params: Promise<{ domain: string }>
}

export async function generateStaticParams() {
  return Object.keys(serviceMap).map((domain) => ({ domain }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { domain } = await params
  const service = serviceMap[domain as Domain]
  if (!service) return {}
  return {
    title: service.meta.title,
    description: service.meta.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const { domain } = await params
  const service = serviceMap[domain as Domain]
  if (!service) notFound()

  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? '221779006282'
  const waLink = `https://wa.me/${whatsapp}?text=Bonjour%2C%20je%20souhaite%20une%20estimation%20pour%20${encodeURIComponent(service.hero.title.replace('\n', ' '))}`

  return (
    <main>
      {/* Bloc 1 — Hero */}
      <section style={{ minHeight: '70vh', background: '#0D1117', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <h1 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#E6EDF3', marginBottom: '24px', lineHeight: 1.1 }}>
              {service.hero.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
            <div style={{ display: 'inline-block', background: '#1B3A5C', color: '#E6EDF3', fontSize: '0.9rem', fontWeight: 600, padding: '6px 14px', borderRadius: '6px', marginBottom: '32px' }}>
              {service.hero.stat}
            </div>
            <div>
              <a href="/contact" className="btn-primary">{service.hero.cta} →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 2 — Intro */}
      <section className="section-base" style={{ background: '#161B22', borderTop: '1px solid #30363D' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <p style={{ fontSize: '1.2rem', color: '#E6EDF3', lineHeight: 1.8 }}>{service.intro}</p>
        </div>
      </section>

      {/* Bloc 3 — Sous-services */}
      <section className="section-base" style={{ background: '#0D1117' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#E6EDF3', marginBottom: '48px' }}>
            Ce qu&apos;on livre
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {service.subServices.map((sub) => (
              <div
                key={sub.title}
                style={{ background: '#161B22', border: '1px solid #30363D', borderRadius: '12px', padding: '28px' }}
              >
                <div style={{ color: '#E85D04', fontWeight: 700, fontSize: '1rem', marginBottom: '10px' }}>
                  {sub.title}
                </div>
                <p style={{ color: '#8B949E', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                  {sub.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloc 4 — Processus */}
      <section className="section-base" style={{ background: '#161B22' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#E6EDF3', marginBottom: '48px' }}>
            Notre processus
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {service.process.map((step) => (
              <div key={step.step} style={{ borderLeft: '3px solid #E85D04', paddingLeft: '20px' }}>
                <div style={{ color: '#E85D04', fontWeight: 700, fontSize: '0.85rem', marginBottom: '8px' }}>
                  0{step.step}
                </div>
                <div style={{ color: '#E6EDF3', fontWeight: 600, marginBottom: '8px' }}>{step.title}</div>
                <p style={{ color: '#8B949E', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloc 5 — Réalisations liées */}
      <section className="section-base" style={{ background: '#0D1117' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#E6EDF3', marginBottom: '32px' }}>
            Projets réalisés
          </h2>
          <div style={{ color: '#8B949E', marginBottom: '32px' }}>
            Projets filtrés par domaine — en cours d&apos;intégration.
          </div>
          <a href="/portfolio" className="btn-ghost">Voir tous les projets →</a>
        </div>
      </section>

      {/* Bloc 6 — FAQ */}
      <section className="section-base" style={{ background: '#161B22' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#E6EDF3', marginBottom: '40px' }}>
            Questions fréquentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {service.faq.map((item) => (
              <div key={item.question} style={{ background: '#1C2128', border: '1px solid #30363D', borderRadius: '10px', padding: '24px' }}>
                <div style={{ color: '#E6EDF3', fontWeight: 600, marginBottom: '10px' }}>{item.question}</div>
                <p style={{ color: '#8B949E', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloc 7 — CTA Final */}
      <section style={{ background: '#E85D04', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#FFFFFF', marginBottom: '16px' }}>
            Démarrez votre projet maintenant
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '36px', fontSize: '1.05rem' }}>
            Estimation gratuite sous 24h. Réponse garantie.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/contact"
              style={{ background: '#FFFFFF', color: '#E85D04', fontWeight: 700, fontSize: '15px', height: '52px', padding: '0 32px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', textDecoration: 'none', transition: 'all 0.2s ease' }}
            >
              Estimation gratuite →
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.5)', color: '#FFFFFF', fontWeight: 600, fontSize: '15px', height: '52px', padding: '0 32px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', textDecoration: 'none', transition: 'all 0.2s ease' }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
