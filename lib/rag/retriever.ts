import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export async function retrieveContext(query: string, topK = 5): Promise<string> {
  const embeddingResponse = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ model: 'text-embedding-3-small', input: query }),
  })

  const { data } = await embeddingResponse.json()
  const embedding = data[0].embedding

  const { data: docs, error } = await supabase.rpc('match_documents', {
    query_embedding: embedding,
    match_threshold: 0.7,
    match_count: topK,
  })

  if (error || !docs?.length) return ''

  return docs.map((d: { content: string }) => d.content).join('\n\n---\n\n')
}
