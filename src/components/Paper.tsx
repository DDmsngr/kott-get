import type { ReactNode } from 'react'

export function Tape({ className = '' }: { className?: string }) {
  return <span aria-hidden className={`tape pointer-events-none absolute block h-7 w-24 ${className}`} />
}

export function Stamp({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border-[3px] border-double border-accent-ink px-4 py-2 text-center text-xs font-semibold tracking-[0.14em] text-accent-ink uppercase ${className}`}
    >
      {children}
    </span>
  )
}

// Рваный край листа: верх следующей секции
export function TornEdge({ fill, flip = false }: { fill: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      className={`block h-4 w-full sm:h-6 ${flip ? 'rotate-180' : ''}`}
    >
      <path
        fill={fill}
        d="M0 24V14l18-6 22 7 19-9 25 6 17-8 24 9 21-5 18 7 26-10 20 8 23-4 19 7 24-9 18 6 22-7 25 8 17-5 21 9 23-10 19 6 24-3 20 8 18-9 25 6 22-5 17 8 24-7 21 5 19-8 26 9 18-6 23 4 20-7 22 8 19-9 25 7 17-4 23 6 21-8 18 7 24-6 20 5 22-9 19 8 25-5 17 6 23-8 21 7 18-4 24 8 20-9 22 6 19-5 25 7 17-6 23 8 21-7 18 5 24-8 20 9 22-6 19 4 25-7 18 6 22-5V24Z"
      />
    </svg>
  )
}

export function PhoneFrame({ src, alt, className = '', eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <div className={`relative rounded-[2.2rem] bg-ink p-2 shadow-[0_24px_48px_-20px_rgba(60,40,20,0.55)] ${className}`}>
      <img
        src={src}
        alt={alt}
        width={600}
        height={1182}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
        className="block h-auto w-full rounded-[1.7rem] bg-white"
      />
    </div>
  )
}
