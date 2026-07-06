"use client"
import { motion } from 'motion/react'
import type { ElementType, ReactNode } from 'react'
import { EASE } from './ease'

type StaggerProps = {
  children: ReactNode
  className?: string
  /** Intervallo tra un figlio e il successivo, in secondi. */
  staggerChildren?: number
  /** Ritardo prima del primo figlio, in secondi. */
  delayChildren?: number
  once?: boolean
  amount?: number
  as?: ElementType
}

/** Container che orchestra l'ingresso in cascata dei propri `StaggerItem`. */
export function Stagger({
  children,
  className,
  staggerChildren = 0.1,
  delayChildren = 0,
  once = true,
  amount = 0.2,
  as = 'div',
}: StaggerProps) {
  const Tag = (motion as never as Record<string, typeof motion.div>)[as as string] ?? motion.div
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren, delayChildren } } }}
    >
      {children}
    </Tag>
  )
}

type ItemProps = {
  children: ReactNode
  className?: string
  y?: number
  as?: ElementType
}

/** Singolo elemento animato all'interno di uno `Stagger`. */
export function StaggerItem({ children, className, y = 24, as = 'div' }: ItemProps) {
  const Tag = (motion as never as Record<string, typeof motion.div>)[as as string] ?? motion.div
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
      }}
    >
      {children}
    </Tag>
  )
}
