<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string;
    size?: number;
    variant?: "chip" | "badge" | "icon";
  }>(),
  {
    size: 16,
    variant: "icon",
  },
);
</script>

<template>
  <span
    v-if="variant === 'chip'"
    class="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface px-3 py-1 text-xs font-semibold text-body"
  >
    <TechIcon :name="name" :size="14" variant="icon" />
    {{ name }}
  </span>

  <span
    v-else-if="variant === 'badge'"
    class="inline-flex items-center gap-2 rounded-2xl border border-border/70 bg-surface px-3 py-2 text-sm font-semibold text-body"
  >
    <TechIcon :name="name" :size="18" variant="icon" />
    {{ name }}
  </span>

  <span
    v-else
    aria-hidden="true"
    class="grid shrink-0 place-items-center rounded-lg border border-brand/25 bg-brand-soft font-bold text-brand"
    :style="{ width: `${size}px`, height: `${size}px`, fontSize: `${size * 0.5}px` }"
  >
    {{ name.charAt(0) }}
  </span>
</template>
