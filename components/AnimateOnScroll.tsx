"use client"
import type { ReactNode } from 'react'
import Reveal from './motion/Reveal'

type Props = {
  children: ReactNode
  className?: string
  /** Ritardo in millisecondi (retro-compatibile con l'uso precedente). */
  delay?: number
}

/**
 * Compatibilità: mantiene l'API precedente ma delega a Motion (`Reveal`).
 * `delay` resta in millisecondi come prima e viene convertito in secondi.
 */
export default function AnimateOnScroll({ children, className = '', delay = 0 }: Props) {
  return (
    <Reveal className={className} delay={delay / 1000}>
      {children}
    </Reveal>
  )
}
