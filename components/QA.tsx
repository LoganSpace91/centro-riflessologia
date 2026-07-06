type Props = {
  q: string
  a: string
}

export default function QA({ q, a }: Props) {
  return (
    <details className="group rounded-2xl border border-black/5 bg-[#FFFCF8] p-5 shadow-sm transition-colors open:border-peach/40 [&[open]_svg]:rotate-45 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-brand">
        {q}
        <svg
          className="h-5 w-5 flex-none text-peach transition-transform duration-300"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </summary>
      <p className="mt-3 text-gray-700">{a}</p>
    </details>
  )
}
