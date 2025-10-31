import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-surface/60">
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src="/SanBonifacio_logo.png" alt="Logo Centro Riflessologia" className="h-10 w-10 object-cover" />
              <h3 className="text-lg font-semibold text-brand">Centro Riflessologia</h3>
            </div>
            <p className="mt-2 text-sm text-gray-700">Paganotto Danya • Rieti Jessica</p>
            <p className="text-sm text-gray-700">Via Tombole, 168 – San Bonifacio (VR)</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contatti</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              <li>
                Tel: <a className="underline" href="tel:+393494493683">+39 349 449 36 83</a>
              </li>
              <li>
                WhatsApp: <a className="underline" href="https://wa.me/393494493683">Chatta con noi</a>
              </li>
              <li>
                Email: <a className="underline" href="mailto:paganottodanya@gmail.com">paganottodanya@gmail.com</a>
              </li>
              <li>
                IG: <a className="underline" href="https://instagram.com/centro_riflessologia_sanbo" target="_blank" rel="noreferrer">@centro_riflessologia_sanbo</a>
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


