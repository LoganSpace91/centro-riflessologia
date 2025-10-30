import Link from 'next/link'

type Props = {
  href: string
  label: string
  variant?: 'primary' | 'outline'
  className?: string
}

export default function CTAButton({ href, label, variant = 'primary', className }: Props) {
  const base = 'btn ' + (variant === 'primary' ? 'btn-primary' : 'btn-outline')
  return (
    <Link href={href} className={`${base} ${className ?? ''}`.trim()}>
      {label}
    </Link>
  )
}


