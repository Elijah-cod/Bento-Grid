// col: 2 of 4, row: 2 tall — occupies top-left 2×2 block
export default function HeroCard() {
  return (
    <article className="bento-card" style={{ gridColumn: 'span 2', gridRow: 'span 2', padding: '2rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Decorative blur orbs */}
      <div style={{ position:'absolute', top:'-6rem', right:'-6rem', width:'16rem', height:'16rem', background:'rgba(99,102,241,0.2)', borderRadius:'50%', filter:'blur(60px)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-6rem', left:'-6rem', width:'16rem', height:'16rem', background:'rgba(168,85,247,0.2)', borderRadius:'50%', filter:'blur(60px)', pointerEvents:'none' }} />

      <div style={{ position:'relative', zIndex:10, display:'flex', flexDirection:'column', height:'100%' }}>
        {/* Available badge */}
        <div style={{ marginBottom:'1.5rem' }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'4px 12px', borderRadius:'999px', border:'1px solid #e4e4e7', background:'rgba(255,255,255,0.5)', backdropFilter:'blur(4px)', fontSize:'12px', fontWeight:500 }}>
            <span style={{ position:'relative', display:'flex', width:8, height:8 }}>
              <span className="animate-ping" style={{ position:'absolute', inset:0, borderRadius:'50%', background:'#34d399', opacity:0.75 }} />
              <span style={{ position:'relative', width:8, height:8, borderRadius:'50%', background:'#10b981', display:'block' }} />
            </span>
            Available for work
          </span>
        </div>

        {/* Heading pushed to bottom */}
        <div style={{ marginTop:'auto' }}>
          <h1 style={{ fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:700, letterSpacing:'-0.03em', lineHeight:1.1, marginBottom:'1rem' }}>
            Hi, I'm Elijah.<br />
            <span style={{ background:'linear-gradient(to right, #6366f1, #a855f7)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Frontend Engineer.
            </span>
          </h1>
          <p style={{ color:'var(--text-muted)', fontSize:'clamp(0.9rem,1.5vw,1.1rem)', maxWidth:'44ch', lineHeight:1.7 }}>
            I craft responsive, pixel-perfect user interfaces with modern web technologies. Focused on performance, accessibility, and exceptional design.
          </p>
        </div>
      </div>
    </article>
  )
}