import { useState } from 'react'
import { projects } from '../data/portfolio'
import { Reveal } from '../components/Reveal'
import { ExternalLink, Github, ArrowRight, Palette, Image, Share2, X } from 'lucide-react'

type Filter = 'All' | 'AI / NLP' | 'Data Engineering' | 'Data Analytics' | 'Generative AI' | 'Machine Learning' | 'Graphic Design'

const filters: Filter[] = ['All', 'AI / NLP', 'Data Engineering', 'Data Analytics', 'Generative AI', 'Machine Learning', 'Graphic Design']

const statusColors = {
  Live: 'text-sage border-sage/30 bg-sage/5',
  'In Progress': 'text-tan border-tan/30 bg-tan/5',
  Archived: 'text-ink-mid border-ink/20 bg-ink/5',
}

const designCategories = [
  { id: 'branding', label: 'Branding', icon: Palette, count: 23 },
  { id: 'printads', label: 'Print Ads', icon: Image, count: 6 },
  { id: 'socialmedias', label: 'Social Media', icon: Share2, count: 18 },
]

const designAssets = {
  branding: Array.from({ length: 23 }, (_, i) => ({
    id: `branding_${i + 1}`,
    src: `/graphicdesign/branding/branding_${String(i + 1).padStart(2, '0')}.webp`,
    title: `Branding Design ${i + 1}`,
  })),
  printads: Array.from({ length: 6 }, (_, i) => ({
    id: `printads_${i + 1}`,
    src: `/graphicdesign/printads/printads_${String(i + 1).padStart(2, '0')}.webp`,
    title: `Print Ad ${i + 1}`,
  })),
  socialmedias: Array.from({ length: 18 }, (_, i) => ({
    id: `socialmedia_${i + 1}`,
    src: `/graphicdesign/socialmedias/socialmedia_${String(i + 1).padStart(2, '0')}.webp`,
    title: `Social Media ${i + 1}`,
  })),
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [designCategory, setDesignCategory] = useState('branding')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  const currentDesignAssets = designAssets[designCategory as keyof typeof designAssets]

  return (
    <section id="projects" className="py-28 md:py-36 bg-sage-pale/20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs text-tan tracking-widest uppercase">05 — Projects</span>
            <div className="flex-1 h-px bg-sage/20" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <Reveal delay={100}>
            <h2 className="font-display text-5xl md:text-6xl text-ink leading-tight" style={{ fontWeight: 300 }}>
              Selected
              <br />
              <em className="text-tan">work</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body text-base text-ink-mid font-light leading-relaxed lg:mt-4">
              A selection of projects spanning machine learning, data infrastructure, AI systems, 
              and visual design. Each one built with intention.
            </p>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={150}>
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-mono text-xs px-4 py-2 border transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-sage text-white border-sage'
                    : 'border-sage/20 text-ink-mid hover:border-sage hover:text-sage'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Graphic Design Gallery */}
        {activeFilter === 'Graphic Design' && (
          <>
            {/* Design Category Tabs */}
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3 mb-12">
                {designCategories.map((cat) => {
                  const Icon = cat.icon
                  const isActive = designCategory === cat.id
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setDesignCategory(cat.id)}
                      className={`group flex items-center gap-2.5 px-5 py-3 border transition-all duration-300 ${
                        isActive
                          ? 'border-tan bg-tan text-white'
                          : 'border-sage-pale text-ink-mid hover:border-sage/40 hover:bg-sage/5'
                      }`}
                    >
                      <Icon size={16} className={isActive ? 'text-white' : 'text-tan'} />
                      <span className="font-body text-sm font-medium">{cat.label}</span>
                      <span
                        className={`font-mono text-xs px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-white/20 text-white' : 'bg-sage-pale text-sage'
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </Reveal>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentDesignAssets.map((asset, i) => (
                <Reveal key={asset.id} delay={100 + (i % 8) * 50}>
                  <button
                    onClick={() => setSelectedImage(asset.src)}
                    className="group relative aspect-square overflow-hidden border border-sage-pale hover:border-sage/40 transition-all duration-300"
                  >
                    <img
                      src={asset.src}
                      alt={asset.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center p-4">
                        <p className="font-display text-white text-lg mb-2" style={{ fontWeight: 300 }}>
                          {asset.title}
                        </p>
                        <div className="flex items-center justify-center gap-1.5 text-white/70 text-xs">
                          <span>View Full</span>
                          <ArrowRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-2 left-2">
                      <span className="font-mono text-[10px] bg-white/90 text-ink px-2 py-1">
                        {designCategories.find((c) => c.id === designCategory)?.label}
                      </span>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </>
        )}

        {/* Regular Project Grid (non-Graphic-Design filters) */}
        {activeFilter !== 'Graphic Design' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={100 + i * 60}>
                <div className={`group relative bg-white border border-sage-pale flex flex-col h-full overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-400`}>
                {/* Top color bar */}
                <div className={`h-1 w-full ${project.color === 'sage' ? 'bg-sage' : 'bg-tan'}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Meta row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-ink-mid/50">{project.year}</span>
                    <div className="flex items-center gap-2">
                      <span className={`font-mono text-xs border px-2 py-0.5 ${statusColors[project.status]}`}>
                        {project.status}
                      </span>
                      {project.featured && (
                        <span className="font-mono text-xs text-tan border border-tan/30 bg-tan/5 px-2 py-0.5">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Category */}
                  <p className={`font-mono text-xs tracking-widest mb-2 ${project.color === 'sage' ? 'text-sage' : 'text-tan'}`}>
                    {project.category.toUpperCase()}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-2xl text-ink mb-3 leading-tight" style={{ fontWeight: 400 }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm text-ink-mid font-light leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="font-mono text-xs text-ink-mid/60 bg-sage-pale/60 px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-sage-pale">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-body text-xs text-sage hover:text-sage-dark transition-colors"
                      >
                        <ExternalLink size={13} />
                        Live site
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-body text-xs text-ink-mid hover:text-ink transition-colors"
                      >
                        <Github size={13} />
                        Source
                      </a>
                    )}
                    <div className="ml-auto">
                      <ArrowRight
                        size={14}
                        className="text-ink-mid/30 group-hover:text-tan group-hover:translate-x-1 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        )}

        {activeFilter !== 'Graphic Design' && filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-ink-mid/50 font-light">No projects in this category yet.</p>
          </div>
        )}

        {/* Image Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Design preview"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  )
}
