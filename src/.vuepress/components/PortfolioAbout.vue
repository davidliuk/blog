<template>
  <p class="home-lead">
    I am an AI systems researcher and software engineer at <strong>{{ profile.current.company }}</strong>
    ({{ profile.current.team }}, {{ city }}) and a collaborator with
    <strong>{{ profile.research.advisor }}'s LAIR</strong>. My work sits between research and
    production: from scientific visualization and distributed tracing to recommendation, agent
    infrastructure, and evaluation, the constant has been making complex systems
    <strong>useful, inspectable, and dependable</strong>.
  </p>

  <div class="home-hero-grid">
    <section class="home-surface-card home-surface-card--story">
      <p class="home-card-eyebrow">The throughline</p>
      <h3 class="home-card-title">The point is not just to show that a system can work, but to make it usable, auditable, and extensible.</h3>
      <p class="home-card-copy">I enjoy the unglamorous middle between a promising prototype and a dependable system: evaluation, interfaces, observability, latency, failure handling, and the thousand small decisions that make software hold together. That mindset now shapes my work on agent retrieval, reliable execution, AI-assisted engineering workflows, and open research infrastructure, where I try to leave behind not just papers but systems, benchmarks, and artifacts other people can actually use.</p>
      <div class="home-tag-row" role="group" aria-label="Primary focus areas">
        <span class="home-tag">AI systems</span>
        <span class="home-tag">Agents &amp; retrieval</span>
        <span class="home-tag">Execution reliability</span>
        <span class="home-tag">Evaluation &amp; infrastructure</span>
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
        <li><span class="home-index">01</span><div><strong>Retrieve the right capabilities</strong><p>Help models and agents work with smaller, more complete context bundles instead of brute-force loading.</p></div></li>
        <li><span class="home-index">02</span><div><strong>Make execution trustworthy</strong><p>Build evaluation, validation, observability, and recovery into the loop so systems can survive real use.</p></div></li>
        <li><span class="home-index">03</span><div><strong>Leave behind usable artifacts</strong><p>Release code, benchmarks, papers, and workflows that other researchers and engineers can build on.</p></div></li>
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
