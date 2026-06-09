<script setup lang="ts">
import { Activity, FileSearch, ShieldCheck } from "lucide-vue-next";

import { featuredProject } from "@/data/portfolio";

const workflow = [
  {
    label: "Collect",
    detail: "Alerts and logs",
    icon: Activity,
  },
  {
    label: "Investigate",
    detail: "Severity and context",
    icon: FileSearch,
  },
  {
    label: "Document",
    detail: "Notes and next action",
    icon: ShieldCheck,
  },
];
</script>

<template>
  <aside class="surface-panel overflow-hidden rounded-3xl">
    <div class="border-b border-border/70 p-5">
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="text-xs font-bold uppercase text-brand">Featured system</p>
          <h2 class="mt-2 text-2xl font-extrabold text-display">{{ featuredProject.title }}</h2>
        </div>
        <span
          class="rounded-full border border-brand/35 bg-brand-soft px-3 py-1 text-xs font-bold text-brand"
        >
          {{ featuredProject.type }}
        </span>
      </div>
      <p class="mt-4 text-sm leading-7 text-muted">
        A focused SOC workflow for alerts, IOCs, MITRE mapping, and incident notes.
      </p>
    </div>

    <div class="p-5">
      <div class="grid gap-3">
        <div
          v-for="item in workflow"
          :key="item.label"
          class="flex gap-4 rounded-2xl border border-border/70 bg-background/40 p-4"
        >
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand"
          >
            <component :is="item.icon" class="h-5 w-5" />
          </div>
          <div>
            <p class="font-bold text-display">{{ item.label }}</p>
            <p class="mt-1 text-sm text-muted">{{ item.detail }}</p>
          </div>
        </div>
      </div>

      <div class="mt-5 rounded-2xl border border-border/70 bg-surface p-4">
        <p class="text-xs font-bold uppercase text-muted">System flow</p>
        <div class="mt-4 grid gap-3 text-sm text-body">
          <div
            v-for="step in featuredProject.architecture.slice(0, 3)"
            :key="step"
            class="flex items-start gap-3"
          >
            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"></span>
            <span>{{ step }}</span>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
