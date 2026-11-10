# Linktree Page with Tailwind CSS

A small, browser-based exercise for building a Linktree-style profile page with Tailwind CSS. The tutorial takes a plain HTML page through layout, profile styling, link buttons, keyboard focus states, and dark mode.

## Project structure

This is an [Astro](https://astro.build) project with Tailwind CSS v4 (via `@tailwindcss/vite`).

- `src/pages/index.astro` — the links page. Profile details and links are defined as data in the frontmatter and rendered with `links.map(...)`.
- `src/layouts/Layout.astro` — the HTML shell (`<head>`, `<body>` classes) and global stylesheet import.
- `src/styles/global.css` — imports Tailwind and defines the shared `.link` button class.
- `public/` — static files served as-is (put a local avatar image here).
- `linktree-tailwind-step-by-step.md` — the eight-step Tailwind tutorial and styling extensions.

## Get started

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

Then open http://localhost:4321. Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the static site into `dist/` |
| `npm run preview` | Serves the built site locally |

## Make it yours

In `src/pages/index.astro`, edit the `profile` object (name, bio, avatar) and the `links` array. Replace `you@example.com` in the `mailto:` link with your email address; the `#` links are placeholders for real destinations. To add a link, add another `{ label, href }` entry to the array.

## Accessibility

The link buttons include visible keyboard focus styles. The avatar uses an empty `alt` attribute because the adjacent heading provides the profile name; if you use an informative image, provide meaningful alternative text.

## Learn more

- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [Hover, focus, and other states](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Dark mode](https://tailwindcss.com/docs/dark-mode)
