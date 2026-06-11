<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    href?: string;
    to?: string;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";
  }>(),
  {
    href: undefined,
    to: undefined,
    type: "button",
    variant: "primary",
  },
);

const component = computed(() => {
  if (props.to) return "RouterLink";
  if (props.href) return "a";
  return "button";
});

const variantClass = computed(() =>
  props.variant === "secondary" ? "button-secondary" : "button-primary",
);
</script>

<template>
  <component
    :is="component"
    :href="href"
    :to="to"
    :type="!href && !to ? type : undefined"
    :class="variantClass"
  >
    <slot></slot>
  </component>
</template>
