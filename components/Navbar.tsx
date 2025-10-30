import Link from 'next/link'

const nav = [
  { href: '/servizi', label: 'Servizi' },
  { href: '/riflessologia-plantare', label: 'Riflessologia' },
  { href: '/operatore-olistico', label: 'Operatore olistico' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-brand">
          <img
            src="/SanBonifacio_riflessologia_logo.png"
            alt="Logo Centro Riflessologia"
            className="h-8 w-8 rounded-sm object-cover"
            loading="eager"
          />
          <span className="text-lg font-semibold">Centro Riflessologia</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="text-sm text-gray-700 hover:text-brand">
              {i.label}
            </Link>
          ))}
          <a
            className="btn btn-primary ml-2"
            href="https://wa.me/393494493683?text=Ciao%20Danya%2C%20vorrei%20prenotare%20un%20appuntamento."
          >
            Prenota
          </a>
        </nav>
        <a
          className="btn btn-primary md:hidden"
          href="https://wa.me/393494493683?text=Ciao%20Danya%2C%20vorrei%20prenotare%20un%20appuntamento."
        >
          Prenota
        </a>
      </div>
    </header>
  )
}


