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
In nuxt.config.ts, register as a module and declare which plugins/composables to use:

    export default defineNuxtConfig({
      modules: ['@maas/vue-equipment/nuxt'],
      vueEquipment: {
        plugins: ['MagicDrawer', 'MagicMenu', 'MagicModal'],
        composables: ['useScrollTo'],
      },
    })

- Components like `<magic-drawer>`, `<magic-modal>` become globally available.
- Composables like `useMagicDrawer('id')`, `useMagicModal('id')` are auto-imported.
- All components are completely unstyled. You must write all CSS yourself.
- Customize via CSS variables (e.g. `--magic-drawer-height: 75svh`).
- State is exposed via data-* attributes for CSS targeting.
- Always pass a unique string id prop to plugin components.

## Project Structure (Nuxt 4)

    app/
      app.vue             # Root component — must contain <NuxtPage />
      pages/              # File-based routing
        index.vue         # Home page (/)
      components/         # Auto-imported components
      composables/        # Auto-imported composables
      layouts/            # Layout wrappers
      assets/             # CSS, fonts, images
    public/               # Static files served at root
    nuxt.config.ts        # Nuxt configuration

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

## Design Direction
- Clean, modern, minimal aesthetic
- Smooth page transitions and micro-interactions
- Responsive (mobile-first)
- Accessible (semantic HTML, focus management, contrast)