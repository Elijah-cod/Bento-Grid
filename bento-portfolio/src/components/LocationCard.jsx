import { GlobeHemisphereWest, Clock } from '@phosphor-icons/react'

export default function LocationCard() {
    const time = new Date().toLocaleTimeString('en-KE', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Africa/Nairobi',
    })

    return (
        <article className="bento-card col-span-1 row-span-1 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 dark:opacity-[0.02] project-pattern z-0" />

            <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-1">
                    <GlobeHemisphereWest size={24} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Nairobi, KE</h3>
                    <p className="text-sm flex items-center justify-center gap-1 mt-1" style={{ color: 'var(--text-muted)' }}>
                        <Clock size={12} />
                        {time} EAT
                    </p>
                </div>
            </div>
        </article>
    )
}