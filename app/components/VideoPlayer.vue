<script setup lang="ts">
const props = defineProps<{
  src: string
  poster?: string
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const isVisible = ref(false)

const webmSrc = computed(() => props.src.replace(/\.mp4$/, '.webm'))
const posterSrc = computed(() =>
  props.poster ?? props.src.replace(/\.mp4$/, '.jpg').replace('/videos/', '/videos/posters/')
)

onMounted(() => {
  if (!videoRef.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()

        nextTick(() => {
          const video = videoRef.value
          if (!video) return
          video.load()
          video.play().catch(() => {})
        })
      }
    },
    { rootMargin: '200px' }
  )

  observer.observe(videoRef.value)

  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <video
    ref="videoRef"
    loop
    muted
    playsinline
    preload="none"
    :poster="posterSrc"
  >
    <template v-if="isVisible">
      <source :src="webmSrc" type="video/webm" />
      <source :src="src" type="video/mp4" />
    </template>
  </video>
</template>
