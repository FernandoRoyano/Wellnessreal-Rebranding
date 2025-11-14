import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  return getAllPostSlugs()
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

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
            <article className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
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
