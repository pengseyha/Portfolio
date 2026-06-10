<script setup lang="ts">
import { Activity, FileSearch, ShieldCheck } from "lucide-vue-next";

const metrics = [
  { label: "Open alerts", value: "12" },
  { label: "IOC matches", value: "34" },
  { label: "Mapped tactics", value: "7" },
];

const alerts = [
  { name: "Suspicious login pattern", level: "High", status: "Investigating" },
  { name: "Port scan activity", level: "Medium", status: "Mapped" },
  { name: "Repeated auth failure", level: "Medium", status: "Queued" },
];

const workflow = [
  { label: "Collect", icon: Activity },
  { label: "Triage", icon: FileSearch },
  { label: "Report", icon: ShieldCheck },
];
</script>

<template>
  <aside class="surface-panel blue-ring animate-orbit-soft overflow-hidden rounded-[28px]">
    <div class="border-b border-border p-5">
      <div class="flex items-center justify-between gap-4">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">SOC Platform</p>
          <h2 class="mt-2 text-2xl font-black text-display">Cyber Shield Checker</h2>
        </div>
        <span class="badge">Active build</span>
      </div>
    </div>

    <div class="grid gap-3 p-4 sm:grid-cols-3">
      <div
        v-for="metric in metrics"
        :key="metric.label"
        class="rounded-2xl border border-border bg-background/45 p-4"
      >
        <p class="text-[11px] font-black uppercase tracking-[0.12em] text-muted">
          {{ metric.label }}
        </p>
        <p class="mt-2 text-2xl font-black text-display">{{ metric.value }}</p>
      </div>
    </div>

    <div class="px-4 pb-4">
      <div class="rounded-2xl border border-border bg-background/45 p-3">
        <div class="mb-3 flex items-center justify-between">
          <p class="text-xs font-black uppercase tracking-[0.16em] text-muted">Alert Queue</p>
          <span class="text-xs font-bold text-brand">MITRE mapped</span>
        </div>

        <div class="space-y-2">
          <div
            v-for="alert in alerts"
            :key="alert.name"
            class="grid grid-cols-[1fr_auto] gap-3 rounded-xl border border-border bg-surface/70 p-3"
          >
            <div>
              <p class="text-sm font-bold text-display">{{ alert.name }}</p>
              <p class="mt-1 text-xs text-muted">{{ alert.status }}</p>
            </div>
            <span
              class="self-start rounded-full border border-border px-2 py-1 text-[11px] font-black"
              :class="alert.level === 'High' ? 'text-brand' : 'text-muted'"
            >
              {{ alert.level }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-3 border-t border-border p-4 sm:grid-cols-3">
      <div
        v-for="step in workflow"
        :key="step.label"
        class="flex items-center gap-3 rounded-2xl border border-border bg-background/35 p-3"
      >
        <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
          <component :is="step.icon" class="h-4 w-4" />
        </div>
        <p class="text-sm font-black text-display">{{ step.label }}</p>
      </div>
    </div>
  </aside>
</template>
