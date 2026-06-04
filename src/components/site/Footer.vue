<script setup lang="ts">
import { Briefcase, GitBranch } from "@lucide/vue";

const year = new Date().getFullYear();

const socials = [
  { href: "https://github.com/pengseyha", label: "GitHub", icon: GitBranch },
  {
    href: "https://www.linkedin.com/in/peng-seyha-725ba7298/",
    label: "LinkedIn",
    icon: Briefcase,
  },
];
</script>

<template>
  <footer class="border-t border-border bg-background">
    <div class="page-shell flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="text-sm font-semibold text-foreground">Peng Seyha</p>
        <p class="mt-1 text-sm text-muted-foreground">Phnom Penh, Cambodia · &copy; {{ year }}</p>
      </div>
      <div class="flex gap-2">
        <a
          v-for="item in socials"
          :key="item.label"
          :href="item.href"
          :target="item.href.startsWith('http') ? '_blank' : undefined"
          rel="noreferrer"
          :aria-label="item.label"
          class="grid h-9 w-9 place-items-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
        >
          <component :is="item.icon" class="h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
</template>
