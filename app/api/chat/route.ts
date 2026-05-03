import Anthropic from '@anthropic-ai/sdk'
import { retrieveContext } from '@/lib/rag/retriever'

const client = new Anthropic()

const SYSTEM_PROMPT = `Tu es l'assistant commercial de Connect Web, une agence digitale à Dakar (Sénégal).
Tu réponds aux questions sur nos services : développement web/mobile, sites internet, automatisation & IA, solutions NFC.
Ton ton est direct, professionnel et ancré localement (tu connais Wave, Orange Money, le marché sénégalais).
Tu ne mentionnes pas les technologies internes (Next.js, Supabase, etc.) sauf si le client te le demande.
Si un client montre de l'intérêt concret (budget, délai, projet), demande-lui son email pour qu'un expert le rappelle.
Réponds en français, en 2-3 phrases maximum. Sois concis.`

export async function POST(req: Request) {
  try {
    const { message, sessionId, history = [] } = await req.json()

    const context = await retrieveContext(message)

    const userMessageWithContext = context
      ? `[Contexte Connect Web]\n${context}\n\n[Question client]\n${message}`
      : message

    const messages: Anthropic.MessageParam[] = [
      ...history,
      { role: 'user', content: userMessageWithContext },
    ]

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages,
    })

    const reply = response.content[0].type === 'text' ? response.content[0].text : ''

    const leadDetected =
      /budget|devis|projet|délai|semaine|prix|coût|commencer|démarrer/i.test(message)

    return Response.json({ reply, leadDetected, sessionId })
  } catch (error) {
    console.error('[/api/chat]', error)
    return Response.json({ error: 'Erreur interne' }, { status: 500 })
  }
}
