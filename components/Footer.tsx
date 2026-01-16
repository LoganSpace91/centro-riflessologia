import Link from 'next/link'
import Image from 'next/image'
import { WHATSAPP_BASE_URL, INSTAGRAM_URL, EMAIL, PHONE, ADDRESS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-surface/60">
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/SanBonifacio_logo.png"
                alt="Logo Centro Riflessologia"
                width={40}
                height={40}
                className="object-cover"
              />
              <h3 className="text-lg font-semibold text-brand">Centro Riflessologia</h3>
            </div>
            <p className="mt-2 text-sm text-gray-700">Paganotto Danya • Jessica Reiti</p>
            <p className="text-sm text-gray-700">{ADDRESS}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contatti</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              <li>
                Tel: <a className="underline" href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
              </li>
              <li>
                WhatsApp: <a className="underline" href={WHATSAPP_BASE_URL}>Chatta con noi</a>
              </li>
              <li>
                Email: <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                IG: <a className="underline" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@centro_riflessologia_sanbo</a>
              </li>
              <li>P.IVA 04891460232</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Link utili</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              <li>
                <Link className="underline" href="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="underline" href="/contatti">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Centro Riflessologia — Tutti i diritti riservati
        </p>
      </div>
    </footer>
  )
}
