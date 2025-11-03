import Container from '@/components/common/Container'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react'

// Tipo para el post
interface BlogPostProps {
  params: {
    slug: string
  }
}

// Aquí iría la data del post (o conectarla desde una BD/CMS)
const postData = {
  'como-empezar-entrenamiento-online': {
    title: 'Cómo empezar tu entrenamiento online paso a paso',
    excerpt: 'Descubre el método exacto para empezar tu transformación con entrenamiento online personalizado.',
    date: '31 octubre, 2025',
    readTime: '8 min',
    author: 'Fernando Royano',
    image: '/images/portada-WR.jpg',
    category: 'Entrenamiento',
    content: `
      <h2>¿Realmente funciona el entrenamiento online?</h2>
      <p>Si quieres transformar tu cuerpo, conseguir resultados reales y no sabes cómo empezar, este es tu artículo. Hoy te explico el método más fácil y eficaz para lanzarte al mundo del <strong>entrenamiento online</strong>.</p>
      <p>El entrenamiento online no solo funciona, sino que <strong>multiplica tus posibilidades</strong>: más flexibilidad, personalización y seguimiento (¡y encima, más económico!). Lo esencial es tener un plan realista, adecuado a TU vida.</p>

      <h2>Paso 1: Elige a tu entrenador</h2>
      <p>Asegúrate de que trabaja con plataformas profesionales (como la que uso en WellnessReal) para que tengas:</p>
      <ul>
        <li>✓ App profesional en iOS y Android</li>
        <li>✓ Rutinas nada genéricas, 100% personalizadas</li>
        <li>✓ Vídeos técnicos de cada ejercicio</li>
        <li>✓ Feedback directo y constante</li>
        <li>✓ Sistema medible de progreso</li>
      </ul>

      <h2>Paso 2: Valoración personalizada (¡GRATIS!)</h2>
      <p>Antes de nada, realizaremos una sesión virtual donde analizaremos:</p>
      <ul>
        <li>Tus metas reales y plazos</li>
        <li>Tu salud, lesiones previas o limitaciones</li>
        <li>Material disponible (gym, casa, aire libre)</li>
        <li>Tu disponibilidad de tiempo</li>
        <li>Preferencias de ejercicios</li>
      </ul>
      <p>Aquí empieza tu transformación, con tu situación real y no con suposiciones.</p>

      <h2>Paso 3: Recibe tu plan y activa la app</h2>
      <p>Tras esa sesión, te llega la invitación a tu app personal y... ¡empiezas tu camino personalizado! Todo está digitalizado:</p>
      <ul>
        <li>Rutinas completas con vídeos</li>
        <li>Recomendaciones nutricionales</li>
        <li>Recordatorios automáticos</li>
        <li>Tracking de progreso</li>
        <li>Chat directo conmigo</li>
      </ul>

      <h2>Paso 4: Seguimiento semanal</h2>
      <p>Cada semana:</p>
      <ul>
        <li>Revisamos tus resultados</li>
        <li>Analizamos cómo te sientes</li>
        <li>Ajustamos el plan si es necesario</li>
        <li>Resolvemos cualquier duda rápido</li>
        <li>Te motivamos y mantemos el foco</li>
      </ul>

      <blockquote>
        <p>"La motivación online está a tu lado todos los días. El éxito es cuestión de hábitos y método, no de suerte." — Fernando</p>
      </blockquote>

      <h2>¿Cuánto tarda en llegar?</h2>
      <p>Los resultados no son mágicos, pero con un plan serio y consistencia:</p>
      <ul>
        <li><strong>Primeras 2-3 semanas:</strong> Ajustes, aprendizaje de la app y hábito de entrenar</li>
        <li><strong>Mes 1:</strong> Notas diferencias en fuerza, energía y motivación</li>
        <li><strong>Mes 2-3:</strong> Cambios visuales claros, mejor composición corporal</li>
        <li><strong>A partir del mes 4:</strong> Transformación evidente, nuevo hábito consolidado</li>
      </ul>

      <h2>¿Por qué online y no presencial?</h2>
      <p>Ambos modelos funcionan, pero online tiene ventajas únicas:</p>
      <ul>
        <li>✓ Sin desplazamientos, sin perder tiempo</li>
        <li>✓ Horario flexible (tú decides cuándo)</li>
        <li>✓ Más económico (sin alquileres de gym)</li>
        <li>✓ Privacidad si lo necesitas</li>
        <li>✓ Seguimiento igual de profesional</li>
        <li>✓ Acceso desde cualquier lugar</li>
      </ul>

      <h2>¿Y si me pongo enfermo o tengo una lesión?</h2>
      <p>Tu plan es <strong>dinámico</strong>. Si algo cambia, lo adaptamos. Ese es precisamente el valor de tener un entrenador: no es una app robótica, es experiencia humana detrás.</p>

      <h2>¿Te animas?</h2>
      <p>Pide tu primera valoración gratuita y descubre cómo es el método WellnessReal. Solo tienes que probar. Sin compromiso, sin sorpresas, sin excusas.</p>
    `
  }
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = postData[params.slug as keyof typeof postData]

  if (!post) {
    return (
      <Container>
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post no encontrado</h1>
          <Link href="/blog">
            <a className="text-[#FCEE21] hover:underline">Volver al blog</a>
          </Link>
        </div>
      </Container>
    )
  }

  return (
    <>
      {/* Breadcrumb */}
      <section style={{ backgroundColor: '#16122B' }} className="py-4 border-b" style={{ borderBottomColor: '#662D91' }}>
        <Container>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#FCEE21] hover:text-white transition">
            <ArrowLeft size={18} />
            Volver al blog
          </Link>
        </Container>
      </section>

      {/* Hero con imagen destacada */}
      <section className="relative h-[50vh] w-full bg-[#16122B] flex items-end justify-center">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16122B]/100 via-[#16122B]/60 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-12">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ backgroundColor: '#FCEE21', color: '#16122B' }}>
                {post.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Cuerpo del post */}
      <Container>
        <article className="max-w-3xl mx-auto py-16 md:py-24">
          {/* Texto del post con estilos */}
          <div className="prose prose-invert max-w-none prose-lg
            prose-headings:text-[#FCEE21] prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4 prose-headings:tracking-wide
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-white prose-strong:font-semibold
            prose-ul:text-gray-300 prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-[#FCEE21] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-300
            prose-blockquote:my-8 prose-blockquote:py-4
            prose-a:text-[#FCEE21] prose-a:hover:text-white prose-a:transition
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Separador */}
          <div className="my-16 h-px bg-gradient-to-r from-transparent via-[#662D91] to-transparent"></div>

          {/* Autor */}
          <div className="py-8 px-6 rounded-xl border border-[#662D91] bg-[#1a1535]">
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#FCEE21' }}>Sobre el autor</h3>
            <p className="text-gray-300 mb-4">
              Fernando Royano es entrenador personal especializado en entrenamiento online personalizado. Con +100 clientes transformados y método probado, ayuda a personas ocupadas a conseguir su mejor versión sin sacrificar su vida.
            </p>
            <Link href="/contacto">
              <a className="inline-block px-6 py-2 rounded-full text-[#16122B] font-bold text-sm hover:scale-105 transition" style={{ backgroundColor: '#FCEE21' }}>
                Contactar con Fernando
              </a>
            </Link>
          </div>

          {/* CTA */}
          <div className="my-12 p-10 rounded-xl text-center border-2" style={{ backgroundColor: 'rgba(252, 238, 33, 0.05)', borderColor: '#FCEE21' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">¿Te gustaría empezar hoy?</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Primera sesión gratuita, sin compromiso. Descubre cómo transformamos vidas.
            </p>
            <Link href="/contacto">
              <button className="px-8 py-4 rounded-full bg-[#FCEE21] text-[#16122B] font-bold text-lg hover:scale-105 transition-all shadow-xl">
                Quiero mi sesión gratis
              </button>
            </Link>
          </div>
        </article>
      </Container>

      {/* Posts relacionados */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-16">
        <Container>
          <h3 className="text-3xl font-bold mb-10" style={{ color: '#FCEE21' }}>Más artículos del blog</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { slug: 'nutricion', title: 'Nutrición: La base de tu transformación', date: '25 Oct' },
              { slug: 'descanso', title: '7 tips para dormir mejor y recuperarte', date: '20 Oct' },
              { slug: 'motivacion', title: 'Cómo mantenerte motivado en tu entrenamiento', date: '15 Oct' }
            ].map((relatedPost, i) => (
              <Link key={i} href={`/blog/${relatedPost.slug}`}>
                <a className="p-6 rounded-xl bg-[#16122B] border border-[#662D91] hover-lift">
                  <div className="text-sm text-gray-500 mb-2">{relatedPost.date}</div>
                  <h4 className="text-xl font-bold text-white hover:text-[#FCEE21] transition">{relatedPost.title}</h4>
                </a>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
