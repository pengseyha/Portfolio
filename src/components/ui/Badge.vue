<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string;
    variant?: "default" | "muted";
  }>(),
  {
    as: "span",
    variant: "default",
  },
);
</script>

<template>
  <component
    :is="as"
    :class="
      variant === 'muted'
        ? 'rounded-full border border-border bg-background/45 px-3 py-1 text-xs font-bold text-muted'
        : 'badge'
    "
  >
    <slot></slot>
  </component>
</template>
