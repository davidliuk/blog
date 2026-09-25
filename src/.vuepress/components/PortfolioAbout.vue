<template>
  <p class="home-lead">
    I'm an AI systems researcher and software engineer at <strong>{{ profile.current.company }}</strong>
    ({{ profile.current.team }}, {{ city }}), and I collaborate on agent research with
    <strong>{{ profile.research.advisor }}</strong> and
    <a :href="profile.research.organizationUrl" target="_blank" rel="noopener noreferrer"><strong>{{ profile.research.organization }}</strong></a>. My work has
    moved from scientific visualization and distributed tracing to recommendation, agent infrastructure,
    and evaluation. The constant has been making complex systems
    <strong>useful, inspectable, and dependable</strong>.
  </p>

  <div class="home-hero-grid">
    <section class="home-surface-card home-surface-card--story">
      <p class="home-card-eyebrow">How I work</p>
      <h3 class="home-card-title">I'm drawn to the unglamorous middle between prototype and production.</h3>
      <p class="home-card-copy">That middle is evaluation, interfaces, observability, latency budgets, failure handling, and the many small choices that determine whether software holds together. Industry work taught me to care about them; research lets me study them directly.</p>
      <div class="home-tag-row" role="group" aria-label="Primary focus areas">
        <span class="home-tag">AI systems</span>
        <span class="home-tag">Agents &amp; retrieval</span>
        <span class="home-tag">Execution reliability</span>
        <span class="home-tag">Evaluation &amp; infrastructure</span>
      </div>
    </section>

    <!-- Figures follow the résumé's "Research impact & service" section. -->
    <section class="home-surface-card home-surface-card--impact" aria-labelledby="home-impact-label">
      <p id="home-impact-label" class="home-card-eyebrow">Research impact &amp; service</p>
      <dl class="home-story-meta home-story-meta--stack">
        <div class="home-story-meta__item">
          <dt class="home-story-meta__label">Citations</dt>
          <dd><strong>80+ · h-index 3</strong><span class="home-story-meta__note">Google Scholar, Sep 2026</span></dd>
        </div>
        <div class="home-story-meta__item">
          <dt class="home-story-meta__label">Research use</dt>
          <dd><strong>14 papers use, reimplement, compare against, or test components of Graph-of-Skills</strong><span class="home-story-meta__note">Sep 2026</span></dd>
        </div>
        <div class="home-story-meta__item">
          <dt class="home-story-meta__label">Service</dt>
          <dd><strong>Reviewer, ACM CAIS 2026 Workshop AgentSkills</strong></dd>
        </div>
      </dl>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { profile } from "../data/portfolio.js";

const city = computed(() => profile.locationShort.split(",")[0]);
</script>
