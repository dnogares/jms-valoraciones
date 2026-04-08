import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, MapPin, FileText, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tasación de Fincas Rústicas en Murcia y Almería',
}

const serviciosDestacados = [
  { titulo: 'Tasaciones para Compraventa', desc: 'Valoración objetiva para negociar con confianza.' },
  { titulo: 'Créditos Hipotecarios', desc: 'Informes válidos para entidades financieras.' },
  { titulo: 'Explotaciones Agrícolas', desc: 'Análisis integral del valor y potencial productivo.' },
]

const ventajas = [
  { icon: Award,     titulo: 'Homologado Banco de España', desc: 'Tasaciones con plena validez legal y financiera.' },
  { icon: MapPin,    titulo: 'Conocimiento local',         desc: 'Experto en el mercado rústico de Murcia y Almería.' },
  { icon: FileText,  titulo: 'Informes detallados',        desc: 'Valoraciones exhaustivas para decisiones informadas.' },
  { icon: Users,     titulo: 'Servicio personalizado',     desc: 'Atención directa y cumplimiento de plazos.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-verde-900 via-verde-800 to-verde-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: "url('https://jmsvaloraciones.es/wp-content/uploads/2025/04/papelesA-1024x683.jpg')" }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36">
          <span className="inline-block bg-verde-600/40 border border-verde-400/40 text-verde-100 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Ingeniero Agrícola · Murcia &amp; Almería
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-6">
            Valoración Profesional y Precisa de su Finca Rústica
          </h1>
          <p className="text-lg text-verde-100 max-w-2xl mb-10 leading-relaxed">
            Con acreditación por las principales agencias homologadas por el Banco de España,
            ofrezco tasaciones fiables para sus necesidades en las provincias de Murcia y Almería.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/servicios" className="btn-primary text-center">
              Ver servicios
            </Link>
            <Link href="/contacto" className="btn-outline border-white text-white hover:bg-white hover:text-verde-800 text-center">
              Solicitar valoración
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="section-title">Servicios principales</h2>
          <p className="section-subtitle">
            Amplia gama de tasaciones adaptadas a particulares, empresas e instituciones financieras.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {serviciosDestacados.map((s) => (
            <div key={s.titulo} className="border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-verde-300 transition-all">
              <CheckCircle className="text-verde-600 mb-3" size={28} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.titulo}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/servicios" className="btn-outline">Ver todos los servicios</Link>
        </div>
      </section>

      {/* SOBRE MÍ BANNER */}
      <section className="bg-tierra-50 border-y border-tierra-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:flex items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <span className="text-tierra-600 font-semibold text-sm uppercase tracking-wider">Sobre mí</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Jorge Martínez Soler</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ingeniero agrícola con sólida trayectoria dedicada a la valoración de fincas rústicas
              en Murcia y Almería. Colaboro con diversas agencias de valoración homologadas por el
              Banco de España, garantizando la validez y reconocimiento de mis informes.
            </p>
            <Link href="/sobre-mi" className="btn-primary">Leer más</Link>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {ventajas.map(({ icon: Icon, titulo, desc }) => (
              <div key={titulo} className="bg-white rounded-xl p-5 shadow-sm">
                <Icon className="text-verde-600 mb-2" size={24} />
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{titulo}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Necesita tasar una finca rústica?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Contacte ahora y le asesoraré sin compromiso sobre el proceso de valoración.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contacto" className="btn-primary">Solicitar presupuesto</Link>
          <a href="tel:+34653350031" className="btn-outline">📞 653 35 00 31</a>
        </div>
      </section>
    </>
  )
}
