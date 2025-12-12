<template>
  <div class="pub-card">
    <div class="pub-head">
      <img v-if="image" :src="imgSrc" class="pub-img" />
    </div>
    <div class="pub-body">
      <h4 class="pub-title">{{ title }}</h4>
      <div class="pub-meta">
        <Badge v-if="venue" :text="venue" type="info" />
        <span v-if="date" class="pub-date">{{ date }}</span>
        <span v-if="formattedAuthors.length" class="pub-authors">
          <template v-for="(a, i) in formattedAuthors" :key="i">
            <span :class="a.isMe ? 'me' : ''">{{ a.text }}</span
            ><span v-if="i < formattedAuthors.length - 1">, </span>
          </template>
        </span>
      </div>
      <div v-if="abstract" class="pub-abs">
        <p :class="{ clamp: !expanded }">{{ abstract }}</p>
      </div>
      <div class="pub-links">
        <div class="pub-links-left">
          <a v-if="paper" :href="paper" target="_blank" rel="noopener">Paper</a>
          <a v-if="github" :href="github" target="_blank" rel="noopener"
            >GitHub</a
          >
          <a
            v-if="website"
            :href="website"
            target="_blank"
            rel="noopener"
            >Website</a
          >
        </div>
        <div class="spacer"></div>
        <div class="pub-links-right">
          <span class="abs-action" @click="expanded = !expanded">{{
            expanded ? "Hide abstract" : "Read more"
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { withBase } from "vuepress/client";

const props = defineProps<{
  title: string;
  image?: string;
  date?: string;
  authors?: string[];
  abstract?: string;
  venue?: string;
  paper?: string;
  github?: string;
  website?: string;
}>();

const expanded = ref(false);
const formattedAuthors = computed(() => {
  const list = props.authors ?? [];
  return list.map((t) => ({ text: t, isMe: /Dawei\s+Liu/i.test(t) }));
});
const imgSrc = computed(() => {
  if (!props.image) return "";
  if (/^(https?:)?\/\//.test(props.image) || props.image.startsWith("data:")) return props.image;
  return withBase(props.image);
});
</script>

<style scoped>
.pub-abs {
  position: relative;
}
.pub-abs p {
  margin: 0 0 6px 0;
}
.pub-abs p.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.pub-links {
  display: flex;
  align-items: center;
  gap: 10px;
}
.pub-links-left a {
  margin-right: 10px;
}
.spacer {
  flex: 1;
}
.abs-action {
  color: var(--theme-color, #096dd9);
  font-weight: 600;
  cursor: pointer;
}
</style>
