<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";

import type { Project } from "@/data/portfolio";

defineProps<{
  project: Project;
  featured?: boolean;
}>();
</script>

<template>
  <article
    class="premium-card group surface-panel flex h-full flex-col overflow-hidden rounded-[24px]"
  >
    <RouterLink
      :to="`/projects/${project.id}`"
      class="image-sheen block overflow-hidden"
      :aria-label="`Open ${project.title}`"
    >
      <img
        :src="project.image"
        :alt="`${project.title} preview`"
        loading="lazy"
        class="aspect-[16/10] w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
      />
    </RouterLink>

    <div class="flex flex-1 flex-col p-5">
      <div class="mb-4 flex items-start justify-between gap-3">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.14em] text-brand">
            {{ project.eyebrow }}
          </p>
          <h3 class="mt-2 text-xl font-black text-display transition-colors group-hover:text-brand">
            {{ project.title }}
          </h3>
        </div>
        <span
          class="rounded-full border border-border bg-background/45 px-3 py-1 text-xs font-bold text-muted"
        >
          {{ project.year }}
        </span>
      </div>

      <p class="line-clamp-2 text-sm leading-7 text-muted">{{ project.summary }}</p>

      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="tech in project.stack.slice(0, featured ? 5 : 3)"
          :key="tech"
          class="rounded-full border border-border bg-background/45 px-3 py-1 text-xs font-bold text-body transition duration-300 hover:border-brand/40 hover:text-display"
        >
          {{ tech }}
        </span>
      </div>

      <RouterLink
        :to="`/projects/${project.id}`"
        class="mt-6 inline-flex items-center gap-2 text-sm font-black text-brand transition-all duration-300 hover:gap-3"
      >
        View case study
        <ArrowUpRight class="h-4 w-4" />
      </RouterLink>
    </div>
  </article>
</template>
