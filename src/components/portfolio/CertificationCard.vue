<script setup lang="ts">
import { Award, ExternalLink } from "@lucide/vue";

import type { Certification } from "@/data/portfolio";

defineProps<{
  cert: Certification;
}>();
</script>

<template>
  <article class="premium-card flex items-start gap-4">
    <span class="icon-box"><Award class="h-4 w-4" /></span>
    <div class="min-w-0">
      <p class="eyebrow text-[10px]">{{ cert.year }}</p>
      <h3 class="mt-2 text-lg font-semibold text-foreground">{{ cert.title }}</h3>
      <p class="mt-1 text-sm text-muted-foreground">{{ cert.provider }}</p>
      <a
        v-if="cert.url"
        :href="cert.url"
        target="_blank"
        rel="noreferrer"
        class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand"
      >
        View credential <ExternalLink class="h-4 w-4" />
      </a>
      <p v-else class="mt-4 text-sm text-muted-foreground">Credential link available on request.</p>
    </div>
  </article>
</template>
