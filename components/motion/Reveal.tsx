"use client"
import { motion } from 'motion/react'
import type { ElementType, ReactNode } from 'react'
import { EASE } from './ease'

type Props = {
  children: ReactNode
  className?: string
  /** Ritardo prima dell'ingresso, in secondi. */
  delay?: number
  /** Spostamento verticale iniziale in px (disabilitato con reduced-motion). */
  y?: number
  /** Anima una sola volta invece che ad ogni entrata in viewport. */
  once?: boolean
  /** Frazione dell'elemento visibile prima di far partire l'animazione. */
  amount?: number
  as?: ElementType
}

/** Fade + risalita all'ingresso nel viewport. */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  amount = 0.2,
  as = 'div',
}: Props) {
  const Tag = (motion as never as Record<string, typeof motion.div>)[as as string] ?? motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </Tag>
  )
}
