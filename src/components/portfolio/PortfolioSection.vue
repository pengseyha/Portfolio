<script setup lang="ts">
withDefaults(
  defineProps<{
    id: string;
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
  }>(),
  {
    align: "left",
    description: undefined,
  },
);
</script>

<template>
  <section :id="id" class="scroll-mt-24 border-t border-border/55 py-20 md:py-24">
    <div class="container-page">
      <div
        class="mb-10 md:mb-14"
        :class="align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'"
      >
        <p class="mb-3 text-xs font-bold uppercase text-brand">{{ eyebrow }}</p>
        <h2 class="text-3xl font-extrabold text-display md:text-5xl">{{ title }}</h2>
        <p v-if="description" class="mt-5 text-base leading-8 text-muted md:text-lg">
          {{ description }}
        </p>
      </div>

      <slot></slot>
    </div>
  </section>
</template>
