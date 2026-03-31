import { personalInfo } from '../data/portfolio'
import { Reveal } from '../components/Reveal'
import { Mail, Github, Linkedin, Send, MapPin, ArrowUpRight } from 'lucide-react'

const socials = [
  { label: 'GitHub', href: personalInfo.socials.github, icon: Github },
  { label: 'LinkedIn', href: personalInfo.socials.linkedin, icon: Linkedin },
  { label: 'Telegram', href: personalInfo.socials.telegram, icon: Send },
]

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 bg-ink relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ink-soft/50 pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-sage pointer-events-none" aria-hidden />
      <div className="absolute top-1/4 left-1/4 w-px h-32 bg-sage/10 pointer-events-none" aria-hidden />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-tan tracking-widest uppercase">06 — Contact</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          {/* Left */}
          <div>
            <Reveal delay={100}>
              <h2 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6" style={{ fontWeight: 300 }}>
                Let's build
                <br />
                <em className="text-sage">something</em>
                <br />
                together
                <span className="text-tan">.</span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="font-body text-base text-white/60 font-light leading-relaxed max-w-md">
                Whether you need a data pipeline, an intelligent system, visual design work, 
                or all three — I'm open to meaningful projects and collaborations.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex items-center gap-2 text-white/40">
                <MapPin size={14} />
                <span className="font-mono text-xs tracking-wide">{personalInfo.location}</span>
              </div>
            </Reveal>
          </div>

          {/* Right */}
          <div className="space-y-5">
            {/* Primary email CTA */}
            <Reveal delay={200} direction="left">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center justify-between w-full border border-white/10 p-6 hover:border-sage/50 hover:bg-sage/5 transition-all duration-400"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-sage/50 group-hover:bg-sage/10 transition-all duration-300">
                    <Mail size={16} className="text-sage" />
                  </div>
                  <div>
                    <p className="font-body text-xs text-white/40 mb-0.5">Email me directly</p>
                    <p className="font-mono text-sm text-white group-hover:text-sage transition-colors duration-300">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-white/20 group-hover:text-sage group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                />
              </a>
            </Reveal>

            {/* Social links */}
            <div className="grid grid-cols-3 gap-3">
              {socials.map(({ label, href, icon: Icon }, i) => (
                <Reveal key={label} delay={300 + i * 80} direction="left">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-3 border border-white/10 p-5 hover:border-sage/40 hover:bg-sage/5 transition-all duration-300"
                  >
                    <Icon size={18} className="text-white/40 group-hover:text-sage transition-colors duration-300" />
                    <span className="font-mono text-xs text-white/40 group-hover:text-white/70 transition-colors duration-300">
                      {label}
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Availability badge */}
            <Reveal delay={500} direction="left">
              <div className="flex items-center gap-3 px-4 py-3 border border-sage/20 bg-sage/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sage" />
                </span>
                <span className="font-mono text-xs text-sage/80">
                  Currently available for new projects
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
