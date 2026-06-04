<script setup lang="ts">
import { ArrowUpRight } from "@lucide/vue";

import type { Contact } from "@/data/portfolio";

defineProps<{
  contact: Contact;
}>();
</script>

<template>
  <a
    :href="contact.href"
    :target="contact.href.startsWith('http') ? '_blank' : undefined"
    rel="noreferrer"
    class="panel group flex items-center justify-between gap-4 p-4"
  >
    <span class="flex min-w-0 items-center gap-3">
      <span class="icon-box">
        <component :is="contact.icon" class="h-5 w-5" />
      </span>
      <span class="min-w-0">
        <span class="eyebrow block text-[10px]">{{ contact.label }}</span>
        <span class="mt-1 block truncate text-sm font-semibold text-foreground">{{
          contact.value
        }}</span>
      </span>
    </span>
    <ArrowUpRight
      class="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  </a>
</template>
