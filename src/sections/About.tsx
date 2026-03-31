import { personalInfo } from '../data/portfolio'
import { Reveal } from '../components/Reveal'
import { ProjectSlideshow } from '../components/ProjectSlideshow'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '9+', label: 'Projects Shipped' },
  { value: '6+', label: 'Disciplines Mastered' },
  { value: '∞', label: 'Curiosity' },
]

export function About() {
  return (
    <section id="about" className="py-28 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-tan tracking-widest uppercase">01 — About</span>
            <div className="flex-1 h-px bg-sage-pale" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <Reveal delay={100}>
              <h2
                className="font-display text-5xl md:text-6xl text-ink leading-tight mb-8"
                style={{ fontWeight: 300 }}
              >
                Where data
                <br />
                <em className="text-sage">meets design</em>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="font-body text-base text-ink-mid font-light leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="font-body text-base text-ink-mid font-light leading-relaxed">
                I believe the best data work isn't just accurate — it's{' '}
                <span className="text-sage font-normal">comprehensible and compelling</span>. My
                background in graphic design means I think about how information is perceived, not
                just processed. This dual perspective informs everything I build.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="/Mork_Mongkul_CV_Latest.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-sage border border-sage/30 px-3 py-1.5 tracking-wide hover:bg-sage hover:text-white transition-all duration-300"
                >
                  View CV
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Stats + Visual */}
          <div className="space-y-8">
            <Reveal delay={200} direction="left">
              {/* Project Slideshow Component */}
              <div className="relative h-64">
                <ProjectSlideshow />
              </div>
            </Reveal>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={300 + i * 80}>
                  <div className="border border-sage-pale p-5 hover:border-sage/30 transition-colors duration-300">
                    <p className="font-display text-4xl text-ink" style={{ fontWeight: 300 }}>
                      {stat.value}
                    </p>
                    <p className="font-body text-xs text-ink-mid/60 mt-1 tracking-wide">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
