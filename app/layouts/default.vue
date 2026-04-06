<script setup lang="ts">
const navLinks = [
  { label: 'Work', to: '/' },
  { label: 'About', to: '/about' },
]

const contactOpen = ref(false)
const pillNavRef = ref<HTMLElement | null>(null)
const navWidth = ref('auto')

watch(contactOpen, (open) => {
  if (open && pillNavRef.value) {
    navWidth.value = `${pillNavRef.value.offsetWidth}px`
  }
})

function toggleContact() {
  contactOpen.value = !contactOpen.value
}

// Close on route change
watch(() => useRoute().path, () => {
  contactOpen.value = false
})
</script>

<template>
  <div class="site">
    <header class="header">
      <NuxtLink to="/" class="header__name">Aaron Lee</NuxtLink>
      <span class="header__title">Product Designer</span>
    </header>

    <main class="main">
      <slot />
    </main>

    <!-- Contact popover -->
    <Transition name="contact-popover">
      <div v-if="contactOpen" class="contact-popover" :style="{ width: navWidth }">
        <p class="contact-popover__tagline">We'll build fun things</p>
        <div class="contact-popover__links">
          <p>X: <a href="https://x.com/acorn_lee_" target="_blank" rel="noopener noreferrer">acorn_lee_</a></p>
          <p>mail: <a href="mailto:alee9193@usc.edu">alee9193@usc.edu</a></p>
        </div>
      </div>
    </Transition>

    <!-- Backdrop to close -->
    <div v-if="contactOpen" class="contact-backdrop" @click="contactOpen = false" />

    <nav ref="pillNavRef" class="pill-nav">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="pill-nav__link"
      >
        {{ link.label }}
      </NuxtLink>
      <button
        class="pill-nav__link pill-nav__contact"
        :class="{ 'pill-nav__contact--active': contactOpen }"
        @click="toggleContact"
      >
        Contact
      </button>
    </nav>
  </div>
</template>

<style scoped>
.site {
  display: flex;
  flex-direction: column;
  min-height: 100svh;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--page-padding);
  white-space: nowrap;
}

.header__name {
  font-size: var(--text-sm);
  font-weight: 500;
}

.header__title {
  font-size: var(--text-sm);
  font-weight: 500;
  text-align: right;
}

.main {
  flex: 1;
}

/* Floating pill navigation */
.pill-nav {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  gap: 4px;
  padding: 4px;
  background-color: var(--color-surface);
  border-radius: 16px;
}

.pill-nav__link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  border-radius: 12px;
  font-size: var(--text-sm);
  font-weight: 500;
  white-space: nowrap;
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.pill-nav__link.router-link-exact-active {
  background-color: #ffffff;
  color: #000000;
}

.pill-nav__link:not(.router-link-exact-active):hover {
  background-color: rgb(108, 108, 108);
}

/* Contact button */
.pill-nav__contact {
  border: none;
  background: none;
  cursor: pointer;
  font-family: var(--font-sans);
  color: inherit;
}

.pill-nav__contact--active {
  background-color: #ffffff;
  color: #000000;
}

/* Contact popover */
.contact-popover {
  position: fixed;
  bottom: calc(2rem + 48px + 8px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 101;
  padding: 12px 16px;
  background-color: var(--color-surface);
  border-radius: 16px;
  font-size: 14px;
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
}

.contact-popover__tagline {
  font-weight: 400;
}

.contact-popover__links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-popover__links p {
  font-weight: 500;
  margin: 0;
}

.contact-popover__links a {
  text-decoration: none;
  color: inherit;
}

.contact-popover__links a:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* Backdrop */
.contact-backdrop {
  position: fixed;
  inset: 0;
  z-index: 99;
}

/* Popover animation — gentle spring-like ease */
.contact-popover-enter-active {
  transition: opacity 300ms cubic-bezier(0.34, 1.56, 0.64, 1),
              transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.contact-popover-leave-active {
  transition: opacity 200ms ease,
              transform 200ms ease;
}

.contact-popover-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(8px) scale(0.95);
}

.contact-popover-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(8px) scale(0.95);
}
</style>
