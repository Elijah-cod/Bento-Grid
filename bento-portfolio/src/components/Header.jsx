import { Sun, Moon } from "@phosphor-icons/react";

export default function Header({ darkMode, toggleDark }) {
    return (
        <header className="w-full max-w-[1440px] mx-auto px-6 py-8 flex justify-between items-center z-50">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform duration-300">
                    A
                </div>
                <span className="font-bold text-xl tracking-tight">
                    Alex<span style={{ color: "var(--accent)" }}>.</span>dev
                </span>
            </div>

            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDark}
                aria-label="Toggle Dark Mode"
                className="p-3 rounded-full bento-card hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center justify-center shadow-sm relative overflow-hidden group w-12 h-12"
            >
                {/*
                darkMode === true  → show Sun icon (click to go light)
                darkMode === false → show Moon icon (click to go dark)
                */}
                {darkMode ? (
                    <Sun
                        size={20}
                        weight="bold"
                        className="text-yellow-400 transition-all duration-300"
                    />
                ) : (
                    <Moon
                        size={20}
                        weight="bold"
                        className="text-indigo-500 transition-all duration-300"
                    />
                )}
                <span className="sr-only">Toggle dark mode</span>
            </button>
        </header>
    );
}
