import { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroCard from './components/HeroCard'
import LocationCard from './components/LocationCard'
import SocialCard from './components/SocialCard'
import TechStackCard from './components/TechStackCard'
import FeaturedProjectCard from './components/FeaturedProjectCard'
import ContactCard from './components/ContactCard'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', overflow: 'hidden' }}>
      <Header darkMode={darkMode} toggleDark={() => setDarkMode(p => !p)} />
      <main style={{ flex: 1, width: '100%', maxWidth: '1440px', margin: '0 auto', padding: '0 1rem 5rem' }}>
        {/* bento-grid is defined in index.css with real @media queries — no Tailwind scanner needed */}
        <div className="bento-grid">
          <HeroCard />
          <LocationCard />
          <SocialCard />
          <TechStackCard />
          <FeaturedProjectCard />
          <ContactCard />
        </div>
      </main>
    </div>
  )
}