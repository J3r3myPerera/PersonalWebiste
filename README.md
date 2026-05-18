# Jeremy Perera — Personal Website

Personal portfolio for **Jeremy Perera**, Associate Software Developer at IFS.
Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Production build                     |
| `npm run start` | Run the production build             |
| `npm run lint`  | Run ESLint                           |

## Project structure

```
app/
  layout.tsx       # Root layout, fonts, metadata
  page.tsx         # Composes all sections
  globals.css      # Tailwind base + design tokens
components/
  Navigation.tsx
  Hero.tsx
  About.tsx
  Experience.tsx
  Skills.tsx
  Projects.tsx
  Education.tsx
  VolunteerWork.tsx
  OpenSource.tsx
  Contact.tsx
  Footer.tsx
  ThemeProvider.tsx
  ThemeToggle.tsx
tailwind.config.ts # Custom theme (colors, fonts, animations)
```
