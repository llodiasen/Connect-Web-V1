export const metadata = {
  title: 'Nos offres — Présence, Commerce, Produit | Connect Web Dakar',
  description: 'Découvrez les 3 offres Connect Web. Sites, e-commerce et applications sur mesure à Dakar. Devis gratuit.',
}

const offers = [
  {
    name: 'PRÉSENCE',
    delay: '1–2 semaines',
    for: 'PME sans site ou site vieilli',
    price: 'À partir de 350 000 FCFA',
    features: [
      'Site vitrine ou landing page',
      'CMS intégré (mises à jour autonomes)',
      'SEO technique complet',
      'Lighthouse 95+ garanti',
      'Responsive mobile-first',
      'Formulaire de contact',
      'Google Search Console',
      'Formation équipe incluse',
    ],
    cta: 'Démarrer ma présence',
  },
  {
    name: 'COMMERCE',
    delay: '2–4 semaines',
    for: 'PME qui veut vendre en ligne',
    price: 'À partir de 600 000 FCFA',
    features: [
      'E-commerce complet',
      'Paiement Wave & Orange Money',
      'Gestion des stocks',
      'Dashboard commandes',
      'Emails automatiques clients',
      'Gestion des retours',
      'Analytics ventes',
      'Formation équipe incluse',
    ],
    cta: 'Démarrer mon commerce',
    recommended: true,
  },
  {
    name: 'PRODUIT',
    delay: '4–8 semaines',
    for: 'PME qui veut automatiser et scaler',
    price: 'À partir de 1 200 000 FCFA',
    features: [
      'Application web/mobile sur mesure',
      'IA & chatbot RAG Claude',
      'Automatisation des process',
      'CRM ou ERP intégré',
      'API tiers (Wave, HubSpot, Odoo…)',
      'SaaS multi-tenant disponible',
      'Dashboard analytique',
      'Support dédié 3 mois',
    ],
    cta: 'Démarrer mon produit',
  },
]

export default function OffresPage() {
  return (
    <main className="section-base" style={{ background: '#0D1117', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h1 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#E6EDF3', marginBottom: '16px' }}>
            3 offres pour votre stade de croissance
          </h1>
          <p style={{ color: '#8B949E', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto' }}>
            Chaque offre est livrée clé en main. Délais tenus. Devis gratuit sous 24h.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', alignItems: 'start' }}>
          {offers.map((offer) => (
            <div
              key={offer.name}
              style={{
                background: '#161B22',
                border: offer.recommended ? '2px solid #E85D04' : '1px solid #30363D',
                borderRadius: '14px',
                padding: '36px',
                position: 'relative',
              }}
            >
              {offer.recommended && (
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#E85D04', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 700, padding: '4px 16px', borderRadius: '999px', whiteSpace: 'nowrap' }}>
                  RECOMMANDÉ
                </div>
              )}
              <div style={{ color: '#E85D04', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '6px' }}>
                {offer.name}
              </div>
              <div style={{ color: '#8B949E', fontSize: '0.85rem', marginBottom: '20px' }}>
                {offer.delay} · {offer.for}
              </div>
              <div style={{ color: '#E6EDF3', fontWeight: 700, fontSize: '1.4rem', marginBottom: '28px' }}>
                {offer.price}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {offer.features.map((f) => (
                  <li key={f} style={{ color: '#E6EDF3', fontSize: '0.9rem', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#E85D04', flexShrink: 0, marginTop: '2px' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                {offer.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* FAQ pricing */}
        <div style={{ marginTop: '80px', maxWidth: '640px', margin: '80px auto 0' }}>
          <h2 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#E6EDF3', marginBottom: '32px', textAlign: 'center' }}>
            Questions sur les tarifs
          </h2>
          {[
            { q: 'Y a-t-il des frais cachés ?', a: 'Non. Le devis est fixe et inclut le développement, les tests, la formation et le support 30j. Zéro surprise.' },
            { q: 'Quelles sont les modalités de paiement ?', a: '40% à la commande, 60% à la livraison. Paiement en 3 fois disponible pour les projets au-dessus de 1 000 000 FCFA.' },
            { q: 'Puis-je commencer par l'offre Présence et évoluer ?', a: 'Oui. Nos projets sont conçus pour évoluer. Vous pouvez ajouter des fonctionnalités Commerce ou Produit à tout moment.' },
          ].map(({ q, a }) => (
            <div key={q} style={{ background: '#161B22', border: '1px solid #30363D', borderRadius: '10px', padding: '24px', marginBottom: '12px' }}>
              <div style={{ color: '#E6EDF3', fontWeight: 600, marginBottom: '10px' }}>{q}</div>
              <p style={{ color: '#8B949E', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
