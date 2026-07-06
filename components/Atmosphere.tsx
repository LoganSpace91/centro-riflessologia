"use client"
import { motion } from 'motion/react'

type Orb = {
  className: string
  animate: { x: number[]; y: number[] }
  duration: number
}

const ORBS: Orb[] = [
  {
    className: '-left-24 top-4 h-72 w-72 bg-brand/20',
    animate: { x: [0, 30, 0], y: [0, -24, 0] },
    duration: 15,
  },
  {
    className: 'right-[-4rem] top-1/3 h-80 w-80 bg-peach/30',
    animate: { x: [0, -28, 0], y: [0, 22, 0] },
    duration: 19,
  },
  {
    className: 'bottom-[-3rem] left-1/3 h-64 w-64 bg-brand/10',
    animate: { x: [0, 22, 0], y: [0, 16, 0] },
    duration: 17,
  },
]

/**
 * Sfondo ambientale: orb luminosi caldi in lenta deriva.
 * Con reduced-motion (via MotionConfig) restano fermi come bagliori statici.
 */
export default function Atmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${orb.className}`}
          animate={orb.animate}
          transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
