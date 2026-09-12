<template>
  <div class="home-connect-panel">
    <p class="home-connect">
      I'm glad to hear from researchers and engineers working on <strong>agent reliability</strong>,
      <strong>skill retrieval</strong>, <strong>research automation</strong>, or
      <strong>AI systems at production scale</strong>, and from teams building something where the
      demo is the easy part. Email is the fastest way to reach me.
    </p>
    <div class="home-connect-actions">
      <a class="home-action home-action--primary no-external-link-icon" :href="profile.email">Email me</a>
      <CopyButton
        :text="emailAddress"
        label="Copy address"
        done-label="Address copied"
        :title="`Copy ${emailAddress}`"
      />
      <a class="home-action" :href="socialLinks.LinkedIn" target="_blank" rel="me noopener noreferrer">LinkedIn</a>
      <a class="home-action" :href="socialLinks.GitHub" target="_blank" rel="me noopener noreferrer">GitHub</a>
    </div>
    <p class="home-connect__email">{{ emailAddress }}</p>
    <nav id="academic-profiles" class="home-profile-row" aria-label="Academic profiles">
      <span class="home-profile-row__label">Research profiles</span>
      <div class="home-tag-row">
        <a
          v-for="link in academicLinks"
          :key="link.label"
          class="home-tag home-tag--link"
          :href="link.href"
          target="_blank"
          rel="me noopener noreferrer"
        >{{ link.label }}</a>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { profile, socialLinks } from "../data/portfolio.js";
import CopyButton from "./CopyButton.vue";

const emailAddress = computed(() => profile.email.replace(/^mailto:/u, ""));
const academicLinks = [
  { label: "Google Scholar", href: socialLinks["Google Scholar"] },
  { label: "Semantic Scholar", href: socialLinks["Semantic Scholar"] },
  { label: "OpenReview", href: socialLinks.OpenReview },
  { label: "DBLP", href: socialLinks.DBLP },
];
</script>
