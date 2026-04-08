import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servicios de Tasación',
  description: 'Tasaciones de fincas rústicas para compraventa, hipotecas, herencias, expropiaciones, seguros, periciales y más en Murcia y Almería.',
}

const servicios = [
  {
    num: '01',
    titulo: 'Tasaciones para Compraventa',
    desc: 'Obtenga una valoración objetiva y fundamentada para negociar la compra o venta de su finca rústica con plena confianza.',
    color: 'bg-verde-50 border-verde-200',
  },
  {
    num: '02',
    titulo: 'Tasaciones para Herencias y Donaciones',
    desc: 'Valoración precisa e imparcial para la distribución equitativa de bienes en procesos sucesorios o donaciones.',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    num: '03',
    titulo: 'Tasaciones para Créditos Hipotecarios',
    desc: 'Informes de tasación válidos y reconocidos por entidades financieras para la obtención de financiación hipotecaria.',
    color: 'bg-amber-50 border-amber-200',
  },
  {
    num: '04',
    titulo: 'Tasaciones para Expropiaciones',
    desc: 'Valoración justa y técnicamente respaldada en procesos de expropiación, para defender el valor real de su propiedad.',
    color: 'bg-orange-50 border-orange-200',
  },
  {
    num: '05',
    titulo: 'Tasaciones para Seguros',
    desc: 'Valoración actualizada de su propiedad para asegurar una cobertura adecuada y negociaciones financieras sólidas.',
    color: 'bg-purple-50 border-purple-200',
  },
  {
    num: '06',
    titulo: 'Informes Periciales',
    desc: 'Elaboración de informes técnicos de alto rigor para su uso en procesos judiciales, arbitrajes o disputas legales.',
    color: 'bg-red-50 border-red-200',
  },
  {
    num: '07',
    titulo: 'Valoración de Explotaciones Agrícolas',
    desc: 'Análisis integral del valor de la finca y su potencial productivo, considerando cultivos, instalaciones y mercado.',
    color: 'bg-lime-50 border-lime-200',
  },
  {
    num: '08',
    titulo: 'Valoración de Derechos de Agua e Infraestructuras Agrarias',
    desc: 'Evaluación especializada de elementos específicos como concesiones de agua, sistemas de riego y construcciones agrarias.',
    color: 'bg-cyan-50 border-cyan-200',
  },
]

export default function Servicios() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-verde-900 to-verde-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicios</h1>
          <p className="text-verde-100 text-lg max-w-2xl mx-auto">
            Amplia gama de tasaciones adaptadas a particulares, empresas e instituciones financieras
            en las provincias de Murcia y Almería
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 text-center">
        <h2 className="section-title">Nuestra misión</h2>
        <p className="text-gray-600 leading-relaxed">
          Mi experiencia y conocimiento del mercado local me permiten realizar valoraciones precisas
          y fiables para diversas finalidades. Mi objetivo es proporcionarle una valoración rigurosa
          y detallada que responda a sus necesidades específicas, ofreciéndole la información necesaria
          para tomar decisiones fundamentadas.
        </p>
      </section>

      {/* GRID SERVICIOS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {servicios.map((s) => (
            <div key={s.num} className={`border rounded-xl p-6 flex gap-5 items-start hover:shadow-md transition-shadow ${s.color}`}>
              <span className="text-3xl font-black text-gray-300 leading-none">{s.num}</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{s.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link href="/contacto" className="inline-flex items-center gap-1 text-sm text-verde-700 font-semibold hover:text-verde-900">
                  Solicitar <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-verde-800 text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">¿Tiene alguna duda sobre qué servicio necesita?</h2>
          <p className="text-verde-100 mb-8">Consúlteme sin compromiso y le oriento sobre el proceso más adecuado para su caso.</p>
          <Link href="/contacto" className="inline-block bg-white text-verde-800 font-bold px-8 py-3 rounded-lg hover:bg-verde-50 transition-colors">
            Contactar ahora
          </Link>
        </div>
      </section>
    </>
  )
}
