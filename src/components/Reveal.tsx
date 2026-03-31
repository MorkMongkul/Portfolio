import { useScrollReveal } from '../hooks/useScrollReveal'
import { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'fade'
  className?: string
}

export function Reveal({ children, delay = 0, direction = 'up', className = '' }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  const base = 'transition-all duration-700 ease-out'
  const hidden = {
    up: 'opacity-0 translate-y-6',
    left: 'opacity-0 translate-x-6',
    fade: 'opacity-0',
  }[direction]

  return (
    <div
      ref={ref}
      className={`${base} ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
