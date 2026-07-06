"use client"
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** Ampiezza dello spostamento verticale in px lungo lo scroll. */
  distance?: number
}

/**
 * Sposta il contenuto in verticale in funzione dello scroll, creando profondità.
 * Pensato per layer di sfondo (es. immagine/decorazioni dell'hero).
 */
export default function Parallax({ children, className, distance = 80 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance])

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}
