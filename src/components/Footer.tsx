import Link from 'next/link'
import { Phone, Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <div className="text-white font-bold text-xl mb-3">
            <span className="text-verde-400">JMS</span> Valoraciones
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Tasaciones de fincas rústicas por ingeniero agrícola homologado por el Banco de España.
            Provincias de Murcia y Almería.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h3 className="text-white font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2 text-sm">
            {['/', '/sobre-mi', '/servicios', '/contacto'].map((href, i) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-verde-400 transition-colors"
                >
                  {['Inicio', 'Sobre mí', 'Servicios', 'Contacto'][i]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+34653350031" className="flex items-center gap-2 hover:text-verde-400 transition-colors">
                <Phone size={15} /> 653 35 00 31
              </a>
            </li>
            <li>
              <a href="mailto:info@jmsvaloraciones.es" className="flex items-center gap-2 hover:text-verde-400 transition-colors">
                <Mail size={15} /> info@jmsvaloraciones.es
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jorge-martinez-soler"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-verde-400 transition-colors"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} JMS Valoraciones · Jorge Martínez Soler
        {' — '}
        <Link href="/aviso-legal" className="hover:text-gray-300">Aviso legal</Link>
      </div>
    </footer>
  )
}
