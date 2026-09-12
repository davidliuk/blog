<script setup lang="ts">
import { onMounted } from "vue";
import { NotFound } from "vuepress-theme-hope/client";

onMounted(() => {
  const legacyPrefix = "/blog";
  if (
    window.location.pathname !== legacyPrefix &&
    !window.location.pathname.startsWith(`${legacyPrefix}/`)
  ) {
    return;
  }

  const targetPath = window.location.pathname.slice(legacyPrefix.length) || "/";
  window.location.replace(`${targetPath}${window.location.search}${window.location.hash}`);
});
</script>

<template>
  <NotFound />
</template>
