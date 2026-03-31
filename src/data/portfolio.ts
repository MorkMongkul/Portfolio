export const personalInfo = {
  name: 'Mork Mongkul',
  initials: 'MM',
  roles: ['Data Scientist', 'Data Engineer', 'AI Engineer', 'Graphic Designer'],
  tagline: 'Knowledge today might expire tomorrow, Never stop learning!',
  bio: `I'm a multidisciplinary professional at the intersection of data and design. 
  I build intelligent data pipelines, develop machine learning models, and craft visual 
  identities — believing that the best solutions are both technically rigorous and 
  beautifully presented. Based in Cambodia, working globally.`,
  location: 'Phnom Penh, Cambodia',
  email: 'morkmongkul369@gmail.com',
  socials: {
    github: 'https://github.com/morkmongkul',
    linkedin: 'https://www.linkedin.com/in/mork-mongkul-2b622620b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWQObnbk5Q4eGe5YW6j4mpw%3D%3D',
    telegram: 'https://t.me/MORK_Mongkul',
  },
}

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Engineering in Data Science(B.Eng)',
    institution: 'Institute of Technology of Cambodia(ITC)',
    period: '2021 – 2026',
    description: 'Focused on advanced mathematics and statistics for application in data science, machine learning, and data engineering. Coursework includes algorithms, data structures, database systems, and Artificial Intelligence. Hands-on projects building end-to-end data pipelines, predictive models, and visualizations to solve real-world problems using data-driven solutions.',
    highlight: 'Graduated with Distinction',
  },
  {
    id: 2,
    degree: 'Graphic Design and Media',
    institution: 'Instinct Institute',
    period: '2022-2023',
    description: 'End to end Graphic Desinger lifecycle, including branding,commercial, Video Editing and motion graphics.',
    highlight: 'Graduated with Distinction',
  },
  {
    id: 3,
    degree: 'High School Diploma in Science',
    institution: 'Hun Sen Krangsramor High School',
    period: '2019-2021',
    description: 'A strong foundation in mathematics, physics, chemistry, STEM-focused and social science courses.',
    highlight: 'Graduated with Distinction',
  },
]

export type SkillCategory = {
  category: string
  color: 'sage' | 'tan' | 'ink'
  skills: { name: string; logo: string }[]
}

