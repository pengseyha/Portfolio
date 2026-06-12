<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    value: string;
    duration?: number;
  }>(),
  {
    duration: 1200,
  },
);

const match = props.value.match(/^(\d+)(.*)$/);
const display = ref(match ? `0${match[2]}` : props.value);
const root = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;
let frame: number | undefined;

const animate = () => {
  if (!match) return;
  const target = Number(match[1]);
  const suffix = match[2];
  const start = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - start) / props.duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    display.value = `${Math.round(target * eased)}${suffix}`;
    if (progress < 1) frame = requestAnimationFrame(step);
  };

  frame = requestAnimationFrame(step);
};

onMounted(() => {
  if (!match || !root.value) return;

  if (!("IntersectionObserver" in window)) {
    animate();
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animate();
        observer?.disconnect();
      }
    },
    { threshold: 0.4 },
  );
  observer.observe(root.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  if (frame) cancelAnimationFrame(frame);
});
</script>

<template>
  <span ref="root">{{ display }}</span>
</template>
