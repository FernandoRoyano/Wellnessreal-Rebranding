import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Heart, Zap, Users } from 'lucide-react'

export default function FilosofiaPage() {
  return (
    <>
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl">
            <h1 style={{ color: '#FCEE21' }} className="text-5xl md:text-7xl font-bold mb-6">
              Nuestra Filosofía
            </h1>
            <p className="text-xl text-gray-400">
              El movimiento es medicina. La nutrición es ciencia. El bienestar es un derecho.
            </p>
          </div>
        </Container>
      </section>

      <section style={{ backgroundColor: '#1a1535' }} className="py-20 md:py-28">
        <Container>
          <div className="max-w-4xl">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              En WellnessReal creemos que la transformación de tu salud no es un viaje que hagas solo. 
              Es un proceso integral donde el entrenamiento, la nutrición y la recuperación trabajan juntos 
              para crear cambios reales y duraderos.
            </p>

            <div className="grid md:grid-cols-3 gap-8 my-16">
              {[
                { icon: Heart, title: 'Holístico', desc: 'Abordamos tu salud desde todos los ángulos.' },
                { icon: Zap, title: 'Científico', desc: 'Basamos nuestros métodos en evidencia científica.' },
                { icon: Users, title: 'Humanista', desc: 'Te ves como una persona única.' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="text-center">
                    <Icon size={48} style={{ color: '#FCEE21' }} className="mx-auto mb-4" />
                    <h3 style={{ color: '#FCEE21' }} className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                )
              })}
            </div>

            <h2 style={{ color: '#FCEE21' }} className="text-3xl font-bold my-8">Los tres pilares</h2>

            <div className="space-y-8">
              <div>
                <h3 style={{ color: '#FCEE21' }} className="text-2xl font-bold mb-3">1. Entrenamiento Inteligente</h3>
                <p className="text-gray-300">No se trata de entrenar duro, sino inteligentemente.</p>
              </div>
              <div>
                <h3 style={{ color: '#FCEE21' }} className="text-2xl font-bold mb-3">2. Nutrición Consciente</h3>
                <p className="text-gray-300">La comida es tu herramienta más poderosa.</p>
              </div>
              <div>
                <h3 style={{ color: '#FCEE21' }} className="text-2xl font-bold mb-3">3. Recuperación Prioritaria</h3>
                <p className="text-gray-300">El verdadero progreso sucede cuando recuperas.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section style={{ backgroundColor: '#16122B' }} className="py-20">
        <Container className="text-center">
          <h2 style={{ color: '#FCEE21' }} className="text-4xl md:text-5xl font-bold mb-8">
            ¿Listo para vivir tu filosofía?
          </h2>
          <Link href="/contacto">
            <Button variant="primary" size="lg">
              Comienza tu transformación
            </Button>
          </Link>
        </Container>
      </section>
    </>
  )
}
