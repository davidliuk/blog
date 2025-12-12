<template>
  <div class="education-item-wrapper">
    <div class="edu-left">
      <img :src="logoSrc" class="edu-logo" :alt="school" />
    </div>
    <div class="edu-right">
      <div class="edu-header">
        <h3>{{ school }}</h3>
        <span class="edu-time">{{ time }}</span>
      </div>
      <p class="edu-degree">
        <abbr :title="degreeTitle">{{ degreeAbbr }}</abbr
        ><span v-if="major"> · {{ major }}</span>
      </p>
      <div v-if="gpa || honorBadges.length" class="edu-meta">
        <div v-if="gpa" class="edu-gpa-row">
          <span>GPA: {{ gpa }}</span>
          <Badge v-if="rank" :text="rank" type="tip" vertical="top" />
        </div>
        <div v-if="honorBadges.length" class="edu-honors-row">
          <span v-for="(h, i) in honorBadges" :key="i" class="edu-honor"
            ><Badge :text="h.text" :type="h.type"
          /></span>
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
    type: /Scholarship/i.test(t) ? "warning" : "tip",
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
  gap: 2rem;
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
  flex: 0 0 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.edu-logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin-bottom: 0.5rem;
  /* 确保图片在不同主题下显示正常 */
  background-color: transparent;
  border-radius: 8px;
}

.edu-time {
  font-size: 0.85rem;
  /* 使用 Theme Hope 的次要文本颜色变量 */
  color: var(--text-color-light, #666);
  font-weight: bold;
}

.edu-right {
  flex: 1;
}

.edu-header { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 0.2rem; }

.edu-right h3 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.2rem;
  border: none; /* 去掉可能存在的主题默认下划线 */
}

.edu-degree {
  /* font-size: 1rem; */
  /* 使用 Theme Hope 的主题强调色 */
  color: var(--theme-color, #3eaf7c);
  margin-bottom: 0.3rem;
  font-weight: 500;
}
.edu-degree abbr { text-decoration: underline dotted; cursor: help; position: relative; }
.edu-degree abbr:hover::after {
  content: attr(title);
  position: absolute;
  left: 0;
  top: 120%;
  background: var(--bg-color, #fff);
  color: var(--text-color, #333);
  border: 1px solid var(--border-color, #eaecef);
  border-radius: 6px;
  padding: 6px 8px;
  white-space: nowrap;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  z-index: 10;
}

.edu-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 0.6rem;
}
.edu-gpa-row { display: flex; align-items: center; gap: 8px; font-weight: 600; }
.edu-honors-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  align-items: center;
}
.edu-honor :deep(.badge) {
  margin-right: 4px;
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

  /* 手机端列表左对齐更好看 */
  .edu-details {
    text-align: left;
    display: inline-block;
  }
}
</style>
