import { ArrowUpRight } from '@phosphor-icons/react'

export default function FeaturedProjectCard() {
    return (
        <article className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative overflow-hidden group flex flex-col">

            {/* Top section: browser mockup preview */}
            <div className="flex-1 w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden project-pattern p-6 pt-8 flex items-end justify-center">

                {/* Browser window mockup */}
                <div className="w-[85%] h-48 bg-white dark:bg-zinc-900 rounded-t-xl shadow-2xl border-x border-t border-zinc-200 dark:border-zinc-700 relative transform transition-transform duration-500 group-hover:translate-y-[-10px]">

                    {/* Traffic light dots */}
                    <div className="flex gap-1.5 p-3 border-b border-zinc-100 dark:border-zinc-800">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>

                    {/* Skeleton content placeholders */}
                    <div className="p-4 flex flex-col gap-3">
                        <div className="w-1/3 h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
                        <div className="w-full h-16 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-100 dark:border-zinc-800" />
                        <div className="flex gap-2">
                            <div className="w-1/2 h-10 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-100 dark:border-zinc-800" />
                            <div className="w-1/2 h-10 bg-zinc-50 dark:bg-zinc-950 rounded-lg border border-zinc-100 dark:border-zinc-800" />
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-[var(--bg-card)]/40 to-transparent" />
            </div>

            {/* Bottom section: project info */}
            <div className="p-6 relative z-10 bg-[var(--bg-card)] border-t border-[var(--border-card)]">
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1">
                            Featured Work
                        </p>
                        <h3 className="text-xl font-bold">Fintech Dashboard</h3>
                        <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                            A complex financial data visualization platform built with React and D3.js.
                        </p>
                    </div>

                    <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-colors flex-shrink-0 group/btn"
                    >
                        <ArrowUpRight size={18} className="transition-transform group-hover/btn:rotate-45" />
                    </a>
                </div>
            </div>
        </article>
    )
}