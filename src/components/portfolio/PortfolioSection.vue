<script setup lang="ts">
defineProps<{
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  muted?: boolean;
}>();
</script>

<template>
  <section :id="id" class="section" :class="{ 'section-muted': muted }">
    <div class="page-shell">
      <div class="section-header">
        <p class="eyebrow">{{ eyebrow }}</p>
        <h2 class="section-title">{{ title }}</h2>
        <p v-if="description" class="section-copy">{{ description }}</p>
      </div>
      <slot />
    </div>
  </section>
</template>
