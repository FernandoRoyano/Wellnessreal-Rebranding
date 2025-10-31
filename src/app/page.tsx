import Image from 'next/image'
import Container from '@/components/common/Container'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function HomePage() {
  return (
    <>
      {/* HERO PRINCIPAL */}
      <section className="relative h-[70vh] flex items-center justify-center" style={{ backgroundColor: '#16122B' }}>
        <Image
          src="/images/portada-WR.jpg"
          alt="Entrena con Wellness Real"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#16122B]/80 to-[#662D91]/70 z-0"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold gradient-text drop-shadow-lg text-center mb-6 animate-fadeInUp">
            El movimiento es vida.<br />Convierte el cambio en tu nuevo hábito.
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 text-center animate-fadeInUp max-w-2xl">
            WellnessReal – Entrenamiento personalizado, nutrición y bienestar integral.
            <span className="block mt-2 font-bold" style={{ color: '#FCEE21' }}>Primera sesión gratuita</span>
          </p>
          <Link href="/contacto" className="mt-2 animate-fadeInUp">
            <Button size="xl" variant="primary">
              Quiero mi primera sesión gratis
            </Button>
          </Link>
        </div>
      </section>

      {/* SECCIÓN: Servicios principales */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-24">
        <Container>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: '#FCEE21' }}>
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '💪',
                title: 'Entrenamiento Personalizado',
                desc: 'Planes de ejercicio adaptados a ti, con seguimiento profesional y enfoque en resultados reales.',
                link: '/servicios/entrenamiento-personalizado'
              },
              {
                icon: '🥗',
                title: 'Nutrición y Hábitos',
                desc: 'Planificación nutricional científica, asesoría y acompañamiento para transformar tu relación con la comida.',
                link: '/servicios/nutricion'
              },
              {
                icon: '🧘',
                title: 'Osteopatía y Recuperación',
                desc: 'Recuperación de lesiones, prevención y estrategias globales de salud, integradas con tu entrenamiento.',
                link: '/servicios/osteopatia'
              }
            ].map((s, i) => (
              <Link href={s.link} key={i} className="hover-lift group">
                <div className="p-10 bg-[#16122B] rounded-xl border border-[#662D91] text-center h-full">
                  <div className="text-6xl mb-4">{s.icon}</div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#FCEE21' }}>{s.title}</h3>
                  <p className="text-gray-300 mb-6 min-h-[70px]">{s.desc}</p>
                  <div className="inline-block mt-2 font-bold text-[#FCEE21] group-hover:underline transition">Saber más</div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* SECCIÓN: CTA inspiracional */}
      <section className="relative py-24 flex items-center justify-center" style={{ backgroundColor: '#16122B' }}>
        <Image
          src="/images/lifestyle.jpg"
          alt="Inspiración Wellness"
          fill
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16122B]/95 via-[#662D91]/80 to-[#FCEE21]/10 z-1"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Haz realidad tu mejor versión</h2>
          <p className="text-white text-xl mb-8">
            El primer paso transforma tu cuerpo, mente y hábitos. 
            <span className="block font-bold" style={{ color: '#FCEE21' }}>Empieza hoy, no mañana.</span>
          </p>
          <Link href="/servicios">
            <Button size="lg" variant="primary">
              Ver todos los servicios
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
