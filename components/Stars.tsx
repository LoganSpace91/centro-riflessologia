export default function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5
  const empty = 5 - full - (half ? 1 : 0)

  const Star = ({ fill = 'currentColor' }: { fill?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      className="h-5 w-5 text-amber-500"
      aria-hidden
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 18.898l-7.335 3.866 1.401-8.168L.132 9.21l8.2-1.192z" />
    </svg>
  )

  const HalfStar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
      <defs>
        <linearGradient id="half-grad">
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#e5e7eb" />
        </linearGradient>
      </defs>
      <path
        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.168L12 18.898l-7.335 3.866 1.401-8.168L.132 9.21l8.2-1.192z"
        fill="url(#half-grad)"
      />
    </svg>
  )

  return (
    <div className="flex items-center" aria-label={`Valutazione ${rating.toFixed(1)} stelle su 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f${i}`} />
      ))}
      {half && <HalfStar />}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} fill="#e5e7eb" />
      ))}
      <span className="ml-2 text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
    </div>
  )
}


