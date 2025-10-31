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
            {[
              {
                name: 'STARTER',
                sessions: '2 sesiones/semana',
                price: '120',
                description: 'Ideal para comenzar tu transformación',
                popular: false,
                features: [
                  'Evaluación inicial completa',
                  '2 sesiones de entrenamiento/semana',
                  'Plan nutricional básico',
                  'Seguimiento de progreso',
                  'Acceso a comunidad',
                  'Chat de soporte',
                  'Primera sesión gratis',
                ]
              },
              {
                name: 'PROFESSIONAL',
                sessions: '3 sesiones/semana',
                price: '180',
                description: 'Plan más popular, máxima transformación',
                popular: true,
                features: [
                  'Evaluación inicial completa',
                  '3 sesiones de entrenamiento/semana',
                  'Plan nutricional avanzado',
                  'Análisis corporal mensual',
                  'Consulta semanal nutricionista',
                  'Video coaching personalizado',
                  'Chat prioritario',
                  'Primera sesión gratis',
                ]
              },
              {
                name: 'PREMIUM',
                sessions: '4+ sesiones/semana',
                price: '240',
                description: 'Para máxima dedicación y resultados',
                popular: false,
                features: [
                  'Evaluación inicial completa',
                  '4+ sesiones de entrenamiento/semana',
                  'Plan nutricional premium personalizado',
                  'Análisis corporal quincenal',
                  'Sesión semanal con nutricionista',
                  'Consulta mensual con especialista',
                  'Video coaching ilimitado',
                  'Acceso prioritario a eventos',
                  'Soporte 24/7',
                  'Primera sesión gratis',
                ]
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="rounded-xl transition-all duration-300 p-8"
                style={{
                  backgroundColor: plan.popular ? 'rgba(252, 238, 33, 0.05)' : '#16122B',
                  border: plan.popular ? '3px solid #FCEE21' : '1px solid #662D91',
                  transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: plan.popular ? '0 20px 40px rgba(252, 238, 33, 0.2)' : 'none',
                }}
              >
                {plan.popular && (
                  <div className="mb-4 inline-block px-4 py-1 rounded-full text-sm font-bold tracking-wide" style={{ backgroundColor: '#FCEE21', color: '#16122B' }}>
                    ⭐ MÁS POPULAR
                  </div>
                )}

                <h3 style={{ color: '#FCEE21' }} className="text-3xl font-bold mb-2 tracking-widest">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-2">{plan.sessions}</p>
                <p className="text-gray-300 text-sm mb-6 h-10">{plan.description}</p>

                <div className="mb-8 pb-8" style={{ borderBottomColor: '#662D91' }} className="border-b">
                  <span style={{ color: '#FCEE21' }} className="text-5xl font-bold">€{plan.price}</span>
                  <span className="text-gray-400 ml-2">/mes</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Check size={20} style={{ color: '#FCEE21' }} className="flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contacto" className="block">
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full justify-center gap-2"
                  >
                    Comenzar ahora
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Nota importante */}
          <div className="max-w-3xl mx-auto p-8 rounded-xl" style={{ backgroundColor: '#16122B', borderLeft: '4px solid #FCEE21' }}>
            <p className="text-gray-300 text-lg">
              <span style={{ color: '#FCEE21' }} className="font-bold">💡 Nota:</span> Los precios mostrados son mensuales. Todos los planes incluyen acceso a la app mobile, seguimiento de progreso y comunidad de apoyo.
            </p>
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
