import { useEffect, useRef, useState } from 'react'

const slides = [
  {
    tag: 'Data Science & ML',
    tagColor: '#59695e',
    title: 'Predictive Analytics Pipeline',
    desc: 'End-to-end ML model forecasting crop yields with 94% accuracy across 200+ farms.',
    tech: ['Python', 'Scikit-learn', 'GCP', 'Streamlit'],
    bg: 'linear-gradient(135deg, #0a1a10 0%, #0c0404 100%)',
  },
  {
    tag: 'AI & LLM',
    tagColor: '#b38363',
    title: 'RAG Document Assistant',
    desc: 'Context-aware enterprise Q&A using retrieval-augmented generation over internal knowledge bases.',
    tech: ['LangChain', 'OpenAI', 'Pinecone', 'FastAPI'],
    bg: 'linear-gradient(135deg, #0d0a18 0%, #0c0404 100%)',
  },
  {
    tag: 'Data Engineering',
    tagColor: '#59695e',
    title: 'DataFlow Orchestrator',
    desc: 'Visual ELT pipeline platform with DAG builder, real-time monitoring and 30+ connectors.',
    tech: ['Airflow', 'Spark', 'dbt', 'Kafka', 'Docker'],
    bg: 'linear-gradient(135deg, #0a120d 0%, #0c0404 100%)',
  },
  {
    tag: 'Graphic Design',
    tagColor: '#b38363',
    title: 'Nomad Brand Identity',
    desc: 'Complete visual system — logo, palette, typography and collateral for a SEA travel platform.',
    tech: ['Figma', 'Illustrator', 'After Effects'],
    bg: 'linear-gradient(135deg, #110d08 0%, #0c0404 100%)',
  },
  {
    tag: 'Deep Learning',
    tagColor: '#59695e',
    title: 'Computer Vision System',
    desc: 'Real-time object detection and classification for quality control in manufacturing.',
    tech: ['PyTorch', 'YOLOv8', 'OpenCV', 'TensorRT'],
    bg: 'linear-gradient(135deg, #081410 0%, #0c0404 100%)',
  },
  {
    tag: 'AI & RAG',
    tagColor: '#b38363',
    title: 'Knowledge Graph Builder',
    desc: 'Automated entity extraction and relationship mapping from unstructured documents.',
    tech: ['Neo4j', 'spaCy', 'Transformers', 'FastAPI'],
    bg: 'linear-gradient(135deg, #0f0a12 0%, #0c0404 100%)',
  },
  {
    tag: 'NLP',
    tagColor: '#59695e',
    title: 'Sentiment Analysis Engine',
    desc: 'Multi-language text classification system processing 1M+ social media posts daily.',
    tech: ['BERT', 'Hugging Face', 'PyTorch', 'Redis'],
    bg: 'linear-gradient(135deg, #0a1418 0%, #0c0404 100%)',
  },
  {
    tag: 'LLM',
    tagColor: '#b38363',
    title: 'Fine-tuned Code Assistant',
    desc: 'Domain-specific code generation model trained on 500K+ internal codebase examples.',
    tech: ['Llama 2', 'LoRA', 'vLLM', 'Gradio'],
    bg: 'linear-gradient(135deg, #0f0a14 0%, #0c0404 100%)',
  },
  {
    tag: 'Chatbot',
    tagColor: '#59695e',
    title: 'AI Chat Assistant',
    desc: 'Real-time conversational AI with context awareness and multi-turn dialogue support.',
    tech: ['React', 'WebSocket', 'FastAPI', 'Redis'],
    bg: 'linear-gradient(135deg, #0a1814 0%, #0c0404 100%)',
  },
]

const DURATION = 4000

