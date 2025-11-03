import Container from '@/components/common/Container'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-32">
        <Container>
          <div className="max-w-4xl">
            <h1 style={{ color: '#FCEE21' }} className="text-5xl md:text-7xl font-bold mb-6 tracking-widest">
              SERVICIOS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Transforma tu cuerpo, mente y hábitos con mis servicios de entrenamiento y nutrición 100% online.
            </p>
          </div>
        </Container>
      </section>

      {/* Servicio Principal: Entrenamiento Online */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-24">
        <Container>
          <div className="bg-[#16122B] rounded-2xl overflow-hidden border-4 border-[#FCEE21] shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-full">
                <Image
                  src="/images/portada-WR.jpg"
                  alt="Entrenamiento Online"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4" style={{ backgroundColor: '#FCEE21', color: '#16122B' }}>
                  ⭐ SERVICIO ESTRELLA
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FCEE21' }}>
                  Entrenamiento Online Personalizado
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Tu entrenador personal en tu bolsillo. App profesional, seguimiento constante y planes 100% adaptados a ti.
                </p>
                <ul className="space-y-3 text-gray-200 mb-8">
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FCEE21' }}>✓</span>
                    <span>Plan personalizado en app móvil (iOS/Android)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FCEE21' }}>✓</span>
                    <span>Feedback semanal y ajustes continuos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FCEE21' }}>✓</span>
                    <span>Entrena donde y cuando quieras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FCEE21' }}>✓</span>
                    <span>Resultados comprobados con +100 clientes</span>
                  </li>
                </ul>
                <Link href="/servicios/entrenamiento-online">
                  <Button variant="primary" size="lg" className="w-full md:w-auto">
                    Ver más detalles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Servicios Complementarios */}
      <section style={{ backgroundColor: '#16122B' }} className="py-24">
        <Container>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#FCEE21' }}>
            Servicios Complementarios
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🥗',
                title: 'Nutrición Personalizada',
                desc: 'Plan nutricional adaptado a tus objetivos, con recetas, lista de compra automática y seguimiento continuo.',
                features: ['Plan semanal personalizado', 'Recetas y lista de la compra', 'Educación nutricional', 'Ajustes según progreso'],
                link: '/servicios/nutricion'
              },
              {
                icon: '🧘',
                title: 'Osteopatía & Recuperación',
                desc: 'Tratamiento de lesiones, prevención y optimización del rendimiento físico.',
                features: ['Sesiones presenciales en Santander', 'Tratamiento de lesiones', 'Prevención y mantenimiento', 'Integrado con tu entrenamiento'],
                link: '/servicios/osteopatia'
              }
            ].map((service, i) => (
              <div key={i} className="p-10 rounded-xl bg-[#1a1535] border-2 border-[#662D91] hover-lift">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#FCEE21' }}>{service.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{service.desc}</p>
                <ul className="space-y-2 mb-8 text-gray-300">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span style={{ color: '#FCEE21' }}>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.link}>
                  <Button variant="outline" size="lg" className="w-full">
                    Más información
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20">
        <Container className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Primera sesión gratuita sin compromiso
          </p>
          <Link href="/contacto">
            <Button variant="primary" size="lg">
              Solicitar mi sesión gratis
            </Button>
          </Link>
        </Container>
      </section>
    </>
  )
}
