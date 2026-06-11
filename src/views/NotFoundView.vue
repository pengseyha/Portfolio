<script setup lang="ts">
import { ArrowLeft } from "lucide-vue-next";

import Navbar from "@/components/layout/Navbar.vue";
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navbar />

    <section class="container-page flex min-h-screen items-center justify-center py-24 text-center">
      <div class="max-w-xl">
        <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">404</p>
        <h1 class="mt-4 text-5xl font-black leading-tight text-display">Page not found</h1>
        <p class="mt-5 leading-8 text-muted">
          This page does not exist, but the portfolio case studies and contact details are available
          from the homepage.
        </p>
        <RouterLink to="/" class="button-primary mt-8">
          <ArrowLeft class="h-4 w-4" />
          Back home
        </RouterLink>
      </div>
    </section>
  </div>
</template>
