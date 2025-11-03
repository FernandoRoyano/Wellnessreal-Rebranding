import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export default function TarifasPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-32">
        <Container>
          <div className="max-w-4xl">
            <h1 style={{ color: '#FCEE21' }} className="text-5xl md:text-7xl font-bold mb-6 tracking-widest">
              TARIFAS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Planes flexibles diseñados para adaptarse a tu ritmo y objetivos. 
              <span style={{ color: '#FCEE21' }} className="font-bold"> Primera sesión completamente gratis.</span>
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20 md:py-28">
       <Container>
  <div className="grid md:grid-cols-3 gap-8 mb-20">
    {/* Starter 1 mes */}
    <div className="rounded-xl p-8 bg-[#16122B] border border-[#662D91] text-center">
      <h3 className="text-3xl font-bold mb-2 tracking-widest" style={{ color: '#FCEE21' }}>
        STARTER
      </h3>
      <p className="text-gray-400 mb-2">Entrenamiento Online — 1 mes</p>
      <p className="text-gray-300 text-sm mb-4">Empieza tu cambio real y comprueba el sistema WellnessReal.</p>
      <div className="mb-8 pb-8 border-b" style={{ borderBottomColor: '#662D91' }}>
        <span className="text-5xl font-bold" style={{ color: '#FCEE21' }}>€120</span>
        <span className="text-gray-400 ml-2">/mes</span>
      </div>
      <ul className="space-y-2 mb-8 text-gray-300 text-left mx-auto max-w-xs">
        <li>✓ Plan online personalizado</li>
        <li>✓ Feedback semanal</li>
        <li>✓ Acceso plataforma</li>
        <li>✓ Soporte por chat/app</li>
        <li>✓ Primera valoración gratuita</li>
      </ul>
      <Link href="/contacto">
        <Button variant="primary" size="lg" className="w-full">Comenzar ahora</Button>
      </Link>
    </div>

    {/* 3 Meses - Pack ahorro */}
    <div className="rounded-xl p-8 border-2 border-[#FCEE21] text-center scale-105 bg-[#16122B] shadow-xl">
      <div className="mb-4 inline-block px-4 py-1 rounded-full text-sm font-bold tracking-wide" style={{ backgroundColor: '#FCEE21', color: '#16122B' }}>
        ⭐ FAVORITO
      </div>
      <h3 className="text-3xl font-bold mb-2 tracking-widest" style={{ color: '#FCEE21' }}>
        PACK 3 MESES
      </h3>
      <p className="text-gray-400 mb-2">Entrenamiento Online</p>
      <p className="text-gray-300 text-sm mb-4">Ahorra 60 € y consolida tu hábito saludable con nuestro seguimiento continuo.</p>
      <div className="mb-8 pb-8 border-b" style={{ borderBottomColor: '#662D91' }}>
        <span className="text-5xl font-bold" style={{ color: '#FCEE21' }}>€300</span>
        <span className="text-gray-400 ml-2">/3 meses</span>
      </div>
      <ul className="space-y-2 mb-8 text-gray-300 text-left mx-auto max-w-xs">
        <li>✓ 12 semanas de entrenamiento online</li>
        <li>✓ Feedback semanal y seguimiento avanzado</li>
        <li>✓ Modificación dinámica del plan</li>
        <li>✓ Acceso a vídeos exclusivos</li>
        <li>✓ Primera valoración gratuita</li>
      </ul>
      <Link href="/contacto">
        <Button variant="primary" size="lg" className="w-full">Quiero el pack 3 meses</Button>
      </Link>
    </div>

    {/* PREMIUM */}
    <div className="rounded-xl p-8 bg-[#16122B] border border-[#662D91] text-center">
      <h3 className="text-3xl font-bold mb-2 tracking-widest" style={{ color: '#FCEE21' }}>
        PREMIUM
      </h3>
      <p className="text-gray-400 mb-2">Entrenamiento Online Elite</p>
      <p className="text-gray-300 text-sm mb-4">Incluye TODO lo anterior + personalización máxima y acceso VIP.</p>
      <div className="mb-8 pb-8 border-b" style={{ borderBottomColor: '#662D91' }}>
        <span className="text-5xl font-bold" style={{ color: '#FCEE21' }}>€500</span>
        <span className="text-gray-400 ml-2">/3 meses</span>
      </div>
      <ul className="space-y-2 mb-8 text-gray-300 text-left mx-auto max-w-xs">
        <li>✓ Entrenamiento online ultra personalizado</li>
        <li>✓ Videollamada semanal</li>
        <li>✓ Análisis mensual de avance y hábitos</li>
        <li>✓ Soporte directo con entrenador principal</li>
        <li>✓ Todas las ventajas del pack ahorro</li>
        <li>✓ Acceso PRIORITARIO a nuevos retos/e-books/eventos</li>
      </ul>
      <Link href="/contacto">
        <Button variant="primary" size="lg" className="w-full">Soy Premium</Button>
      </Link>
    </div>
  </div>
