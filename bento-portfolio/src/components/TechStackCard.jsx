import { FileJsx, FileTs, Wind, Hexagon, GridFour, FigmaLogo } from '@phosphor-icons/react'

const stack = [
  { id:'react',      label:'React',        Icon:FileJsx,   color:'#61DAFB' },
  { id:'typescript', label:'TypeScript',   Icon:FileTs,    color:'#3178C6' },
  { id:'tailwind',   label:'Tailwind CSS', Icon:Wind,      color:'#38B2AC' },
  { id:'node',       label:'Node.js',      Icon:Hexagon,   color:'#68A063' },
  { id:'cssgrid',    label:'CSS Grid',     Icon:GridFour,  color:null      },
  { id:'figma',      label:'Figma',        Icon:FigmaLogo, color:'#F24E1E' },
]

// col: 2 of 4, row: 1 tall
export default function TechStackCard() {
  return (
    <article className="bento-card" style={{ gridColumn:'span 2', gridRow:'span 1', padding:'1.5rem', display:'flex', flexDirection:'column', justifyContent:'center' }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:'1rem' }}>
        <GridFour size={18} weight="fill" style={{ color:'#6366f1' }} />
        <h3 style={{ fontWeight:600, fontSize:'1.1rem', margin:0 }}>Tech Stack</h3>
      </div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
        {stack.map(({ id, label, Icon, color }) => (
          <div key={id} style={{ display:'flex', alignItems:'center', gap:6, padding:'6px 14px', borderRadius:10, background:'var(--bg-body)', border:'1px solid var(--border-card)', fontSize:'0.85rem', fontWeight:500, cursor:'default', transition:'border-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-card)'}>
            <Icon size={15} style={color ? { color } : {}} />
            {label}
          </div>
        ))}
      </div>
    </article>
  )
}