<template>
  <div class="education-item-wrapper">
    <div class="edu-left">
      <img :src="logo" class="edu-logo" :alt="school" />
      <span class="edu-time">{{ time }}</span>
    </div>
    <div class="edu-right">
      <h3>{{ school }}</h3>
      <p class="edu-degree">{{ degree }}</p>
      <div class="edu-details">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 定义组件接收的参数
defineProps<{
  logo: string;
  school: string;
  time: string;
  degree: string;
}>();
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

.edu-right h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  border: none; /* 去掉可能存在的主题默认下划线 */
}

.edu-degree {
  font-size: 1rem;
  /* 使用 Theme Hope 的主题强调色 */
  color: var(--theme-color, #3eaf7c);
  margin-bottom: 0.8rem;
  font-weight: 500;
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