</Container>

      </section>

      {/* Servicios Adicionales */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-28">
        <Container>
          <h2 style={{ color: '#FCEE21' }} className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-wide">
            Servicios Adicionales
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Consulta Nutrición',
                price: '50',
                description: 'Sesión privada con nuestro nutricionista especializado'
              },
              {
                name: 'Análisis Corporal',
                price: '40',
                description: 'Composición corporal completa y seguimiento de cambios'
              },
              {
                name: 'Sesión Osteopatía',
                price: '60',
                description: 'Recuperación especializada y tratamiento de lesiones'
              },
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-xl" style={{ backgroundColor: '#1a1535', border: '1px solid #662D91' }}>
                <h3 style={{ color: '#FCEE21' }} className="text-2xl font-bold mb-2 tracking-wide">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div>
                  <span style={{ color: '#FCEE21' }} className="text-3xl font-bold">€{service.price}</span>
                  <span className="text-gray-400 ml-2">/ sesión</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20 md:py-28">
        <Container>
          <h2 style={{ color: '#FCEE21' }} className="text-4xl md:text-5xl font-bold mb-12 tracking-wide">
            Preguntas Frecuentes
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {[
              {
                q: '¿Puedo cambiar de plan cuando quiera?',
                a: 'Sí, puedes cambiar o cancelar tu plan en cualquier momento sin penalización. Solo contacta con nosotros.'
              },
              {
                q: '¿Cómo funciona la primera sesión gratis?',
                a: 'Te ofrecemos una sesión inicial completamente gratis para evaluar tu situación y diseñar tu programa personalizado sin compromiso.'
              },
              {
                q: '¿Hay descuento por pago anual?',
                a: 'Sí, contáctanos para solicitar nuestro plan anual con 15% de descuento adicional.'
              },
              {
                q: '¿Incluye asesoría nutricional?',
                a: 'Todos nuestros planes incluyen asesoría nutricional básica. Los planes Professional y Premium incluyen sesiones dedicadas con nuestro nutricionista.'
              },
              {
                q: '¿Qué pasa si no veo resultados?',
                a: 'Nuestro método está probado. Si después de 3 meses no ves progreso, revisamos tu plan completamente sin costo adicional.'
              },
              {
                q: '¿Puedo combinar planes?',
                a: 'Sí, puedes combinar nuestros servicios. Contacta con nosotros para un plan totalmente personalizado.'
              },
            ].map((faq, index) => (
              <div key={index} className="p-8 rounded-xl" style={{ backgroundColor: '#16122B', borderLeft: '4px solid #FCEE21' }}>
                <h3 style={{ color: '#FCEE21' }} className="text-xl font-bold mb-3 tracking-wide">
                  {faq.q}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20">
        <Container className="text-center">
          <h2 style={{ color: '#FCEE21' }} className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
            ¿Dudas? Hablemos
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está disponible para ayudarte a encontrar el plan perfecto
          </p>
          <Link href="/contacto">
            <Button variant="primary" size="lg">
              Contáctanos ahora
            </Button>
          </Link>
        </Container>
      </section>
    </>
  )
}