export const skillStack: SkillCategory[] = [
  {
    category: 'Data Science & ML',
    color: 'sage' as const,
    skills: [
      { name: 'Python',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Pandas',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'TensorFlow',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'PyTorch',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
      { name: 'Jupyter',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
      { name: 'Sklearn',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'Matplotlib',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
      { name: 'Plotly',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg' },
    ],
  },
  {
    category: 'Data Engineering',
    color: 'tan' as const,
    skills: [
      { name: 'Airflow',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg' },
      { name: 'PostgreSQL',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'BigQuery',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Docker',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'ChromaDB',     logo: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/chroma-erzavigj9yrwcd5lup0swm.png/chroma-1xw4nxhjo4c64ndhrqtxp.png?_a=DATAiZAAZAA0' },
      { name: 'Milvus',       logo: 'https://cdn.simpleicons.org/milvus/00A1EA' },
      { name: 'DigitalOcean', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg' },
    ],
  },
  {
    category: 'AI & LLM',
    color: 'ink' as const,
    skills: [
      { name: 'OpenAI',       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/1280px-ChatGPT-Logo.svg.png?_=20240214002031' },
      { name: 'Google Gemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Google_Gemini_logo_2025.svg/960px-Google_Gemini_logo_2025.svg.png?_=20250702084013' },
      { name: 'Claude',       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/1280px-Claude_AI_symbol.svg.png?_=20250427183551' },
      { name: 'HuggingFace',  logo: 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg' },
      { name: 'LangChain',    logo: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
    ],
  },
  {
    category: 'Development',
    color: 'sage' as const,
    skills: [
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'FastAPI',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Git',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'AWS',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'GCP',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Vite',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    ],
  },
  {
    category: 'Design',
    color: 'tan' as const,
    skills: [
      { name: 'Illustrator',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
      { name: 'Photoshop',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
      { name: 'After Effects', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg' },
      { name: 'Adobe Premiere Pro', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg' },
    ],
  },
  {
    category: 'Analytics & BI',
    color: 'ink' as const,
    skills: [
      { name: 'Power BI', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1280px-New_Power_BI_Logo.svg.png?_=20210102182532' },
      { name: 'Tableau',  logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACUCAMAAAAj+tKkAAAAzFBMVEX////odixbZZFZh5sfRH7rkSzHIDVwmab0w6zocR1VhZlplaLocyXHHTO8zdP68PHrjh7qig/76tzz9ff88Orri1XpfjzFCSjgk5oJPHqovsf54s8AMHWjucQANnfFFC71z6/EABeGk7CTn7lRXIyip77o7vCBpK9JVYfZ2+TMz9uxuctlb5n308HnbAzwqYXvys3yuIXslGXvq2vupFfWaXTyup9ld53K19yTr7z42sH0w5jY4uY/TYPtnkn24uTTXWnCAAAAIm95g6TYJ7QbAAADhElEQVR4nO3cbVvaMBSAYaBKlcrbcDpAQLG0IMLc3JQ5dW///z+NJkVSckrSJjZVzvNpawRv61LaptcKBZ3VHNt2alrfUm8IVA2BqiFQNQSmqOUxdQJgh93iZWH4Qro9Bgc7FYfJXuZEAl+0+EFrafEdN2kfwNEaQcUHvqhXoWkCNvaDdAI7FSsoG6CV4lecJdCrLdb1gknSW7AZB0aSPcwgMC4EgiFQNQSqhkDVEKjauwLavm/nGUguUCS+q15gQR4omwLw4ZyPAhs/gSH4QipSq8bnh0BgCD7DXXfbbHDt0/iBRqMrBj5aFT6LBoz4IuCKI5cc0JLPCDBJCHx9oP5JAswEhUnS5XugvuY5MCb2FbweV8cODzP8UC/FvbEEnySyGfuokw2BqiFQNUPA2dewWU6BB/ND0vwgr8DDIukQgQhEIAIRmA44IW1bICVrQ5s/VnbAp/Gyp8v417X8YK1t8yfIDlgKckcCoM8B6XWUXiC4HJsW+Pwt6Fl4H0YeWAvXavUApZMHxoRABCJQEAJzBDyGulsB78DhLIHdj1AnxbATcFh8rw4Etpg8Anxkt8BnbLP5EVDxJWh0Dl3Oe1dsFDiMbCtsf7DJgZctZvNi4kDgFTnDWlWiQnbT2DTQLQl6y8Dg0TDLPNBnIzDyp+Dxw84yeErrA45dptDEbnKBWSxxmNE2iycjNuq7j2yLfLn0cXB2dAK0BkKjR8K7hjv1UQeGQASKQiACY4A3tF/6gJPVyZ4WYL1aLS8bfNIHvGzvkfTcm6mfVoNOdQL7xNdODLQty3IAYLAHtQLb6YD04bDNjdkByfnVeBsQLDvglLQ5dXIETBkCEYhABOYGKP3UhyHg7HOY8ArYEFA+BKqGQNXeM/D3nwuuMu2UH7m4Eb/j5IwvvGba63Mjf68Fb/edXiFFCoFlfqQqA9xLUv9eCCwnKO/AXdyDbTEwyb/BgdQk6XO9TBKuMzFwwBUK+YGBFHDIVwqBwNBU9H51fkv8cZD/Yrlibn2kLMGBmj4dJv62pj5JvNL1spLwt2QOSBZUxwjcCIGqIVC11wAaOlDjHoTDPajaTu7B7IDehIk+puOO2G0Tw8Ap8OjQNfuXf6aB423PNb1doO5ZHL8cmxbYDupr+p8qtq24i4AuCPTgFffXaEouQ1aFKnbTMAOEdC3Z46CppA/UpkKgaghUDYGq7STwP+z0MIh+CH4nAAAAAElFTkSuQmCC' },
      { name: 'Looker',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'SQL',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
  },
]

export type Project = {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  tech: string[]
  year: string
  status: 'Live' | 'In Progress' | 'Archived'
  featured: boolean
  color: 'sage' | 'tan'
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Khmer Name Entity Recognition',
    category: 'AI / NLP',
    description: 'Character-level NER system for Khmer language using RNN-GRU, and BiLSTM-CRF for entity extraction.',
    longDescription:
      'A comprehensive NER system for Khmer Language, implementing at character-level using RNN-GRU architecture. Trained on 7.8M words across 5 entity types (Person, Location, Organization, Date, Misc). Achieved 92% F1 score on test set and deployed as a REST API for real-time entity extraction.',
    tech: ['Python', 'PyTorch', 'NLP', 'FastAPI', 'Docker','DigitalOcean'],
    year: '2024',
    status: 'Live',
    featured: true,
    color: 'sage',
    github: 'https://github.com/MorkMongkul/Khmer-Name_Entity_Recognition',
    link: 'https://khmerner.app',
  },
  {
    id: 2,
    title: 'CDRI Data Hub',
    category: 'Data Engineering',
    description: 'A centralized data platform for Researcher, Policy Makers and Public to access and analyze Cambodian data from various sources.',
    longDescription:
      'A self-hosted orchestration platform for managing complex data pipelines. Features a drag-and-drop DAG builder, real-time monitoring, alerting, and support for 30+ connectors.',
    tech: ['Apache Airflow', 'Spark', 'PostgreSQL', 'React', 'FastAPI'],
    year: '2024',
    status: 'Live',
    featured: true,
    color: 'tan',
    link: 'http://152.42.172.59',
  },
  {
    id: 3,
    title: 'MarketPulse Dashboard',
    category: 'Data Analytics',
    description: 'Real-time market intelligence platform for Southeast Asian e-commerce.',
    longDescription:
      'Interactive analytics dashboard tracking price movements, competitor activity, and consumer trends across major SEA marketplaces. Powers decisions for 50+ retail brands.',
    tech: ['Python', 'BigQuery', 'dbt', 'Looker', 'Kafka'],
    year: '2023',
    status: 'Live',
    featured: true,
    color: 'sage',
    link: '#',
  },
  {
    id: 4,
    title: 'RAG Document Assistant',
    category: 'Generative AI',
    description: 'Context-aware document Q&A system using retrieval-augmented generation.',
    longDescription:
      'Enterprise document intelligence system allowing teams to query internal knowledge bases using natural language. Supports PDFs, Word docs, and Confluence pages.',
    tech: ['LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'React'],
    year: '2024',
    status: 'In Progress',
    featured: false,
    color: 'tan',
    github: '#',
  },
  {
    id: 5,
    title: 'Condo Price Prediction',
    category: 'Machine Learning',
    description: 'ML model predicting condo prices in Phnom Penh using structured data gathered from online listings and historical sales records.',
    longDescription:
      'ML model predicting condo prices in Phnom Penh using structured data gathered from online listings and historical sales records. The model utilizes regression techniques to analyze features such as location, size, amenities, and market trends to provide accurate price predictions for buyers and sellers.',
    tech: ['Python', 'Scikit-learn', 'BeautifulSoup', 'Selenium', 'FastAPI','PostgreSQL','Vercel'],
    year: '2023',
    status: 'Live',
    featured: false,
    color: 'tan',
    link: 'https://condo-price-prediction-3nu6.vercel.app',
    github:'https://github.com/MorkMongkul/condo_price_prediction'
  },
]
