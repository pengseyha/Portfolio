<script setup lang="ts">
import { Github, Linkedin, Mail } from "lucide-vue-next";

import { portfolioData } from "@/data/portfolio";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-border/70 bg-background py-10">
    <div class="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="text-sm font-semibold text-display">{{ portfolioData.identity.name }}</p>
        <p class="mt-1 max-w-xl text-sm text-muted">
          Cybersecurity student focused on SOC operations, security labs, and secure systems.
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-3 text-sm text-muted">
        <a
          :href="portfolioData.contact.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="quiet-link inline-flex items-center gap-2"
        >
          <Github class="h-4 w-4" />
          GitHub
        </a>
        <a
          :href="portfolioData.contact.linkedinUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="quiet-link inline-flex items-center gap-2"
        >
          <Linkedin class="h-4 w-4" />
          LinkedIn
        </a>
        <a
          :href="`mailto:${portfolioData.contact.email}`"
          class="quiet-link inline-flex items-center gap-2"
        >
          <Mail class="h-4 w-4" />
          Email
        </a>
      </div>
    </div>

    <div class="container-page mt-8 border-t border-border/60 pt-6 text-xs text-muted">
      © {{ year }} {{ portfolioData.identity.name }}. Built as a focused cybersecurity portfolio.
    </div>
  </footer>
</template>
