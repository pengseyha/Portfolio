<script setup lang="ts">
import type { SkillCategory } from "@/data/portfolio";

defineProps<{
  category: SkillCategory;
}>();
</script>

<template>
  <div
    class="surface-panel h-full rounded-2xl p-5 transition duration-300 hover:border-brand/40 md:p-6"
  >
    <h3 class="text-lg font-extrabold text-display">{{ category.title }}</h3>
    <p class="mt-3 text-sm leading-7 text-muted">{{ category.description }}</p>

    <div class="mt-5 flex flex-wrap gap-2">
      <span
        v-for="skill in category.skills"
        :key="skill"
        class="rounded-full border border-border/70 bg-background/40 px-3 py-1.5 text-xs font-semibold text-body transition hover:border-brand/45 hover:text-display"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>
