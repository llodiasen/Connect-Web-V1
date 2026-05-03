export default function HomePage() {
  return (
    <main>
      {/* Section 1 — Hero */}
      <section style={{ minHeight: '100vh', background: '#0D1117', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <h1 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(2.5rem, 8vw, 5rem)', color: '#E6EDF3', marginBottom: '24px', lineHeight: 1.1 }}>
            Votre site. Votre app.<br />Votre croissance.{' '}
            <span style={{ color: '#E85D04' }}>En 2 semaines.</span>
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#8B949E', marginBottom: '40px', maxWidth: '560px', margin: '0 auto 40px' }}>
            Agence digitale tech-first à Dakar · Next.js · Mobile-first · SEO optimisé · IA intégrée
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn-primary">Démarrer mon projet →</a>
            <a href="/portfolio" className="btn-ghost">Voir nos réalisations</a>
          </div>
        </div>
      </section>

      {/* Section 2 — Preuves sociales */}
      <section className="section-base" style={{ background: '#161B22', borderTop: '1px solid #30363D', borderBottom: '1px solid #30363D' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { stat: '14+', label: 'Projets livrés' },
              { stat: '2 sem.', label: 'Délai moyen' },
              { stat: '24h', label: 'Réponse garantie' },
              { stat: '100%', label: 'Sur mesure' },
            ].map(({ stat, label }) => (
              <div key={label}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#E85D04', marginBottom: '8px' }}>{stat}</div>
                <div style={{ fontSize: '0.9rem', color: '#8B949E' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Offres */}
      <section className="section-base" style={{ background: '#0D1117' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#E6EDF3', textAlign: 'center', marginBottom: '16px' }}>
            3 offres, 1 objectif : votre croissance
          </h2>
          <p style={{ color: '#8B949E', textAlign: 'center', marginBottom: '56px', fontSize: '1.05rem' }}>
            Choisissez selon votre stade. Chaque offre est livrée clé en main.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              {
                name: 'PRÉSENCE',
                delay: '1–2 sem.',
                for: 'PME sans site ou site vieilli',
                features: ['Site vitrine ou landing page', 'CMS intégré', 'SEO technique', 'Lighthouse 95+', 'Responsive mobile', 'Formulaire contact'],
              },
              {
                name: 'COMMERCE',
                delay: '2–4 sem.',
                for: 'PME qui veut vendre en ligne',
                features: ['E-commerce complet', 'Paiement Wave & Orange Money', 'Gestion des stocks', 'Dashboard commandes', 'Email automatique', 'Formation équipe'],
              },
              {
                name: 'PRODUIT',
                delay: '4–8 sem.',
                for: 'PME qui veut automatiser et scaler',
                features: ['App web/mobile sur mesure', 'IA & chatbot RAG', 'Automatisation process', 'CRM/ERP intégré', 'SaaS multi-tenant', 'Support dédié'],
              },
            ].map((offer) => (
              <div
                key={offer.name}
                style={{
                  background: '#161B22',
                  border: '1px solid #30363D',
                  borderRadius: '12px',
                  padding: '32px',
                }}
              >
                <div style={{ color: '#E85D04', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '8px' }}>{offer.name}</div>
                <div style={{ color: '#8B949E', fontSize: '0.85rem', marginBottom: '24px' }}>{offer.delay} · {offer.for}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {offer.features.map((f) => (
                    <li key={f} style={{ color: '#E6EDF3', fontSize: '0.9rem', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#E85D04' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Obtenir un devis →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Réalisations */}
      <section className="section-base" style={{ background: '#161B22' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#E6EDF3', textAlign: 'center', marginBottom: '48px' }}>
            Ce qu&apos;on a livré
          </h2>
          <div style={{ textAlign: 'center', color: '#8B949E', marginBottom: '32px' }}>
            Portfolio complet en cours de construction — revenez bientôt.
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="/portfolio" className="btn-ghost">Voir les 14+ projets →</a>
          </div>
        </div>
      </section>

      {/* Section 5 — Process */}
      <section className="section-base" style={{ background: '#0D1117' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#E6EDF3', textAlign: 'center', marginBottom: '56px' }}>
            Comment ça marche
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              { n: '01', title: 'Audit', desc: 'On analyse votre besoin et on chiffre gratuitement en 24h.' },
              { n: '02', title: 'Stratégie', desc: 'Plan de projet, maquettes et validation avant de coder.' },
              { n: '03', title: 'Développement', desc: 'Sprints courts, code propre, TypeScript strict.' },
              { n: '04', title: 'Lancement', desc: 'Deploy, formation, SEO, support 30j inclus.' },
            ].map(({ n, title, desc }) => (
              <div key={n} style={{ borderLeft: '3px solid #E85D04', paddingLeft: '20px' }}>
                <div style={{ color: '#E85D04', fontWeight: 700, fontSize: '0.85rem', marginBottom: '8px' }}>{n}</div>
                <div style={{ color: '#E6EDF3', fontWeight: 600, fontSize: '1.1rem', marginBottom: '8px' }}>{title}</div>
                <div style={{ color: '#8B949E', fontSize: '0.9rem', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Chatbot IA (placeholder) */}
      <section className="section-base" style={{ background: '#161B22', borderTop: '1px solid #30363D' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#E6EDF3', marginBottom: '16px' }}>
            Des questions sur nos services ?
          </h2>
          <p style={{ color: '#8B949E', marginBottom: '32px', fontSize: '1.05rem' }}>
            Notre chatbot IA répond 24h/24 et vous oriente vers la bonne offre.
          </p>
          <div style={{ color: '#8B949E', fontSize: '0.9rem', padding: '24px', border: '1px dashed #30363D', borderRadius: '12px', maxWidth: '400px', margin: '0 auto' }}>
            Chatbot RAG — en cours d&apos;intégration (J4)
          </div>
        </div>
      </section>

      {/* Section 7 — Contact */}
      <section className="section-base" style={{ background: '#0D1117' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#E6EDF3', marginBottom: '16px' }}>
            Prêt à démarrer ?
          </h2>
          <p style={{ color: '#8B949E', marginBottom: '40px', fontSize: '1.05rem' }}>
            Réponse sous 24h. Estimation gratuite. Sans engagement.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn-primary">Prendre RDV →</a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP ?? '221779006282'}?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20mon%20projet.`}
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
