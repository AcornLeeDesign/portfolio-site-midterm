<script setup lang="ts">
useHead({ title: 'About — Aaron Lee' })
</script>

<template>
  <section class="about">
    <div class="about__bio">
      <p>Aaron Lee is a Product Designer and digital artist based in LA and SF. He's passionate about visual craft, the intersection of design and engineering, psychology (particularly conceptual models), and systems design. God designed him with fingers and so his fingers will be designing too.</p>
      <p>Incoming Product Design Intern @ DoorDash</p>
    </div>
    <div class="about__spacer" />
  </section>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100svh - 72px);
  padding-inline: var(--page-padding);
}

.about__spacer {
  height: 72px;
}

.about__bio {
  max-width: 480px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-text);
}

.about__bio p + p {
  margin-top: 1em;
}
</style>
