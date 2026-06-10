<script setup lang="ts">
import { Award } from "lucide-vue-next";

import type { Certification } from "@/data/portfolio";

defineProps<{
  certification: Certification;
}>();
</script>

<template>
  <article class="premium-card group surface-panel flex h-full gap-4 rounded-lg p-5">
    <div
      class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand"
    >
      <Award class="h-5 w-5" />
    </div>

    <div>
      <div class="flex flex-wrap items-center gap-2">
        <h3 class="font-black text-display transition-colors group-hover:text-brand">
          {{ certification.title }}
        </h3>
        <span
          class="rounded-full border border-border bg-background/45 px-2 py-0.5 text-[11px] font-bold text-muted"
        >
          {{ certification.year }}
        </span>
      </div>
      <p class="mt-1 text-sm font-semibold text-body">{{ certification.provider }}</p>
      <p class="mt-3 text-sm leading-6 text-muted">{{ certification.focus }}</p>
    </div>
  </article>
</template>
