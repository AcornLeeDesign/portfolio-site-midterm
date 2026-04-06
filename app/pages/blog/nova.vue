<script setup lang="ts">
useHead({ title: 'Designing Nova — Aaron Lee' })
</script>

<template>
  <article class="blog">
    <div class="blog__video">
      <magic-player-provider
        id="blog-nova-player"
        :options="{
          src: '/videos/nova_practice_V.mp4',
          autoplay: true,
          loop: true,
          muted: true,
        }"
      >
        <magic-player-video />
        <magic-player-video-controls />
      </magic-player-provider>
    </div>

    <div class="blog__content">
      <h1 class="blog__title">Nova: Offline AI Learning for Schools Without Internet</h1>

      <div class="prose">
        <p>In many schools in South Sudan and Tanzania, "computer lab" is just a label on a door. Inside, there are no computers, no reliable internet, and not nearly enough learning materials. Teachers are understaffed, curriculums keep changing, and fewer than 10% of students make it to college.</p>

        <p>Nova started from this gap: how do you bring quality, up-to-date learning resources and AI-powered support to students and teachers when there's no internet at all?</p>

        <p>Nova is an offline learning platform that broadcasts a local intranet. Nearby devices can connect to it and access a curriculum-trained AI tutor, interactive content, and a searchable offline library—all without touching the public internet.</p>

        <h2>The Problem: A "Computer Lab" With No Computers</h2>

        <p>During early visits and conversations with our nonprofit partner LetAllGirls, a few realities became clear:</p>

        <ul>
          <li>A "computer lab" was literally an empty room collecting dust. There was no connectivity.</li>
          <li>Teachers were trying to serve classes of ~50 students with limited materials.</li>
          <li>Government curriculums were changing, but teachers struggled to create new quizzes and materials to match.</li>
          <li>Internet connections were so unreliable that students would borrow teachers' phones just to Google something, if they were lucky.</li>
        </ul>

        <p>Even where offline databases existed, they felt unusable: dated content, disorganized hyperlink dumps, and navigation patterns that didn't match local needs or culture. Students were curious and motivated, but the tools around them didn't support independent exploration.</p>

        <p>The core question became: how can we give both students and teachers high-quality, current, and explorable learning resources with zero dependence on an external network?</p>

        <h2>Approach: Nova – An Offline Learning Platform</h2>

        <p>Nova is a small device that creates a local network in and around a school. Any nearby phone, tablet, or computer can connect to Nova's intranet and access:</p>

        <ul>
          <li>A curriculum-trained AI tutor for students</li>
          <li>A quiz maker to help teachers keep up with new government syllabi</li>
          <li>Curriculum-based interactive practice quizzes</li>
          <li>PhET-style simulation labs for "hands-on" science without equipment costs</li>
          <li>A searchable digital library instead of a messy hyperlink archive</li>
        </ul>

        <p>Under the hood, Nova runs on extremely low-cost, custom-built offline hardware. That meant every design decision had to respect edge computing constraints: minimal compute, limited memory, and no cloud.</p>

        <p>Despite that, the goal wasn't just to replicate a web of static PDFs. It was to create an explorable offline learning environment that feels modern, responsive, and aligned with the way teachers and students actually work.</p>

        <h2>Addressing the Gap: Why Existing Solutions Fell Short</h2>

        <p>We studied both online and offline offerings in this space and found consistent gaps:</p>

        <ul>
          <li>Online-only solutions — Assume always-on internet and personal devices at home. Are often impossible to deploy in remote or under-resourced regions.</li>
          <li>Offline solutions — Ship large, outdated content dumps. Offer clunky navigation and hyperlink trees that bury useful material. Rarely align with local curriculum or culture.</li>
        </ul>

        <p>The result: students and teachers had "resources" in theory, but in practice, they were hard to use and easy to ignore. Nova aimed to fix this by:</p>

        <ul>
          <li>Making materials curriculum-aligned and locally relevant.</li>
          <li>Designing a clean, searchable library instead of throwing links in folders.</li>
          <li>Emphasizing experiences that reward curiosity rather than punishing it with dead ends and slow load times.</li>
        </ul>

        <h2>Designing Under Technical Constraints</h2>

        <p>As designers, our first instinct was to imagine the ideal platform: rich visuals, endless context for AI, full interactivity. The hardware quickly reminded us of reality.</p>

        <p>On-device edge computing meant:</p>

        <ul>
          <li>The LLM had very limited context tokens.</li>
          <li>We couldn't afford to send the entire conversation history with every prompt.</li>
          <li>Latency spikes would directly discourage students from asking follow-up questions.</li>
        </ul>

        <p>Initially, this translated into a frustrating pattern: students would need to hit "new chat" every few prompts to avoid timeouts or failures. That broke the flow of learning and punished deeper inquiry.</p>

        <p>Working closely with the lead engineer, we inverted the problem: instead of forcing users to manage tokens, we redesigned the backend.</p>

        <p>We introduced:</p>

        <ul>
          <li>A "dumb" relevance-checking AI — A lightweight model with lower compute cost. Its job: scan stored conversation chunks and decide which parts are still relevant to the latest question. Only the relevant slices get passed to the main LLM, keeping context tight and latency low.</li>
        </ul>

        <p>This small architectural decision dramatically improved the experience. Students could continue a conversation with the AI tutor without constantly resetting, turning a hard technical constraint into a UX opportunity.</p>

        <h2>Designing With Cultural Context</h2>

        <p>Another constraint wasn't technical—it was cultural.</p>

        <p>We knew that:</p>

        <ul>
          <li>Digital literacy levels varied widely.</li>
          <li>Interface patterns common in Silicon Valley weren't common in rural East Africa.</li>
        </ul>

        <p>Rather than invent a brand-new visual language, we leaned into existing habits. Across ages, WhatsApp was familiar and widely used. That gave us a pattern library to borrow from:</p>

        <ul>
          <li>Familiar chat-like layouts</li>
          <li>Iconography and interaction flows that felt intuitive on day one</li>
          <li>Reduced learning curve so attention goes to the content, not the interface</li>
        </ul>

        <p>By mirroring elements of WhatsApp's mental model, Nova could feel both approachable and "native" to how people already used phones in their daily lives.</p>

        <h2>From Concept to Deployment</h2>

        <p>Despite the constraints, Nova moved from idea to deployment:</p>

        <ul>
          <li>Shipped to South Sudan and Tanzania — Deployed to 2 schools and 1 library serving high school students.</li>
          <li>50+ connected devices — Nova can support over fifty devices at once on its offline intranet.</li>
          <li>100+ learning resources — Curated, open educational content made available offline.</li>
          <li>Locally run AI tutor — Trained on their curriculum and remotely updateable when partners can sync content.</li>
        </ul>

        <p>Due to time and ownership transitions, we had to hand off software to our partner organization before collecting long-term data—but even early usage signaled that there was a real appetite for independent, curiosity-driven learning.</p>

        <h2>Reflections: What I Learned</h2>

        <p>Working as Founding Product Design Lead on Nova surfaced a few durable lessons:</p>

        <ul>
          <li>Ask the "dumb" questions — Teams often unconsciously build invisible walls around what's "possible." By questioning assumptions—technical, cultural, or organizational—you uncover more flexible constraints and better solutions.</li>
          <li>Think with the tech, not around it — Instead of treating hardware limits as a brick wall, we used them as a design material. Partnering closely with engineers led directly to ideas like the relevance-checking AI, which improved UX without adding more compute.</li>
          <li>Match, don't overwrite, existing structures — Teachers were already stretched thin updating syllabi and trying to meet new standards. Nova focused on integrating into their workflows, not forcing them to reinvent how they teach.</li>
          <li>Documentation is part of design — Making, taking, and sharing notes on everything from LLM behavior to stakeholder needs kept the whole team aligned. In long, complex projects, this kind of documentation is a design artifact in its own right.</li>
        </ul>

        <p>Nova is ultimately a bet: that even in places with no internet and limited hardware, students deserve more than static textbooks and dusty labs. With the right combination of offline infrastructure, AI, and culturally grounded design, we can make independent learning feel both possible and exciting—even when the rest of the world assumes you're offline.</p>
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
  aspect-ratio: 1588 / 1288;
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

.blog__video :deep(.magic-player-video-controls) {
  opacity: 0;
  transition: opacity 250ms ease;
}

.blog__video:hover :deep(.magic-player-video-controls) {
  opacity: 1;
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
