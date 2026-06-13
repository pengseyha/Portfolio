<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";

import Footer from "@/components/layout/Footer.vue";

const route = useRoute();
</script>

<template>
  <div class="app-shell min-h-screen bg-background text-body">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <main id="main-content" class="min-h-screen" tabindex="-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </main>
    <Footer />
  </div>
</template>
