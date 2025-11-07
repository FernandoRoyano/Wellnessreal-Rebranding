import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/mongodb'
import Post from '@/models/Post'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params

  if (!slug || slug === 'undefined') {
    return NextResponse.json(
      { success: false, error: 'Slug inválido o no proporcionado' },
      { status: 400 }
    )
  }

  try {
    await dbConnect()

    const post = await Post.findOne({
      slug: slug as string,
      published: true
    }).lean()

    if (!post) {
      return NextResponse.json(
        { success: false, error: `Post con slug "${slug}" no encontrado` },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: post
    })
  } catch (error: any) {
    console.error('❌ Error en API:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
