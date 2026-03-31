import { skillStack } from '../data/portfolio'
import { Reveal } from '../components/Reveal'
import { Marquee } from '../components/ui'

export function Skills() {
  // Flatten all skills into a single array
  const allSkills = skillStack.flatMap((cat) => cat.skills)

  return (
    <section id="skills" className="py-28 md:py-36 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-tan tracking-widest uppercase">04 — Skill Stack</span>
            <div className="flex-1 h-px bg-sage-pale" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Reveal delay={100}>
            <h2
              className="font-display text-5xl md:text-6xl text-ink leading-tight"
              style={{ fontWeight: 300 }}
            >
              Tools of
              <br />
              <em className="text-sage">the craft</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-base text-ink-mid font-light leading-relaxed lg:mt-4">
              A curated toolkit spanning the full data lifecycle — from raw ingestion to production
              ML systems — complemented by creative design skills that make insights land.
            </p>
          </Reveal>
        </div>

        {/* Single marquee row with all skills */}
        <div className="relative w-full">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <Marquee pauseOnHover repeat={10} className="py-4 [--gap:2.5rem]">
            {allSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 px-6 py-2 rounded hover:bg-sage/5 transition-colors duration-200 group shrink-0"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 object-contain grayscale-[15%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-200"
                />
                <span className="font-mono text-xs text-ink-mid/70 text-center whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
