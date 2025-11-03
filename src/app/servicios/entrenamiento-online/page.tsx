import Image from 'next/image'
import Container from '@/components/common/Container'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function EntrenamientoOnlinePage() {
  return (
    <section style={{ backgroundColor: '#16122B' }} className="py-20 min-h-[80vh]">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FCEE21' }}>
              Entrenamiento Online Personalizado
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Lleva tu progreso al siguiente nivel con entrenamientos 100% online, flexibles, y adaptados a tus objetivos y tu ritmo de vida. Sin horarios fijos, sin desplazamientos, ¡con seguimiento real y resultados!
            </p>
            <ul className="mb-8 space-y-3 text-gray-200">
              <li>✓ Plan personal adaptado a tu espacio y material</li>
              <li>✓ Plataforma/app fácil de usar, seguimiento desde cualquier lugar</li>
              <li>✓ Feedback semanal (video, chat o voz)</li>
              <li>✓ Acceso a vídeos técnicos y recursos exclusivos</li>
              <li>✓ Soporte prioritario en remoto</li>
            </ul>
            <Link href="/contacto">
              <Button size="lg" variant="primary">
                Solicita tu plan online
              </Button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/lifestyle.jpg"
              alt="Entrenamiento online"
              width={400}
              height={400}
              className="rounded-xl object-cover border-4 border-[#662D91]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
