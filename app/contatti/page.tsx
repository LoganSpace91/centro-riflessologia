import MapEmbed from '@/components/MapEmbed'
import ContactForm from '@/components/ContactForm'
import { getWhatsAppUrl, WHATSAPP_BASE_URL, INSTAGRAM_URL, EMAIL, PHONE, ADDRESS } from '@/lib/constants'

export const metadata = {
  title: 'Contatti',
  description:
    'Contatta il Centro Riflessologia: telefono, WhatsApp, email e indirizzo a San Bonifacio (VR).',
}

export default function ContattiPage() {
  return (
    <div className="container py-14">
      <h1 className="text-3xl font-bold text-brand">Contatti</h1>
      <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold text-brand">Centro Riflessologia — Paganotto Danya</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Telefono:</span>{' '}
              <a className="underline" href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
            </li>
            <li>
              <span className="font-semibold">WhatsApp:</span>{' '}
              <a className="underline" href={WHATSAPP_BASE_URL}>Scrivi su WhatsApp</a>
            </li>
            <li>
              <span className="font-semibold">Email:</span>{' '}
              <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <span className="font-semibold">Instagram:</span>{' '}
              <a className="underline" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@centro_riflessologia_sanbo</a>
            </li>
            <li>
              <span className="font-semibold">Indirizzo:</span> {ADDRESS}
            </li>
            <li>
              <span className="font-semibold">P.IVA:</span> 04891460232
            </li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a className="btn-whatsapp" href={getWhatsAppUrl('Ciao Danya, vorrei prenotare un appuntamento.')}>Prenota su WhatsApp</a>
            <a
              className="btn-instagram"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              Scrivi su Instagram
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl shadow-card">
          <MapEmbed />
        </div>
      </div>

      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  )
}
