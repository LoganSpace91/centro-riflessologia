import Link from 'next/link'

export const metadata = {
  title: 'English Version Coming Soon',
}

export default function EnglishPlaceholder() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-3xl font-bold text-brand">English Version Coming Soon</h1>
      <p className="mt-3 text-gray-700">
        We are working on the English translation of Centro Riflessologia. In the meantime, you can browse the Italian version or contact us
        directly for information in English.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link className="btn btn-primary" href="/">
          Back to Home
        </Link>
        <a className="btn btn-outline" href="mailto:paganottodanya@gmail.com">
          Email us
        </a>
      </div>
    </div>
  )
}


