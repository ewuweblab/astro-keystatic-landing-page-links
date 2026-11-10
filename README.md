# Linktree Page with Tailwind CSS

A small, browser-based exercise for building a Linktree-style profile page with Tailwind CSS. The tutorial takes a plain HTML page through layout, profile styling, link buttons, keyboard focus states, and dark mode.

## Project structure

This is an [Astro](https://astro.build) project with Tailwind CSS v4 (via `@tailwindcss/vite`) and [Keystatic](https://keystatic.com) as a local, Git-based CMS.

- `src/content/profile.yaml` — the page content (name, bio, avatar, links). Edit it in the Keystatic admin or by hand.
- `keystatic.config.ts` — the Keystatic schema: a single **Profile** entry with name, bio, optional avatar image and a list of links.
- `src/pages/index.astro` — the links page. Reads the profile with Keystatic's reader API and renders the links with `profile.links.map(...)`.
- `src/layouts/Layout.astro` — the HTML shell (`<head>`, `<body>` classes) and global stylesheet import.
- `src/styles/global.css` — imports Tailwind and defines the shared `.link` button class.
- `public/images/avatar/` — avatar images uploaded through Keystatic land here.
- `linktree-tailwind-step-by-step.md` — the eight-step Tailwind tutorial and styling extensions.

## Get started

Requires Node.js 22 or later.

```bash
npm install
npm run dev
```

Then open http://127.0.0.1:4321 for the site and http://127.0.0.1:4321/keystatic for the admin. Other commands:

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the static site into `dist/` |
| `npm run preview` | Serves the built site locally |

Keystatic uses **local storage**: saving in the admin writes straight to the files in `src/content/` and `public/images/avatar/`, and you commit those changes with Git. Because of that, the admin only runs during `npm run dev`. The production build is a plain static site with no `/keystatic` route and no server adapter.

## Make it yours

Run `npm run dev`, open `/keystatic`, and edit **Profile**: set your name and bio, upload an avatar (a placeholder shows while it's empty), and add, reorder or remove links. Replace `you@example.com` in the Contact link with your email address; the `#` links are placeholders for real destinations. Commit the changed content files when you're done.

## Accessibility

The link buttons include visible keyboard focus styles. The avatar uses an empty `alt` attribute because the adjacent heading provides the profile name; if you use an informative image, provide meaningful alternative text.

## Learn more

- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [Hover, focus, and other states](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [Dark mode](https://tailwindcss.com/docs/dark-mode)
