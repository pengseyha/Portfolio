<script setup lang="ts">
import { RouterView } from "vue-router";

import Footer from "@/components/site/Footer.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col bg-background text-foreground">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <main id="main-content" class="flex-1 animate-fade-in" tabindex="-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
