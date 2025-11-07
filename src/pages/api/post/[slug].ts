// src/pages/api/posts/[slug].ts
/**
 * API Route para manejar un post individual por slug
 * Endpoint: GET /api/posts/[slug]
 * Ejemplo: GET /api/posts/estrenimiento-integral
 */

import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '@/lib/mongodb'
import Post from '@/models/Post'

interface ApiResponse {
  success: boolean
  data?: any
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  const { slug } = req.query

  // Validar que slug no sea undefined
  if (!slug || slug === 'undefined') {
    return res.status(400).json({
      success: false,
      error: 'Slug inválido o no proporcionado'
    })
  }

  try {
    await dbConnect()

    // GET: Obtener un post específico por slug
    if (req.method === 'GET') {
      const post = await Post.findOne({
        slug: slug as string,
        published: true
      }).lean()

      if (!post) {
        return res.status(404).json({
          success: false,
          error: `Post con slug "${slug}" no encontrado`
        })
      }

      return res.status(200).json({
        success: true,
        data: post
      })
    }

    // PUT: Actualizar un post
    if (req.method === 'PUT') {
      const updatedPost = await Post.findOneAndUpdate(
        { slug: slug as string },
        req.body,
        { new: true, runValidators: true }
      )

      if (!updatedPost) {
        return res.status(404).json({
          success: false,
          error: 'Post no encontrado'
        })
      }

      return res.status(200).json({
        success: true,
        data: updatedPost
      })
    }

    // DELETE: Eliminar un post
    if (req.method === 'DELETE') {
      const deletedPost = await Post.findOneAndDelete({
        slug: slug as string
      })

      if (!deletedPost) {
        return res.status(404).json({
          success: false,
          error: 'Post no encontrado'
        })
      }

      return res.status(200).json({
        success: true,
        data: deletedPost
      })
    }

    res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
    return res.status(405).json({
      success: false,
      error: `Método ${req.method} no permitido`
    })
  } catch (error: any) {
    console.error('❌ Error en API:', error)
    return res.status(500).json({
      success: false,
      error: error.message
    })
  }
}
