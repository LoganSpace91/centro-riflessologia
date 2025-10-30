export default function MapEmbed({ className }: { className?: string }) {
  const src =
    'https://www.google.com/maps?q=Via%20Tombole%2C%20168%2C%2037047%20San%20Bonifacio%20VR&output=embed'
  return (
    <iframe
      className={className ?? 'h-[320px] w-full'}
      src={src}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      aria-label="Mappa: Via Tombole, 168 – San Bonifacio (VR)"
    />
  )
}


