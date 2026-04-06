<script setup lang="ts">
useHead({ title: 'Aaron Lee — Work' })

const NuxtLink = resolveComponent('NuxtLink')

interface Tag {
  label: string
  icon: 'blog' | 'deployment'
}

interface Project {
  id: number
  title: string
  aspect: string
  src: string
  border?: boolean
  tag?: Tag
  slug?: string
  href?: string
}

// Three columns with varying heights to create the waterfall effect
// Video items use aspect ratio from actual video dimensions
const columns: Project[][] = [
  [
    { id: 1, title: 'Nuance Pure', aspect: '1 / 1', src: '/videos/nuance_pure.mp4', tag: { label: 'Blog', icon: 'blog' }, slug: 'nuance' },
    { id: 2, title: 'Haven 3D', aspect: '9 / 16', src: '/videos/haven_3d.mp4' },
  ],
  [
    { id: 3, title: 'Manta', aspect: '3418 / 2032', src: '/videos/manta.mp4', tag: { label: 'Deployment', icon: 'deployment' }, href: 'https://manta-one.vercel.app/' },
    { id: 4, title: 'Gameboy', aspect: '1158 / 1578', src: '/videos/gameboy.mp4', tag: { label: 'Deployment', icon: 'deployment' }, href: 'https://gameboy-basic.vercel.app/' },
    { id: 8, title: 'Rabbithole', aspect: '2256 / 1464', src: '/videos/rabbithole.mp4', tag: { label: 'Blog', icon: 'blog' }, slug: 'rabbithole' },
  ],
  [
    { id: 5, title: 'Wiggle', aspect: '1738 / 1000', src: '/videos/wiggle.mp4', border: true, tag: { label: 'Deployment', icon: 'deployment' }, href: 'https://wiggle.framer.website/' },
    { id: 6, title: 'Nova Practice', aspect: '1588 / 1288', src: '/videos/nova_practice_V.mp4', border: true, tag: { label: 'Blog', icon: 'blog' }, slug: 'nova' },
    { id: 7, title: 'Pen', aspect: '2038 / 1008', src: '/videos/pen.mp4' },
  ],
]
</script>

<template>
  <section class="waterfall">
    <div
      v-for="(column, colIndex) in columns"
      :key="colIndex"
      class="waterfall__col"
    >
      <component
        :is="project.slug ? NuxtLink : project.href ? 'a' : 'div'"
        v-for="project in column"
        :key="project.id"
        :to="project.slug ? `/blog/${project.slug}` : undefined"
        :href="project.href || undefined"
        :target="project.href ? '_blank' : undefined"
        :rel="project.href ? 'noopener noreferrer' : undefined"
        class="waterfall__item"
        :class="{ 'waterfall__item--bordered': project.border }"
        :style="{ aspectRatio: project.aspect }"
      >
        <VideoPlayer :src="project.src" />
        <div v-if="project.tag" class="waterfall__tag">
          <span>{{ project.tag.label }}</span>
          <!-- Newspaper icon (Blog) -->
          <svg v-if="project.tag.icon === 'blog'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7.5H13.5M12 10.5H13.5M6 13.5H13.5M6 16.5H13.5M16.5 7.5H19.875C20.4963 7.5 21 8.00368 21 8.625V18C21 19.2426 19.9926 20.25 18.75 20.25M16.5 7.5V18C16.5 19.2426 17.5074 20.25 18.75 20.25M16.5 7.5V4.875C16.5 4.25368 15.9963 3.75 15.375 3.75H4.125C3.50368 3.75 3 4.25368 3 4.875V18C3 19.2426 4.00736 20.25 5.25 20.25H18.75M6 7.5H9V10.5H6V7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <!-- External link icon (Deployment) -->
          <svg v-else-if="project.tag.icon === 'deployment'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 6H5.25C4.00736 6 3 7.00736 3 8.25V18.75C3 19.9926 4.00736 21 5.25 21H15.75C16.9926 21 18 19.9926 18 18.75V10.5M7.5 16.5L21 3M21 3L15.75 3M21 3V8.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </component>
    </div>
  </section>
</template>

<style scoped>
.waterfall {
  display: flex;
  gap: 8px;
  padding-inline: var(--page-padding);
  padding-bottom: 6rem;
}

.waterfall__col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.waterfall__item {
  position: relative;
  border-radius: 8px;
  background-color: #000;
  width: 100%;
  flex-shrink: 0;
  overflow: hidden;
  display: block;
}

a.waterfall__item {
  cursor: pointer;
}

.waterfall__tag {
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  background-color: var(--color-surface);
  border-radius: 12px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  opacity: 0;
  transition: opacity var(--transition-fast);
  pointer-events: none;
}

.waterfall__tag svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.waterfall__item:hover .waterfall__tag {
  opacity: 1;
}

.waterfall__item--bordered {
  border: 1px solid var(--color-border);
}

/* Crop bottom 4px of Nova video to hide recording artifact */
#player-6 :deep(video) {
  height: calc(100% + 4px);
}

.waterfall__item :deep(video) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Mobile: stack into a single column */
@media (max-width: 639px) {
  .waterfall {
    flex-direction: column;
  }
}

/* Tablet: 2 columns, hide the third */
@media (min-width: 640px) and (max-width: 1023px) {
  .waterfall__col:nth-child(3) {
    display: none;
  }
}
</style>
