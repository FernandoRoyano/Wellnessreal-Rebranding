import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Check } from 'lucide-react'

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
              <span style={{ color: '#FCEE21' }} className="font-bold"> Valoración profesional 100% online gratuita.</span>
            </p>
            <p className="text-base text-gray-400 mt-4">
              Más de 100 clientes activos confiando en WellnessReal para su transformación.
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
              <p className="text-gray-300 text-sm mb-4">
                Perfecto para empezar y comprobar si esto es para ti. Plan sólido, resultados reales.
              </p>
              <div className="mb-8 pb-8 border-b" style={{ borderBottomColor: '#662D91' }}>
                <span className="text-5xl font-bold" style={{ color: '#FCEE21' }}>€120</span>
                <span className="text-gray-400 ml-2">/mes</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300 text-left mx-auto max-w-xs">
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>Plan online 100% personalizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>Feedback semanal directo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>Acceso app profesional iOS/Android</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>Soporte prioritario por chat</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>Valoración inicial gratuita</span>
                </li>
              </ul>
              <Link href="/contacto">
                <Button variant="primary" size="lg" className="w-full">Prueba el método ahora</Button>
              </Link>
            </div>

            {/* 3 Meses - Pack ahorro */}
            <div className="rounded-xl p-8 border-2 border-[#FCEE21] text-center scale-105 bg-[#16122B] shadow-xl">
              <div className="mb-4 inline-block px-4 py-1 rounded-full text-sm font-bold tracking-wide" style={{ backgroundColor: '#FCEE21', color: '#16122B' }}>
                ⭐ FAVORITO - AHORRA €60
              </div>
              <h3 className="text-3xl font-bold mb-2 tracking-widest" style={{ color: '#FCEE21' }}>
                PACK 3 MESES
              </h3>
              <p className="text-gray-400 mb-2">Entrenamiento Online</p>
              <p className="text-gray-300 text-sm mb-4">
                El tiempo mínimo para crear un hábito brutal. Consolida resultados y cambia de verdad.
              </p>
              <div className="mb-8 pb-8 border-b" style={{ borderBottomColor: '#662D91' }}>
                <span className="text-5xl font-bold" style={{ color: '#FCEE21' }}>€300</span>
                <span className="text-gray-400 ml-2">/3 meses</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300 text-left mx-auto max-w-xs">
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>12 semanas de seguimiento continuo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>Ajustes dinámicos cada semana</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>Acceso a biblioteca de vídeos exclusivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>Soporte prioritario con respuesta rápida</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>Valoración inicial + seguimiento mensual</span>
                </li>
              </ul>
              <Link href="/contacto">
                <Button variant="primary" size="lg" className="w-full">Quiero el pack ahorro</Button>
              </Link>
            </div>

            {/* PREMIUM */}
            <div className="rounded-xl p-8 bg-[#16122B] border border-[#662D91] text-center">
              <h3 className="text-3xl font-bold mb-2 tracking-widest" style={{ color: '#FCEE21' }}>
                PREMIUM
              </h3>
              <p className="text-gray-400 mb-2">Entrenamiento Online Elite</p>
              <p className="text-gray-300 text-sm mb-4">
                Acceso VIP total: videollamadas semanales, personalización máxima y soporte directo conmigo.
              </p>
              <div className="mb-8 pb-8 border-b" style={{ borderBottomColor: '#662D91' }}>
                <span className="text-5xl font-bold" style={{ color: '#FCEE21' }}>€500</span>
                <span className="text-gray-400 ml-2">/3 meses</span>
              </div>
              <ul className="space-y-3 mb-8 text-gray-300 text-left mx-auto max-w-xs">
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>TODO del pack 3 meses incluido</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>Videollamada semanal conmigo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>Análisis mensual completo de progreso</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>Soporte directo VIP (WhatsApp/Telegram)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} style={{ color: '#FCEE21', minWidth: 20 }} />
                  <span>Acceso prioritario a retos, e-books y eventos</span>
                </li>
              </ul>
              <Link href="/contacto">
                <Button variant="primary" size="lg" className="w-full">Acceso VIP ahora</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Servicios Adicionales */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-28">
        <Container>
          <h2 style={{ color: '#FCEE21' }} className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-wide">
            Servicios Complementarios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Consulta Nutrición',
                price: '50',
                description: 'Sesión online con nutricionista especializado. Plan adaptado a tus objetivos y preferencias.'
              },
              {
                name: 'Análisis Corporal',
                price: '40',
                description: 'Composición corporal completa y seguimiento de cambios reales en tu físico.'
              },
              {
                name: 'Sesión Osteopatía',
                price: '60',
                description: 'Recuperación especializada, tratamiento de lesiones (presencial en Santander).'
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
                a: 'Sí, puedes cambiar o cancelar tu plan en cualquier momento sin penalización. Solo contacta con nosotros y lo ajustamos.'
              },
              {
                q: '¿Cómo funciona la valoración online gratuita?',
                a: 'Te hago un análisis profesional de tu situación y objetivos, y diseñamos tu plan personalizado. Todo online, sin compromiso y sin perder tiempo.'
              },
              {
                q: '¿Hay descuento por pago anual?',
                a: 'Sí, contáctanos para solicitar nuestro plan anual con 15% de descuento adicional sobre cualquier pack.'
              },
              {
                q: '¿Incluye asesoría nutricional?',
                a: 'Todos los planes incluyen pautas nutricionales básicas. Los planes Premium incluyen sesiones dedicadas con nutricionista.'
              },
              {
                q: '¿Qué pasa si no veo resultados?',
                a: 'Nuestro método está probado con +100 clientes. Si después de 3 meses no ves progreso, revisamos tu plan completamente sin coste adicional.'
              },
              {
                q: '¿Puedo combinar servicios?',
                a: 'Sí, puedes añadir nutrición, osteopatía o análisis corporal a tu plan base. Contacta con nosotros para un pack totalmente personalizado.'
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
            Estoy aquí para ayudarte a encontrar el plan perfecto y resolver cualquier duda. Sin presión, sin compromiso.
          </p>
          <Link href="/contacto">
            <Button variant="primary" size="lg">
              🚀 Solicita tu valoración gratis
            </Button>
          </Link>
        </Container>
      </section>
    </>
  )
}
