import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Clock, User, ArrowRight, Search } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'CÓMO ABORDAR EL ESTREÑIMIENTO DE MANERA INTEGRAL',
    excerpt: 'El estreñimiento es un problema digestivo común. Descubre cómo abordarlo de forma integral.',
    category: 'Nutrición',
    readTime: '5 min',
    date: '2025-10-30',
    author: 'Fernando Royano'
  },
  {
    id: 2,
    title: 'REGLAS DE ORO PARA LA MUJER MODERNA',
    excerpt: 'Descubre las reglas básicas para ser tu mejor versión.',
    category: 'Bienestar',
    readTime: '8 min',
    date: '2025-10-25',
    author: 'Fernando Royano'
  },
  {
    id: 3,
    title: 'REMEDIOS CONTRA LA RESACA',
    excerpt: 'Estrategias efectivas para prevenir y combatir la resaca.',
    category: 'Recuperación',
    readTime: '6 min',
    date: '2025-10-20',
    author: 'Fernando Royano'
  },
  {
    id: 4,
    title: 'MÉTODO PARA CALCULAR TUS CALORÍAS',
    excerpt: 'Aprende a calcular cuántas calorías necesita tu cuerpo.',
    category: 'Nutrición',
    readTime: '7 min',
    date: '2025-10-15',
    author: 'Fernando Royano'
  },
  {
    id: 5,
    title: 'TODO SOBRE LA PROTEÍNA DE SUERO',
    excerpt: 'Guía completa sobre la proteína en polvo.',
    category: 'Nutrición',
    readTime: '8 min',
    date: '2025-10-10',
    author: 'Fernando Royano'
  },
  {
    id: 6,
    title: 'CÓMO REDUCIR LOS ANTOJOS POR AZÚCAR',
    excerpt: 'Estrategias para controlar la ansiedad por ultraprocesados.',
    category: 'Nutrición',
    readTime: '5 min',
    date: '2025-10-05',
    author: 'Fernando Royano'
  },
]

const categories = ['Todos', 'Nutrición', 'Entrenamiento', 'Recuperación', 'Bienestar']

export default function BlogPage() {
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
              Artículos, consejos y guías sobre entrenamiento, nutrición y bienestar integral.
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
                style={{ backgroundColor: '#16122B', borderColor: '#662D91' }}
                className="w-full pl-12 pr-4 py-3 rounded-lg border text-white placeholder-gray-500 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full text-sm font-bold tracking-wide"
                  style={{
                    backgroundColor: category === 'Todos' ? '#FCEE21' : 'transparent',
                    color: category === 'Todos' ? '#16122B' : '#FCEE21',
                    border: category === 'Todos' ? 'none' : '2px solid #FCEE21'
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {articles.map((article) => (
              <div 
                key={article.id}
                className="h-full p-8 rounded-xl hover:shadow-xl transition-all cursor-pointer group border"
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
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              Ver más artículos
            </Button>
          </div>
        </Container>
      </section>

      {/* Newsletter */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center p-12 rounded-xl" style={{ backgroundColor: '#16122B', border: '2px solid #FCEE21' }}>
            <h2 style={{ color: '#FCEE21' }} className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
              Recibe artículos exclusivos
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Suscríbete y recibe información exclusiva semanalmente.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                style={{ backgroundColor: 'rgba(252, 238, 33, 0.1)', borderColor: '#FCEE21' }}
                className="flex-1 px-4 py-3 rounded-lg border text-white placeholder-gray-500 focus:outline-none"
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
          <h2 style={{ color: '#FCEE21' }} className="text-4xl font-bold mb-8">
            ¿Listo para transformar tu vida?
          </h2>
          <Link href="/contacto">
            <Button variant="primary" size="lg">
              Comienza tu transformación
            </Button>
          </Link>
        </Container>
      </section>
    </>
  )
}
