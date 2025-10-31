import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white border-t" style={{ backgroundColor: '#16122B', borderTopColor: '#662D91' }}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Brand - LOGO MÁS GRANDE */}
          <div className="col-span-1 md:col-span-2">
            <div className="relative w-72 h-24 mb-6">
              <Image
                src="/images/logos/WR_AUX_normal_bg.png"
                alt="WellnessReal Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-gray-400 text-base max-w-md leading-relaxed">
              Transformamos vidas a través de entrenamiento personalizado, nutrición y bienestar
              integral. Tu salud es nuestra misión.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FCEE21' }} className="font-semibold mb-4 text-lg tracking-wide">Navegación</h4>
            <ul className="space-y-2 text-base text-gray-400">
              <li>
                <Link href="/filosofia" className="hover:text-white transition">
                  Filosofía
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/tarifas" className="hover:text-white transition">
                  Tarifas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#FCEE21' }} className="font-semibold mb-4 text-lg tracking-wide">Contacto</h4>
            <ul className="space-y-3 text-base text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" style={{ color: '#FCEE21' }} />
                <span>
                  San Fernando, 16
                  <br />
                  Santander, Cantabria
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} style={{ color: '#FCEE21' }} />
                <a href="mailto:info@wellnessreal.es" className="hover:text-white transition">
                  info@wellnessreal.es
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} style={{ color: '#FCEE21' }} />
                <span>+34 XXX XXX XXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t py-6" style={{ borderTopColor: '#662D91' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {currentYear} WellnessReal. CIF: 72171129G. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="/privacidad" className="hover:text-white transition">
                Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-white transition">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
