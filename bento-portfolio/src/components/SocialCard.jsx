import { GithubLogo, LinkedinLogo, TwitterLogo, DribbbleLogo } from '@phosphor-icons/react'

const socials = [
    {
        id: 'github',
        icon: GithubLogo,
        href: '#',
        hoverBg: 'hover:bg-zinc-100 dark:hover:bg-zinc-700/50',
        hoverBorder: 'hover:border-zinc-200 dark:hover:border-zinc-700',
    },
    {
        id: 'linkedin',
        icon: LinkedinLogo,
        href: '#',
        hoverBg: 'hover:bg-[#0A66C2]/10 dark:hover:bg-[#0A66C2]/20',
        hoverBorder: 'hover:border-[#0A66C2]/30',
        hoverText: 'hover:text-[#0A66C2] dark:hover:text-[#4799eb]',
    },
    {
        id: 'twitter',
        icon: TwitterLogo,
        href: '#',
        hoverBg: 'hover:bg-[#1DA1F2]/10 dark:hover:bg-[#1DA1F2]/20',
        hoverBorder: 'hover:border-[#1DA1F2]/30',
        hoverText: 'hover:text-[#1DA1F2] dark:hover:text-[#4db8f5]',
    },
    {
        id: 'dribbble',
        icon: DribbbleLogo,
        href: '#',
        hoverBg: 'hover:bg-[#EA4C89]/10 dark:hover:bg-[#EA4C89]/20',
        hoverBorder: 'hover:border-[#EA4C89]/30',
        hoverText: 'hover:text-[#EA4C89] dark:hover:text-[#f082ac]',
    },
]

export default function SocialCard() {
    return (
        <article className="bento-card col-span-1 row-span-1 p-6 flex flex-col justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full w-full">
                {socials.map(({ id, icon: Icon, href, hoverBg, hoverBorder, hoverText }) => (
                    <a
                        key={id}
                        href={href}
                        className={`
              flex flex-col items-center justify-center gap-2 rounded-xl
              bg-zinc-50 dark:bg-zinc-800/50 transition-colors
              border border-transparent
              ${hoverBg} ${hoverBorder} ${hoverText ?? ''}
            `}
                    >
                        <Icon size={24} />
                    </a>
                ))}
            </div>
        </article>
    )
}