<script setup lang="ts">
import { Menu, Moon, Sun, X } from "lucide-vue-next";
import { onMounted, onUnmounted, ref } from "vue";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Labs", href: "/#labs" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const theme = ref<"light" | "dark">("light");

const handleScroll = () => {
  isScrolled.value = window.scrollY > 18;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const applyTheme = (nextTheme: "light" | "dark") => {
  theme.value = nextTheme;
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
};

const toggleTheme = () => {
  applyTheme(theme.value === "dark" ? "light" : "dark");
};

onMounted(() => {
  const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  theme.value = currentTheme;
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
        ? 'border-border/80 bg-background/88 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl'
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
        <span
          class="h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_22px_rgba(55,213,200,0.75)]"
        ></span>
        <span class="truncate text-sm font-bold uppercase md:text-base">Peng Seyha</span>
      </RouterLink>

      <nav
        class="hidden items-center gap-1 rounded-full border border-border/70 bg-surface/65 p-1 md:flex"
      >
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="quiet-link rounded-full px-3.5 py-2 text-xs font-semibold"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-2 md:flex">
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-display transition hover:-translate-y-0.5 hover:border-brand/50"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="theme === 'dark' ? 'Light mode' : 'Dark mode'"
          @click="toggleTheme"
        >
          <Sun v-if="theme === 'dark'" class="h-4 w-4" />
          <Moon v-else class="h-4 w-4" />
        </button>

        <a
          href="/#contact"
          class="hidden rounded-full bg-brand px-4 py-2 text-xs font-bold text-[#071014] transition hover:-translate-y-0.5 hover:bg-brand/90 lg:inline-flex"
        >
          Contact
        </a>
      </div>

      <div class="flex items-center gap-2 md:hidden">
        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-display transition hover:border-brand/50"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <Sun v-if="theme === 'dark'" class="h-4 w-4" />
          <Moon v-else class="h-4 w-4" />
        </button>

        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-display transition hover:border-brand/50"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <X v-if="isMenuOpen" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <nav
      v-show="isMenuOpen"
      id="mobile-navigation"
      class="container-page mt-4 grid gap-2 rounded-2xl border border-border bg-surface-raised p-3 shadow-2xl md:hidden"
    >
      <a
        v-for="item in navItems"
        :key="item.label"
        :href="item.href"
        class="rounded-xl px-3 py-3 text-sm font-semibold text-body transition hover:bg-brand-soft hover:text-display"
        @click="closeMenu"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>
