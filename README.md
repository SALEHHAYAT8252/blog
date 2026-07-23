# Quill — Blog CMS UI

A fully responsive Blog CMS admin UI built with React 18, TypeScript, Vite, Tailwind CSS v4,
React Router, TanStack Query, Zustand, and React Hook Form + Zod.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## What's included

- **Responsive app shell** — sidebar becomes a slide-in drawer under `lg` (1024px), collapses
  to icon-only on desktop via the chevron toggle, and the top navbar collapses search/actions
  down to icon buttons on small screens.
- **Dashboard** — stat cards that reflow 1 → 2 → 4 columns, recent activity list.
- **Posts** — list view switches from a data table (≥ `md`, 768px) to stacked cards (< `md`),
  with search + status filter chips.
- **Post editor** — two-pane layout (editor + metadata sidebar) on `lg+`, stacks to a single
  column with the metadata panel below the editor on mobile.
- **Media library** — image grid that reflows 2 → 3 → 5 columns, with a detail modal that is
  full-screen on mobile and a centered dialog on desktop.
- **Reusable UI primitives** — `Button`, `Card`, `Modal`, `StatusBadge`, `Tag` in
  `src/components/ui`.

## Project structure

```
src/
  components/
    layout/     Sidebar, Navbar, Layout (app shell)
    ui/         Button, Card, Modal, Badge — reusable primitives
  features/
    auth/       Login screen
    dashboard/  Dashboard
    posts/      PostList, PostTable, PostCard, PostEditor
    media/      MediaLibrary
    misc/       PlaceholderPage (Categories/Users/Settings stubs)
  lib/          types.ts, mockData.ts
  store/        uiStore.ts (Zustand — sidebar/drawer state)
  App.tsx       route definitions
  main.tsx      app entry (Router + QueryClient providers)
```

## Design system

Defined as CSS variables in `src/index.css` under `@theme` (Tailwind v4's CSS-first config —
no `tailwind.config.js` needed):

- **Colors**: `ink` (near-navy, sidebar/dark surfaces), `paper` (warm off-white background),
  `gold` (accent — active states, primary actions), plus `success` / `danger` / `info` semantic
  colors for post status.
- **Type**: `Fraunces` (display serif, headings) + `Inter` (body/UI sans), loaded via Google
  Fonts in `index.html`.

## Next steps to make it production-ready

- Swap `src/lib/mockData.ts` for real API calls wired through TanStack Query
  (`useQuery`/`useMutation`), with the data shapes already matching `src/lib/types.ts`.
- Wire `Login.tsx` to a real auth endpoint and add a route guard around the authenticated routes.
- Replace the plain `<textarea>` in `PostEditor` with a rich text editor (TipTap or Lexical).
- Build out the Categories, Users, and Settings pages (currently placeholders).
- Add an ESLint flat config with `eslint-plugin-react-hooks` and `eslint-plugin-jsx-a11y`.
