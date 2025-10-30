import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '480',
    sessions: '2 sesiones/semana',
    popular: false,
    features: ['2 sesiones semanales', 'Plan nutricional básico', 'Chat soporte', 'Primera sesión gratis'],
  },
  {
    name: 'Professional',
    price: '630',
    sessions: '3 sesiones/semana',
    popular: true,
    features: ['3 sesiones semanales', 'Plan nutricional avanzado', 'Análisis mensual', 'Soporte prioritario', 'Primera sesión gratis'],
  },
  {
    name: 'Elite',
    price: '890',
    sessions: '4 sesiones/semana',
    popular: false,
    features: ['4 sesiones semanales', 'Plan premium', 'Análisis quincenal', 'Osteopatía mensual', 'Soporte 24/7'],
  },
]

export default function TarifasPage() {
  return (
    <>
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-32">
        <Container>
          <h1 style={{ color: '#FCEE21' }} className="text-5xl md:text-7xl font-bold mb-6">
            Planes de Membresía
          </h1>
          <p className="text-xl text-gray-400">Elige el plan que mejor se adapte a tus objetivos.</p>
        </Container>
      </section>

      <section style={{ backgroundColor: '#1a1535' }} className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="rounded-xl p-8" style={{
                backgroundColor: plan.popular ? 'rgba(252, 238, 33, 0.05)' : '#16122B',
                border: plan.popular ? '3px solid #FCEE21' : '1px solid #662D91',
              }}>
                {plan.popular && <div className="mb-4 inline-block px-4 py-1 rounded-full text-sm font-bold" style={{ backgroundColor: '#FCEE21', color: '#16122B' }}>⭐ RECOMENDADO</div>}
                <h3 style={{ color: '#FCEE21' }} className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.sessions}</p>
                <div className="mb-8"><span style={{ color: '#FCEE21' }} className="text-5xl font-bold">€{plan.price}</span><span className="text-gray-400 ml-2">/mes</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Check size={20} style={{ color: '#FCEE21' }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contacto" className="block">
                  <Button variant={plan.popular ? 'primary' : 'outline'} size="lg" className="w-full">
                    Comenzar ahora
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
