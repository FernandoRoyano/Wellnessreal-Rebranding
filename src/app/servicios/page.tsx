import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Entrenamiento Personalizado',
    slug: 'entrenamiento-personalizado',
    description: 'Planes de ejercicio diseñados específicamente para ti',
    longDescription: 'Cada plan de entrenamiento es único. Analizamos tu nivel actual, tus objetivos y tu disponibilidad para crear un programa que te mantenga motivado y comprometido.',
    icon: '💪',
    features: [
      'Evaluación inicial completa',
      'Programa personalizado',
      'Seguimiento semanal',
      'Ajustes según progreso',
      'Acceso a video tutoriales',
      'Comunidad de apoyo',
    ],
    pricing: 'Desde €120/mes'
  },
  {
    id: 2,
    title: 'Nutrición Avanzada',
    slug: 'nutricion',
    description: 'Planes nutricionales basados en análisis profundo',
    longDescription: 'No creemos en dietas genéricas. Nuestros nutricionistas analizan tu metabolismo, preferencias y objetivos para crear un plan sostenible.',
    icon: '🥗',
    features: [
      'Análisis nutricional',
      'Planificación de menús',
      'Seguimiento mensual',
      'Recetas personalizadas',
      'Asesoría suplementos',
      'Educación nutricional',
    ],
    pricing: 'Desde €80/mes'
  },
  {
    id: 3,
    title: 'Osteopatía',
    slug: 'osteopatia',
    description: 'Recuperación y prevención de lesiones',
    longDescription: 'Técnicas especializadas de osteopatía para recuperación, prevención de lesiones y optimización del rendimiento físico.',
    icon: '🧘',
    features: [
      'Evaluación postural',
      'Terapia especializada',
      'Ejercicios terapéuticos',
      'Seguimiento periódico',
      'Asesoría preventiva',
      'Integración con entreno',
    ],
    pricing: 'Desde €60/sesión'
  },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl">
            <h1 style={{ color: '#FCEE21' }} className="text-5xl md:text-7xl font-bold mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-400">
              Soluciones integrales de bienestar diseñadas para tu transformación. Cada servicio está optimizado para resultados máximos.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/servicios/${service.slug}`}>
                <div 
                  className="h-full p-10 rounded-xl border border-transparent hover:border-yellow-400 transition-all duration-300 cursor-pointer group"
                  style={{ backgroundColor: '#16122B' }}
                >
                  <div className="text-6xl mb-6">{service.icon}</div>
                  
                  <h2 style={{ color: '#FCEE21' }} className="text-2xl font-bold mb-3">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6 pb-6 border-b" style={{ borderBottomColor: '#662D91' }}>
                    <p style={{ color: '#FCEE21' }} className="font-bold">
                      {service.pricing}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <CheckCircle size={16} style={{ color: '#FCEE21' }} className="flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2" style={{ color: '#FCEE21' }}>
                    <span className="font-semibold">Saber más</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20">
        <Container className="text-center">
          <h2 style={{ color: '#FCEE21' }} className="text-4xl md:text-5xl font-bold mb-8">
            ¿Listo para transformarte?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Combina múltiples servicios para un plan integral personalizado
          </p>
          <Link href="/contacto">
            <Button variant="primary" size="lg">
              Empezar hoy
            </Button>
          </Link>
        </Container>
      </section>
    </>
  )
}
