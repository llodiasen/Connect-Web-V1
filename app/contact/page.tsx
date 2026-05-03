export const metadata = {
  title: 'Contact — Devis gratuit en 24h | Connect Web Dakar',
  description: 'Contactez Connect Web pour votre projet digital. Réponse sous 24h. Formulaire, WhatsApp ou Calendly.',
}

export default function ContactPage() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? '221779006282'

  return (
    <main className="section-base" style={{ background: '#0D1117', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <h1 style={{ fontFamily: 'var(--font-clash, Georgia, serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#E6EDF3', marginBottom: '16px' }}>
          Parlons de votre projet
        </h1>
        <p style={{ color: '#8B949E', marginBottom: '48px', fontSize: '1.05rem' }}>
          Réponse sous 24h. Estimation gratuite. Sans engagement.
        </p>

        {/* Formulaire — intégration react-hook-form + Server Action à venir */}
        <div style={{ background: '#161B22', border: '1px solid #30363D', borderRadius: '12px', padding: '40px', marginBottom: '32px' }}>
          <form action="/api/contact" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', color: '#E6EDF3', fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px' }}>
                Votre nom
              </label>
              <input
                name="nom"
                type="text"
                placeholder="Moussa Diallo"
                required
                style={{ width: '100%', background: '#1C2128', border: '1px solid #30363D', borderRadius: '8px', padding: '12px 16px', color: '#E6EDF3', fontSize: '0.95rem', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#E6EDF3', fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px' }}>
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="moussa@entreprise.sn"
                required
                style={{ width: '100%', background: '#1C2128', border: '1px solid #30363D', borderRadius: '8px', padding: '12px 16px', color: '#E6EDF3', fontSize: '0.95rem', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', color: '#E6EDF3', fontSize: '0.875rem', fontWeight: 500, marginBottom: '8px' }}>
                Décrivez votre projet
              </label>
              <textarea
                name="projet"
                rows={4}
                placeholder="Ex : Je veux créer une boutique en ligne pour vendre mes produits au Sénégal et en Côte d'Ivoire, avec paiement Wave."
                required
                style={{ width: '100%', background: '#1C2128', border: '1px solid #30363D', borderRadius: '8px', padding: '12px 16px', color: '#E6EDF3', fontSize: '0.95rem', resize: 'vertical', outline: 'none', fontFamily: 'inherit' }}
              />
            </div>
            <button type="submit" className="btn-primary">
              Envoyer ma demande →
            </button>
          </form>
        </div>

        {/* Canaux alternatifs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <a
            href={`https://wa.me/${whatsapp}?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#161B22', border: '1px solid #30363D', borderRadius: '10px', padding: '20px', textDecoration: 'none', textAlign: 'center', transition: 'border-color 0.2s' }}
          >
            <div style={{ color: '#E85D04', fontWeight: 700, marginBottom: '4px' }}>WhatsApp</div>
            <div style={{ color: '#8B949E', fontSize: '0.85rem' }}>Réponse immédiate</div>
          </a>
          <a
            href={process.env.CALENDLY_URL ?? '#'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: '#161B22', border: '1px solid #30363D', borderRadius: '10px', padding: '20px', textDecoration: 'none', textAlign: 'center', transition: 'border-color 0.2s' }}
          >
            <div style={{ color: '#E85D04', fontWeight: 700, marginBottom: '4px' }}>Calendly</div>
            <div style={{ color: '#8B949E', fontSize: '0.85rem' }}>RDV 30 min</div>
          </a>
        </div>
      </div>
    </main>
  )
}
