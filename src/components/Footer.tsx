import { personalInfo } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink-soft border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-white/20">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
          <span className="font-mono text-xs text-white/20">A Journey of thousand miles begins with a single step.</span>
        </div>
      </div>
    </footer>
  )
}
