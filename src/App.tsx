import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Education } from './sections/Education'
import { ContinuousLearning } from './sections/ContinuousLearning'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'

function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setLeaving(true)
            setTimeout(onDone, 600)
          }, 200)
          return 100
        }
        return p + Math.random() * 18
      })
    }, 80)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center transition-opacity duration-600 ${
        leaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <p className="font-display text-7xl text-white mb-2" style={{ fontWeight: 300 }}>
          MM<span className="text-tan">.</span>
        </p>
        <p className="font-mono text-xs text-white/30 tracking-widest mb-10">MORK MONGKUL</p>

        {/* Progress bar */}
        <div className="w-48 h-px bg-white/10 mx-auto overflow-hidden">
          <div
            className="h-full bg-sage transition-all duration-200 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <p className="font-mono text-xs text-white/20 mt-3">{Math.round(Math.min(progress, 100))}%</p>
      </div>
    </div>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <div
        className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <ContinuousLearning />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
