export default function HeroCard() {
    return (
        <article className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-2 p-8 relative overflow-hidden flex flex-col justify-between group">

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl transition-all duration-700 group-hover:bg-indigo-500/30 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl transition-all duration-700 group-hover:bg-purple-500/30 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">

                <div className="flex justify-between items-start mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm text-xs font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        Available for work
                    </div>
                </div>

                <div className="mt-auto">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
                        Hi, I'm Elijah. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                            Frontend Engineer.
                        </span>
                    </h1>
                    <p className="text-base md:text-lg max-w-md font-medium leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        I craft responsive, pixel-perfect user interfaces with modern web technologies.
                        Focused on performance, accessibility, and exceptional design.
                    </p>
                </div>
            </div>
        </article>
    )
}