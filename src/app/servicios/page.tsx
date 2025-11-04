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
              Transforma tu cuerpo, mente y hábitos con mis servicios 100% online de entrenamiento y nutrición.<br />
              Olvida promesas vacías, aquí sólo hay resultados medibles y personalizados. Si buscas postureo, este no es tu sitio.
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
                  Entrenamiento Online Premium
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Tu nuevo progreso empieza con un plan personalizado en app móvil, con feedback brutal y resultados que no se pueden trucar.
                </p>
                <ul className="space-y-3 text-gray-200 mb-8">
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FCEE21' }}>✓</span>
                    <span>Plan ultra-personalizado en app móvil (iOS/Android)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FCEE21' }}>✓</span>
                    <span>Feedback real semanal y ajustes directos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FCEE21' }}>✓</span>
                    <span>Entrena donde y cuando quieras, sin excusas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: '#FCEE21' }}>✓</span>
                    <span>+100 clientes que han conseguido lo que tú quieres</span>
                  </li>
                </ul>
                <Link href="/servicios/entrenamiento-online">
                  <Button variant="primary" size="lg" className="w-full md:w-auto">
                    🚀 Ver detalles y valoración gratis
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
            {/* Nutrición */}
            <div className="p-10 rounded-xl bg-[#1a1535] border-2 border-[#662D91] hover-lift">
              <div className="text-6xl mb-4">🥗</div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#FCEE21' }}>Nutrición Personalizada</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Deja de probar dietas que no funcionan. Aquí tienes tu estrategia nutricional realista, con recetas, lista de compra y educación para que se mantenga en el tiempo.
              </p>
              <ul className="space-y-2 mb-8 text-gray-300">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#FCEE21' }}>•</span>
                  <span>Plan semanal personalizado 100% a tu objetivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#FCEE21' }}>•</span>
                  <span>Recetas y lista de compra automática</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#FCEE21' }}>•</span>
                  <span>Educación nutricional y seguimiento continuo</span>
                </li>
              </ul>
              <Link href="/servicios/nutricion">
                <Button variant="outline" size="lg" className="w-full">
                  Más información
                </Button>
              </Link>
            </div>
            {/* Osteopatía */}
            <div className="p-10 rounded-xl bg-[#1a1535] border-2 border-[#662D91] hover-lift">
              <div className="text-6xl mb-4">🧘</div>
              <h3 className="text-3xl font-bold mb-4" style={{ color: '#FCEE21' }}>Osteopatía & Recuperación</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Optimiza tu recuperación y ponle remedio definitivo a lesiones y molestias. Presencial en Santander para los que quieren ir al máximo nivel físico.
              </p>
              <ul className="space-y-2 mb-8 text-gray-300">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#FCEE21' }}>•</span>
                  <span>Tratamiento, prevención y mantenimiento personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#FCEE21' }}>•</span>
                  <span>Integrado con tu entrenamiento</span>
                </li>
              </ul>
              <Link href="/servicios/osteopatia">
                <Button variant="outline" size="lg" className="w-full">
                  Más información
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20">
        <Container className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            ¿Listo para empezar de verdad?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Tu progreso arranca con una valoración profesional 100% online. Es gratis, pero no apta para vagos.
          </p>
          <Link href="/contacto">
            <Button variant="primary" size="lg">
              🚀 Solicita tu valoración online gratis
            </Button>
          </Link>
        </Container>
      </section>
    </>
  )
}
