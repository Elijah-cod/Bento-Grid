import { Sun, Moon } from '@phosphor-icons/react'

export default function Header({ darkMode, toggleDark }) {
  return (
    <header style={{ width:'100%', maxWidth:1440, margin:'0 auto', padding:'2rem 1.5rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
      <div style={{ display:'flex', alignItems:'center', gap:12, cursor:'pointer' }}>
        <div style={{ width:40, height:40, borderRadius:12, background:'#6366f1', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:'1.2rem', transition:'transform 0.3s' }}
          onMouseEnter={e => e.currentTarget.style.transform='rotate(12deg)'}
          onMouseLeave={e => e.currentTarget.style.transform='rotate(0)'}>
          E
        </div>
        <span style={{ fontWeight:700, fontSize:'1.2rem', letterSpacing:'-0.02em' }}>
          Elijah<span style={{ color:'var(--accent)' }}>.</span>dev
        </span>
      </div>

      <button onClick={toggleDark} className="bento-card" aria-label="Toggle dark mode"
        style={{ width:44, height:44, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', border:'1px solid var(--border-card)', background:'var(--bg-card)', flexShrink:0 }}>
        {darkMode
          ? <Sun size={20} weight="bold" style={{ color:'#facc15' }} />
          : <Moon size={20} weight="bold" style={{ color:'#6366f1' }} />}
      </button>
    </header>
  )
}