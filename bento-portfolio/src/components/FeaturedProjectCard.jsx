import { ArrowUpRight } from '@phosphor-icons/react'
import { useRef } from 'react'

// col: 2 of 4, row: 2 tall
export default function FeaturedProjectCard() {
  const mockupRef = useRef(null)
  return (
    <article className="bento-card" style={{ gridColumn:'span 2', gridRow:'span 2', display:'flex', flexDirection:'column', position:'relative' }}
      onMouseEnter={() => { if(mockupRef.current) mockupRef.current.style.transform = 'translateY(-10px)' }}
      onMouseLeave={() => { if(mockupRef.current) mockupRef.current.style.transform = 'translateY(0)' }}>

      {/* Preview area */}
      <div className="project-pattern" style={{ flex:1, background:'var(--bg-body)', position:'relative', display:'flex', alignItems:'flex-end', justifyContent:'center', padding:'2rem 1.5rem 0', overflow:'hidden' }}>
        {/* Browser mockup */}
        <div ref={mockupRef} style={{ width:'85%', background:'var(--bg-card)', borderRadius:'12px 12px 0 0', boxShadow:'0 20px 60px rgba(0,0,0,0.2)', border:'1px solid var(--border-card)', borderBottom:'none', transition:'transform 0.4s ease', position:'relative', zIndex:1 }}>
          <div style={{ display:'flex', gap:6, padding:'10px 12px', borderBottom:'1px solid var(--border-card)' }}>
            <div style={{ width:10, height:10, borderRadius:'50%', background:'#f87171' }} />
            <div style={{ width:10, height:10, borderRadius:'50%', background:'#fbbf24' }} />
            <div style={{ width:10, height:10, borderRadius:'50%', background:'#4ade80' }} />
          </div>
          <div style={{ padding:'1rem', display:'flex', flexDirection:'column', gap:10 }}>
            <div style={{ width:'33%', height:14, background:'var(--border-card)', borderRadius:6 }} />
            <div style={{ width:'100%', height:56, background:'var(--bg-body)', borderRadius:8, border:'1px solid var(--border-card)' }} />
            <div style={{ display:'flex', gap:8 }}>
              <div style={{ flex:1, height:36, background:'var(--bg-body)', borderRadius:8, border:'1px solid var(--border-card)' }} />
              <div style={{ flex:1, height:36, background:'var(--bg-body)', borderRadius:8, border:'1px solid var(--border-card)' }} />
            </div>
          </div>
        </div>
        {/* Fade overlay */}
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, var(--bg-card) 0%, rgba(0,0,0,0) 60%)', zIndex:2 }} />
      </div>

      {/* Info footer */}
      <div style={{ padding:'1.25rem 1.5rem', borderTop:'1px solid var(--border-card)', display:'flex', justifyContent:'space-between', alignItems:'flex-end', background:'var(--bg-card)', position:'relative', zIndex:3 }}>
        <div>
          <p style={{ fontSize:'0.7rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', color:'#6366f1', marginBottom:4 }}>Featured Work</p>
          <h3 style={{ fontWeight:700, fontSize:'1.2rem', margin:0 }}>Fintech Dashboard</h3>
          <p style={{ color:'var(--text-muted)', fontSize:'0.85rem', marginTop:4 }}>A complex financial data visualization platform built with React and D3.js.</p>
        </div>
        <a href="#" style={{ width:40, height:40, borderRadius:'50%', background:'var(--bg-body)', border:'1px solid var(--border-card)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transition:'all 0.2s', marginLeft:12, textDecoration:'none', color:'inherit' }}
          onMouseEnter={e => { e.currentTarget.style.background='#6366f1'; e.currentTarget.style.color='white'; e.currentTarget.style.borderColor='#6366f1' }}
          onMouseLeave={e => { e.currentTarget.style.background='var(--bg-body)'; e.currentTarget.style.color='inherit'; e.currentTarget.style.borderColor='var(--border-card)' }}>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </article>
  )
}