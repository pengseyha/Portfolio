<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    as?: string;
    delay?: number;
    distance?: "sm" | "md" | "lg";
    once?: boolean;
  }>(),
  {
    as: "div",
    delay: 0,
    distance: "md",
    once: true,
  },
);

const root = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!root.value) return;

  if (!("IntersectionObserver" in window)) {
    isVisible.value = true;
    return;
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry) return;

      isVisible.value = entry.isIntersecting;

      if (entry.isIntersecting && props.once) {
        observer?.disconnect();
      }
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
    },
  );

  observer.observe(root.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<template>
  <component
    :is="as"
    ref="root"
    class="reveal-on-scroll"
    :class="[`reveal-${distance}`, { 'is-visible': isVisible }]"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot></slot>
  </component>
</template>
