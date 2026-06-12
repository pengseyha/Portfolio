<script setup lang="ts">
import { ArrowLeft, Search, ShieldAlert } from "lucide-vue-next";

import Navbar from "@/components/layout/Navbar.vue";

const logLines = [
  { text: "$ curl -I https://portfolio.local/route", tone: "muted" },
  { text: "[WARN] 404 — requested resource not found", tone: "alert" },
  { text: "[INFO] Logging access attempt for review", tone: "body" },
  { text: "[OK] Redirect suggestions ready", tone: "ok" },
];
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navbar />

    <section class="relative overflow-hidden pt-24">
      <div class="grid-fade" aria-hidden="true"></div>
      <div class="glow-orb -left-24 top-32 h-72 w-72 bg-brand/15" aria-hidden="true"></div>
      <div class="glow-orb right-0 top-10 h-80 w-80 bg-accent-cyan/10" aria-hidden="true"></div>

      <div
        class="container-page relative z-1 flex min-h-[calc(100vh-6rem)] items-center justify-center py-16"
      >
        <div class="grid w-full max-w-4xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div class="text-center lg:text-left">
            <p class="section-kicker justify-center lg:justify-start">
              <ShieldAlert class="h-4 w-4" />
              Error 404 — Access Denied
            </p>
            <h1 class="mono mt-4 text-6xl font-extrabold tracking-tight text-display sm:text-7xl">
              404<span class="blink-cursor"></span>
            </h1>
            <h2 class="mt-4 text-2xl font-bold text-display md:text-3xl">
              This route isn&apos;t in the ruleset.
            </h2>
            <p class="mx-auto mt-4 max-w-md leading-8 text-muted lg:mx-0">
              The page you requested doesn&apos;t exist or may have been moved. The case studies,
              skills, and contact details are all reachable from the homepage.
            </p>

            <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <RouterLink to="/" class="button-primary w-full sm:w-auto">
                <ArrowLeft class="h-4 w-4" />
                Back to homepage
              </RouterLink>
              <RouterLink to="/#projects" class="button-secondary w-full sm:w-auto">
                <Search class="h-4 w-4" />
                View projects
              </RouterLink>
            </div>
          </div>

          <div class="spotlight-ring">
            <div class="card overflow-hidden">
              <div class="flex items-center justify-between border-b border-border px-4 py-2.5">
                <div class="flex items-center gap-1.5" aria-hidden="true">
                  <span class="h-2.5 w-2.5 rounded-full bg-red-400/70"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-amber-400/70"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/70"></span>
                </div>
                <span class="mono flex items-center gap-1.5 text-xs text-muted">
                  <span class="status-dot h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  access.log
                </span>
              </div>
              <div class="mono space-y-2 p-5 text-xs leading-6">
                <p
                  v-for="(line, index) in logLines"
                  :key="line.text"
                  class="animate-reveal-up truncate"
                  :class="{
                    'text-muted': line.tone === 'muted',
                    'text-body': line.tone === 'body',
                    'text-amber-500': line.tone === 'alert',
                    'text-emerald-500': line.tone === 'ok',
                  }"
                  :style="{ animationDelay: `${150 + index * 180}ms` }"
                >
                  {{ line.text }}
                </p>
                <p class="text-brand">
                  <span class="blink-cursor"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
