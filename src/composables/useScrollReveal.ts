import { onBeforeUnmount, onMounted, ref, type Ref } from "vue";

interface UseScrollRevealOptions {
  once?: boolean;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useScrollReveal = (
  target: Ref<HTMLElement | null>,
  { once = true, rootMargin = "0px 0px -12% 0px", threshold = 0.12 }: UseScrollRevealOptions = {},
) => {
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!target.value) return;

    if (!("IntersectionObserver" in window)) {
      isVisible.value = true;
      return;
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        isVisible.value = entry.isIntersecting;

        if (entry.isIntersecting && once) {
          observer?.disconnect();
        }
      },
      {
        rootMargin,
        threshold,
      },
    );

    observer.observe(target.value);
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  return {
    isVisible,
  };
};
