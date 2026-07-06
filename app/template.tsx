"use client"
import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { EASE } from '@/components/motion/ease'

/**
 * Transizione morbida tra le route: ogni cambio pagina ri-monta questo template.
 * Con reduced-motion (via MotionConfig) resta solo la dissolvenza, senza spostamenti.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
