'use client'

import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Clock, User, ArrowRight, Search } from 'lucide-react'
import { useState, useMemo } from 'react'
import { getAllPosts, categories } from '@/lib/blogData'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  
  const allPosts = getAllPosts()

  const filteredArticles = useMemo(() => {
    return allPosts.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory, allPosts])

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-32">
        <Container>
          <div className="max-w-4xl">
            <h1 style={{ color: '#FCEE21' }} className="text-5xl md:text-7xl font-bold mb-6 tracking-widest">
              BLOG
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Artículos sin humo, tips reales y estrategias que funcionan. Nutrición, entrenamiento y bienestar integral.
            </p>
          </div>
        </Container>
      </section>

      {/* Search & Categories */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-12">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 relative">
              <Search size={20} style={{ color: '#FCEE21' }} className="absolute left-4 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ backgroundColor: '#16122B', borderColor: '#662D91' }}
                className="w-full pl-12 pr-4 py-3 rounded-lg border text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
              />
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all"
                  style={{
                    backgroundColor: category === selectedCategory ? '#FCEE21' : 'transparent',
                    color: category === selectedCategory ? '#16122B' : '#FCEE21',
                    border: category === selectedCategory ? 'none' : '2px solid #FCEE21'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Articles Grid */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-28">
        <Container>
          {filteredArticles.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filteredArticles.map((article) => (
                  <Link key={article.id} href={`/blog/${article.slug}`}>
                    <div 
                      className="h-full p-8 rounded-xl hover:shadow-xl transition-all cursor-pointer group border hover:border-[#FCEE21]"
                      style={{ backgroundColor: '#1a1535', borderColor: '#662D91' }}
                    >
                      <div className="mb-4">
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                          style={{ backgroundColor: 'rgba(252, 238, 33, 0.1)', color: '#FCEE21' }}
                        >
                          {article.category}
                        </span>
                      </div>

                      <h2 style={{ color: '#FCEE21' }} className="text-xl font-bold mb-3 tracking-wide leading-tight group-hover:text-yellow-300 transition">
                        {article.title}
                      </h2>

                      <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500 mb-6 pb-6 border-b" style={{ borderBottomColor: '#662D91' }}>
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User size={14} />
                          <span>{article.author}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2" style={{ color: '#FCEE21' }}>
                        <span className="font-bold text-sm">Leer más</span>
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p style={{ color: '#FCEE21' }} className="text-xl font-bold">
                No encontramos artículos con esos criterios.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* Newsletter */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center p-12 rounded-xl" style={{ backgroundColor: '#16122B', border: '2px solid #FCEE21' }}>
            <h2 style={{ color: '#FCEE21' }} className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
              Recibe contenido exclusivo
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Suscríbete y recibe tips, hacks y estrategias que no compartimos en el blog. Sin spam, solo contenido brutal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                style={{ backgroundColor: 'rgba(252, 238, 33, 0.1)', borderColor: '#FCEE21' }}
                className="flex-1 px-4 py-3 rounded-lg border text-white placeholder-gray-500 focus:outline-none focus:border-yellow-300 transition"
              />
              <Button variant="primary" size="lg">
                Suscribirse
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20">
        <Container className="text-center">
          <h2 style={{ color: '#FCEE21' }} className="text-4xl font-bold mb-4 tracking-wide">
            ¿Te identificas con alguno de estos temas?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            El blog es solo la base. Una valoración profesional te muestra exactamente cómo aplicar esto a tu caso.
          </p>
          <Link href="/contacto">
            <Button variant="primary" size="lg">
              🚀 Solicita tu valoración gratis
            </Button>
          </Link>
        </Container>
      </section>
    </>
  )
}
