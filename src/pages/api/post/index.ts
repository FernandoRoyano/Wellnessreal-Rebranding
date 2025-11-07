// src/pages/api/posts/index.ts
/**
 * API Route para manejar los posts del blog
 * Endpoints:
 * - GET /api/posts -> Lista todos los posts publicados
 * - POST /api/posts -> Crea un nuevo post
 */

import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '@/lib/mongodb'
import Post from '@/models/Post'

/**
 * Tipo para las respuestas de la API
 */
interface ApiResponse {
  success: boolean
  data?: any
  error?: string
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  try {
    // Conectar a MongoDB antes de cualquier operación
    await dbConnect()

    // GET: Obtener todos los posts publicados
    if (req.method === 'GET') {
      const { category, limit } = req.query

      // Construir filtro
      const filter: any = { published: true }
      if (category) {
        filter.category = category
      }

      // Buscar posts
      let query = Post.find(filter).sort({ date: -1 }) // Más recientes primero

      // Aplicar límite si se especifica
      if (limit) {
        query = query.limit(parseInt(limit as string))
      }

      const posts = await query.lean() // .lean() convierte a objetos JS planos

      return res.status(200).json({
        success: true,
        data: posts,
        message: `${posts.length} posts encontrados`
      })
    }

    // POST: Crear un nuevo post
    if (req.method === 'POST') {
      const postData = req.body

      // Validar que existan campos obligatorios
      if (!postData.title || !postData.slug || !postData.content) {
        return res.status(400).json({
          success: false,
          error: 'Faltan campos obligatorios: title, slug, content'
        })
      }

      // Crear post
      const newPost = await Post.create(postData)

      return res.status(201).json({
        success: true,
        data: newPost,
        message: 'Post creado correctamente'
      })
    }

    // Método no permitido
    res.setHeader('Allow', ['GET', 'POST'])
    return res.status(405).json({
      success: false,
      error: `Método ${req.method} no permitido`
    })
  } catch (error: any) {
    console.error('❌ Error en API de posts:', error)

    // Errores específicos de MongoDB
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: 'Ya existe un post con ese slug'
      })
    }

    return res.status(500).json({
      success: false,
      error: error.message || 'Error interno del servidor'
    })
  }
}
