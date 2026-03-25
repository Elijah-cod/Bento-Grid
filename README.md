# Elijah.dev — Bento Grid Portfolio

A personal portfolio built as a **Bento Box** layout — a single-page site featuring a bio, tech stack, featured project, and a contact form. Built with React 19, Vite, and Tailwind CSS v4.

---

## Preview

| Section | Description |
|---|---|
| Hero | Name, tagline, and availability status |
| Location | Live clock synced to Nairobi (EAT) |
| Social Links | GitHub, LinkedIn, Twitter, Dribbble |
| Tech Stack | Skills displayed as interactive pills |
| Featured Work | Browser mockup with hover animation |
| Contact Form | Controlled form with submit feedback |

---

## Tech Stack

- **React 19** — UI components and state management
- **Vite 8** — dev server and build tool
- **Tailwind CSS v4** — utility classes and theming
- **@phosphor-icons/react** — icon library
- **CSS Custom Properties** — dark/light theme tokens
- **CSS Grid** — bento layout with real `@media` queries

---

## Project Structure

```
bento-portfolio/
├── index.html
├── vite.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root — owns dark mode state
    ├── index.css             # Global styles, theme tokens, bento-grid class
    └── components/
        ├── Header.jsx        # Logo + dark mode toggle
        ├── HeroCard.jsx      # 2×2 hero card with gradient heading
        ├── LocationCard.jsx  # Live ticking clock (Africa/Nairobi)
        ├── SocialCard.jsx    # 2×2 social icon grid
        ├── TechStackCard.jsx # Tech pills spanning 2 columns
        ├── FeaturedProjectCard.jsx  # Browser mockup with hover float
        └── ContactCard.jsx   # Controlled form with success state
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/bento-portfolio.git
cd bento-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Preview the production build locally with:

```bash
npm run preview
```

---

## Theming & Dark Mode

Theme tokens are defined as CSS custom properties in `src/index.css`:

```css
:root {
  --bg-body:     #f4f4f5;
  --bg-card:     #ffffff;
  --border-card: #e4e4e7;
  --text-main:   #18181b;
  --text-muted:  #71717a;
  --accent:      #6366f1;
}

.dark {
  --bg-body:     #09090b;
  --bg-card:     #18181b;
  --border-card: #27272a;
  --text-main:   #f4f4f5;
  --text-muted:  #a1a1aa;
  --accent:      #818cf8;
}
```

Dark mode is toggled by adding/removing the `dark` class on `<html>` via JavaScript. The preference is saved to `localStorage` and respects the OS-level `prefers-color-scheme` setting on first visit.

---

## Layout System

The bento grid is defined as a plain CSS class in `index.css` — **not** as Tailwind responsive classes in JSX. This is intentional: Tailwind v4's JIT scanner can silently miss responsive prefixes (`md:`, `lg:`) inside JSX `className` strings. Writing the layout directly in CSS guarantees it always works.

```css
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;       /* mobile */
  grid-auto-rows: 180px;
  gap: 1rem;
  grid-auto-flow: dense;
}

@media (min-width: 768px) {
  .bento-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .bento-grid { grid-template-columns: repeat(4, 1fr); }
}
```

Card spans are set via inline `style` props for the same reason:

```jsx
<article style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
```

---

## Customisation

### Update your personal details

| What | Where |
|---|---|
| Name & tagline | `src/components/HeroCard.jsx` |
| Location & timezone | `src/components/LocationCard.jsx` |
| Social links | `src/components/SocialCard.jsx` |
| Tech stack items | `src/components/TechStackCard.jsx` |
| Featured project | `src/components/FeaturedProjectCard.jsx` |
| Accent colour | `--accent` variable in `src/index.css` |

### Connect the contact form

The form currently simulates a submission. To wire it to a real backend, replace the `handleSubmit` body in `ContactCard.jsx`:

```js
const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSent(true)
}
```

---

## Key Concepts Demonstrated

This project was built as a learning exercise covering:

- **Semantic HTML** — `<nav>`, `<main>`, `<article>`, `<form>` with proper labels
- **CSS Custom Properties** — single-source theming that switches at runtime
- **CSS Grid** — `grid-template-columns`, `grid-auto-rows`, `span`, `dense` flow
- **Flexbox** — card internals, wrapping pill tags, centred icon grids
- **React useState** — dark mode toggle, controlled form inputs
- **React useEffect** — syncing class to `<html>`, live ticking clock with `setInterval`
- **Lifting state up** — dark mode state lives in `App.jsx`, passed down as props
- **Responsive design** — mobile-first `@media` queries, `clamp()` for fluid type

---

## License

MIT — free to use and adapt for your own portfolio.
