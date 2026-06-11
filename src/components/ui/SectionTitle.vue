<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
  }>(),
  {
    description: undefined,
    align: "left",
  },
);
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'">
    <p class="mb-3 text-xs font-black uppercase tracking-[0.16em] text-brand">{{ eyebrow }}</p>
    <h2 class="max-w-3xl text-4xl font-black leading-tight text-display">{{ title }}</h2>
    <p v-if="description" class="mt-4 text-base leading-8 text-muted md:text-lg">
      {{ description }}
    </p>
  </div>
</template>
