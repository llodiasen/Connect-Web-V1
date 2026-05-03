export type ProjectDomain = 'developpement' | 'sites' | 'automation' | 'nfc'

export interface Project {
  id: string
  title: string
  client: string
  domain: ProjectDomain
  description: string
  result: string
  tags: string[]
  image: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'resto-digital',
    title: 'Menu digital NFC — Resto Prestige',
    client: 'Resto Prestige',
    domain: 'nfc',
    description: 'Menu digital NFC pour restaurant haut de gamme à Dakar. Mise à jour en temps réel sans application.',
    result: '+40% de commandes de boissons en 3 mois',
    tags: ['NFC', 'Menu digital', 'QR Code'],
    image: '/portfolio/resto-digital.jpg',
    featured: true,
  },
  {
    id: 'immo-dakar',
    title: 'Plateforme immobilière — ImmoSénégal',
    client: 'ImmoSénégal',
    domain: 'developpement',
    description: 'Marketplace immobilière avec recherche géolocalisée, visite virtuelle 360° et paiement Wave.',
    result: '1 200 annonces actives · 8 000 visiteurs/mois dès le 1er mois',
    tags: ['Next.js', 'Marketplace', 'Wave', 'Maps'],
    image: '/portfolio/immo-dakar.jpg',
    featured: true,
  },
  {
    id: 'boutique-mode',
    title: 'E-commerce — Wax & Style',
    client: 'Wax & Style',
    domain: 'sites',
    description: 'Boutique en ligne de mode africaine avec paiement Orange Money, Wave et livraison à Dakar.',
    result: '350 000 FCFA de ventes dès la 1ère semaine',
    tags: ['E-commerce', 'Orange Money', 'Wave', 'Shopify'],
    image: '/portfolio/wax-style.jpg',
    featured: true,
  },
  {
    id: 'crm-pme',
    title: 'CRM sur mesure — Groupe Thiossane',
    client: 'Groupe Thiossane',
    domain: 'automation',
    description: 'CRM de gestion client avec suivi devis, relances automatiques et tableau de bord commercial.',
    result: '-60% de temps de traitement devis · +25% de closing',
    tags: ['CRM', 'Automatisation', 'HubSpot', 'API'],
    image: '/portfolio/crm-thiossane.jpg',
    featured: false,
  },
  {
    id: 'carte-nfc-pro',
    title: 'Cartes NFC professionnelles — Cabinet Diallo',
    client: 'Cabinet Diallo & Associés',
    domain: 'nfc',
    description: '50 cartes NFC pour équipe d\'avocats. Partage de contact instantané sans application.',
    result: '50 cartes déployées en 48h · zéro friction réseau',
    tags: ['NFC', 'Carte business', 'vCard'],
    image: '/portfolio/carte-nfc-cabinet.jpg',
    featured: false,
  },
  {
    id: 'vitrine-clinique',
    title: 'Site vitrine — Clinique Santé Plus',
    client: 'Clinique Santé Plus',
    domain: 'sites',
    description: 'Site vitrine médical avec prise de RDV en ligne, fiches médecins et blog santé optimisé SEO.',
    result: 'Lighthouse 97 · Top 5 Google "clinique Dakar" en 6 semaines',
    tags: ['Site vitrine', 'SEO', 'Calendly', 'Blog'],
    image: '/portfolio/clinique-sante.jpg',
    featured: false,
  },
  {
    id: 'saas-rh',
    title: 'SaaS RH — TalentAfrique',
    client: 'TalentAfrique',
    domain: 'developpement',
    description: 'Plateforme SaaS de gestion RH multi-tenant pour PME africaines. Paie, congés, onboarding.',
    result: '12 entreprises clientes en 2 mois après lancement',
    tags: ['SaaS', 'Multi-tenant', 'RH', 'Next.js'],
    image: '/portfolio/saas-rh.jpg',
    featured: false,
  },
  {
    id: 'chatbot-bank',
    title: 'Chatbot IA — Microfinance Jolof',
    client: 'Microfinance Jolof',
    domain: 'automation',
    description: 'Chatbot RAG répondant aux questions sur les prêts, taux et conditions. Capture de leads qualifiés.',
    result: '300+ leads capturés en 1 mois · -70% appels support',
    tags: ['Chatbot', 'RAG', 'IA', 'Claude'],
    image: '/portfolio/chatbot-bank.jpg',
    featured: false,
  },
  {
    id: 'app-livraison',
    title: 'App livraison — RapidoLivraison',
    client: 'RapidoLivraison',
    domain: 'developpement',
    description: 'Application web PWA de livraison avec tracking temps réel, dispatch livreurs et paiement mobile.',
    result: '500+ commandes/jour traitées · 4.8/5 satisfaction client',
    tags: ['PWA', 'Temps réel', 'Wave', 'Maps'],
    image: '/portfolio/app-livraison.jpg',
    featured: false,
  },
  {
    id: 'erp-distribution',
    title: 'ERP distribution — Sodiko SA',
    client: 'Sodiko SA',
    domain: 'automation',
    description: 'ERP Odoo déployé pour distributeur FMCG. Stocks, commandes fournisseurs, comptabilité intégrée.',
    result: '-40% d\'erreurs de stock · ROI atteint en 4 mois',
    tags: ['ERP', 'Odoo', 'Distribution', 'Automatisation'],
    image: '/portfolio/erp-sodiko.jpg',
    featured: false,
  },
  {
    id: 'landing-event',
    title: 'Landing page événement — DakarTech 2024',
    client: 'DakarTech',
    domain: 'sites',
    description: 'Landing page d\'inscription pour conférence tech avec countdown, speakers et billetterie Wave.',
    result: '1 200 inscriptions en 72h · Lighthouse 99',
    tags: ['Landing page', 'Wave', 'Event', 'SEO'],
    image: '/portfolio/dakartech-event.jpg',
    featured: false,
  },
  {
    id: 'menu-hotel',
    title: 'Menu NFC — Hôtel King Fahd Palace',
    client: 'King Fahd Palace',
    domain: 'nfc',
    description: 'Menus NFC multilingues (FR/EN/AR) pour 200 tables. Mise à jour quotidienne du menu du jour.',
    result: '200 tables équipées · 0 impression papier depuis 8 mois',
    tags: ['NFC', 'Multilingue', 'Hôtellerie'],
    image: '/portfolio/hotel-nfc.jpg',
    featured: false,
  },
  {
    id: 'plateforme-formation',
    title: 'Plateforme e-learning — FormaPro Sénégal',
    client: 'FormaPro Sénégal',
    domain: 'developpement',
    description: 'LMS sur mesure avec cours vidéo, quiz, certificats et paiement Wave/Orange Money.',
    result: '2 000 apprenants inscrits · 85% de taux de complétion',
    tags: ['LMS', 'E-learning', 'Wave', 'Vidéo'],
    image: '/portfolio/elearning.jpg',
    featured: false,
  },
  {
    id: 'vitrine-architecte',
    title: 'Portfolio — Cabinet Architectes BA',
    client: 'Architectes BA',
    domain: 'sites',
    description: 'Portfolio visuel minimaliste pour cabinet d\'architecture avec galerie projets et formulaire devis.',
    result: '3 projets signés via le site dans le 1er mois',
    tags: ['Portfolio', 'Vitrine', 'Galerie', 'SEO'],
    image: '/portfolio/architecte-ba.jpg',
    featured: false,
  },
]

export function getProjectsByDomain(domain: ProjectDomain): Project[] {
  return projects.filter((p) => p.domain === domain)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
