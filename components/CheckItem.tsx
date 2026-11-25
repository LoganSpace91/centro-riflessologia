import type { ReactNode } from 'react'

/** Riga con spunta pesca: usata per elenchi di benefici. */
export default function CheckItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-peach/20 text-brand" aria-hidden>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div>{children}</div>
    </div>
  )
}
