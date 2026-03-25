import { GithubLogo, LinkedinLogo, TwitterLogo, DribbbleLogo } from '@phosphor-icons/react'

const socials = [
  { id:'github',   Icon:GithubLogo,   href:'#', hoverColor:'#333' },
  { id:'linkedin', Icon:LinkedinLogo, href:'#', hoverColor:'#0A66C2' },
  { id:'twitter',  Icon:TwitterLogo,  href:'#', hoverColor:'#1DA1F2' },
  { id:'dribbble', Icon:DribbbleLogo, href:'#', hoverColor:'#EA4C89' },
]

// col: 1 of 4, row: 1 tall
export default function SocialCard() {
  return (
    <article className="bento-card" style={{ gridColumn:'span 1', gridRow:'span 1', padding:'1rem', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:'1fr 1fr', gap:10, width:'100%', height:'100%' }}>
        {socials.map(({ id, Icon, href }) => (
          <a key={id} href={href} style={{ display:'flex', alignItems:'center', justifyContent:'center', borderRadius:12, background:'var(--bg-body)', border:'1px solid var(--border-card)', transition:'all 0.2s', textDecoration:'none', color:'inherit' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.background = 'var(--bg-body)' }}>
            <Icon size={22} />
          </a>
        ))}
      </div>
    </article>
  )
}