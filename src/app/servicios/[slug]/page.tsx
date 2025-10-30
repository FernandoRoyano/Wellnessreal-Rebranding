import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { CheckCircle, ArrowLeft } from 'lucide-react'

const servicesData = {
  'entrenamiento-personalizado': {
    title: 'Entrenamiento Personalizado Online',
    icon: '💪',
    shortDesc: 'Planes de ejercicio 100% adaptados a ti',
    fullDescription: 'Cada persona es única. Por eso nuestros entrenadores certificados crean programas específicos que se adaptan a tu nivel, objetivos y disponibilidad.',
    benefits: [
      'Evaluación física inicial completa',
      'Programa personalizado con objetivos claros',
      'Seguimiento semanal de progreso',
      'Ajustes según tus resultados',
      'Video tutoriales de cada ejercicio',
      'Acceso a comunidad de apoyo',
      'Planes progresivos cada 8 semanas',
    ],
    modules: [
      { name: 'Evaluación Inicial', desc: 'Análisis completo de tu condición física' },
      { name: 'Plan Personalizado', desc: 'Programa diseñado para tus objetivos' },
      { name: 'Entrenamientos', desc: '2-4 sesiones semanales según tu plan' },
      { name: 'Seguimiento', desc: 'Ajustes periódicos según tu progreso' },
    ],
    price: '480 - 890',
    sessions: '2-4 por semana',
  },
  'nutricion': {
    title: 'Nutrición Avanzada',
    icon: '🥗',
    shortDesc: 'Planes nutricionales personalizados',
    fullDescription: 'La nutrición es la base de una transformación real. Nuestros nutricionistas analizan tu metabolismo y crean planes sostenibles que funcionan.',
    benefits: [
      'Análisis nutricional profundo',
      'Planificación completa de menús',
      'Recetas personalizadas deliciosas',
      'Seguimiento mensual detallado',
      'Asesoría sobre suplementos',
      'Educación nutricional continua',
      'Adaptación según cambios',
    ],
    modules: [
      { name: 'Evaluación Metabólica', desc: 'Análisis completo de necesidades' },
      { name: 'Plan Nutricional', desc: 'Menús personalizados para 30 días' },
      { name: 'Recetas y Compras', desc: 'Listas de compras optimizadas' },
      { name: 'Seguimiento', desc: 'Ajustes mensuales según resultados' },
    ],
    price: '80 - 150',
    sessions: 'Sesión inicial + seguimiento mensual',
  },
  'osteopatia': {
    title: 'Osteopatía y Recuperación',
    icon: '🧘',
    shortDesc: 'Recuperación y prevención de lesiones',
    fullDescription: 'Técnicas especializadas para recuperación, prevención de lesiones y optimización del rendimiento. Integrado con tu plan de entrenamiento.',
    benefits: [
      'Evaluación postural completa',
      'Terapia osteopática especializada',
      'Ejercicios terapéuticos personalizados',
      'Seguimiento periódico',
      'Asesoría preventiva',
      'Integración con programa de entrenamiento',
      'Plan de mantenimiento a largo plazo',
    ],
    modules: [
      { name: 'Evaluación Inicial', desc: 'Análisis postural y de movimiento' },
      { name: 'Terapia', desc: 'Sesiones de osteopatía especializadas' },
      { name: 'Ejercicios', desc: 'Programa terapéutico personalizado' },
      { name: 'Mantenimiento', desc: 'Seguimiento preventivo' },
    ],
    price: '60 - 90',
    sessions: 'Por sesión o plan mensual',
  },
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData]

  if (!service) {
    return (
      <div style={{ backgroundColor: '#16122B' }} className="min-h-screen flex items-center justify-center">
        <Container className="text-center">
          <h1 style={{ color: '#FCEE21' }} className="text-4xl font-bold mb-4">
            Servicio no encontrado
          </h1>
          <Link href="/servicios">
            <Button variant="primary" size="lg">
              Volver a servicios
            </Button>
          </Link>
        </Container>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-32">
        <Container>
          <Link href="/servicios" className="flex items-center gap-2 text-gray-400 hover:text-gray-300 mb-8">
            <ArrowLeft size={20} />
            Volver a servicios
          </Link>
          
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 style={{ color: '#FCEE21' }} className="text-5xl md:text-7xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              {service.fullDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto">
                <Button variant="primary" size="lg">
                  Comenzar ahora
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Más información
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20 md:py-28">
        <Container>
          <h2 style={{ color: '#FCEE21' }} className="text-4xl md:text-5xl font-bold mb-12">
            Lo que incluye
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle size={24} style={{ color: '#FCEE21' }} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-28">
        <Container>
          <h2 style={{ color: '#FCEE21' }} className="text-4xl md:text-5xl font-bold mb-12">
            Cómo funciona
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.modules.map((module, index) => (
              <div key={index} className="relative">
                {index < 3 && (
                  <div 
                    className="hidden lg:block absolute top-12 left-full w-full h-0.5 -z-10"
                    style={{ backgroundColor: 'rgba(252, 238, 33, 0.2)' }}
                  />
                )}
                <div className="relative">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 font-bold text-xl"
                    style={{ backgroundColor: 'rgba(252, 238, 33, 0.1)', color: '#FCEE21', border: '2px solid #FCEE21' }}
                  >
                    {index + 1}
                  </div>
                  <h3 style={{ color: '#FCEE21' }} className="text-lg font-bold mb-2">
                    {module.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {module.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20 md:py-28">
        <Container>
          <h2 style={{ color: '#FCEE21' }} className="text-4xl md:text-5xl font-bold mb-12">
            Historias de éxito
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Carlos López',
                result: 'Perdió 15kg en 4 meses',
                quote: 'El programa es increíble. Finalmente encontré algo que funciona y se adapta a mi vida.'
              },
              {
                name: 'Patricia Ruiz',
                result: 'Ganó fuerza y confianza',
                quote: 'No solo cambió mi cuerpo, cambió mi mentalidad. Me siento poderosa.'
              },
              {
                name: 'Miguel García',
                result: 'Mejoró su composición corporal',
                quote: 'El seguimiento personalizado fue clave. Siento que realmente me conocen.'
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-8 rounded-xl" style={{ backgroundColor: '#16122B', borderLeft: '4px solid #FCEE21' }}>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <p style={{ color: '#FCEE21' }} className="font-bold mb-1">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.result}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20">
        <Container className="text-center">
          <h2 style={{ color: '#FCEE21' }} className="text-4xl md:text-5xl font-bold mb-8">
            Precios: €{service.price}/mes
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {service.sessions}
          </p>
          <Link href="/contacto">
            <Button variant="primary" size="lg">
              Reservar consulta gratuita
            </Button>
          </Link>
        </Container>
      </section>
    </>
  )
}
