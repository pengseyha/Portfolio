<script setup lang="ts">
import { ref } from "vue";

import { useScrollReveal } from "@/composables/useScrollReveal";

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
const { isVisible } = useScrollReveal(root, {
  once: props.once,
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
