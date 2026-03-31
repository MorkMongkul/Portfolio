import { useEffect, useState } from 'react'
import { personalInfo } from '../data/portfolio'
import { ArrowDown } from 'lucide-react'

const roleColors = ['text-sage', 'text-tan', 'text-sage-muted', 'text-tan-muted']

export function Hero() {
  const [visible, setVisible] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      {/* Background geometric accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sage-pale/30 pointer-events-none" aria-hidden />
      <div className="absolute top-1/4 right-1/4 w-px h-48 bg-tan/20 pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/3 right-1/3 w-24 h-px bg-sage/20 pointer-events-none" aria-hidden />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Eyebrow */}
            <div
              className={`transition-all duration-700 delay-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="font-mono text-xs text-tan tracking-widest uppercase">
                {personalInfo.location}
              </span>
            </div>

            {/* Name */}
            <h1
              className={`font-display mt-4 leading-none text-balance transition-all duration-700 delay-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', fontWeight: 300 }}
            >
              <span className="text-ink">Mork</span>
              <br />
              <span className="text-ink italic">Mongkul</span>
              <span className="text-tan">.</span>
            </h1>

            {/* Rotating Role */}
            <div
              className={`mt-6 flex items-center gap-3 transition-all duration-700 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-8 h-px bg-tan" />
              <div className="h-7 overflow-hidden">
                {personalInfo.roles.map((role, i) => (
                  <p
                    key={role}
                    className={`font-body text-base font-light transition-all duration-500 ${
                      i === roleIndex
                        ? `opacity-100 translate-y-0 ${roleColors[i]}`
                        : 'opacity-0 -translate-y-full absolute'
                    }`}
                    style={{
                      position: i === roleIndex ? 'relative' : 'absolute',
                      transform: i === roleIndex ? 'translateY(0)' : 'translateY(-100%)',
                    }}
                  >
                    {role}
                  </p>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <p
              className={`font-display italic text-xl md:text-2xl text-ink-mid mt-8 max-w-xl leading-relaxed transition-all duration-700 delay-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ fontWeight: 300 }}
            >
              "{personalInfo.tagline}"
            </p>

            {/* Actions */}
            <div
              className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="#projects"
                className="font-body text-sm bg-sage text-white px-7 py-3 hover:bg-sage-dark transition-all duration-300 tracking-wide"
              >
                View Projects
              </a>
              <a
                href="#about"
                className="font-body text-sm border border-ink/20 text-ink px-7 py-3 hover:border-sage hover:text-sage transition-all duration-300 tracking-wide"
              >
                About Me
              </a>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div
            className={`hidden lg:flex justify-center items-center transition-all duration-700 delay-500 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              {/* Decorative blur elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-sage-pale/40 rounded-full blur-2xl" aria-hidden />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-tan-pale/30 rounded-full blur-xl" aria-hidden />
              
              {/* Photo container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-sm">
                <img
                  src="/official_me.png"
                  alt="Mork Mongkul"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay for consistency */}
                <div className="absolute inset-0 bg-sage/5 mix-blend-overlay" aria-hidden />
              </div>
              
              {/* Frame accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-sage/20 -z-10" aria-hidden />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-1000 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="font-mono text-xs text-ink-mid/40 tracking-widest uppercase">scroll</span>
        <ArrowDown size={14} className="text-tan animate-bounce" />
      </div>

      {/* Side text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-sage/20" />
        <span
          className="font-mono text-xs text-ink-mid/30 tracking-widest"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Data × Design × Intelligence
        </span>
        <div className="w-px h-16 bg-sage/20" />
      </div>
    </section>
  )
}
