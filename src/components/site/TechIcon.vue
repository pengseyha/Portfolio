<script setup lang="ts">
import { computed } from "vue";

import jsLogo from "@/assets/logos/javascript.png";
import laravelLogo from "@/assets/logos/laravel.png";

const props = withDefaults(
  defineProps<{
    name: string;
    size?: number;
    variant?: "chip" | "badge" | "icon";
  }>(),
  {
    size: 16,
    variant: "icon",
  },
);

const slugs: Record<string, string> = {
  HTML: "html5",
  CSS: "css3",
  Tailwind: "tailwindcss",
  "Tailwind CSS": "tailwindcss",
  Vue: "vuedotjs",
  Express: "express",
  NestJS: "nestjs",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Linux: "linux",
  Splunk: "splunk",
  pfSense: "pfsense",
  Snort: "snort",
  Sysmon: "windows10",
  VPN: "wireguard",
  PCAP: "wireshark",
  VLAN: "cisco",
};

const localLogos: Record<string, string> = {
  Laravel: laravelLogo,
  JavaScript: jsLogo,
};

const iconSrc = computed(() => {
  if (localLogos[props.name]) return localLogos[props.name];
  if (slugs[props.name]) return `https://cdn.simpleicons.org/${slugs[props.name]}`;
  return "";
});
</script>

<template>
  <span
    v-if="variant === 'chip'"
    class="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
  >
    <TechIcon :name="name" :size="14" variant="icon" />
    {{ name }}
  </span>

  <span
    v-else-if="variant === 'badge'"
    class="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
  >
    <TechIcon :name="name" :size="20" variant="icon" />
    {{ name }}
  </span>

  <img
    v-else-if="iconSrc"
    :src="iconSrc"
    :alt="name"
    :width="size"
    :height="size"
    loading="lazy"
    class="shrink-0 object-contain"
  />

  <span
    v-else
    aria-hidden="true"
    class="grid place-items-center rounded-[5px] bg-brand-soft font-bold text-brand"
    :style="{ width: `${size}px`, height: `${size}px`, fontSize: `${size * 0.55}px` }"
  >
    {{ name.charAt(0) }}
  </span>
</template>
