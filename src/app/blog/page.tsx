import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'

async function getPost(slug: string) {
  if (!slug) return null
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/posts/${slug}`, { 
      cache: 'no-store' 
    })
    
    if (!res.ok) return null
    
    const data = await res.json()
    return data.success ? data.data : null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const post = await getPost(resolvedParams.slug)

  if (!post) {
    return (
      <section style={{ backgroundColor: '#16122B' }} className="min-h-screen py-32">
        <Container className="text-center">
          <h1 style={{ color: '#FCEE21' }} className="text-5xl font-bold mb-6">
            Artículo no encontrado
          </h1>
          <p className="text-gray-400 text-xl mb-10">
            Parece que este artículo no existe. Vuelve al blog y explora más contenido.
          </p>
          <Link href="/blog">
            <Button variant="primary" size="lg">
              ← Volver al blog
            </Button>
          </Link>
        </Container>
      </section>
    )
  }

  return (
    <>
      {/* Hero del Post */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-32">
        <Container>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition font-bold"
          >
            <ArrowLeft size={20} />
            Volver al blog
          </Link>
          <div className="max-w-4xl">
            <h1
              style={{ color: '#FCEE21' }}
              className="text-5xl md:text-6xl font-bold mb-6 tracking-widest"
            >
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <span className="flex items-center gap-2">
                <User size={18} />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {new Date(post.date).toLocaleDateString('es-ES')}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                {post.readTime}
              </span>
              <span
                style={{ backgroundColor: 'rgba(252, 238, 33, 0.1)', color: '#FCEE21' }}
                className="text-xs font-bold px-3 py-1 rounded-full"
              >
                {post.category}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Contenido del Post */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div
              style={{ color: '#ffffff' }}
              className="prose prose-invert max-w-none text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(
                    /<h2>/g,
                    '<h2 style="color: #FCEE21; font-size: 1.875rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;">'
                  )
                  .replace(/<p>/g, '<p style="margin-bottom: 1rem; line-height: 1.6;">'),
              }}
            />
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20">
        <Container className="text-center max-w-3xl mx-auto">
          <h2 style={{ color: '#FCEE21' }} className="text-4xl font-bold mb-8 tracking-wide">
            ¿Te resonó este artículo?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Esto que lees aquí es solo contenido. Una valoración profesional analiza TU caso y
            diseña un plan 100% personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button variant="primary" size="lg">
                🚀 Solicita tu valoración gratis
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" size="lg">
                Ver más artículos
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
