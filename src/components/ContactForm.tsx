'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError]   = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    const form = e.currentTarget
    const data = {
      nombre:  (form.elements.namedItem('nombre')  as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      asunto:  (form.elements.namedItem('asunto')  as HTMLInputElement).value,
      mensaje: (form.elements.namedItem('mensaje') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const body = await res.json()
        setError(body.message || 'Error al enviar. Inténtelo de nuevo.')
        setStatus('error')
      }
    } catch {
      setError('Error de red. Inténtelo de nuevo.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="text-verde-600 mb-4" size={56} />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje enviado!</h3>
        <p className="text-gray-600 mb-6">Nos pondremos en contacto con usted lo antes posible.</p>
        <button onClick={() => setStatus('idle')} className="btn-outline">
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
          <input
            name="nombre"
            type="text"
            required
            placeholder="Su nombre completo"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-verde-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            name="email"
            type="email"
            required
            placeholder="correo@ejemplo.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-verde-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Asunto *</label>
        <input
          name="asunto"
          type="text"
          required
          placeholder="Ej: Solicitud de tasación para compraventa"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-verde-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
        <textarea
          name="mensaje"
          rows={5}
          required
          placeholder="Describa su consulta o la finca que desea tasar..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-verde-500 resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          <AlertCircle size={16} />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {status === 'sending' ? (
          <>
            <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
            Enviando...
          </>
        ) : (
          <>
            <Send size={16} /> Enviar mensaje
          </>
        )}
      </button>
    </form>
  )
}
