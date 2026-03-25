import { useState } from 'react'
import { PaperPlaneRight } from '@phosphor-icons/react'

// col: 2 of 4, row: 2 tall
export default function ContactCard() {
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [sent, setSent] = useState(false)
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault(); setSent(true)
    setTimeout(() => { setSent(false); setForm({ name:'', email:'', message:'' }) }, 3000)
  }

  const input = { width:'100%', background:'var(--bg-body)', border:'1px solid var(--border-card)', borderRadius:12, padding:'10px 14px', fontSize:'0.875rem', color:'var(--text-main)', outline:'none', fontFamily:'inherit', boxSizing:'border-box', transition:'border-color 0.2s' }

  return (
    <article className="bento-card" style={{ gridColumn:'span 2', gridRow:'span 2', padding:'2rem', display:'flex', flexDirection:'column' }}>
      <div style={{ marginBottom:'1.25rem' }}>
        <h2 style={{ fontWeight:700, fontSize:'1.5rem', margin:'0 0 6px' }}>Let's work together</h2>
        <p style={{ color:'var(--text-muted)', fontSize:'0.875rem', margin:0 }}>Have a project in mind? Drop me a message and I'll get back to you within 24 hours.</p>
      </div>

      <form onSubmit={onSubmit} style={{ flex:1, display:'flex', flexDirection:'column', gap:14 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
            <label style={{ fontSize:'0.78rem', fontWeight:500, color:'var(--text-muted)' }}>Name</label>
            <input name="name" value={form.name} onChange={onChange} placeholder="John Doe" required style={input}
              onFocus={e => e.target.style.borderColor='var(--accent)'}
              onBlur={e => e.target.style.borderColor='var(--border-card)'} />
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
            <label style={{ fontSize:'0.78rem', fontWeight:500, color:'var(--text-muted)' }}>Email</label>
            <input name="email" type="email" value={form.email} onChange={onChange} placeholder="john@example.com" required style={input}
              onFocus={e => e.target.style.borderColor='var(--accent)'}
              onBlur={e => e.target.style.borderColor='var(--border-card)'} />
          </div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:5, flex:1 }}>
          <label style={{ fontSize:'0.78rem', fontWeight:500, color:'var(--text-muted)' }}>Message</label>
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Tell me about your project..." required
            style={{ ...input, resize:'none', height:'100%', minHeight:90 }}
            onFocus={e => e.target.style.borderColor='var(--accent)'}
            onBlur={e => e.target.style.borderColor='var(--border-card)'} />
        </div>
        <button type="submit" disabled={sent} style={{ width:'100%', padding:'12px', borderRadius:12, border:'none', cursor: sent ? 'default' : 'pointer', background: sent ? '#10b981' : '#18181b', color:'#fff', fontWeight:600, fontSize:'0.9rem', fontFamily:'inherit', display:'flex', alignItems:'center', justifyContent:'center', gap:8, transition:'background 0.3s' }}
          onMouseEnter={e => { if(!sent) e.currentTarget.style.background='#6366f1' }}
          onMouseLeave={e => { if(!sent) e.currentTarget.style.background='#18181b' }}>
          {sent ? 'Message sent!' : 'Send Message'}
          {!sent && <PaperPlaneRight size={16} />}
        </button>
      </form>
    </article>
  )
}