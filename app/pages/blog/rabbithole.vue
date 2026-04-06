<script setup lang="ts">
useHead({ title: 'Rabbithole — Aaron Lee' })
</script>

<template>
  <article class="blog">
    <div class="blog__video">
      <magic-player-provider
        id="blog-rabbithole-player"
        :options="{
          src: '/videos/rabbithole.mp4',
          autoplay: true,
          loop: true,
          muted: true,
        }"
      >
        <magic-player-video />
      </magic-player-provider>
    </div>

    <div class="blog__content">
      <h1 class="blog__title">Rabbithole: A Spatial Search System for Divergent Thinking</h1>

      <div class="prose">
        <p>When we're in a creative rabbit hole, search tools don't really keep up.</p>

        <p>Tabs pile up. Links get buried. Threads of thought that felt exciting five minutes ago are suddenly impossible to retrace. Most search interfaces are designed for precision and efficiency—type a query, get a ranked list, click a result—but not for the messy, branching, non-linear way creative research actually happens.</p>

        <p>Rabbithole is an experiment in what search could look like if it were designed for exploration instead of just retrieval: a spatial search system that helps people follow their curiosity, diverge boldly, and still find their way back.</p>

        <h2>The Problem: Getting Lost in Exploration</h2>

        <p>Creative research rarely moves in a straight line. One article becomes three, one reference becomes a dozen open tabs, and soon you're juggling:</p>

        <ul>
          <li>Half-read sources you don't want to close yet</li>
          <li>Tangents that might be useful later</li>
          <li>A vague mental map of how everything connects</li>
        </ul>

        <p>Traditional search and browser UIs flatten all of this into lists and stacks. It's easy to jump into a new idea, but hard to see where you've been. The more you explore, the more cognitive overhead it takes to maintain context.</p>

        <p>Rabbithole started from a simple question: what if search results lived in space instead of in a list?</p>

        <h2>Concept: Search as a Spatial Canvas</h2>

        <p>In Rabbithole, results don't just appear linearly—they populate a spatial canvas. Each query becomes a cluster of cards you can move, group, and reorient. You're not just clicking links; you're physically shaping a landscape of ideas.</p>

        <p>The core principles:</p>

        <ul>
          <li>Spatial memory over tab chaos</li>
          <li>Divergence without fear of losing context</li>
          <li>Context through proximity and motion</li>
        </ul>

        <p>By placing results in specific locations, you build a visual map of your thinking. You remember "that article on the top-left cluster" instead of "one of my 27 tabs." New branches of exploration can spin off into their own neighborhoods while your original line of thought stays anchored where you left it. Ideas that feel related can literally sit closer together, and motion reinforces those relationships, helping you understand not just what you found, but how you got there.</p>

        <h2>Designing the Interaction</h2>

        <p>Rabbithole was designed in a three-day sprint with Teri Shim and Lauryn Kinsella, using Figma for interaction design and After Effects for motion studies.</p>

        <p>We focused on a few key flows:</p>

        <ul>
          <li>The moment where a search query blooms into spatially arranged results instead of a stacked list</li>
          <li>How a user "dives" deeper into one result, then peels off into related queries without breaking the overall spatial logic</li>
          <li>How clusters form and reorganize as the user follows different threads of thought</li>
        </ul>

        <p>Motion plays a central role. Transitions communicate cause and effect: which results came from which query, which direction a branch of exploration is heading, and how clusters evolve over time.</p>

        <h2>Why Spatial?</h2>

        <p>Spatial interfaces tap into how we already remember and reason about information in the real world. We recall where something was in a room, not just what it was called. By giving abstract search results a spatial home, Rabbithole aims to reduce the mental load of keeping a complex research session in your head.</p>

        <p>For creative work, that matters. When the interface supports divergence, you're more willing to chase the weird tangent, save the odd reference, and let connections emerge over time.</p>

        <h2>Reflections and Next Steps</h2>

        <p>Rabbithole isn't a finished product; it's a design provocation about how we might rethink search for creative workflows. Future explorations could include:</p>

        <ul>
          <li>Collaborative spatial canvases for shared research</li>
          <li>AI-assisted clustering and labeling of idea neighborhoods</li>
          <li>Cross-session memory, letting your past research landscapes become reusable worlds of references</li>
        </ul>

        <p>For now, Rabbithole is a snapshot from a rapid sprint—a small step toward tools that feel less like filing cabinets and more like studios for thought.</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.blog {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-inline: var(--page-padding);
  padding-bottom: 6rem;
  max-width: 720px;
  margin-inline: auto;
}

.blog__video {
  width: 100%;
  aspect-ratio: 2256 / 1464;
  border-radius: 8px;
  overflow: hidden;
  background-color: #000;
}

.blog__video :deep(.magic-player-provider) {
  width: 100%;
  height: 100%;
}

.blog__video :deep(video) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.blog__content {
  width: 100%;
}

.blog__title {
  font-size: var(--text-xl);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.02em;
  margin-top: 1.5em;
  margin-bottom: 1em;
}

</style>
