// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@maas/vue-equipment/nuxt'],

  vueEquipment: {
    plugins: ['MagicPlayer'],
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/magic-player-video-controls.css',
  ],
})
