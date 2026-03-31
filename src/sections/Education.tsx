import { education } from '../data/portfolio'
import { Reveal } from '../components/Reveal'
import { GraduationCap } from 'lucide-react'

export function Education() {
  return (
    <section id="education" className="py-28 md:py-36 bg-sage-pale/20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-tan tracking-widest uppercase">02 — Education</span>
            <div className="flex-1 h-px bg-sage/20" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal delay={100}>
            <h2
              className="font-display text-5xl md:text-6xl text-ink leading-tight"
              style={{ fontWeight: 300 }}
            >
              Academic
              <br />
              <em className="text-tan">foundations</em>
            </h2>
          </Reveal>

          <div className="space-y-8">
            {education.map((item, i) => (
              <Reveal key={item.id} delay={150 + i * 100}>
                <div className="group relative border-l-2 border-sage-pale pl-8 pb-2 last:pb-0 hover:border-sage transition-colors duration-500">
                  {/* Timeline dot */}
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-sage-pale border-2 border-sage group-hover:bg-sage transition-colors duration-300" />

                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={14} className="text-tan shrink-0" />
                      <p className="font-mono text-xs text-tan tracking-wide whitespace-nowrap">{item.period}</p>
                    </div>
                    <span className="font-mono text-xs bg-sage/10 text-sage px-2.5 py-1 shrink-0">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-ink mb-1.5" style={{ fontWeight: 400 }}>
                    {item.degree}
                  </h3>
                  <p className="font-body text-sm text-tan font-light mb-2.5">{item.institution}</p>
                  <p className="font-body text-sm text-ink-mid font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
