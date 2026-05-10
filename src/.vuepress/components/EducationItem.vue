<template>
  <div class="education-item-wrapper">
    <div class="edu-left">
      <img :src="logoSrc" class="edu-logo" :alt="school" />
    </div>
    <div class="edu-right">
      <div class="edu-header">
        <div>
          <p class="edu-kicker">Education</p>
          <h3>{{ school }}</h3>
        </div>
        <span class="edu-time">{{ time }}</span>
      </div>
      <div class="edu-degree-line" :aria-label="degree">
        <span class="edu-degree-abbr">{{ degreeAbbr }}</span>
        <span class="edu-degree-copy">
          <span class="edu-degree-title">{{ degreeTitle }}</span>
          <span v-if="major" class="edu-degree-separator" aria-hidden="true">/</span>
          <span v-if="major" class="edu-degree-major">{{ major }}</span>
        </span>
      </div>
      <div v-if="gpa || honorBadges.length" class="edu-meta">
        <div v-if="gpa" class="edu-gpa-row">
          <span class="edu-gpa-label">GPA</span>
          <strong>{{ gpa }}</strong>
          <Badge v-if="rank" :text="rank" type="tip" vertical="top" />
        </div>
        <div v-if="honorBadges.length" class="edu-honors-row">
          <span
            v-for="(h, i) in honorBadges"
            :key="i"
            class="edu-honor"
            :class="`edu-honor--${h.type}`"
          >
            {{ h.text }}
          </span>
        </div>
      </div>
      <div class="edu-details">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vuepress/client";

const props = defineProps<{
  logo: string;
  school: string;
  time: string;
  degree: string;
  gpa?: string;
  honors?: string[];
  major?: string;
  rank?: string;
}>();

const honorBadges = computed(() => {
  return (props.honors ?? []).map((t) => ({
    text: t,
    type: /Merit.based Scholarship|Outstanding Student/i.test(t) ? "annual" : /Scholarship/i.test(t) ? "scholarship" : "honor",
  }));
});

const degreeAbbr = computed(() => {
  if (/M\.?S\.?E/i.test(props.degree) || /\bMSE\b/i.test(props.degree))
    return "M.S.E.";
  if (/B\.?E/i.test(props.degree) || /\bBE\b/i.test(props.degree)) return "B.E.";
  return props.degree;
});

const degreeTitle = computed(() => {
  if (degreeAbbr.value === "M.S.E.") return "Master of Science in Engineering";
  if (degreeAbbr.value === "B.E.") return "Bachelor of Engineering";
  return props.degree;
});

const major = computed(() => {
  if (props.major) return props.major;
  const m = props.degree.match(/in\s+(.+)/i);
  return m ? m[1] : "";
});

const logoSrc = computed(() => {
  if (!props.logo) return "";
  if (/^(https?:)?\/\//.test(props.logo) || props.logo.startsWith("data:")) return props.logo;
  return withBase(props.logo);
});
</script>

<style scoped>
/* 我们将原来的 .edu-item 改名为 .education-item-wrapper
  并加上了 scoped 属性，确保样式只在这个组件内生效，不污染全局
*/
.education-item-wrapper {
  display: flex;
  gap: 1.35rem;
  align-items: flex-start;
  padding-bottom: 2rem;
  margin-bottom: 2rem; /* 用 margin 代替原来的 gap */
  /* 使用 Theme Hope 自带的边框变量，自动适配深色模式 */
  border-bottom: 1px solid var(--border-color, #eaecef);
}

/* 巧妙的 CSS 选择器：
  当多个 EducationItem 连续出现时，
  这一条规则会去掉最后一个组件底部的边框和外边距 
*/
.education-item-wrapper:last-of-type {
  border-bottom: none;
  margin-bottom: 0;
}

.edu-left {
  flex: 0 0 132px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.edu-logo {
  width: 108px;
  height: 108px;
  object-fit: contain;
  margin-bottom: 0.5rem;
  /* 确保图片在不同主题下显示正常 */
  background-color: transparent;
  border-radius: 8px;
}

.edu-time {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0.28rem 0.72rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 88%, transparent);
  background: color-mix(in srgb, var(--vp-c-bg) 94%, transparent);
  color: var(--vp-c-text-2);
  font-size: 0.82rem;
  font-weight: 700;
  white-space: nowrap;
}

.edu-right {
  flex: 1;
}

.edu-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.8rem;
}

.edu-kicker {
  margin: 0 0 0.18rem;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
}

.edu-right h3 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: clamp(1.16rem, 2vw, 1.35rem);
  line-height: 1.22;
  letter-spacing: -0.025em;
  border: none; /* 去掉可能存在的主题默认下划线 */
}

