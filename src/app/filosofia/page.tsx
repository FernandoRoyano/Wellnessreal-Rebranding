import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Heart, Activity, Moon } from 'lucide-react'

export default function FilosofiaPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-32">
        <Container>
          <div className="max-w-4xl">
            <h1 style={{ color: '#FCEE21' }} className="text-5xl md:text-7xl font-bold mb-6 tracking-widest">
              FILOSOFÍA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              <span style={{ color: '#FCEE21' }} className="font-bold">Wellness</span> es un sinónimo de <span style={{ color: '#FCEE21' }}>bienestar físico y emocional.</span> Es una visión global del concepto de salud.
            </p>
            <p className="text-lg text-gray-400">
              Lo que nosotros te queremos mostrar es cómo nuestro cuerpo forma parte de un todo y funciona de forma interdependiente entre sí.
            </p>
          </div>
        </Container>
      </section>

      {/* Qué es la salud */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20 md:py-28">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 style={{ color: '#FCEE21' }} className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
              ¿Qué es la salud?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Hoy en día existe mucha información, pero también mucha confusión en cuanto a la salud.
              Resulta difícil discernir la información correcta de la falsa y por eso estamos nosotros aquí.
            </p>
            
            <div className="p-8 rounded-xl mb-8" style={{ backgroundColor: 'rgba(252, 238, 33, 0.1)', border: '2px solid #FCEE21' }}>
              <p className="text-2xl md:text-3xl text-white font-bold text-center leading-relaxed">
                Aproximadamente el <span style={{ color: '#FCEE21' }}>80% de los factores</span> que afectan a nuestra salud se deben a los <span style={{ color: '#FCEE21' }}>hábitos de vida</span> que llevamos
              </p>
            </div>

            <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-300 mb-8">
              {[
                'Actividad física',
                'Nutrición',
                'Descanso',
                'Niveles de estrés',
                'Estado emocional',
                'Vida social',
                'Higiene',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span style={{ color: '#FCEE21' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xl text-gray-300 leading-relaxed">
              ¿Entiendes la importancia que tiene tu estilo de vida en tu salud?
            </p>
          </div>
        </Container>
      </section>

      {/* Nuestra Filosofía */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20 md:py-28">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 style={{ color: '#FCEE21' }} className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
              WellnessReal no es un producto
            </h2>
            <p className="text-2xl md:text-3xl text-white font-semibold mb-6">
              Es una <span style={{ color: '#FCEE21' }}>filosofía de vida</span>
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Queremos que tú puedas beneficiarte de todo esto, por ello te ofrecemos todo lo que necesitas para transformar tu vida y mejorar tu salud.
            </p>
          </div>
        </Container>
      </section>

      {/* El Círculo de la Salud */}
      <section style={{ backgroundColor: '#1a1535' }} className="py-20 md:py-28">
        <Container>
          <h2 style={{ color: '#FCEE21' }} className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-wide">
            El Círculo de la Salud
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            La salud es como un circuito: se compone de diversas áreas que funcionan interconectadas. 
            Si una de esas áreas falla, el circuito deja de funcionar por mucho que trabajes las otras, porque la conexión se rompe.
          </p>

          {/* Las 3 áreas */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Activity,
                title: 'Actividad Física',
                description: 'La actividad es fundamental para el correcto funcionamiento del cuerpo. Aumenta el metabolismo, mejora nuestro sistema circulatorio y respiratorio, mantiene los niveles de estrés controlados lo que mejorará nuestro descanso y recuperación.',
              },
              {
                icon: Heart,
                title: 'Nutrición',
                description: 'La alimentación es el combustible que permite que tu cuerpo funcione correctamente. Una nutrición adecuada optimiza tu rendimiento físico, mental y emocional, y es clave para prevenir enfermedades.',
              },
              {
                icon: Moon,
                title: 'Recuperación',
                description: 'El descanso es otra parte vital de la ecuación para mantener la salud. Solo si tu descanso es óptimo podrás rendir 100% en tu día a día.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-8 rounded-xl" style={{ backgroundColor: '#16122B', border: '2px solid #662D91' }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: 'rgba(252, 238, 33, 0.1)', border: '2px solid #FCEE21' }}>
                    <Icon size={32} style={{ color: '#FCEE21' }} />
                  </div>
                  <h3 style={{ color: '#FCEE21' }} className="text-2xl font-bold mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl text-white font-semibold mb-4">
              Las <span style={{ color: '#FCEE21' }}>3 áreas están interconectadas</span>
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Trabaja en las tres para lograr una transformación real y duradera
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#16122B' }} className="py-20">
        <Container className="text-center">
          <h2 style={{ color: '#FCEE21' }} className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
            ¿Listo para transformar tu estilo de vida?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Comienza hoy con tu primera sesión gratuita
          </p>
          <Link href="/contacto">
            <Button variant="primary" size="lg">
              Empieza tu transformación
            </Button>
          </Link>
        </Container>
      </section>
    </>
  )
}
