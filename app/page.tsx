import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import FAQ from '@/components/ui/FAQ'

/* ── 04 Services data ─────────────────────────────────────────────── */
const services = [
  {
    num: '01',
    title: 'Applications web & mobile',
    desc: "Vous avez un process qui fonctionne. On le transforme en produit.",
    stack: 'Next.js · React · React Native · Node.js',
    cta: 'Voir des cas clients',
    href: '/portfolio',
    wide: true,
  },
  {
    num: '02',
    title: 'E-commerce & boutique',
    desc: "Vendre en ligne au Sénégal, c'est résoudre le paiement mobile en premier.",
    stack: 'Shopify · WooCommerce · Stripe · Mobile Money',
    cta: 'Voir les boutiques livrées',
    href: '/portfolio',
    wide: false,
  },
  {
    num: '03',
    title: 'ERP & automatisation',
    desc: "Moins de tableurs. Moins d'emails. Moins d'erreurs.",
    stack: 'Odoo · HubSpot · API REST · Webhooks',
    cta: 'Parler d\'un projet Odoo',
    href: '/contact',
    wide: false,
  },
  {
    num: '04',
    title: 'Logiciels SaaS',
    desc: "De l'idée à la plateforme multi-tenant. Pas de MVP fragile.",
    stack: 'TypeScript · PostgreSQL · Vercel · multi-tenant',
    cta: 'Discuter de votre SaaS',
    href: '/contact',
    wide: false,
  },
  {
    num: '05',
    title: 'Sites vitrine & landing pages',
    desc: "Un site qui charge en 1,2 seconde sur 4G médiocre.",
    stack: 'Next.js · Sanity CMS · SEO technique · Lighthouse 95+',
    cta: 'Voir les performances',
    href: '/portfolio',
    wide: false,
  },
]

/* ── 05 Process steps ─────────────────────────────────────────────── */
const steps = [
  {
    n: '01',
    title: 'Analyse stratégique',
    period: 'Semaine 1',
    desc: "Avant d'écrire une ligne de code, on comprend votre business. Vos vrais utilisateurs, vos contraintes actuelles, ce qui a déjà échoué. Le livrable : un document de 3 pages que vous gardez.",
  },
  {
    n: '02',
    title: 'Conception produit',
    period: 'Semaines 2–3',
    desc: "Architecture de l'information, maquettes interactives, validation UX. Vous voyez ce qu'on va construire avant qu'on le construise.",
  },
  {
    n: '03',
    title: 'Développement & intégration',
    period: 'Semaines 4–N',
    desc: "Cycles courts, déploiements en continu sur environnement de staging. Vous testez sur votre téléphone chaque semaine.",
  },
  {
    n: '04',
    title: 'Déploiement & évolution',
    period: 'Livraison + 90 jours',
    desc: "Mise en production, formation de votre équipe, support réactif. Le projet ne s'arrête pas à la facture finale.",
  },
]

/* ── 06 Tech stacks ───────────────────────────────────────────────── */
const techRow1 = ['Next.js', 'React', 'React Native', 'Node.js', 'TypeScript', 'PostgreSQL', 'Vercel']
const techRow2 = ['Shopify', 'WooCommerce', 'Odoo', 'HubSpot', 'Sanity', 'Stripe', 'Tailwind']

/* ── 08 Testimonials ──────────────────────────────────────────────── */
const testimonials = [
  {
    quote: "En quatre mois, notre boutique en ligne génère 40% de notre chiffre mensuel. Ce que j'aurais mis deux ans à construire seul.",
    name: 'Karim D.',
    role: 'Directeur commercial',
    company: 'Maison Thiossane',
  },
  {
    quote: "Ils nous ont livré un ERP Odoo opérationnel en six semaines. Et quand quelque chose ne fonctionnait pas, ils répondaient le jour même.",
    name: 'Aminata S.',
    role: 'Directrice générale',
    company: 'Optorg Sénégal',
  },
]

