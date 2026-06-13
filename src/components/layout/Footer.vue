<script setup lang="ts">
import { portfolioData } from "@/data/portfolio";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-border/70 bg-background py-6">
    <div class="container-page">
      <div
        class="flex flex-col gap-3 text-xs text-muted md:flex-row md:items-center md:justify-between"
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
