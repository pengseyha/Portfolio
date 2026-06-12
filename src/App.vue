<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";

import Footer from "@/components/layout/Footer.vue";

const route = useRoute();

function handlePointerMove(event: PointerEvent) {
  document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
  document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);

  const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
    ".card, .premium-card, .glow-border",
  );
  if (!target) return;

  const rect = target.getBoundingClientRect();
  target.style.setProperty("--x", `${event.clientX - rect.left}px`);
  target.style.setProperty("--y", `${event.clientY - rect.top}px`);
}

onMounted(() => {
  window.addEventListener("pointermove", handlePointerMove, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("pointermove", handlePointerMove);
});
</script>

<template>
  <div class="app-shell min-h-screen bg-background text-body">
    <div class="cursor-spotlight" aria-hidden="true"></div>
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
