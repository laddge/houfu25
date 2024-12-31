import { generateImage } from '$lib/generateImage'
import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ params }) => {
  const { query } = params
  const bg = query.split('-')[0] || '0'
  const name = atob(query.split('-')[1] || '') || '名前'
  const text = atob(query.split('-')[2] || '') || '2025年の抱負'
  const png = await generateImage(bg, name, text)

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}
