import Image from 'next/image'
import Container from '@/components/common/Container'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { Check } from 'lucide-react'

export default function EntrenamientoOnlinePage() {
  return (
    <section style={{ backgroundColor: '#16122B' }} className="py-20">
      <Container>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wider" style={{ color: '#FCEE21' }}>
              Entrenamiento Online Premium
            </h1>
            <p className="text-2xl text-gray-300 mb-6 font-semibold">
              El sistema de coaching online sin excusas, para quienes quieren quemar el “algún día” y ver resultados que se notan en el espejo, en la ropa y en la vida.
            </p>
            <ul className="mb-8 space-y-4 text-gray-200 text-lg">
              <li className="flex items-start gap-2">
                <Check size={22} style={{ color: '#FCEE21', minWidth: 22 }} />
                <span>Plan ultra-personalizado: no más PDFs genéricos, ni rutinas copia-pega.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={22} style={{ color: '#FCEE21', minWidth: 22 }} />
                <span>Entrena donde quieras, cuando quieras. El horario lo pones tú, la presión la ponemos nosotros.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={22} style={{ color: '#FCEE21', minWidth: 22 }} />
                <span>Feedback brutal y real cada semana: video, voz o chat. Aquí nadie se esconde detrás de un correo automático.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={22} style={{ color: '#FCEE21', minWidth: 22 }} />
                <span>Acceso VIP a vídeos técnicos, movilidad y contenido PRO.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={22} style={{ color: '#FCEE21', minWidth: 22 }} />
                <span>Soporte prioritario y contacto directo: resuelves dudas en horas, no en días.</span>
              </li>
            </ul>
            <Link href="/contacto">
              <Button size="lg" variant="primary" className="uppercase tracking-widest font-bold px-8 py-3 rounded-xl">
                🚀 Empieza tu transformación
              </Button>
            </Link>
            <p className="mt-8 text-base md:text-lg text-gray-400">
              ¿Quieres transformarte o seguir postergando tus metas? Tu cuerpo no espera. Empieza hoy y que lo vean todos.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/lifestyle.jpg"
              alt="Entrenamiento online premium"
              width={420}
              height={420}
              className="rounded-xl object-cover border-4 border-[#662D91]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
