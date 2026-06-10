<script setup lang="ts">
import { computed } from "vue";
import { Github, Linkedin, Mail, Phone } from "lucide-vue-next";

const props = defineProps<{
  icon: "Github" | "Linkedin" | "Mail" | "Phone";
  label: string;
  url: string;
}>();

const iconComponent = computed(() => {
  const icons = {
    Github,
    Linkedin,
    Mail,
    Phone,
  };

  return icons[props.icon];
});
</script>

<template>
  <a
    :href="url"
    :target="url.startsWith('http') ? '_blank' : undefined"
    :rel="url.startsWith('http') ? 'noopener noreferrer' : undefined"
    class="premium-card surface-panel inline-flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-bold text-display"
  >
    <component :is="iconComponent" class="h-4 w-4 text-brand" />
    <span>{{ label }}</span>
  </a>
</template>
