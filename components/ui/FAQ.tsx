'use client'
import * as Accordion from '@radix-ui/react-accordion'
import { useState } from 'react'

const faqs = [
  {
    q: "Vous ne travaillez qu'avec de grandes entreprises ?",
    a: "Non. Nos projets vont de la boutique d'un artisan à l'ERP d'une entreprise de 200 personnes. Ce qui change, c'est le périmètre, pas l'attention portée au projet. La seule condition : vous avez un problème précis, pas juste « un site ».",
  },
  {
    q: 'Que se passe-t-il après la livraison ?',
    a: "Chaque projet inclut une période de support définie contractuellement. Sur les packages Système et Infrastructure, nous accompagnons l'évolution du produit. Vous ne disparaissez pas dans la nature avec un lien FTP.",
  },
  {
    q: 'Combien de temps dure un projet ?',
    a: 'Un site vitrine : 2 à 4 semaines. Une application ou boutique : 6 à 16 semaines selon la complexité. Un SaaS ou ERP : à partir de 3 mois. Ces durées sont définies et écrites dans le contrat — elles ne bougent pas sans votre accord.',
  },
  {
    q: 'Peut-on payer en plusieurs fois ?',
    a: "Oui. Le paiement est structuré en jalons liés aux livrables : acompte à la signature, paiement à la validation des maquettes, solde à la livraison. Pas de règlement anticipé total.",
  },
  {
    q: 'Comment travaillez-vous à distance ?',
    a: "Nous avons des clients à Dakar, Abidjan, Paris et Montréal. Nous utilisons Notion pour la documentation, Linear pour le suivi de projet, Figma pour les maquettes. Vous avez un accès en lecture permanent à l'avancement. Aucune réunion sans ordre du jour envoyé la veille.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<string | undefined>(undefined)

  return (
    <Accordion.Root type="single" collapsible value={open} onValueChange={setOpen}>
      {faqs.map((faq, i) => {
        const val = String(i)
        const isOpen = open === val
        return (
          <Accordion.Item
            key={i}
            value={val}
            style={{ borderBottom: '1px solid var(--line)' }}
          >
            <Accordion.Header>
              <Accordion.Trigger
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '24px',
                  padding: '20px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'var(--font-instrument), system-ui, sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  color: 'var(--ink)',
                }}
              >
                {faq.q}
                <span
                  style={{
                    fontFamily: 'var(--font-dm-mono), monospace',
                    fontSize: '20px',
                    color: 'var(--ink-muted)',
                    flexShrink: 0,
                    lineHeight: 1,
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 200ms cubic-bezier(0.25, 0, 0, 1)',
                    display: 'block',
                  }}
                  aria-hidden
                >
                  +
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <p
                style={{
                  fontFamily: 'var(--font-instrument), system-ui, sans-serif',
                  fontSize: '14px',
                  lineHeight: '1.75',
                  color: 'var(--ink-muted)',
                  paddingBottom: '24px',
                  margin: 0,
                  maxWidth: '600px',
                }}
              >
                {faq.a}
              </p>
            </Accordion.Content>
          </Accordion.Item>
        )
      })}
    </Accordion.Root>
  )
}
