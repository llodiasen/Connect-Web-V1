import { ingestDocuments } from '@/lib/rag/ingest'

export async function POST(req: Request) {
  const secret = req.headers.get('x-embed-secret')
  if (secret !== process.env.EMBED_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { documents } = await req.json()
    if (!Array.isArray(documents) || documents.length === 0) {
      return Response.json({ error: 'documents[] requis' }, { status: 400 })
    }

    await ingestDocuments(documents)
    return Response.json({ success: true, count: documents.length })
  } catch (error) {
    console.error('[/api/embed]', error)
    return Response.json({ error: 'Erreur interne' }, { status: 500 })
  }
}
