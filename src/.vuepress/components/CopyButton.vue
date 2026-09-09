<template>
  <button
    type="button"
    class="copy-button"
    :class="[
      `copy-button--${size}`,
      { 'copy-button--done': done, 'copy-button--primary': primary },
    ]"
    :title="done ? doneLabel : title || label"
    @click="copy"
  >
    <span class="copy-button__icon" aria-hidden="true">
      <svg v-if="!done" viewBox="0 0 16 16" width="14" height="14">
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linejoin="round"
          d="M5.5 5.5V3.25c0-.69.56-1.25 1.25-1.25h5c.69 0 1.25.56 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25H9.5M3.25 5.5h5c.69 0 1.25.56 1.25 1.25v5c0 .69-.56 1.25-1.25 1.25h-5C2.56 13 2 12.44 2 11.75v-5c0-.69.56-1.25 1.25-1.25Z"
        />
      </svg>
      <svg v-else viewBox="0 0 16 16" width="14" height="14">
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 8.4 6.4 11.7 13 4.8"
        />
      </svg>
    </span>
    <span class="copy-button__text">{{ done ? doneLabel : label }}</span>
    <!-- The visible label already changes; the live region makes sure the
         change is announced even by readers that do not re-read the name. -->
    <span class="copy-button__live" role="status" aria-live="polite">{{ done ? doneLabel : "" }}</span>
  </button>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from "vue";

const props = withDefaults(
  defineProps<{
    /** Text placed on the clipboard. */
    text: string;
    /** Resting label. */
    label?: string;
    /** Label shown (and announced) for ~1.8s after a successful copy. */
    doneLabel?: string;
    /** Tooltip; falls back to `label`. */
    title?: string;
    /** Filled accent button instead of the neutral chip. */
    primary?: boolean;
    /** `sm` matches the publication-card actions; `md` matches `.home-action`. */
    size?: "sm" | "md";
  }>(),
  { label: "Copy", doneLabel: "Copied", title: "", primary: false, size: "md" },
);

const done = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

async function copy(): Promise<void> {
  const ok = await writeClipboard(props.text);
  if (!ok) return;
  done.value = true;
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    done.value = false;
  }, 1800);
}

async function writeClipboard(value: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch {
    // Permission denied or insecure context: fall through to the legacy path.
  }
  try {
    const area = document.createElement("textarea");
    area.value = value;
    area.setAttribute("readonly", "");
    area.setAttribute("aria-hidden", "true");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    return ok;
  } catch {
    return false;
  }
}

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer);
});
</script>

<style scoped>
.copy-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.42rem;
  box-sizing: border-box;
  height: var(--dl-button-h, 2.5rem);
  padding: 0 0.95rem;
  border: 1px solid var(--dl-border);
  border-radius: 999px;
  background: var(--dl-chip);
  color: var(--vp-c-text-1);
  font: inherit;
  font-size: var(--home-type-meta, 0.9rem);
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;
}

.copy-button--sm {
  padding: 0 0.82rem;
}

.copy-button--primary {
  border-color: var(--dl-accent-line-strong);
  background: var(--vp-c-accent);
  color: var(--vp-c-accent-text, #fff);
}

.copy-button--done {
  border-color: var(--dl-accent-line-strong);
  background: var(--dl-accent-soft);
  color: var(--dl-accent-text, color-mix(in srgb, var(--vp-c-accent) 72%, var(--dl-ink)));
}

.copy-button--primary.copy-button--done {
  background: var(--vp-c-accent);
  color: var(--vp-c-accent-text, #fff);
}

/* Lift only for a real pointer; touch gets the pressed state below. */
@media (hover: hover) and (pointer: fine) {
  .copy-button:hover {
    transform: translateY(-1px);
    border-color: var(--dl-accent-line-strong);
    box-shadow: var(--dl-shadow-1);
  }

  .copy-button--primary:hover {
    background: var(--vp-c-accent-hover, var(--vp-c-accent));
  }
}

.copy-button:active {
  transform: translateY(0) scale(0.985);
  box-shadow: none;
  transition-duration: 0.08s;
}

.copy-button:focus-visible {
  outline: 2px solid var(--vp-c-accent);
  outline-offset: 2px;
}

.copy-button__icon {
  display: inline-flex;
  flex-shrink: 0;
}

.copy-button__live {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
}

@media (max-width: 719px) {
  .copy-button {
    height: auto;
    min-height: 2.75rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .copy-button {
    transition: none;
  }
}
</style>
