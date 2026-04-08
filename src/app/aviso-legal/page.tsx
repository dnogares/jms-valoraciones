import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Aviso Legal' }

export default function AvisoLegal() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Aviso Legal</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 text-sm leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Titular del sitio</h2>
          <p>
            <strong>Titular:</strong> Jorge Martínez Soler<br />
            <strong>Actividad:</strong> Tasación y valoración de fincas rústicas<br />
            <strong>Email:</strong> info@jmsvaloraciones.es<br />
            <strong>Teléfono:</strong> 653 35 00 31<br />
            <strong>Ámbito:</strong> Murcia y Almería (España)
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Propiedad intelectual</h2>
          <p>
            Todos los contenidos de este sitio web —textos, imágenes, logotipos y elementos gráficos—
            son propiedad de Jorge Martínez Soler o dispone de la licencia correspondiente. Queda
            prohibida su reproducción sin autorización expresa.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Limitación de responsabilidad</h2>
          <p>
            El titular no garantiza la exactitud ni la actualización de la información contenida en
            este sitio. El uso de la información se realiza bajo la exclusiva responsabilidad del
            usuario.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Legislación aplicable</h2>
          <p>
            Este aviso legal se rige por la legislación española, siendo competentes los juzgados y
            tribunales de Murcia para cualquier controversia derivada del uso de este sitio.
          </p>
        </div>
      </div>
    </section>
  )
}
