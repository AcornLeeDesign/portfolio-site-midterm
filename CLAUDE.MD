# Portfolio Site — ACAD 275 Midterm

## Project Overview
Personal portfolio website for ACAD 275. Built with Nuxt 4 and Vue 3. Uses Bun as the package manager.

## Tech Stack
- Framework: Nuxt 4 (v4.4.2)
- Language: TypeScript, Vue 3 SFCs with `<script setup lang="ts">`
- Package Manager: Bun — always use `bun install`, `bun run dev`, etc. Never npm/yarn/pnpm.
- UI Toolkit: Vue Equipment (`@maas/vue-equipment ^1.0.0-beta.55`) by Magic as a Service
  - Docs: https://www.vue.equipment/overview/getting-started.html
  - Unstyled plugins and composables for modals, drawers, menus, etc.
  - Registered as a Nuxt module: `@maas/vue-equipment/nuxt`
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
- **Do NOT use `<magic-player-video-controls />`** — its CSS has broken `@import` paths that cause PostCSS build errors.

## Project Structure (Nuxt 4)

    app/
      app.vue                    # Root component — must contain <NuxtPage />
      pages/
        index.vue                # Home (/) — waterfall video grid
        about.vue                # About page (/about)
        blog/
          nova.vue               # Blog post (/blog/nova)
          nuance.vue             # Blog post (/blog/nuance)
          rabbithole.vue         # Blog post (/blog/rabbithole)
      components/
        VideoPlayer.vue          # Lazy-loading video with WebM/MP4 sources + poster
      layouts/
        default.vue              # Site shell: header + floating pill nav
      assets/
        css/main.css             # Global styles, CSS variables, reset
    public/
      videos/                    # Optimized video files (MP4, WebM, posters)
    nuxt.config.ts               # Nuxt configuration

## Key CSS Variables (defined in main.css :root)
- `--color-bg` — page background
- `--color-surface` — card/nav surfaces
- `--color-text` / `--color-text-muted` — primary and secondary text
- `--color-border` — borders
- `--page-padding` — consistent inline padding

## Conventions
- Always use `<script setup lang="ts">` in every component.
- Nuxt auto-imports: do NOT manually import ref, computed, useRoute, watch, etc.
- Components in app/components/ are auto-imported — no manual registration.
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
- Steps: get dimensions → compress MP4 (H.264, CRF 30, max 1080px) → generate WebM (VP9) → generate poster JPEG → add to waterfall with correct aspect ratio.
- The `VideoPlayer` component handles lazy loading, dual-format sources, and poster images automatically.
- Originals are backed up in `public/videos/originals/`.

## Design Direction
- Clean, modern, minimal aesthetic
- Smooth page transitions and micro-interactions
- Responsive (mobile-first)
- Accessible (semantic HTML, focus management, contrast)