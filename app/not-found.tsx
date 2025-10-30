import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-4xl font-bold text-brand">Pagina non trovata</h1>
      <p className="mt-3 text-gray-700">La pagina che cerchi potrebbe essere stata spostata.</p>
      <Link href="/" className="btn btn-primary mt-6 inline-block">
        Torna alla Home
      </Link>
    </div>
  )
}


