import type { Metadata } from 'next'
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacte con JMS Valoraciones para solicitar una tasación de finca rústica en Murcia o Almería.',
}

export default function Contacto() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-verde-900 to-verde-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-verde-100 text-lg max-w-xl mx-auto">
            Consulte sin compromiso. Le responderé lo antes posible.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* INFO */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de contacto</h2>

          <div className="space-y-5">
            <a href="tel:+34653350031" className="flex items-start gap-4 group">
              <div className="bg-verde-100 rounded-full p-3 shrink-0 group-hover:bg-verde-200 transition-colors">
                <Phone className="text-verde-700" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <p className="font-semibold text-gray-900 group-hover:text-verde-700 transition-colors">653 35 00 31</p>
              </div>
            </a>

            <a href="mailto:info@jmsvaloraciones.es" className="flex items-start gap-4 group">
              <div className="bg-verde-100 rounded-full p-3 shrink-0 group-hover:bg-verde-200 transition-colors">
                <Mail className="text-verde-700" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-gray-900 group-hover:text-verde-700 transition-colors">info@jmsvaloraciones.es</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="bg-verde-100 rounded-full p-3 shrink-0">
                <MapPin className="text-verde-700" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Zona de actuación</p>
                <p className="font-semibold text-gray-900">Murcia y Almería</p>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/jorge-martinez-soler"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="bg-verde-100 rounded-full p-3 shrink-0 group-hover:bg-verde-200 transition-colors">
                <Linkedin className="text-verde-700" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="font-semibold text-gray-900 group-hover:text-verde-700 transition-colors">jorge-martinez-soler</p>
              </div>
            </a>
          </div>

          <div className="mt-10 bg-verde-50 border border-verde-200 rounded-xl p-5">
            <p className="text-sm text-verde-800 leading-relaxed">
              <strong>Horario habitual de respuesta:</strong> días laborables de 9:00 a 18:00 h.
              Para urgencias, le recomiendo contactar por teléfono.
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíe un mensaje</h2>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
