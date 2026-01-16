"use client"
import { useState, type FormEvent } from 'react'
import { getWhatsAppUrl, EMAIL } from '@/lib/constants'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent, method: 'email' | 'whatsapp') => {
    e.preventDefault()

    const { name, email, phone, message } = formData
    const fullMessage = `Nome: ${name}\nEmail: ${email}${phone ? `\nTelefono: ${phone}` : ''}\n\nMessaggio:\n${message}`

    if (method === 'whatsapp') {
      window.open(getWhatsAppUrl(fullMessage), '_blank')
    } else {
      const subject = encodeURIComponent(`Contatto dal sito - ${name}`)
      const body = encodeURIComponent(fullMessage)
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="card text-center">
        <div className="text-4xl">✓</div>
        <h3 className="mt-4 text-xl font-semibold text-brand">Grazie per averci contattato!</h3>
        <p className="mt-2 text-gray-600">Ti risponderemo il prima possibile.</p>
        <button
          onClick={() => {
            setFormData({ name: '', email: '', phone: '', message: '' })
            setSubmitted(false)
          }}
          className="btn btn-primary mt-4"
        >
          Invia un altro messaggio
        </button>
      </div>
    )
  }

  return (
    <form className="card space-y-4">
      <h2 className="text-xl font-semibold text-brand">Scrivici un messaggio</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nome *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          placeholder="Il tuo nome"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          placeholder="La tua email"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Telefono (opzionale)
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          placeholder="Il tuo numero di telefono"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Messaggio *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          placeholder="Come possiamo aiutarti?"
        />
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          type="submit"
          onClick={(e) => handleSubmit(e, 'email')}
          disabled={!formData.name || !formData.email || !formData.message}
          className="btn btn-primary flex-1 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Invia via Email
        </button>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, 'whatsapp')}
          disabled={!formData.name || !formData.email || !formData.message}
          className="btn-whatsapp flex-1 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Invia via WhatsApp
        </button>
      </div>
    </form>
  )
}
