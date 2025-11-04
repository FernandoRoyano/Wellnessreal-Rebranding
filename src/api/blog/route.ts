import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Post from '@/models/Post'

export async function GET() {
  try {
    await dbConnect()
    const posts = await Post.find({ published: true }).sort({ date: -1 })
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener posts' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect()
    const body = await request.json()
    const post = await Post.create(body)
    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear post' }, { status: 500 })
  }
}
