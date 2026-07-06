import Link from 'next/link'

type Props = {
  href: string
  label: string
  variant?: 'primary' | 'outline' | 'whatsapp' | 'instagram'
  className?: string
}

const variantClasses: Record<NonNullable<Props['variant']>, string> = {
  primary: 'btn btn-primary',
  outline: 'btn btn-outline',
  whatsapp: 'btn-whatsapp',
  instagram: 'btn-instagram',
}

export default function CTAButton({ href, label, variant = 'primary', className }: Props) {
  const base = variantClasses[variant] ?? variantClasses.primary
  return (
    <Link
      href={href}
      className={`${base} w-full text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto ${className ?? ''}`.trim()}
    >
      {label}
    </Link>
  )
}


