import {
    FileJsx, FileTs, Wind, Hexagon, GridFour, FigmaLogo
} from '@phosphor-icons/react'

const stack = [
    { id: 'react', label: 'React', icon: FileJsx, iconColor: '#61DAFB' },
    { id: 'typescript', label: 'TypeScript', icon: FileTs, iconColor: '#3178C6' },
    { id: 'tailwind', label: 'Tailwind CSS', icon: Wind, iconColor: '#38B2AC' },
    { id: 'node', label: 'Node.js', icon: Hexagon, iconColor: '#68A063' },
    { id: 'cssgrid', label: 'CSS Grid', icon: GridFour, iconColor: null },     // inherits text color
    { id: 'figma', label: 'Figma', icon: FigmaLogo, iconColor: '#F24E1E' },
]

export default function TechStackCard() {
    return (
        <article className="bento-card col-span-1 md:col-span-2 lg:col-span-2 row-span-1 p-6 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                    <GridFour size={18} className="text-indigo-500" weight="fill" />
                    Tech Stack
                </h3>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
                {stack.map(({ id, label, icon: Icon, iconColor }) => (
                    <div
                        key={id}
                        className="
              px-3 py-1.5 md:px-4 md:py-2 rounded-xl
              bg-zinc-100 dark:bg-zinc-800 text-sm font-medium
              flex items-center gap-2
              border border-zinc-200 dark:border-zinc-700/50
              hover:border-indigo-500 dark:hover:border-indigo-500
              transition-colors cursor-default
            "
                    >
                        <Icon size={16} style={iconColor ? { color: iconColor } : {}} />
                        {label}
                    </div>
                ))}
            </div>
        </article>
    )
}