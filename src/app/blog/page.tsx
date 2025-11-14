import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'

export default async function BlogPage() {
  const posts = getAllPosts()

  return (
    <section style={{ backgroundColor: '#161228' }} className="min-h-screen py-32">
      <Container className="text-center">
        <h1 style={{ color: '#EFCEE2' }} className="text-5xl font-bold mb-6">
          Artículos encontrados
        </h1>
        <p className="text-gray-300 text-lg mb-12">
          Descubre contenido sobre nutrición, bienestar y salud integral
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <span className="text-sm text-purple-400 font-semibold">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-white mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('es-ES')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="primary">Leer más</Button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <Link href="/">
          <Button variant="secondary">
            <ArrowLeft className="mr-2" size={20} />
            Volver al inicio
          </Button>
        </Link>
      </Container>
    </section>
  )
}
