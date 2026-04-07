<script setup lang="ts">
useHead({ title: 'Nuance — Aaron Lee' })
</script>

<template>
  <article class="blog">
    <div class="blog__video">
      <magic-player-provider
        id="blog-nuance-player"
        :options="{
          src: '/videos/nuance_pure.mp4',
          autoplay: true,
          loop: true,
          muted: true,
        }"
      >
        <magic-player-video />
        <magic-player-video-controls />
      </magic-player-provider>
    </div>

    <div class="blog__video blog__video--landscape">
      <magic-player-provider
        id="blog-nuance-mock-call"
        :options="{ src: '/videos/mock_call.mp4', autoplay: true, loop: true, muted: true }"
      >
        <magic-player-video />
        <magic-player-video-controls />
      </magic-player-provider>
    </div>

    <div class="blog__video blog__video--portrait">
      <magic-player-provider
        id="blog-nuance-recent-call"
        :options="{ src: '/videos/recent_call.mp4', autoplay: true, loop: true, muted: true }"
      >
        <magic-player-video />
        <magic-player-video-controls />
      </magic-player-provider>
    </div>

    <div class="blog__video blog__video--portrait">
      <magic-player-provider
        id="blog-nuance-mood-set"
        :options="{ src: '/videos/mood_set.mp4', autoplay: true, loop: true, muted: true }"
      >
        <magic-player-video />
        <magic-player-video-controls />
      </magic-player-provider>
    </div>

    <div class="blog__video blog__video--portrait">
      <magic-player-provider
        id="blog-nuance-home-screen"
        :options="{ src: '/videos/home_screen.mp4', autoplay: true, loop: true, muted: true }"
      >
        <magic-player-video />
        <magic-player-video-controls />
      </magic-player-provider>
    </div>

    <div class="blog__content">
      <h1 class="blog__title">Nuance: Bringing Emotional Context Back to Phone Calls</h1>

      <div class="prose">
        <p>For most people, a phone call is more than just words. It's the pauses, the laughs, the shaky breath before a hard sentence. It's a raised eyebrow, a smile you can hear. These small cues carry huge emotional weight.</p>

        <p>For deaf and hard-of-hearing people—especially when video isn't an option—those cues often disappear.</p>

        <p>Nuance is a mobile calling concept that asks a simple question: what if phone calls for the deaf could feel emotionally rich, not just technically accessible? It pairs live captioning with expressive animation so that conversations don't lose their nuance.</p>

        <h2>The Problem: "I Know What They're Saying, But I Can't Feel How"</h2>

        <p>In our initial research, one pattern kept surfacing: phone calls are a mess for deaf users.</p>

        <p>Even with captioning, many deaf people prefer to push conversations into text or email. It's common to hear:</p>

        <p>"Can we do this over email?"</p>

        <p>Captions solve content but not context. Tone, emotion, and intent get flattened into a scrolling wall of bubbles. You might understand every word, but still miss the feeling behind them.</p>

        <p>Key issues we found:</p>

        <ul>
          <li>People often don't know how to talk to hard-of-hearing callers.</li>
          <li>Current calling apps fall back to texting, flattening emotional nuance.</li>
          <li>Captions alone don't communicate tone, mood, or intention.</li>
          <li>Deaf users report: "I know what they're saying, but I can't feel how they're saying it."</li>
        </ul>

        <p>The core challenge: how do we bring back the emotional cues of an in-person conversation without requiring constant video?</p>

        <h2>Approach: Nuance – Calls with Emotional Context</h2>

        <p>Nuance explores a different kind of accessible calling experience: one where visual design carries the emotional load that audio normally would.</p>

        <p>At its core, Nuance is a mobile calling app that pairs live captioning with an expressive 3D character.</p>

        <p>Instead of relying only on text, Nuance layers multiple visual cues—expression, motion, and color—on top of captions so deaf users can better read the tone of a call.</p>

        <p>Two pillars shape the concept:</p>

        <ul>
          <li>Expressive 3D avatar — AI analyzes the caller's tone and subtle signals (like pacing and emphasis), then animates a 3D character with matching expressions and body language.</li>
          <li>ASL video-to-text-to-speech — Deaf users can sign in ASL. The system translates ASL to text and then to speech, so the person on the other end hears a voiced version of what's being signed.</li>
        </ul>

        <h2>Why Visual Cues Matter</h2>

        <p>Without auditory cues, many deaf people rely heavily on facial expressions and body language to read emotion. In-person, this is intuitive. On a phone call, it's almost entirely missing.</p>

        <p>We explored how visual design could carry those cues:</p>

        <ul>
          <li>Facial expressions — Even rough sketches of faces can instantly communicate emotion. That insight guided the 3D character, which shifts expressions in real time.</li>
          <li>Color as emotion — Color is deeply tied to mood. Nuance uses color shifts and gradients to reinforce what the avatar is feeling—making emotional states easier to parse at a glance.</li>
          <li>Layered cues for clarity — A single signal (like a smile) can be misread. But when facial expression, color, and motion all align, the emotional message becomes clearer and more trustworthy.</li>
        </ul>

        <p>The principle: the more aligned visual cues we layer onto sight—the most engaged sense in this context—the more "real" and legible the conversation becomes.</p>

        <h2>Designing the 3D Character</h2>

        <p>Nuance was built in a three-day design sprint with Jae Sung Park and Uyen Hoang, using Figma, Blender, and After Effects.</p>

        <p>I modeled, rigged, and animated an avatar that could:</p>

        <ul>
          <li>Shift facial expressions based on tone (calm, excited, frustrated, etc.)</li>
          <li>Reflect pacing and emphasis through motion and timing</li>
          <li>Respond to AI-driven emotional analysis, imagining a future where models are better at reading human nuance</li>
        </ul>

        <p>Today's AI isn't perfectly emotionally intelligent—but Nuance is designed as a "future-ready" concept, assuming emotional signal detection will improve over time.</p>

        <h2>Layering Visual Signals: Beyond Just a Face</h2>

        <p>We quickly realized: facial expressions alone aren't enough.</p>

        <p>To create a truly readable conversation, Nuance layers multiple visual signifiers:</p>

        <ul>
          <li>Facial expression — the most direct emotional cue.</li>
          <li>Color states — warm vs cool palettes to hint at mood.</li>
          <li>Subtle motion — how fast or slow the character moves, reflecting energy or calm.</li>
          <li>Caption styling — small changes in weight, spacing, or timing to reflect emphasis.</li>
        </ul>

        <p>Multiple cues mean more clarity. When these elements move together, users can better infer if the caller sounds tired, rushed, joyful, or upset—even without hearing the audio.</p>

        <p>Nuance also gives users control over what colors mean to them, acknowledging that emotional associations with color can be personal and cultural.</p>

        <h2>Interface Snapshots: Reimagining Call History</h2>

        <p>We extended the idea beyond live calls into the broader interface:</p>

        <ul>
          <li>Recent and missed calls — Instead of a plain transcription, call history serves as emotional documentation as well—how the other person sounded throughout the call.</li>
          <li>Simplified home screen — We stripped away unnecessary navigation. In a tool like this, people mainly want to make or receive calls, not dig through menus. Everything essential is consolidated on a single screen.</li>
        </ul>

        <p>The goal: keep the product fast and focused, so emotional context feels like an enhancement—not friction.</p>

        <h2>Reflections: What I Learned</h2>

        <p>Working on Nuance surfaced a few key takeaways:</p>

        <ul>
          <li>Layered cues/signifiers bring clarity — Combining multiple sensory and visual hints can make experiences more understandable and more human. The same logic could apply elsewhere—for example, designing for blind users by layering haptic and auditory cues.</li>
          <li>You don't need to design everything to communicate value — In a tight sprint, it's better to spend 80% of the effort on deeply understanding the problem and exploring divergent directions than on polishing every feature. Nuance's power lies more in its concept than in exhaustive feature coverage.</li>
          <li>We take communication for granted — The project was a reminder that accessibility isn't a "nice-to-have" checkbox—it's a basic human right. Most of us rarely think about all the invisible cues we use to feel understood, until they're gone.</li>
        </ul>

        <p>Nuance is not a finished product; it's a provocation. It imagines a future where assistive tools don't just deliver information, but also restore the emotional texture of human conversation.</p>
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
  max-width: 840px;
  margin-inline: auto;
}

.blog__video {
  width: 100%;
  aspect-ratio: 1 / 1;
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
  max-width: 720px;
}

.blog__title {
  font-size: var(--text-xl);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.02em;
  margin-top: 1.5em;
  margin-bottom: 1em;
}

.blog__video--landscape {
  aspect-ratio: 1920 / 1080;
}

.blog__video--portrait {
  aspect-ratio: 1818 / 1582;
}

</style>
