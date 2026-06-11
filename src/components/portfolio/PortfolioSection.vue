<script setup lang="ts">
import SectionTitle from "@/components/ui/SectionTitle.vue";

withDefaults(
  defineProps<{
    id: string;
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
  }>(),
  {
    align: "left",
    description: undefined,
  },
);
</script>

<template>
  <section :id="id" class="scroll-mt-24 border-t border-border py-16 md:py-24">
    <div class="container-page">
      <div
        class="mb-12"
        :class="align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'"
      >
        <SectionTitle :eyebrow="eyebrow" :title="title" :description="description" :align="align" />
      </div>

      <slot></slot>
    </div>
  </section>
</template>
