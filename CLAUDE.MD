# Portfolio Site — ACAD 275 Midterm

## Project Overview
Personal portfolio website for ACAD 275. Built with Nuxt 4 and Vue 3. Uses Bun as the package manager.

## Tech Stack
- Framework: Nuxt 4 (v4.4.2)
- Language: TypeScript, Vue 3 SFCs with `<script setup lang="ts">`
- Package Manager: Bun — always use `bun install`, `bun run dev`, etc. Never npm/yarn/pnpm.
- UI Toolkit: Vue Equipment (`@maas/vue-equipment ^1.0.0-beta.55`) by Magic as a Service
  - Docs: https://www.vue.equipment/overview/getting-started.html
  - Registered as a Nuxt module: `@maas/vue-equipment/nuxt`
  - Only the `MagicPlayer` plugin is currently used (for blog page videos).
  - Peer deps (e.g. @vueuse/core, focus-trap, defu, motion) are auto-installed by Bun.

## Vue Equipment — Nuxt Setup
In nuxt.config.ts, registered as a module with the `MagicPlayer` plugin:

    export default defineNuxtConfig({
      modules: ['@maas/vue-equipment/nuxt'],
      vueEquipment: {
        plugins: ['MagicPlayer'],
      },
    })

- `<magic-player-provider>`, `<magic-player-video>` are globally available.
- Always pass a unique string id prop to `<magic-player-provider>`.
- All components are completely unstyled. You must write all CSS yourself.
- `<magic-player-video-controls />` is used in blog pages for hover-to-show playback controls.
- **Do NOT import its CSS directly from the package** — the `@import` paths are broken and cause PostCSS errors. A manually combined CSS file exists at `app/assets/css/magic-player-video-controls.css` and is registered in `nuxt.config.ts`.

## Project Structure (Nuxt 4)

    app/
      app.vue                    # Root component — <NuxtLayout> + <NuxtPage />
      pages/
        index.vue                # Home (/) — waterfall video grid
        about.vue                # About page (/about) — centered bio
        blog/
          nova.vue               # Blog post (/blog/nova)
          nuance.vue             # Blog post (/blog/nuance)
          rabbithole.vue         # Blog post (/blog/rabbithole)
      components/
        VideoPlayer.vue          # Lazy-loading video with WebM/MP4 sources + poster
      layouts/
        default.vue              # Site shell: header + floating pill nav + contact popover
      assets/
        css/main.css             # Global styles, CSS variables, reset, .prose utility
        css/magic-player-video-controls.css  # Combined MagicPlayer controls CSS (workaround)
    public/
      images/                    # Static images (PNG) for waterfall grid
      videos/                    # Optimized video files (MP4, WebM, posters)
      videos/posters/            # First-frame JPEG posters for lazy loading
      videos/originals/          # Uncompressed video backups
      icons/                     # SVG icons (heroicons)
    claude-docs/
      video-treatment.md         # Full video optimization process documentation
    nuxt.config.ts               # Nuxt configuration

## Navigation & Routing
- Floating pill nav at bottom center with Work, About, Contact.
- Work and About are NuxtLink routes.
- Contact is a popover modal (not a page) — toggles above the pill nav with spring animation.
- Blog items on the waterfall grid link to `/blog/:slug` via NuxtLink.
- Deployment items open external URLs in new tabs (`target="_blank"`).
- Items with no tag/link are non-interactive divs.

## Waterfall Grid (index.vue)
- 3-column layout with items sized by aspect ratio.
- Supports both videos (via `VideoPlayer`) and images (via `<img>` with `type: 'image'`).
- Each item has a `tag` (Blog or Deployment) shown on hover (desktop) or always visible (mobile/tablet ≤1023px).
- Blog tags use inline newspaper SVG icon, Deployment tags use inline external-link SVG icon.
- Icons are inline SVGs with `stroke="currentColor"` to inherit text color.
- Do NOT use `<img>` for icons inside tags — `currentColor` won't work.
- Aspect ratios can be manually overridden (e.g. `1 / 1`) — `object-fit: cover` handles cropping.

## Blog Pages
- Layout: container max-width 840px, article content max-width 720px (centered within).
- Videos span the full 840px width via MagicPlayer, with hover-to-show controls.
- Multiple videos can be stacked vertically below the hero video.
- Article content uses the global `.prose` class (defined in main.css) for markdown-style formatting.
- All text uses Geist font, medium weight (500) for headers, regular (400) for body. No bold/semibold.
- Video aspect ratios must match actual video dimensions.

## Key CSS Variables (defined in main.css :root)
- `--color-bg` — page background (#ffffff)
- `--color-surface` — card/nav surfaces (#f2f2f2)
- `--color-text` / `--color-text-muted` — primary (#000000) and secondary text
- `--color-border` — borders
- `--color-placeholder` — placeholder backgrounds (#d9d9d9)
- `--page-padding` — consistent inline padding (24px)
- `--font-sans` — Geist, system-ui fallback

## Conventions
- Always use `<script setup lang="ts">` in every component.
- Nuxt auto-imports: do NOT manually import ref, computed, useRoute, watch, etc.
- Components in app/components/ are auto-imported — no manual registration.
- Do NOT name components starting with "Lazy" — Nuxt reserves that prefix for its own lazy-loading.
- Use file-based routing via app/pages/.
- Use semantic HTML for accessibility.
- Keep components small and single-purpose.
- Mobile-first responsive design.

## Commands
- `bun install` — install dependencies
- `bun run dev` — dev server at http://localhost:3000
- `bun run build` — production build
- `bun run generate` — static generation
- `bun run preview` — preview production build

## Video Treatment
- All new videos must go through the optimization process documented in `claude-docs/video-treatment.md`.
- **Two quality tiers:**
  - Waterfall grid: CRF 30, max 1080px width (small display, aggressive compression)
  - Blog pages: CRF 23, max 1200px width (larger display, higher quality)
- Steps: get dimensions → backup original → compress MP4 (H.264) → generate WebM (VP9) → generate poster JPEG.
- The `VideoPlayer` component handles lazy loading, dual-format sources, and poster images automatically.
- Originals are backed up in `public/videos/originals/`.

## Design Direction
- Clean, modern, minimal aesthetic using Geist font
- Font weights: only regular (400) and medium (500) — no bold or semibold
- Smooth animations with gentle spring easing where appropriate
- Responsive: mobile-first, 1-col mobile / 3-col tablet and desktop
- Tags visible by default on mobile/tablet, hover-only on desktop
