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
    class="group surface-panel flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-brand/45"
  >
    <RouterLink
      :to="`/projects/${project.id}`"
      class="block overflow-hidden"
      :aria-label="`Open ${project.title}`"
    >
      <img
        :src="project.image"
        :alt="`${project.title} preview`"
        loading="lazy"
        class="aspect-[16/10] w-full object-cover opacity-82 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
      />
    </RouterLink>

    <div class="flex flex-1 flex-col p-5 md:p-6">
      <div class="mb-4 flex items-start justify-between gap-3">
        <div>
          <p class="text-xs font-bold uppercase text-brand">{{ project.eyebrow }}</p>
          <h3 class="mt-2 text-xl font-extrabold text-display">{{ project.title }}</h3>
        </div>
        <span
          class="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted"
        >
          {{ project.year }}
        </span>
      </div>

      <p class="text-sm leading-7 text-muted">{{ project.summary }}</p>

      <div class="mt-5 grid grid-cols-3 gap-2">
        <div
          v-for="metric in project.metrics"
          :key="metric.label"
          class="rounded-xl border border-border/70 bg-background/45 p-3"
        >
          <p class="text-[11px] font-semibold uppercase text-muted">{{ metric.label }}</p>
          <p class="mt-1 text-sm font-bold text-display">{{ metric.value }}</p>
        </div>
      </div>

      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="tech in project.stack.slice(0, featured ? 5 : 4)"
          :key="tech"
          class="rounded-full border border-border/70 bg-surface px-3 py-1 text-xs font-semibold text-body"
        >
          {{ tech }}
        </span>
      </div>

      <RouterLink
        :to="`/projects/${project.id}`"
        class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand transition hover:gap-3"
      >
        View case study
        <ArrowUpRight class="h-4 w-4" />
      </RouterLink>
    </div>
  </article>
</template>
