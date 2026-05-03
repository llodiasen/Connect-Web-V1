import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

function chunkText(text: string, chunkSize = 500): string[] {
  const sentences = text.split(/(?<=[.!?])\s+/)
  const chunks: string[] = []
  let current = ''

  for (const sentence of sentences) {
    if ((current + sentence).length > chunkSize && current) {
      chunks.push(current.trim())
      current = sentence
    } else {
      current += ' ' + sentence
    }
  }
  if (current.trim()) chunks.push(current.trim())
  return chunks
}

async function embedText(text: string): Promise<number[]> {
  const res = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ model: 'text-embedding-3-small', input: text }),
  })
  const { data } = await res.json()
  return data[0].embedding
}

export async function ingestDocuments(
  documents: Array<{ content: string; metadata?: Record<string, unknown> }>
) {
  for (const doc of documents) {
    const chunks = chunkText(doc.content)
    for (const chunk of chunks) {
      const embedding = await embedText(chunk)
      await supabase.from('documents').upsert({
        content: chunk,
        embedding,
        metadata: doc.metadata ?? {},
      })
    }
  }
}
