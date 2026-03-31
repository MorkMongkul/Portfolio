import { Reveal } from '../components/Reveal'
import { Award, BadgeCheck, FileText, ArrowUpRight, Database, Server } from 'lucide-react'

const certifications = [
  {
    title: 'Data Scientist Nanodegree',
    provider: 'Udacity',
    icon: Award,
    image: '/certifications/nano_degree.png',
  },
  {
    title: 'Google Data Analytics',
    provider: 'Coursera',
    icon: BadgeCheck,
    image: '/certifications/Coursera_Certificate.jpg',
  },
  {
    title: 'SQL and Relational Databases 101',
    provider: 'Cognitive',
    icon: Database,
  },
  {
    title: 'Microsoft Power BI Data Analyst',
    provider: 'Coursera',
    icon: BadgeCheck,
    image: '/certifications/PowerBI_Certificate.png',
  },
  {
    title: 'Data Warehouse Concepts, Design & Integration',
    provider: 'Coursera',
    icon: Database,
    image: '/certifications/certificate_data_warehouse.jpg',
  },
  {
    title: 'Machine Learning Specialization 2022',
    provider: 'Coursera',
    icon: Award,
    image: '/certifications/Machine_Learning.png',
  },
  {
    title: 'UNESCO UNITWIN Data Science Camp',
    provider: 'UNESCO & Handong Global University',
    icon: Award,
  },
  {
    title: 'Career-Ready Web Developer',
    provider: 'Frontend Master',
    icon: FileText,
  },
  {
    title: 'The Frontend Developer Career Path',
    provider: 'Scrimba',
    icon: FileText,
    image: '/certifications/Scrimba_certificate.png',
  },
  {
    title: 'Oracle Database - Dev Gym',
    provider: 'Oracle',
    icon: Database,
    image: '/certifications/Oracle_Database_dev_gym.png',
  },
  {
    title: 'SAP Certificates',
    provider: 'SAP',
    icon: Server,
    image: '/certifications/SAP_certificates.png',
  },
]

export function ContinuousLearning() {
  return (
    <section id="continuous-learning" className="py-28 md:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-tan tracking-widest uppercase">03 — Continuous Learning</span>
            <div className="flex-1 h-px bg-sage-pale" />
          </div>
        </Reveal>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
          <Reveal delay={100}>
            <h2
              className="font-display text-5xl md:text-6xl text-ink leading-tight"
              style={{ fontWeight: 300 }}
            >
              Certifications
              <br />
              <em className="text-sage">&</em>
              <br />
              <em className="text-sage">awards</em>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-body text-base text-ink-mid font-light leading-relaxed">
              Continuous learning is at the core of my professional growth. These certifications
              represent my commitment to staying current with industry best practices and
              expanding my expertise across data science, engineering, and development.
            </p>
          </Reveal>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => {
            const Icon = cert.icon
            const hasImage = !!cert.image
            
            return (
              <Reveal key={cert.title} delay={100 + i * 50}>
                <div className="group relative border border-sage-pale p-5 hover:border-sage/40 hover:bg-sage/5 transition-all duration-300">
                  {/* Icon badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 border border-sage/20 flex items-center justify-center group-hover:border-sage/50 group-hover:bg-sage/10 transition-all duration-300">
                      <Icon size={16} className="text-sage group-hover:text-sage-dark transition-colors duration-300" />
                    </div>
                    {/* Decorative corner */}
                    <div className="w-2 h-2 border-r border-t border-sage/20 group-hover:border-sage/40 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg text-ink leading-snug mb-1.5" style={{ fontWeight: 400 }}>
                    {cert.title}
                  </h3>
                  <p className="font-mono text-xs text-tan tracking-wide mb-3">{cert.provider}</p>

                  {/* View certificate link */}
                  {hasImage && (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-sage hover:text-sage-dark transition-colors duration-300 group/btn"
                    >
                      <FileText size={12} />
                      <span>View Certificate</span>
                      <ArrowUpRight size={10} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  )}

                  {/* Hover underline */}
                  <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-sage/0 via-sage/30 to-sage/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
