<script setup lang="ts">
import { Menu, X } from "lucide-vue-next";
import { onMounted, onUnmounted, ref } from "vue";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "SOC Platform", href: "/#featured" },
  { label: "Labs", href: "/#labs" },
  { label: "Journey", href: "/#experience" },
];

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 16;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300"
    :class="
      isScrolled || isMenuOpen
        ? 'border-border bg-background/82 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl'
        : 'border-transparent bg-transparent py-5'
    "
  >
    <div class="container-page flex items-center justify-between gap-4">
      <RouterLink
        to="/"
        class="group flex min-w-0 items-center gap-3 text-display"
        aria-label="Peng Seyha home"
        @click="closeMenu"
      >
        <span class="status-dot h-2.5 w-2.5 rounded-full bg-brand"></span>
        <span class="truncate text-sm font-black uppercase tracking-[0.08em] md:text-base">
          Peng Seyha
        </span>
      </RouterLink>

      <nav
        class="hidden items-center gap-1 rounded-full border border-border bg-surface/70 p-1 md:flex"
      >
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="quiet-link rounded-full px-3.5 py-2 text-xs font-bold"
        >
          {{ item.label }}
        </a>
      </nav>

      <a href="/#contact" class="button-primary !hidden px-4 py-2 text-xs lg:!inline-flex">
        Contact
      </a>

      <button
        type="button"
        class="button-secondary h-10 w-10 px-0 md:!hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        aria-label="Toggle navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <X v-if="isMenuOpen" class="h-5 w-5" />
        <Menu v-else class="h-5 w-5" />
      </button>
    </div>

    <nav
      v-show="isMenuOpen"
      id="mobile-navigation"
      class="container-page mt-4 grid gap-2 rounded-3xl border border-border bg-surface-raised p-3 shadow-2xl md:hidden"
    >
      <a
        v-for="item in navItems"
        :key="item.label"
        :href="item.href"
        class="rounded-2xl px-3 py-3 text-sm font-bold text-body transition duration-300 hover:bg-brand-soft hover:text-display"
        @click="closeMenu"
      >
        {{ item.label }}
      </a>
      <a
        href="/#contact"
        class="rounded-2xl bg-brand px-3 py-3 text-center text-sm font-black text-[#03050a]"
        @click="closeMenu"
      >
        Contact
      </a>
    </nav>
  </header>
</template>
