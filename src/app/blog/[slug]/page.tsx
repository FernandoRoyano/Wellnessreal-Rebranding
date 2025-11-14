import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import '../markdown.css'


export async function generateStaticParams() {
  return getAllPostSlugs()
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)
  
  if (!post) {
    return {
      title: 'Post no encontrado'
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}


export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)

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
      {/* Hero del Post - Más compacto */}
      <section style={{ backgroundColor: '#16122B' }} className="pt-24 pb-8">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition font-medium text-sm"
            >
              <ArrowLeft size={16} />
              Volver al blog
            </Link>

            {/* Categoría */}
            <span
              style={{ backgroundColor: 'rgba(252, 238, 33, 0.15)', color: '#FCEE21' }}
              className="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4"
            >
              {post.category}
            </span>

            {/* Título */}
            <h1
              style={{ color: '#FCEE21' }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-800">
              <span className="flex items-center gap-2">
                <User size={16} />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString('es-ES', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Imagen destacada - Ancho completo */}
      {post.image && (
        <section style={{ backgroundColor: '#16122B' }} className="pb-12">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Contenido del Post - Optimizado para lectura */}
      <section style={{ backgroundColor: '#16122B' }} className="pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Excerpt destacado */}
            <p className="text-xl text-gray-300 leading-relaxed mb-12 pb-8 border-b border-gray-800">
              {post.excerpt}
            </p>

            {/* Contenido principal */}
            <article className="prose prose-invert prose-lg max-w-none markdown-content">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-16">
        <Container className="text-center max-w-3xl mx-auto">
          <h2 style={{ color: '#FCEE21' }} className="text-3xl md:text-4xl font-bold mb-6">
            ¿Te resonó este artículo?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
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
