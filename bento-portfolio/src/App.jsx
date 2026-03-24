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

  const toggleDark = () => setDarkMode(prev => !prev)

  return (
    <div className="antialiased min-h-screen flex flex-col transition-colors duration-500 w-full overflow-x-hidden">
      <Header darkMode={darkMode} toggleDark={toggleDark} />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-4 md:gap-6 grid-flow-dense">
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