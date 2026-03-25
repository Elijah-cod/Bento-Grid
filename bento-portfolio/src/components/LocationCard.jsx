import { useState, useEffect } from 'react'
import { GlobeHemisphereWest, Clock } from '@phosphor-icons/react'

// col: 1 of 4, row: 1 tall
export default function LocationCard() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit', timeZone:'Africa/Nairobi' }))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <article className="bento-card" style={{ gridColumn:'span 1', gridRow:'span 1', padding:'1.5rem', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', position:'relative' }}>
      <div className="project-pattern" style={{ position:'absolute', inset:0, opacity:0.05, zIndex:0 }} />
      <div style={{ position:'relative', zIndex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:'12px' }}>
        <div style={{ width:48, height:48, borderRadius:'50%', background:'var(--bg-body)', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <GlobeHemisphereWest size={24} style={{ color:'var(--accent)' }} />
        </div>
        <div>
          <h3 style={{ fontWeight:600, fontSize:'1.1rem', margin:0 }}>Nairobi, KE</h3>
          <p style={{ color:'var(--text-muted)', fontSize:'0.8rem', display:'flex', alignItems:'center', justifyContent:'center', gap:4, marginTop:4 }}>
            <Clock size={12} /> {time} EAT
          </p>
        </div>
      </div>
    </article>
  )
}