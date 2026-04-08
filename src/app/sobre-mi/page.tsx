import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Jorge Martínez Soler, ingeniero agrícola homologado por el Banco de España. Experto en tasación de fincas rústicas en Murcia y Almería.',
}

const acreditaciones = [
  'Homologado por las principales agencias de valoración del Banco de España',
  'Ingeniero Agrícola colegiado',
  'Amplia experiencia en mercado rústico de Murcia y Almería',
  'Informes válidos para operaciones hipotecarias, compraventa y procesos judiciales',
]

const metodologia = [
  { num: '01', titulo: 'Visita a la finca',          desc: 'Inspección in situ de la propiedad, accesos e infraestructuras.' },
  { num: '02', titulo: 'Análisis del mercado',        desc: 'Estudio de comparables y condiciones actuales en la zona.' },
  { num: '03', titulo: 'Elaboración del informe',     desc: 'Redacción detallada con metodología homologada.' },
  { num: '04', titulo: 'Entrega y seguimiento',       desc: 'Informe firmado y disponible para su entidad o trámite.' },
]

export default function SobreMi() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-verde-900 to-verde-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre mí</h1>
          <p className="text-verde-100 text-lg max-w-2xl mx-auto">
            Ingeniero agrícola con una sólida trayectoria en tasación de fincas rústicas en Murcia y Almería
          </p>
        </div>
      </section>

      {/* BIO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:flex gap-12 items-start">
        <div className="md:w-2/3">
          <span className="text-verde-600 font-semibold text-sm uppercase tracking-wider">Ingeniero Agrícola</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Jorge Martínez Soler</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Soy Jorge Martínez Soler, ingeniero agrícola con una sólida trayectoria profesional
              dedicada a la valoración de fincas rústicas en las provincias de Murcia y Almería.
              Mi formación especializada y mi pasión por el sector agrícola me han llevado a colaborar
              con diversas agencias de valoración homologadas por el Banco de España.
            </p>
            <p>
              Mi enfoque se basa en un análisis exhaustivo de cada propiedad, considerando factores
              clave como la ubicación, extensión, tipo de cultivo, infraestructuras, potencial de
              desarrollo y las condiciones actuales del mercado. Entiendo las particularidades del
              sector agrícola en esta región y me mantengo actualizado sobre las normativas y
              tendencias relevantes.
            </p>
            <p>
              Mi compromiso es ofrecer un servicio profesional, transparente y eficiente,
              proporcionando valoraciones precisas y detalladas que permitan tomar decisiones
              informadas en sus operaciones inmobiliarias.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/contacto" className="btn-primary">Solicitar valoración</Link>
          </div>
        </div>

        {/* Acreditaciones */}
        <div className="md:w-1/3 mt-10 md:mt-0">
          <div className="bg-verde-50 border border-verde-200 rounded-xl p-6">
            <Award className="text-verde-700 mb-3" size={32} />
            <h3 className="font-bold text-gray-900 mb-4">Acreditaciones</h3>
            <ul className="space-y-3">
              {acreditaciones.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="text-verde-600 mt-0.5 shrink-0" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="bg-gray-50 border-y border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Mi metodología</h2>
            <p className="section-subtitle">Un proceso riguroso y transparente en cada tasación</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {metodologia.map((paso) => (
              <div key={paso.num} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="text-3xl font-black text-verde-200 mb-2">{paso.num}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{paso.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
