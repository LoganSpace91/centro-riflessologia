"use client"
import { MotionConfig } from 'motion/react'
import type { ReactNode } from 'react'

/**
 * Wrappa l'app con la configurazione Motion globale.
 * `reducedMotion="user"` disabilita automaticamente le animazioni di trasformazione
 * e layout quando l'utente ha attivo "Riduci movimento", mantenendo solo le dissolvenze.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
