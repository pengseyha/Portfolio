<script setup lang="ts">
import type { SkillCategory } from "@/data/portfolio";

defineProps<{
  category: SkillCategory;
}>();
</script>

<template>
  <div class="premium-card group surface-panel h-full rounded-[24px] p-5">
    <h3 class="text-lg font-black text-display transition-colors group-hover:text-brand">
      {{ category.title }}
    </h3>
    <p class="mt-3 text-sm leading-7 text-muted">{{ category.description }}</p>

    <div class="mt-5 flex flex-wrap gap-2">
      <span
        v-for="skill in category.skills"
        :key="skill"
        class="rounded-full border border-border bg-background/45 px-3 py-1.5 text-xs font-bold text-body transition duration-300 hover:-translate-y-0.5 hover:border-brand/45 hover:text-display"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>