.edu-degree-line {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.48rem 0.62rem;
  max-width: 100%;
  margin: 0 0 0.75rem;
  color: var(--vp-c-text-2);
}

.edu-degree-abbr {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.72rem;
  padding: 0.16rem 0.58rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--vp-c-accent) 22%, var(--vp-c-divider));
  background: color-mix(in srgb, var(--vp-c-accent-soft) 54%, var(--vp-c-bg));
  color: var(--vp-c-accent);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.edu-degree-copy {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
  min-width: 0;
  font-size: 0.94rem;
  line-height: 1.5;
}

.edu-degree-title {
  color: var(--vp-c-text-1);
  font-weight: 680;
}

.edu-degree-separator,
.edu-degree-major {
  color: var(--vp-c-text-2);
}

.edu-degree-separator {
  opacity: 0.5;
}

.edu-meta {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 0.1rem;
}
.edu-gpa-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}
.edu-gpa-label {
  display: inline-flex;
  align-items: center;
  min-height: 1.75rem;
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 90%, transparent);
  color: var(--vp-c-text-3);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.edu-honors-row {
  display: flex;
  gap: 0.48rem;
  flex-wrap: wrap;
  align-items: center;
}
.edu-honor {
  display: inline-flex;
  align-items: center;
  min-height: 1.9rem;
  padding: 0.24rem 0.68rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 88%, transparent);
  background: color-mix(in srgb, var(--vp-c-bg-soft) 88%, var(--vp-c-bg));
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  font-weight: 650;
  line-height: 1.2;
}
.edu-honor--scholarship,
.edu-honor--annual {
  border-color: color-mix(in srgb, #d29922 32%, var(--vp-c-divider));
  background: color-mix(in srgb, #f9d66d 16%, var(--vp-c-bg));
  color: color-mix(in srgb, #8a5f00 80%, var(--vp-c-text-1));
}
.edu-honor--annual::after {
  content: "Awarded Annually";
  margin-left: 0.42rem;
  padding-left: 0.42rem;
  border-left: 1px solid color-mix(in srgb, #d29922 36%, transparent);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.82;
}

/* 针对插槽内容的样式优化 */
.edu-details :deep(ul) {
  margin: 0;
  padding-left: 1.2rem;
}

.edu-details :deep(li) {
  margin-bottom: 0.25rem;
  line-height: 1.6;
}

/* 手机端适配 */
@media (max-width: 768px) {
  .education-item-wrapper {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
  }

  .edu-left {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    align-items: center;
  }

  .edu-logo {
    width: 60px; /* 手机端缩小 Logo */
    height: 60px;
    margin-bottom: 0;
  }

  .edu-right {
    width: 100%;
  }

  .edu-header,
  .edu-degree-line,
  .edu-gpa-row,
  .edu-honors-row {
    justify-content: center;
  }

  .edu-header {
    flex-direction: column;
    align-items: center;
  }

  .edu-degree-copy {
    text-align: center;
  }

  /* 手机端列表左对齐更好看 */
  .edu-details {
    text-align: left;
    display: inline-block;
  }
}
</style>
