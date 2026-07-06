"use client"
import { motion } from 'motion/react'
import type { ElementType } from 'react'
import { EASE } from './ease'

type Props = {
  text: string
  className?: string
  as?: ElementType
  /** Ritardo prima della prima parola, in secondi. */
  delay?: number
}

/**
 * Titolo che entra parola per parola in cascata (slide-up con mascheratura).
 * Il testo completo resta nel DOM (via `aria-label`) per accessibilità e SEO.
 * Con reduced-motion attivo, `MotionConfig` neutralizza gli spostamenti: le parole
 * appaiono semplicemente in dissolvenza.
 */
export default function KineticHeading({ text, className, as = 'h1', delay = 0 }: Props) {
  const Tag = (motion as never as Record<string, typeof motion.h1>)[as as string] ?? motion.h1
  const words = text.split(' ')

  return (
    <Tag
      className={className}
      aria-label={text}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: delay } } }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden align-top"
          style={{ marginRight: '0.25em', paddingBottom: '0.12em' }}
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%' },
              show: { y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
