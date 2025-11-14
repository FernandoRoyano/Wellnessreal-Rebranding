import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '../../../lib/mongodb'
import Post from '../../../models/Post'

export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const limit = searchParams.get('limit')

    const filter: any = { published: true }
    if (category) filter.category = category

    let query = Post.find(filter).sort({ date: -1 })
    if (limit) query = query.limit(parseInt(limit))

    const posts = await query.lean()

    return NextResponse.json({
      success: true,
      data: posts,
      message: `${posts.length} posts encontrados`
    })
  } catch (error: any) {
    console.error('❌ Error en API de posts:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
