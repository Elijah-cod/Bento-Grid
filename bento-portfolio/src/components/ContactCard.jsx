import { useState } from 'react'
import { PaperPlaneRight } from '@phosphor-icons/react'

export default function ContactCard() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault() // Stop the browser from reloading the page
        setSent(true)
        setTimeout(() => {
            setSent(false)
            setForm({ name: '', email: '', message: '' })
        }, 3000)
    }

    const inputClass = `
    w-full bg-zinc-50 dark:bg-zinc-950/50
    border border-zinc-200 dark:border-zinc-700 rounded-xl
    px-4 py-3 text-sm
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
    transition-all
    placeholder:text-zinc-400 dark:placeholder:text-zinc-600
  `

    return (
        <article className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-2 p-6 md:p-8 flex flex-col">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Let's work together</h2>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Have a project in mind? Drop me a message and I'll get back to you within 24 hours.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={inputClass}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={inputClass}
                            required
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5 flex-1">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 ml-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        className={`${inputClass} min-h-[100px] resize-none h-full`}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className={`
            w-full font-semibold py-3 px-6 rounded-xl mt-2
            flex items-center justify-center gap-2 group shadow-sm
            transition-all duration-300
            ${sent
                            ? 'bg-emerald-500 text-white cursor-default'
                            : 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-indigo-500 dark:hover:bg-indigo-500 hover:text-white'
                        }
          `}
                    disabled={sent}
                >
                    {sent ? 'Message sent!' : 'Send Message'}
                    {!sent && (
                        <PaperPlaneRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    )}
                </button>
            </form>
        </article>
    )
}