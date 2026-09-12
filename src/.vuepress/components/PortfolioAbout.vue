<template>
  <p class="home-lead">
    I am an AI systems researcher and software engineer at <strong>{{ profile.current.company }}</strong>
    ({{ profile.current.team }}, {{ city }}) and a collaborator with
    <strong>{{ profile.research.advisor }}'s LAIR</strong>. From scientific visualization and
    distributed tracing to recommendation and agent infrastructure, the constant has been making
    complex technology <strong>useful, inspectable, and dependable</strong>.
  </p>

  <div class="home-hero-grid">
    <section class="home-surface-card home-surface-card--story">
      <p class="home-card-eyebrow">The throughline</p>
      <h3 class="home-card-title">Research ideas become valuable when people can actually use and improve them.</h3>
      <p class="home-card-copy">I enjoy the unglamorous middle between a promising prototype and a dependable system: evaluation, interfaces, observability, latency, failure handling, and the thousand small decisions that make software hold together. That mindset now shapes my work on agent skill retrieval, reliable execution, and AI-native research workflows.</p>
      <div class="home-tag-row" role="group" aria-label="Primary focus areas">
        <span class="home-tag">Tool-using agents</span>
        <span class="home-tag">Skill retrieval</span>
        <span class="home-tag">Execution reliability</span>
        <span class="home-tag">Open infrastructure</span>
      </div>
      <div class="home-story-meta" role="group" aria-label="Current profile highlights">
        <div class="home-story-meta__item">
          <span class="home-story-meta__label">Based in</span>
          <strong>{{ profile.location }}</strong>
        </div>
        <div class="home-story-meta__item">
          <span class="home-story-meta__label">Current chapter</span>
          <strong>{{ profile.current.company }} + LAIR ({{ profile.research.organization }})</strong>
        </div>
      </div>
    </section>

    <section class="home-surface-card home-surface-card--focus">
      <p class="home-card-eyebrow">What I'm working toward</p>
      <ol class="home-steps">
        <li><span class="home-index">01</span><div><strong>Select the right skills</strong><p>Help agents pick a complete, dependency-aware bundle without loading an entire library into context.</p></div></li>
        <li><span class="home-index">02</span><div><strong>Validate and recover</strong><p>Make tool execution easier to check, diagnose, and repair when something goes wrong.</p></div></li>
        <li><span class="home-index">03</span><div><strong>Ship it in the open</strong><p>Release reproducible code, evaluations, and research artifacts that others can adapt.</p></div></li>
      </ol>
      <div class="home-story-meta" role="group" aria-label="Research impact and service">
        <div class="home-story-meta__item"><span class="home-story-meta__label">Citations</span><strong>80+ · h-index 3 <span class="home-story-meta__note">(Google Scholar, Sep 2026)</span></strong></div>
        <div class="home-story-meta__item"><span class="home-story-meta__label">Service</span><strong>Reviewer, ACM CAIS Workshop AgentSkills 2026</strong></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { profile } from "../data/portfolio.js";

const city = computed(() => profile.locationShort.split(",")[0]);
</script>