export function ProjectSlideshow() {
  const [current, setCurrent] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const goTo = (n: number) => {
    setCurrent(n)
    resetBar()
  }

  const resetBar = () => {
    clearTimeout(timerRef.current)
    if (barRef.current) {
      barRef.current.style.transition = 'none'
      barRef.current.style.width = '0%'
      setTimeout(() => {
        if (barRef.current) {
          barRef.current.style.transition = `width ${DURATION}ms linear`
          barRef.current.style.width = '100%'
        }
      }, 30)
    }
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, DURATION)
  }

  useEffect(() => {
    resetBar()
    return () => clearTimeout(timerRef.current)
  }, [current])

  const s = slides[current]

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ background: s.bg, transition: 'background 0.8s ease' }}
    >
      {/* SLIDE 1: Data Science / ML - Grid & Chart */}
      {current === 0 && (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
          {/* Grid */}
          <g opacity="0.12" stroke="#59695e" strokeWidth="0.5">
            <line x1="0" y1="40" x2="400" y2="40" />
            <line x1="0" y1="80" x2="400" y2="80" />
            <line x1="0" y1="120" x2="400" y2="120" />
            <line x1="0" y1="160" x2="400" y2="160" />
            <line x1="0" y1="200" x2="400" y2="200" />
            <line x1="0" y1="240" x2="400" y2="240" />
            <line x1="50" y1="0" x2="50" y2="280" />
            <line x1="100" y1="0" x2="100" y2="280" />
            <line x1="150" y1="0" x2="150" y2="280" />
            <line x1="200" y1="0" x2="200" y2="280" />
            <line x1="250" y1="0" x2="250" y2="280" />
            <line x1="300" y1="0" x2="300" y2="280" />
            <line x1="350" y1="0" x2="350" y2="280" />
          </g>
          {/* Chart line */}
          <polyline
            points="20,220 60,190 100,210 150,150 200,160 250,100 300,80 350,60 400,40"
            fill="none"
            stroke="#59695e"
            strokeWidth="2"
            opacity="0.6"
            strokeDasharray="500"
            strokeDashoffset="500"
            style={{ animation: 'dash 2s forwards' }}
          />
          {/* Data points */}
          <circle cx="150" cy="150" r="4" fill="#59695e" opacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="100" r="4" fill="#b38363" opacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="60" r="4" fill="#59695e" opacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite" />
          </circle>
          {/* Area fill */}
          <polyline
            points="20,220 60,190 100,210 150,150 200,160 250,100 300,80 350,60 400,40 400,280 20,280"
            fill="url(#areaGrad)"
            opacity="0.15"
          />
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#59695e" />
              <stop offset="100%" stopColor="#59695e" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Bar chart */}
          <rect x="300" y="120" width="12" height="160" fill="#59695e" opacity="0.2" />
          <rect x="318" y="80" width="12" height="200" fill="#b38363" opacity="0.15" />
          <rect x="336" y="100" width="12" height="180" fill="#59695e" opacity="0.18" />
          <rect x="354" y="50" width="12" height="230" fill="#b38363" opacity="0.12" />
        </svg>
      )}

      {/* SLIDE 2: AI / LLM - Neural Network */}
      {current === 1 && (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b7fd4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b7fd4" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="130" r="80" fill="url(#nodeGlow)" />
          {/* Neural net nodes - Layer 1 */}
          <circle cx="80" cy="80" r="5" fill="#b38363" opacity="0.7">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="80" cy="130" r="5" fill="#b38363" opacity="0.7">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="80" cy="180" r="5" fill="#b38363" opacity="0.7">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          {/* Layer 2 */}
          <circle cx="160" cy="60" r="5" fill="#59695e" opacity="0.8">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="160" cy="110" r="5" fill="#59695e" opacity="0.8">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="160" cy="160" r="5" fill="#59695e" opacity="0.8">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.7s" repeatCount="indefinite" />
          </circle>
          <circle cx="160" cy="210" r="5" fill="#59695e" opacity="0.8">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.3s" repeatCount="indefinite" />
          </circle>
          {/* Layer 3 */}
          <circle cx="240" cy="85" r="5" fill="#59695e" opacity="0.8">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.1s" repeatCount="indefinite" />
          </circle>
          <circle cx="240" cy="135" r="5" fill="#59695e" opacity="0.8">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="240" cy="185" r="5" fill="#59695e" opacity="0.8">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.4s" repeatCount="indefinite" />
          </circle>
          {/* Layer 4 */}
          <circle cx="320" cy="105" r="5" fill="#b38363" opacity="0.7">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.9s" repeatCount="indefinite" />
          </circle>
          <circle cx="320" cy="155" r="5" fill="#b38363" opacity="0.7">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.2s" repeatCount="indefinite" />
          </circle>
          {/* Connections */}
          <g stroke="#59695e" strokeWidth="0.5" opacity="0.2">
            <line x1="80" y1="80" x2="160" y2="60" />
            <line x1="80" y1="80" x2="160" y2="110" />
            <line x1="80" y1="130" x2="160" y2="110" />
            <line x1="80" y1="130" x2="160" y2="160" />
            <line x1="80" y1="180" x2="160" y2="160" />
            <line x1="80" y1="180" x2="160" y2="210" />
            <line x1="80" y1="80" x2="160" y2="160" />
            <line x1="80" y1="130" x2="160" y2="60" />
          </g>
          <g stroke="#b38363" strokeWidth="0.5" opacity="0.2">
            <line x1="160" y1="60" x2="240" y2="85" />
            <line x1="160" y1="110" x2="240" y2="85" />
            <line x1="160" y1="110" x2="240" y2="135" />
            <line x1="160" y1="160" x2="240" y2="135" />
            <line x1="160" y1="160" x2="240" y2="185" />
            <line x1="160" y1="210" x2="240" y2="185" />
          </g>
          <g stroke="#59695e" strokeWidth="0.5" opacity="0.2">
            <line x1="240" y1="85" x2="320" y2="105" />
            <line x1="240" y1="135" x2="320" y2="105" />
            <line x1="240" y1="135" x2="320" y2="155" />
            <line x1="240" y1="185" x2="320" y2="155" />
          </g>
          {/* Animated signal */}
          <circle r="3" fill="#b38363" opacity="0.9">
            <animateMotion dur="2s" repeatCount="indefinite" path="M80,130 L160,110 L240,135 L320,105" />
            <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill="#59695e" opacity="0.9">
            <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.8s" path="M80,80 L160,60 L240,85 L320,105" />
            <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
          </circle>
        </svg>
      )}

      {/* SLIDE 3: Data Engineering - Pipeline */}
      {current === 2 && (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
          <g fill="none">
            {/* Boxes */}
            <rect x="20" y="110" width="60" height="36" rx="3" stroke="#59695e" strokeWidth="1" opacity="0.5" fill="rgba(89,105,94,0.1)" />
            <rect x="120" y="90" width="60" height="36" rx="3" stroke="#b38363" strokeWidth="1" opacity="0.5" fill="rgba(179,131,99,0.08)" />
            <rect x="120" y="154" width="60" height="36" rx="3" stroke="#b38363" strokeWidth="1" opacity="0.4" fill="rgba(179,131,99,0.08)" />
            <rect x="225" y="110" width="60" height="36" rx="3" stroke="#59695e" strokeWidth="1" opacity="0.5" fill="rgba(89,105,94,0.1)" />
            <rect x="325" y="90" width="60" height="36" rx="3" stroke="#59695e" strokeWidth="1" opacity="0.5" fill="rgba(89,105,94,0.1)" />
            <rect x="325" y="154" width="60" height="36" rx="3" stroke="#59695e" strokeWidth="1" opacity="0.4" fill="rgba(89,105,94,0.08)" />
            {/* Labels */}
            <text x="50" y="132" fontFamily="monospace" fontSize="7" fill="rgba(89,105,94,0.8)" textAnchor="middle">INGEST</text>
            <text x="150" y="112" fontFamily="monospace" fontSize="7" fill="rgba(179,131,99,0.8)" textAnchor="middle">TRANSFORM</text>
            <text x="150" y="176" fontFamily="monospace" fontSize="7" fill="rgba(179,131,99,0.7)" textAnchor="middle">VALIDATE</text>
            <text x="255" y="132" fontFamily="monospace" fontSize="7" fill="rgba(89,105,94,0.8)" textAnchor="middle">LOAD</text>
            <text x="355" y="112" fontFamily="monospace" fontSize="7" fill="rgba(89,105,94,0.8)" textAnchor="middle">SERVE</text>
            <text x="355" y="176" fontFamily="monospace" fontSize="7" fill="rgba(89,105,94,0.7)" textAnchor="middle">MONITOR</text>
            {/* Arrows */}
            <line x1="80" y1="128" x2="120" y2="108" stroke="#59695e" strokeWidth="1" opacity="0.4" />
            <line x1="80" y1="128" x2="120" y2="172" stroke="#59695e" strokeWidth="1" opacity="0.3" />
            <line x1="180" y1="108" x2="225" y2="125" stroke="#b38363" strokeWidth="1" opacity="0.4" />
            <line x1="180" y1="172" x2="225" y2="135" stroke="#b38363" strokeWidth="1" opacity="0.3" />
            <line x1="285" y1="122" x2="325" y2="108" stroke="#59695e" strokeWidth="1" opacity="0.4" />
            <line x1="285" y1="134" x2="325" y2="172" stroke="#59695e" strokeWidth="1" opacity="0.3" />
            {/* Animated data packet */}
            <circle r="3" fill="#59695e">
              <animateMotion dur="3s" repeatCount="indefinite" path="M50,128 L120,108 L180,108 L225,125 L285,128 L325,108" />
              <animate attributeName="opacity" values="0;1;1;1;0" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle r="3" fill="#b38363">
              <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M50,128 L120,172 L180,172 L225,135 L285,134 L325,172" />
              <animate attributeName="opacity" values="0;1;1;1;0" dur="3s" repeatCount="indefinite" begin="1.5s" />
            </circle>
          </g>
          {/* Binary stream */}
          <text x="0" y="30" fontFamily="monospace" fontSize="8" fill="rgba(89,105,94,0.1)" letterSpacing="6">
            01101001 10110100 01101001 10110100 01101001
            <animate attributeName="x" from="0" to="-160" dur="8s" repeatCount="indefinite" />
          </text>
          <text x="0" y="50" fontFamily="monospace" fontSize="8" fill="rgba(89,105,94,0.07)" letterSpacing="6">
            10110100 01101001 10110100 01101001 10110100
            <animate attributeName="x" from="-160" to="0" dur="10s" repeatCount="indefinite" />
          </text>
        </svg>
      )}

      {/* SLIDE 4: Design - Golden Ratio */}
      {current === 3 && (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
          {/* Golden ratio spiral */}
          <g fill="none" opacity="0.25">
            <rect x="100" y="40" width="200" height="200" stroke="#b38363" strokeWidth="0.8" />
            <rect x="100" y="40" width="124" height="124" stroke="#b38363" strokeWidth="0.6" />
            <rect x="100" y="40" width="76" height="76" stroke="#b38363" strokeWidth="0.5" />
            <rect x="100" y="40" width="47" height="47" stroke="#b38363" strokeWidth="0.4" />
          </g>
          {/* Color palette circles */}
          <circle cx="280" cy="70" r="22" fill="#59695e" opacity="0.7" />
          <circle cx="310" cy="70" r="22" fill="#b38363" opacity="0.6" />
          <circle cx="295" cy="92" r="22" fill="#0c0404" opacity="0.5" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          {/* Typography lines */}
          <g opacity="0.15" stroke="#b38363" strokeWidth="1">
            <line x1="20" y1="60" x2="90" y2="60" />
            <line x1="20" y1="75" x2="75" y2="75" />
            <line x1="20" y1="88" x2="85" y2="88" />
          </g>
          {/* Grid dots */}
          <g fill="#b38363" opacity="0.2">
            <circle cx="340" cy="140" r="2" />
            <circle cx="360" cy="140" r="2" />
            <circle cx="380" cy="140" r="2" />
            <circle cx="340" cy="160" r="2" />
            <circle cx="360" cy="160" r="2" />
            <circle cx="380" cy="160" r="2" />
            <circle cx="340" cy="180" r="2" />
            <circle cx="360" cy="180" r="2" />
            <circle cx="380" cy="180" r="2" />
            <circle cx="340" cy="200" r="2" />
            <circle cx="360" cy="200" r="2" />
            <circle cx="380" cy="200" r="2" />
          </g>
          {/* Animated pen path */}
          <path
            d="M30,200 C60,170 90,210 130,180 C170,150 200,190 240,160"
            fill="none"
            stroke="#b38363"
            strokeWidth="1.5"
            opacity="0.5"
            strokeDasharray="300"
            strokeDashoffset="300"
            style={{ animation: 'dash 2.5s forwards 0.3s' }}
          />
          {/* Rotating design element */}
          <g transform="translate(200,140)">
            <circle r="40" fill="none" stroke="#b38363" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 4">
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="12s" repeatCount="indefinite" />
            </circle>
            <circle r="25" fill="none" stroke="#59695e" strokeWidth="0.5" opacity="0.2" strokeDasharray="3 6">
              <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="8s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      )}

      {/* SLIDE 5: Deep Learning - Computer Vision */}
      {current === 4 && (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
          {/* Scanning grid */}
          <g opacity="0.15" stroke="#59695e" strokeWidth="0.5">
            <line x1="40" y1="40" x2="40" y2="240" />
            <line x1="80" y1="40" x2="80" y2="240" />
            <line x1="120" y1="40" x2="120" y2="240" />
            <line x1="160" y1="40" x2="160" y2="240" />
            <line x1="200" y1="40" x2="200" y2="240" />
            <line x1="240" y1="40" x2="240" y2="240" />
            <line x1="280" y1="40" x2="280" y2="240" />
            <line x1="320" y1="40" x2="320" y2="240" />
            <line x1="360" y1="40" x2="360" y2="240" />
            <line x1="40" y1="80" x2="360" y2="80" />
            <line x1="40" y1="120" x2="360" y2="120" />
            <line x1="40" y1="160" x2="360" y2="160" />
            <line x1="40" y1="200" x2="360" y2="200" />
          </g>
          {/* Object detection boxes */}
          <rect x="80" y="70" width="70" height="55" fill="none" stroke="#59695e" strokeWidth="1.5" opacity="0.7">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="180" y="100" width="60" height="50" fill="none" stroke="#b38363" strokeWidth="1.5" opacity="0.6">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" />
          </rect>
          <rect x="270" y="85" width="65" height="60" fill="none" stroke="#59695e" strokeWidth="1.5" opacity="0.65">
            <animate attributeName="opacity" values="0.4;0.95;0.4" dur="1.8s" repeatCount="indefinite" />
          </rect>
          {/* Detection labels */}
          <rect x="80" y="58" width="50" height="14" fill="#59695e" opacity="0.8" />
          <text x="105" y="68" fontFamily="monospace" fontSize="6" fill="#fff" textAnchor="middle">94%</text>
          <rect x="180" y="88" width="50" height="14" fill="#b38363" opacity="0.7" />
          <text x="205" y="98" fontFamily="monospace" fontSize="6" fill="#fff" textAnchor="middle">89%</text>
          {/* Scanning line */}
          <line x1="40" y1="40" x2="360" y2="40" stroke="#59695e" strokeWidth="1" opacity="0.4">
            <animate attributeName="y1" from="40" to="240" dur="3s" repeatCount="indefinite" />
            <animate attributeName="y2" from="40" to="240" dur="3s" repeatCount="indefinite" />
          </line>
          {/* Corner brackets */}
          <g stroke="#59695e" strokeWidth="1" fill="none" opacity="0.3">
            <path d="M60,60 L50,60 L50,50" />
            <path d="M340,60 L350,60 L350,50" />
            <path d="M60,220 L50,220 L50,230" />
            <path d="M340,220 L350,220 L350,230" />
          </g>
        </svg>
      )}

      {/* SLIDE 6: AI & RAG - Knowledge Graph */}
      {current === 5 && (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="graphGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#b38363" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#b38363" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="140" r="100" fill="url(#graphGlow)" />
          {/* Graph nodes */}
          <g>
            {/* Central node */}
            <circle cx="200" cy="140" r="12" fill="#b38363" opacity="0.9">
              <animate attributeName="r" values="10;14;10" dur="3s" repeatCount="indefinite" />
            </circle>
            <text x="200" y="143" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">AI</text>
            {/* Outer nodes */}
            <circle cx="120" cy="80" r="8" fill="#59695e" opacity="0.7" />
            <text x="120" y="83" fontFamily="monospace" fontSize="6" fill="#fff" textAnchor="middle">RAG</text>
            <circle cx="280" cy="80" r="8" fill="#59695e" opacity="0.6" />
            <text x="280" y="83" fontFamily="monospace" fontSize="6" fill="#fff" textAnchor="middle">NLP</text>
            <circle cx="100" cy="180" r="8" fill="#59695e" opacity="0.65" />
            <text x="100" y="183" fontFamily="monospace" fontSize="6" fill="#fff" textAnchor="middle">KG</text>
            <circle cx="200" cy="210" r="8" fill="#59695e" opacity="0.7" />
            <text x="200" y="213" fontFamily="monospace" fontSize="6" fill="#fff" textAnchor="middle">DB</text>
            <circle cx="300" cy="180" r="8" fill="#59695e" opacity="0.6" />
            <text x="300" y="183" fontFamily="monospace" fontSize="6" fill="#fff" textAnchor="middle">API</text>
            {/* Connections */}
            <g stroke="#59695e" strokeWidth="0.8" opacity="0.3">
              <line x1="200" y1="140" x2="120" y2="80" />
              <line x1="200" y1="140" x2="280" y2="80" />
              <line x1="200" y1="140" x2="100" y2="180" />
              <line x1="200" y1="140" x2="200" y2="210" />
              <line x1="200" y1="140" x2="300" y2="180" />
              {/* Outer connections */}
              <line x1="120" y1="80" x2="100" y2="180" />
              <line x1="280" y1="80" x2="300" y2="180" />
              <line x1="100" y1="180" x2="200" y2="210" />
              <line x1="200" y1="210" x2="300" y2="180" />
            </g>
            {/* Animated data flow */}
            <circle r="2.5" fill="#b38363" opacity="0.8">
              <animateMotion dur="4s" repeatCount="indefinite" path="M120,80 L200,140 L280,80" />
              <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle r="2.5" fill="#59695e" opacity="0.7">
              <animateMotion dur="3.5s" repeatCount="indefinite" begin="1s" path="M100,180 L200,140 L200,210" />
              <animate attributeName="opacity" values="0;1;1;0" dur="3.5s" repeatCount="indefinite" begin="1s" />
            </circle>
          </g>
          {/* Hexagon pattern */}
          <g fill="none" stroke="#59695e" strokeWidth="0.3" opacity="0.15">
            <path d="M350,40 L370,50 L370,70 L350,80 L330,70 L330,50 Z" />
            <path d="M380,90 L400,100 L400,120 L380,130 L360,120 L360,100 Z" />
            <path d="M30,180 L50,190 L50,210 L30,220 L10,210 L10,190 Z" />
          </g>
        </svg>
      )}

      {/* SLIDE 7: NLP - Text Processing */}
      {current === 6 && (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
          {/* Text tokens */}
          <g fontFamily="monospace" fontSize="7" fill="#59695e" opacity="0.3">
            <text x="20" y="40">The</text>
            <text x="50" y="40">quick</text>
            <text x="90" y="40">brown</text>
            <text x="135" y="40">fox</text>
            <text x="170" y="40">jumps</text>
            <text x="215" y="40">over</text>
            <text x="255" y="40">the</text>
            <text x="285" y="40">lazy</text>
            <text x="330" y="40">dog</text>
            
            <text x="20" y="65">sentiment</text>
            <text x="80" y="65">analysis</text>
            <text x="140" y="65">model</text>
            <text x="185" y="65">predicts</text>
            <text x="245" y="65">positive</text>
            <text x="310" y="65">emotion</text>
            
            <text x="20" y="90">entity</text>
            <text x="60" y="90">recognition</text>
            <text x="135" y="90">finds</text>
            <text x="175" y="90">PERSON</text>
            <text x="230" y="90">and</text>
            <text x="265" y="90">LOCATION</text>
          </g>
          {/* Processing boxes */}
          <rect x="30" y="110" width="80" height="40" rx="4" fill="none" stroke="#59695e" strokeWidth="1" opacity="0.5" />
          <text x="70" y="133" fontFamily="monospace" fontSize="7" fill="#59695e" textAnchor="middle">TOKENIZE</text>
          
          <rect x="130" y="110" width="80" height="40" rx="4" fill="none" stroke="#b38363" strokeWidth="1" opacity="0.5" />
          <text x="170" y="133" fontFamily="monospace" fontSize="7" fill="#b38363" textAnchor="middle">EMBED</text>
          
          <rect x="230" y="110" width="80" height="40" rx="4" fill="none" stroke="#59695e" strokeWidth="1" opacity="0.5" />
          <text x="270" y="133" fontFamily="monospace" fontSize="7" fill="#59695e" textAnchor="middle">CLASSIFY</text>
          
          <rect x="330" y="110" width="50" height="40" rx="4" fill="none" stroke="#b38363" strokeWidth="1" opacity="0.5" />
          <text x="355" y="133" fontFamily="monospace" fontSize="7" fill="#b38363" textAnchor="middle">OUTPUT</text>
          
          {/* Connection arrows */}
          <line x1="110" y1="130" x2="130" y2="130" stroke="#59695e" strokeWidth="1" opacity="0.4" />
          <line x1="210" y1="130" x2="230" y2="130" stroke="#b38363" strokeWidth="1" opacity="0.4" />
          <line x1="310" y1="130" x2="330" y2="130" stroke="#59695e" strokeWidth="1" opacity="0.4" />
          
          {/* Attention weights visualization */}
          <g transform="translate(20, 180)">
            <rect x="0" y="0" width="30" height="8" fill="#59695e" opacity="0.3" />
            <rect x="35" y="0" width="50" height="8" fill="#59695e" opacity="0.7" />
            <rect x="90" y="0" width="40" height="8" fill="#59695e" opacity="0.5" />
            <rect x="135" y="0" width="25" height="8" fill="#59695e" opacity="0.2" />
            <rect x="165" y="0" width="55" height="8" fill="#59695e" opacity="0.8" />
            <rect x="225" y="0" width="35" height="8" fill="#59695e" opacity="0.4" />
            <rect x="265" y="0" width="45" height="8" fill="#59695e" opacity="0.6" />
            <rect x="315" y="0" width="50" height="8" fill="#59695e" opacity="0.75" />
          </g>
          <text x="20" y="205" fontFamily="monospace" fontSize="6" fill="#59695e" opacity="0.5">Attention Weights</text>
          
          {/* Animated token highlight */}
          <rect x="50" y="32" width="40" height="12" fill="#59695e" opacity="0.2">
            <animate attributeName="x" values="50;90;135;170;215;255;285;330" dur="4s" repeatCount="indefinite" />
          </rect>
        </svg>
      )}

      {/* SLIDE 8: LLM - Transformer */}
      {current === 7 && (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="encoderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#59695e" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#59695e" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="decoderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b38363" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#b38363" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Encoder stack */}
          <g transform="translate(40, 60)">
            <rect x="0" y="0" width="60" height="25" fill="url(#encoderGrad)" stroke="#59695e" strokeWidth="0.5" opacity="0.5" />
            <text x="30" y="16" fontFamily="monospace" fontSize="5" fill="#fff" textAnchor="middle">Self-Attn</text>
            
            <rect x="0" y="30" width="60" height="25" fill="url(#encoderGrad)" stroke="#59695e" strokeWidth="0.5" opacity="0.5" />
            <text x="30" y="46" fontFamily="monospace" fontSize="5" fill="#fff" textAnchor="middle">FFN</text>
            
            <rect x="0" y="60" width="60" height="25" fill="url(#encoderGrad)" stroke="#59695e" strokeWidth="0.5" opacity="0.5" />
            <text x="30" y="76" fontFamily="monospace" fontSize="5" fill="#fff" textAnchor="middle">Self-Attn</text>
            
            <rect x="0" y="90" width="60" height="25" fill="url(#encoderGrad)" stroke="#59695e" strokeWidth="0.5" opacity="0.5" />
            <text x="30" y="106" fontFamily="monospace" fontSize="5" fill="#fff" textAnchor="middle">FFN</text>
            
            <text x="30" y="-8" fontFamily="monospace" fontSize="7" fill="#59695e" textAnchor="middle">ENCODER</text>
          </g>
          
          {/* Decoder stack */}
          <g transform="translate(200, 60)">
            <rect x="0" y="0" width="60" height="25" fill="url(#decoderGrad)" stroke="#b38363" strokeWidth="0.5" opacity="0.5" />
            <text x="30" y="16" fontFamily="monospace" fontSize="5" fill="#fff" textAnchor="middle">Mask-Attn</text>
            
            <rect x="0" y="30" width="60" height="25" fill="url(#decoderGrad)" stroke="#b38363" strokeWidth="0.5" opacity="0.5" />
            <text x="30" y="46" fontFamily="monospace" fontSize="5" fill="#fff" textAnchor="middle">Cross-Attn</text>
            
            <rect x="0" y="60" width="60" height="25" fill="url(#decoderGrad)" stroke="#b38363" strokeWidth="0.5" opacity="0.5" />
            <text x="30" y="76" fontFamily="monospace" fontSize="5" fill="#fff" textAnchor="middle">FFN</text>
            
            <rect x="0" y="90" width="60" height="25" fill="url(#decoderGrad)" stroke="#b38363" strokeWidth="0.5" opacity="0.5" />
            <text x="30" y="106" fontFamily="monospace" fontSize="5" fill="#fff" textAnchor="middle">Softmax</text>
            
            <text x="30" y="-8" fontFamily="monospace" fontSize="7" fill="#b38363" textAnchor="middle">DECODER</text>
          </g>
          
          {/* Connection lines */}
          <line x1="100" y1="100" x2="200" y2="100" stroke="#59695e" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
          <line x1="100" y1="140" x2="200" y2="140" stroke="#b38363" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
          
          {/* Input/Output */}
          <text x="20" y="250" fontFamily="monospace" fontSize="7" fill="#59695e" opacity="0.7">Input: "def sort_"</text>
          <text x="220" y="250" fontFamily="monospace" fontSize="7" fill="#b38363" opacity="0.7">Output: "array()"</text>
          
          {/* Animated token flow */}
          <circle r="3" fill="#b38363" opacity="0.8">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M10,240 L40,240 L70,160 L100,140 L200,140 L230,160 L260,240" />
            <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      )}

      {/* SLIDE 9: Chatbot - Real-time Chat Interface */}
      {current === 8 && (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
          {/* Chat container */}
          <rect x="30" y="30" width="340" height="180" rx="8" fill="rgba(89,105,94,0.05)" stroke="#59695e" strokeWidth="0.5" opacity="0.3" />
          
          {/* User message bubble */}
          <rect x="280" y="50" width="80" height="35" rx="12" fill="#59695e" opacity="0.6" />
          <text x="320" y="65" fontFamily="monospace" fontSize="6" fill="#fff" textAnchor="middle">How do I...</text>
          <text x="320" y="76" fontFamily="monospace" fontSize="6" fill="#fff" textAnchor="middle">get started?</text>
          
          {/* Bot typing indicator */}
          <rect x="50" y="100" width="90" height="35" rx="12" fill="#b38363" opacity="0.5" />
          <text x="95" y="115" fontFamily="monospace" fontSize="6" fill="#fff" textAnchor="middle">Sure! Here's</text>
          <text x="95" y="126" fontFamily="monospace" fontSize="6" fill="#fff" textAnchor="middle">how to begin:</text>
          
          {/* Bot response bubble (appears after delay) */}
          <rect x="50" y="145" width="140" height="50" rx="12" fill="#59695e" opacity="0.7">
            <animate attributeName="opacity" values="0;0;0.7" keyTimes="0;0.3;1" dur="4s" repeatCount="indefinite" />
          </rect>
          <text x="120" y="158" fontFamily="monospace" fontSize="5.5" fill="#fff" textAnchor="middle" opacity="0">
            <animate attributeName="opacity" values="0;0;1" keyTimes="0;0.3;1" dur="4s" repeatCount="indefinite" />
            1. Initialize the SDK
          </text>
          <text x="120" y="168" fontFamily="monospace" fontSize="5.5" fill="#fff" textAnchor="middle" opacity="0">
            <animate attributeName="opacity" values="0;0;1" keyTimes="0;0.4;1" dur="4s" repeatCount="indefinite" />
            2. Set your API key
          </text>
          <text x="120" y="178" fontFamily="monospace" fontSize="5.5" fill="#fff" textAnchor="middle" opacity="0">
            <animate attributeName="opacity" values="0;0;1" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite" />
            3. Call chat.complete()
          </text>
          <text x="120" y="188" fontFamily="monospace" fontSize="5.5" fill="#fff" textAnchor="middle" opacity="0">
            <animate attributeName="opacity" values="0;0;1" keyTimes="0;0.6;1" dur="4s" repeatCount="indefinite" />
            4. Handle the response
          </text>
          
          {/* User avatar */}
          <circle cx="370" cy="68" r="10" fill="#59695e" opacity="0.8" />
          <text x="370" y="71" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">U</text>
          
          {/* Bot avatar */}
          <circle cx="30" cy="135" r="10" fill="#b38363" opacity="0.8" />
          <text x="30" y="138" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">AI</text>
          
          {/* Typing cursor animation in input field */}
          <rect x="50" y="235" width="280" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#59695e" strokeWidth="0.5" opacity="0.4" />
          <text x="60" y="253" fontFamily="monospace" fontSize="7" fill="#59695e" opacity="0.6">What can you help me with?</text>
          
          {/* Blinking cursor */}
          <rect x="245" y="243" width="2" height="12" fill="#59695e" opacity="0.8">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </rect>
          
          {/* Connection signal waves */}
          <g transform="translate(200, 220)">
            <circle r="15" fill="none" stroke="#59695e" strokeWidth="0.5" opacity="0.2">
              <animate attributeName="r" values="10;20" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle r="15" fill="none" stroke="#b38363" strokeWidth="0.5" opacity="0.2">
              <animate attributeName="r" values="10;20" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
            </circle>
          </g>
          
          {/* Status indicator */}
          <circle cx="315" cy="245" r="3" fill="#59695e" opacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
          </circle>
          <text x="325" y="248" fontFamily="monospace" fontSize="5" fill="#59695e" opacity="0.6">Online</text>
        </svg>
      )}

      {/* Slide content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 z-10">
        <span
          className="inline-block font-mono text-[9px] px-2 py-0.5 border mb-2 tracking-[2.5px] uppercase w-fit"
          style={{ color: s.tagColor, borderColor: `${s.tagColor}66`, background: `${s.tagColor}1a` }}
        >
          {s.tag.toUpperCase()}
        </span>
        <h3
          className="font-display text-xl text-white mb-1"
          style={{ fontWeight: 300, lineHeight: 1.2 }}
        >
          {s.title}
        </h3>
        <p className="font-body text-[11px] text-white/50 leading-relaxed max-w-[280px]">
          {s.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {s.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[8px] text-white/35 bg-white/6 px-1.5 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3.5 right-4 flex gap-1.25 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-1.25 h-1.25 rounded-full transition-all duration-300 ${
              i === current ? 'bg-sage' : 'bg-white/20'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide number */}
      <div className="absolute top-3.5 right-4 font-mono text-[9px] text-white/20 z-20 tracking-wider">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

      {/* Progress bar */}
      <div
        ref={barRef}
        className="absolute bottom-0 left-0 h-0.5 bg-sage z-20"
        style={{ width: '0%' }}
      />
    </div>
  )
}
