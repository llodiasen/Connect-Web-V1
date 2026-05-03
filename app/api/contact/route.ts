import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  nom: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  projet: z.string().min(10, 'Décrivez votre projet en quelques mots'),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    await resend.emails.send({
      from: 'Connect Web <contact@connect-web.tech>',
      to: ['contact@connect-web.tech'],
      subject: `Nouveau contact — ${data.nom}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${data.nom}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Projet :</strong> ${data.projet}</p>
      `,
    })

    await resend.emails.send({
      from: 'Connect Web <contact@connect-web.tech>',
      to: [data.email],
      subject: 'On a bien reçu votre message — Connect Web',
      html: `
        <p>Bonjour ${data.nom},</p>
        <p>Merci pour votre message ! Nous vous répondons sous 24h.</p>
        <p>En attendant, vous pouvez nous joindre directement sur WhatsApp.</p>
        <p>— L'équipe Connect Web</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ error: error.errors[0].message }, { status: 400 })
    }
    console.error('[/api/contact]', error)
    return Response.json({ error: 'Erreur interne' }, { status: 500 })
  }
}
