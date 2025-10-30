import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { CheckCircle, Users, Zap, Heart, ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION (TESLA STYLE) ===== */}
      <section style={{ backgroundColor: '#16122B' }} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient effect */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(252, 238, 33, 0.1) 0%, transparent 50%)'
          }}
        />
        
        <Container className="relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <h1 style={{ color: '#FCEE21' }} className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              El movimiento<br />es vida
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Planes personalizados de entrenamiento, nutrición y bienestar integral. 
              Transformar tu salud comienza hoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/servicios">
                <Button variant="primary" size="lg" className="px-8">
                  Explorar servicios
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" size="lg" className="px-8">
                  Primera sesión gratis
                </Button>
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="mt-20 flex justify-center">
              <div className="animate-bounce">
                <svg className="w-6 h-6" style={{ color: '#FCEE21' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== STATS SECTION (MINIMAL) ===== */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20 md:py-28 border-b" style={{ borderBottomColor: '#662D91' }}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { number: '500+', label: 'Clientes transformados' },
              { number: '15+', label: 'Años de expertise' },
              { number: '95%', label: 'Tasa de satisfacción' },
              { number: '24/7', label: 'Soporte dedicado' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div style={{ color: '#FCEE21' }} className="text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-28">
        <Container>
          <div className="mb-16">
            <h2 style={{ color: '#FCEE21' }} className="text-5xl md:text-6xl font-bold mb-4">
              Nuestros servicios
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Soluciones integrales diseñadas para tu transformación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Entrenamiento Personalizado',
                description: 'Planes de ejercicio adaptados a tu nivel, objetivos y disponibilidad.',
                icon: '💪',
                color: '#FCEE21'
              },
              {
                title: 'Nutrición Avanzada',
                description: 'Estrategias nutricionales basadas en análisis detallado de tus necesidades.',
                icon: '🥗',
                color: '#FCEE21'
              },
              {
                title: 'Recuperación Integral',
                description: 'Osteopatía y técnicas de recuperación con especialistas certificados.',
                icon: '🧘',
                color: '#FCEE21'
              },
            ].map((service, index) => (
              <Link key={index} href="/servicios" className="group">
                <div 
                  className="h-full p-8 rounded-lg transition-all duration-300 hover:shadow-2xl cursor-pointer border border-transparent hover:border-yellow-400"
                  style={{ backgroundColor: '#1a1535' }}
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 style={{ color: '#FCEE21' }} className="text-2xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2" style={{ color: '#FCEE21' }}>
                    <span className="font-semibold">Explorar</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20 md:py-28">
        <Container>
          <div className="mb-16">
            <h2 style={{ color: '#FCEE21' }} className="text-5xl md:text-6xl font-bold mb-4">
              Cómo funciona
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Un proceso simple y efectivo para tu transformación
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Evaluación', desc: 'Análisis profundo de tu situación actual' },
              { step: '02', title: 'Plan Personalizado', desc: 'Estrategia adaptada a tus objetivos' },
              { step: '03', title: 'Seguimiento', desc: 'Ajustes continuos según tu progreso' },
              { step: '04', title: 'Resultados', desc: 'Transformación medible y sostenible' },
            ].map((item, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < 3 && (
                  <div 
                    className="hidden md:block absolute top-12 left-full w-full h-0.5 -z-10"
                    style={{ backgroundColor: 'rgba(252, 238, 33, 0.2)' }}
                  />
                )}
                
                <div className="relative">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center mb-4 font-bold text-3xl"
                    style={{ backgroundColor: 'rgba(252, 238, 33, 0.1)', color: '#FCEE21', border: '2px solid #FCEE21' }}
                  >
                    {item.step}
                  </div>
                  <h3 style={{ color: '#FCEE21' }} className="text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== WHY US SECTION ===== */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ color: '#FCEE21' }} className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                ¿Por qué elegir WellnessReal?
              </h2>
              <ul className="space-y-6">
                {[
                  'Entrenadores certificados internacionalmente',
                  'Planes 100% personalizados a tus necesidades',
                  'Seguimiento constante de tu evolución',
                  'Comunidad de apoyo y motivación',
                  'Garantía de resultados o dinero de vuelta',
                  'Acceso a tecnología de seguimiento avanzada',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle size={24} style={{ color: '#FCEE21' }} className="flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div 
              className="relative h-96 rounded-xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(252, 238, 33, 0.1) 0%, rgba(102, 45, 145, 0.3) 100%)' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Heart size={80} style={{ color: '#FCEE21' }} className="mx-auto mb-4" />
                  <p className="text-gray-300 text-lg">Transformación integral</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20 md:py-28">
        <Container>
          <div className="mb-16">
            <h2 style={{ color: '#FCEE21' }} className="text-5xl md:text-6xl font-bold mb-4">
              Planes de membresía
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Elige el que mejor se adapte a tus objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                sessions: '2',
                price: '480',
                popular: false,
                features: [
                  '2 sesiones semanales',
                  'Plan nutricional básico',
                  'Seguimiento de progreso',
                  'Chat de soporte',
                  'Primera sesión gratis',
                ],
              },
              {
                name: 'Professional',
                sessions: '3',
                price: '630',
                popular: true,
                features: [
                  '3 sesiones semanales',
                  'Plan nutricional avanzado',
                  'Análisis corporal mensual',
                  'Consulta semanal con nutricionista',
                  'Video coaching personalizado',
                  'Primera sesión gratis',
                ],
              },
              {
                name: 'Elite',
                sessions: '4',
                price: '890',
                popular: false,
                features: [
                  '4 sesiones semanales',
                  'Plan nutricional premium',
                  'Análisis corporal quincenal',
                  'Sesión semanal con nutricionista',
                  'Consulta mensual con osteopata',
                  'Acceso prioritario a eventos',
                  'Primera sesión gratis',
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="rounded-xl transition-all duration-300 p-8"
                style={{
                  backgroundColor: plan.popular ? 'rgba(252, 238, 33, 0.05)' : '#16122B',
                  border: plan.popular ? '3px solid #FCEE21' : '1px solid #662D91',
                  transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {plan.popular && (
                  <div className="mb-4 inline-block px-4 py-1 rounded-full text-sm font-bold" style={{ backgroundColor: '#FCEE21', color: '#16122B' }}>
                    Recomendado
                  </div>
                )}

                <h3 style={{ color: '#FCEE21' }} className="text-3xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">{plan.sessions} sesiones por semana</p>

                <div className="mb-8">
                  <span style={{ color: '#FCEE21' }} className="text-5xl font-bold">€{plan.price}</span>
                  <span className="text-gray-400 ml-2">/mes</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span style={{ color: '#FCEE21' }} className="font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contacto" className="block">
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    Comenzar ahora
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-28">
        <Container>
          <div className="mb-16">
            <h2 style={{ color: '#FCEE21' }} className="text-5xl md:text-6xl font-bold mb-4">
              Historias de transformación
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              Conoce cómo hemos cambiado la vida de nuestros clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'María García',
                role: 'Directiva',
                text: 'En 6 meses cambié mi vida. Perdí 12kg, gané energía y confianza. El equipo fue increíble.',
                rating: 5,
              },
              {
                name: 'Juan Rodríguez',
                role: 'Empresario',
                text: 'Finalmente encontré un servicio que se adapta a mi agenda. Los resultados hablan por sí solos.',
                rating: 5,
              },
              {
                name: 'Ana Martínez',
                role: 'Docente',
                text: 'Descubrí que el movimiento es medicina. Nunca me sentí mejor física y mentalmente.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-8 rounded-xl border" style={{ backgroundColor: '#1a1535', borderColor: '#662D91' }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#FCEE21' }} className="text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p style={{ color: '#FCEE21' }} className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #662D91 0%, #FCEE21 100%)' }}>
        <Container className="text-center">
          <h2 style={{ color: '#16122B' }} className="text-5xl md:text-7xl font-bold mb-8">
            Tu transformación<br />comienza hoy
          </h2>
          <p style={{ color: '#16122B' }} className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Primera sesión completamente gratis. Sin compromisos, solo resultados reales.
          </p>
          <Link href="/contacto">
            <Button variant="primary" size="lg" className="px-12">
              Reservar sesión gratis
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </Container>
      </section>
    </>
  )
}
