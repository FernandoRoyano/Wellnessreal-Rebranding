import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Post from '@/models/Post'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    await dbConnect()
    const post = await Post.findOne({ slug: params.slug, published: true })
    
    if (!post) {
      return NextResponse.json({ error: 'Post no encontrado' }, { status: 404 })
    }
    
    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener post' }, { status: 500 })
  }
}