/* ═══════════════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <main>

      {/* ── 01 HERO ──────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100svh',
          background: 'var(--hero-wash)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Grid lines */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(oklch(18% 0.015 260 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(18% 0.015 260 / 0.04) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            pointerEvents: 'none',
          }}
        />
        {/* Grain */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: '200px 200px',
            opacity: 0.025,
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBlock: '120px' }}>
          {/* Badge */}
          <div
            className="hero-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid var(--accent)',
              borderRadius: '4px',
              padding: '5px 12px',
              marginBottom: '48px',
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '11px',
              letterSpacing: '0.08em',
              color: 'var(--accent)',
            }}
          >
            Agence technique · Dakar
          </div>

          {/* Title */}
          <h1
            className="hero-title"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(52px, 7vw, 96px)',
              fontWeight: 300,
              lineHeight: 1.05,
              color: 'var(--ink)',
              maxWidth: '820px',
              marginBottom: '32px',
              letterSpacing: '-0.01em',
            }}
          >
            Votre produit digital,{' '}
            <br />
            livré et{' '}
            <strong style={{ fontWeight: 600 }}>utilisé.</strong>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-sub"
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '15px',
              lineHeight: 1.65,
              color: 'var(--ink-muted)',
              maxWidth: '480px',
              marginBottom: '48px',
            }}
          >
            Nous construisons des systèmes qui fonctionnent
            <br />
            quand nous ne sommes plus là.
          </p>

          {/* CTAs */}
          <div
            className="hero-cta"
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <Link href="/contact" className="btn-primary">
              Décrire mon projet
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              Voir le travail
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="hero-scroll"
          style={{
            position: 'absolute',
            bottom: '40px',
            right: 'clamp(24px, 5vw, 80px)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-dm-mono), monospace',
            fontSize: '11px',
            letterSpacing: '0.06em',
            color: 'var(--ink-subtle)',
          }}
        >
          Scroll pour voir le travail
          <span className="scroll-arrow" style={{ display: 'block', lineHeight: 1 }}>↓</span>
        </div>
      </section>

      {/* ── 02 TENSION / PREUVE SOCIALE ──────────────────────────── */}
      <section style={{ background: 'var(--surface-2)', paddingBlock: '72px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <p
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(22px, 3vw, 30px)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--ink)',
                marginBottom: '28px',
                lineHeight: 1.4,
              }}
            >
              47 entreprises sénégalaises ont arrêté de repousser leur projet digital.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p
              style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '12px',
                letterSpacing: '0.06em',
                color: 'var(--ink-subtle)',
              }}
            >
              SATECI · Maison Thiossane · Optorg Sénégal · Groupe CGF · Pathé Outillage
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 03 POSITIONNEMENT ÉDITORIAL ──────────────────────────── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '680px', marginInline: 'auto' }}>
            <Reveal>
              <span className="label" style={{ display: 'block', marginBottom: '24px' }}>
                Notre position
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(32px, 4vw, 46px)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: 'var(--ink)',
                  marginBottom: '40px',
                }}
              >
                Le problème n&apos;est pas le budget.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <div
                style={{
                  fontFamily: 'var(--font-instrument), system-ui, sans-serif',
                  fontSize: '17px',
                  lineHeight: 1.75,
                  color: 'var(--ink)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                }}
              >
                <p style={{ margin: 0 }}>
                  La plupart des projets digitaux échouent entre la livraison et l&apos;usage. Un site est livré, il est beau, il est en ligne — et six mois plus tard, personne ne sait comment mettre à jour une page, les ventes n&apos;ont pas bougé, et l&apos;agence ne répond plus.
                </p>
                <p style={{ margin: 0 }}>
                  Nous ne livrons pas des sites. Nous construisons des systèmes qui fonctionnent quand nous ne sommes plus là. Ça change ce qu&apos;on construit, comment on le construit, et ce qu&apos;on facture.
                </p>
                <p style={{ margin: 0 }}>
                  Connect WebTech est une équipe technique basée à Dakar. Nous travaillons avec des entreprises qui ont un problème précis — pas un &laquo;&nbsp;besoin de visibilité.&nbsp;&raquo; Si vous cherchez le devis le moins cher, nous ne sommes probablement pas le bon choix.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 04 SERVICES ──────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--surface-2)' }}>
        <div className="container">
          <Reveal style={{ marginBottom: '56px' }}>
            <span className="label" style={{ display: 'block', marginBottom: '16px' }}>
              Services
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(30px, 4vw, 46px)',
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1.15,
              }}
            >
              Ce qu&apos;on construit.
            </h2>
          </Reveal>

          {/* Main grid */}
          <div className="services-grid">
            {/* Wide card: Applications — spans 2 */}
            <Reveal
              delay={0}
              className="service-card service-wide"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '32px',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '11px',
                letterSpacing: '0.06em',
                color: 'var(--ink-subtle)',
                marginBottom: '16px',
              }}>
                01
              </div>
              <h3 style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: '26px',
                fontWeight: 400,
                color: 'var(--ink)',
                marginBottom: '12px',
                lineHeight: 1.2,
              }}>
                Applications web & mobile
              </h3>
              <p style={{
                fontFamily: 'var(--font-instrument), system-ui, sans-serif',
                fontSize: '14px',
                color: 'var(--ink-muted)',
                marginBottom: '20px',
                lineHeight: 1.6,
              }}>
                Vous avez un process qui fonctionne. On le transforme en produit.
              </p>
              <p style={{
                fontFamily: 'var(--font-dm-mono), monospace',
                fontSize: '11px',
                color: 'var(--ink-subtle)',
                marginBottom: '24px',
                letterSpacing: '0.02em',
              }}>
                Next.js · React · React Native · Node.js
              </p>
              <Link
                href="/portfolio"
                style={{
                  fontFamily: 'var(--font-instrument), system-ui, sans-serif',
                  fontSize: '13px',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                Voir des cas clients <span className="card-arrow">→</span>
              </Link>
            </Reveal>

            {/* E-commerce */}
            <Reveal
              delay={80}
              className="service-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '32px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', letterSpacing: '0.06em', color: 'var(--ink-subtle)', marginBottom: '16px' }}>02</div>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '22px', fontWeight: 400, color: 'var(--ink)', marginBottom: '12px', lineHeight: 1.2 }}>
                E-commerce & boutique
              </h3>
              <p style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '14px', color: 'var(--ink-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                Vendre en ligne au Sénégal, c&apos;est résoudre le paiement mobile en premier.
              </p>
              <p style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', color: 'var(--ink-subtle)', marginBottom: '24px' }}>
                Shopify · WooCommerce · Stripe · Mobile Money
              </p>
              <Link href="/portfolio" style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '13px', color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Voir les boutiques <span className="card-arrow">→</span>
              </Link>
            </Reveal>

            {/* ERP */}
            <Reveal
              delay={0}
              className="service-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '32px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', letterSpacing: '0.06em', color: 'var(--ink-subtle)', marginBottom: '16px' }}>03</div>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '22px', fontWeight: 400, color: 'var(--ink)', marginBottom: '12px', lineHeight: 1.2 }}>
                ERP & automatisation
              </h3>
              <p style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '14px', color: 'var(--ink-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                Moins de tableurs. Moins d&apos;emails. Moins d&apos;erreurs.
              </p>
              <p style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', color: 'var(--ink-subtle)', marginBottom: '24px' }}>
                Odoo · HubSpot · API REST · Webhooks
              </p>
              <Link href="/contact" style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '13px', color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Parler d&apos;un projet Odoo <span className="card-arrow">→</span>
              </Link>
            </Reveal>

            {/* SaaS */}
            <Reveal
              delay={80}
              className="service-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '32px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', letterSpacing: '0.06em', color: 'var(--ink-subtle)', marginBottom: '16px' }}>04</div>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '22px', fontWeight: 400, color: 'var(--ink)', marginBottom: '12px', lineHeight: 1.2 }}>
                Logiciels SaaS
              </h3>
              <p style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '14px', color: 'var(--ink-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                De l&apos;idée à la plateforme multi-tenant. Pas de MVP fragile.
              </p>
              <p style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', color: 'var(--ink-subtle)', marginBottom: '24px' }}>
                TypeScript · PostgreSQL · Vercel · multi-tenant
              </p>
              <Link href="/contact" style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '13px', color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Discuter de votre SaaS <span className="card-arrow">→</span>
              </Link>
            </Reveal>

            {/* Sites — spans 1 */}
            <Reveal
              delay={160}
              className="service-card"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '32px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', letterSpacing: '0.06em', color: 'var(--ink-subtle)', marginBottom: '16px' }}>05</div>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '22px', fontWeight: 400, color: 'var(--ink)', marginBottom: '12px', lineHeight: 1.2 }}>
                Sites vitrine & landing pages
              </h3>
              <p style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '14px', color: 'var(--ink-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                Un site qui charge en 1,2 seconde sur 4G médiocre.
              </p>
              <p style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', color: 'var(--ink-subtle)', marginBottom: '24px' }}>
                Next.js · Sanity · SEO technique · Lighthouse 95+
              </p>
              <Link href="/portfolio" style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '13px', color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Voir les performances <span className="card-arrow">→</span>
              </Link>
            </Reveal>

            {/* NFC — full width */}
            <Reveal
              delay={80}
              className="service-card service-wide service-nfc"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: '12px',
                padding: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '32px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', letterSpacing: '0.06em', color: 'var(--ink-subtle)', marginBottom: '12px' }}>06</div>
                <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '22px', fontWeight: 400, color: 'var(--ink)', marginBottom: '8px' }}>
                  Solutions NFC
                </h3>
                <p style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '14px', color: 'var(--ink-muted)', margin: 0, maxWidth: '420px', lineHeight: 1.6 }}>
                  Cartes de visite, menus, badging — avec un dashboard temps réel derrière.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
                <p style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', color: 'var(--ink-subtle)', margin: 0 }}>
                  NFC · QR Code · Dashboard analytics · temps réel
                </p>
                <Link href="/contact" style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '13px', color: 'var(--accent)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
                  Voir une démo <span className="card-arrow">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 05 PROCESS ───────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal style={{ marginBottom: '64px' }}>
            <span className="label" style={{ display: 'block', marginBottom: '16px' }}>Notre méthode</span>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(30px, 4vw, 46px)',
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1.15,
              }}
            >
              Quatre étapes. Pas de surprises.
            </h2>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '48px',
              position: 'relative',
            }}
          >
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-mono), monospace',
                      fontSize: '64px',
                      fontWeight: 400,
                      color: 'var(--line-strong)',
                      lineHeight: 1,
                      marginBottom: '16px',
                    }}
                  >
                    {step.n}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-mono), monospace',
                      fontSize: '11px',
                      letterSpacing: '0.06em',
                      color: 'var(--accent)',
                      marginBottom: '10px',
                    }}
                  >
                    {step.period}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: '22px',
                      fontWeight: 400,
                      color: 'var(--ink)',
                      marginBottom: '12px',
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-instrument), system-ui, sans-serif',
                      fontSize: '14px',
                      lineHeight: 1.7,
                      color: 'var(--ink-muted)',
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 TECHNOLOGIES ──────────────────────────────────────── */}
      <section style={{ background: 'var(--surface-2)', paddingBlock: '64px', overflow: 'hidden' }}>
        <div className="container" style={{ marginBottom: '28px' }}>
          <span className="label" style={{ display: 'block', textAlign: 'center' }}>Stack technique</span>
        </div>

        <div className="marquee-wrap" style={{ overflow: 'hidden' }}>
          {/* Row 1 → */}
          <div style={{ display: 'flex', marginBottom: '16px' }}>
            <div className="marquee-track-1" style={{ display: 'flex', gap: '0' }}>
              {[...techRow1, ...techRow1].map((tech, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '13px',
                    color: 'var(--ink-subtle)',
                    padding: '8px 28px',
                    whiteSpace: 'nowrap',
                    borderRight: '1px solid var(--line)',
                    transition: 'color 150ms ease-out',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 ← */}
          <div style={{ display: 'flex' }}>
            <div className="marquee-track-2" style={{ display: 'flex', gap: '0' }}>
              {[...techRow2, ...techRow2].map((tech, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '13px',
                    color: 'var(--ink-subtle)',
                    padding: '8px 28px',
                    whiteSpace: 'nowrap',
                    borderRight: '1px solid var(--line)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 PACKAGES ──────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <Reveal style={{ marginBottom: '56px' }}>
            <span className="label" style={{ display: 'block', marginBottom: '16px' }}>Packages</span>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(30px, 4vw, 46px)',
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1.15,
              }}
            >
              Trois profils. Pas trois tiers.
            </h2>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              alignItems: 'start',
            }}
          >
            {/* Ancrage */}
            <Reveal delay={0}>
              <div
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                  padding: '36px',
                  background: 'var(--surface)',
                  transition: 'transform 200ms cubic-bezier(0.25, 0, 0, 1)',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '28px', fontWeight: 400, color: 'var(--ink)', marginBottom: '12px' }}>
                  Ancrage
                </h3>
                <p style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '14px', color: 'var(--ink-muted)', marginBottom: '24px', lineHeight: 1.65 }}>
                  Pour les entreprises qui ont besoin d&apos;une présence en ligne qui fonctionne.
                </p>
                <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '13px', color: 'var(--ink)', marginBottom: '8px', fontWeight: 400 }}>
                  À partir de 850 000 FCFA
                </div>
                <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', color: 'var(--ink-muted)', marginBottom: '32px' }}>
                  Livré en 3 semaines
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Site Next.js optimisé mobile', 'CMS pour mise à jour autonome', 'SEO technique de base', 'Formation 2h de votre équipe', 'Support 30 jours post-livraison'].map(f => (
                    <li key={f} style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '13px', color: 'var(--ink-muted)', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0, fontFamily: 'var(--font-dm-mono), monospace' }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Discuter de ce projet
                </Link>
              </div>
            </Reveal>

            {/* Système — recommended, elevated */}
            <Reveal delay={100}>
              <div
                style={{
                  border: '1px solid var(--accent)',
                  borderRadius: '12px',
                  padding: '36px',
                  background: 'var(--surface-2)',
                  transform: 'translateY(-8px)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '36px',
                    background: 'var(--accent)',
                    color: 'var(--surface)',
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '10px',
                    letterSpacing: '0.08em',
                    padding: '4px 10px',
                    borderRadius: '4px',
                  }}
                >
                  RECOMMANDÉ
                </div>
                <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '28px', fontWeight: 400, color: 'var(--ink)', marginBottom: '12px' }}>
                  Système
                </h3>
                <p style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '14px', color: 'var(--ink-muted)', marginBottom: '24px', lineHeight: 1.65 }}>
                  Pour les projets avec une logique métier complexe ou une boutique en ligne.
                </p>
                <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '13px', color: 'var(--ink)', marginBottom: '8px' }}>
                  800 000 – 4 500 000 FCFA
                </div>
                <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', color: 'var(--ink-muted)', marginBottom: '32px' }}>
                  Selon périmètre
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Architecture application ou e-commerce', 'Intégrations paiement et API tierces', 'Tests & validation UX', 'Support 90 jours'].map(f => (
                    <li key={f} style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '13px', color: 'var(--ink-muted)', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0, fontFamily: 'var(--font-dm-mono), monospace' }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Décrire mon projet
                </Link>
              </div>
            </Reveal>

            {/* Infrastructure */}
            <Reveal delay={200}>
              <div
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                  padding: '36px',
                  background: 'var(--surface)',
                  transition: 'transform 200ms cubic-bezier(0.25, 0, 0, 1)',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '28px', fontWeight: 400, color: 'var(--ink)', marginBottom: '12px' }}>
                  Infrastructure
                </h3>
                <p style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '14px', color: 'var(--ink-muted)', marginBottom: '24px', lineHeight: 1.65 }}>
                  Pour les équipes qui construisent un produit à long terme.
                </p>
                <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '13px', color: 'var(--ink)', marginBottom: '8px' }}>
                  Sur devis
                </div>
                <div style={{ fontFamily: 'var(--font-dm-mono), monospace', fontSize: '11px', color: 'var(--ink-muted)', marginBottom: '32px' }}>
                  Engagement minimal 3 mois
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['Architecture SaaS ou ERP complète', 'Multi-tenant, rôles, API', 'Accompagnement produit continu', 'SLA défini contractuellement'].map(f => (
                    <li key={f} style={{ fontFamily: 'var(--font-instrument), system-ui, sans-serif', fontSize: '13px', color: 'var(--ink-muted)', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                      <span style={{ color: 'var(--accent)', flexShrink: 0, fontFamily: 'var(--font-dm-mono), monospace' }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Parler de votre produit
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 08 TÉMOIGNAGES ───────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--surface-2)' }}>
        <div className="container">
          <Reveal style={{ marginBottom: '56px' }}>
            <span className="label" style={{ display: 'block', marginBottom: '16px' }}>Ce qu&apos;ils en disent</span>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: i % 2 === 0 ? '1fr auto' : 'auto 1fr',
                    gap: '48px',
                    alignItems: 'start',
                    maxWidth: '760px',
                    marginLeft: i % 2 === 0 ? '0' : 'auto',
                  }}
                >
                  <blockquote style={{ margin: 0, gridColumn: i % 2 === 0 ? '1' : '2', gridRow: '1' }}>
                    <p
                      style={{
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                        fontSize: 'clamp(20px, 2.5vw, 26px)',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        color: 'var(--ink)',
                        lineHeight: 1.45,
                        marginBottom: '24px',
                      }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer>
                      <div style={{ width: '32px', height: '1px', background: 'var(--line-strong)', marginBottom: '12px' }} />
                      <cite
                        style={{
                          fontFamily: 'var(--font-dm-mono), monospace',
                          fontSize: '12px',
                          letterSpacing: '0.04em',
                          color: 'var(--ink-muted)',
                          fontStyle: 'normal',
                        }}
                      >
                        {t.name} — {t.role}, {t.company}
                      </cite>
                    </footer>
                  </blockquote>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 09 FAQ ───────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '720px', marginInline: 'auto' }}>
            <Reveal style={{ marginBottom: '48px' }}>
              <span className="label" style={{ display: 'block', marginBottom: '16px' }}>Questions fréquentes</span>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(30px, 4vw, 46px)',
                  fontWeight: 400,
                  color: 'var(--ink)',
                  lineHeight: 1.15,
                }}
              >
                Ce que les décideurs demandent toujours.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <FAQ />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 10 CTA FINAL ─────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          background: 'var(--ink)',
          paddingBlock: 'clamp(80px, 10vw, 128px)',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Grain more pronounced */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: '200px 200px',
            opacity: 0.05,
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 300,
              color: 'var(--surface)',
              lineHeight: 1.1,
              marginBottom: '20px',
              letterSpacing: '-0.01em',
            }}
          >
            Votre projet mérite mieux
            <br />
            qu&apos;un devis PDF.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '14px',
              color: 'oklch(92% 0.008 85 / 0.55)',
              marginBottom: '48px',
              lineHeight: 1.65,
            }}
          >
            Décrivez ce que vous voulez construire.
            <br />
            On vous répond avec un point de vue, pas un formulaire.
          </p>

          <Link href="/contact" className="btn-primary cta-pulse" style={{ fontSize: '16px', padding: '18px 48px' }}>
            Décrire mon projet
          </Link>

          <p
            style={{
              fontFamily: 'var(--font-dm-mono), monospace',
              fontSize: '12px',
              color: 'oklch(92% 0.008 85 / 0.35)',
              marginTop: '24px',
            }}
          >
            Réponse sous 24h · Premier échange sans engagement
          </p>
        </div>
      </section>

    </main>
  )
}
