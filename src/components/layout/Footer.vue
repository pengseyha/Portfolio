<script setup lang="ts">
import { Github, Linkedin, Mail, Send } from "lucide-vue-next";

import { portfolioData } from "@/data/portfolio";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-border/70 bg-background py-12">
    <div class="container-page">
      <div class="card overflow-hidden p-6 md:p-8">
        <div class="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Cyber Shield Labs
            </p>
            <h2 class="mt-3 text-2xl font-bold text-display md:text-3xl">by Peng Seyha</h2>
            <p class="mt-2 text-sm font-semibold text-display">SOC Analyst Aspirant</p>
            <p class="mt-3 max-w-xl text-sm leading-7 text-muted">
              Monitoring • Detection • Response
            </p>
            <p class="mt-4 max-w-xl text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Current Focus: Threat Hunting • SIEM • Incident Response
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3 text-sm text-muted">
            <a
              :href="portfolioData.contact.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="button-secondary px-3 py-2 text-xs"
            >
              <Github class="h-4 w-4" />
              GitHub
            </a>
            <a
              :href="portfolioData.contact.linkedinUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="button-secondary px-3 py-2 text-xs"
            >
              <Linkedin class="h-4 w-4" />
              LinkedIn
            </a>
            <a
              :href="`mailto:${portfolioData.contact.email}`"
              class="button-secondary px-3 py-2 text-xs"
            >
              <Mail class="h-4 w-4" />
              Email
            </a>
            <a
              :href="portfolioData.contact.telegramUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="button-secondary px-3 py-2 text-xs"
            >
              <Send class="h-4 w-4" />
              Telegram
            </a>
          </div>
        </div>
      </div>

      <div
        class="mt-8 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between"
      >
        <p>
          © {{ year }} {{ portfolioData.identity.name }}. Built as a focused cybersecurity
          portfolio.
        </p>
        <p>Security labs, product thinking, and analyst-ready documentation.</p>
      </div>
    </div>
  </footer>
</template>
