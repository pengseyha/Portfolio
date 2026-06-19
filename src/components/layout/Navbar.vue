<script setup lang="ts">
import { Menu, Moon, Sun, X } from "lucide-vue-next";
import { onBeforeUnmount, onMounted, ref } from "vue";

const navItems = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Training", href: "/#certifications", id: "certifications" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const theme = ref<"light" | "dark">("dark");
const activeSection = ref<string>("home");

const applyTheme = (nextTheme: "light" | "dark", shouldStore = true) => {
  theme.value = nextTheme;
  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.style.colorScheme = nextTheme;

  if (shouldStore) {
    localStorage.setItem("portfolio-theme", nextTheme);
  }
};

const toggleTheme = () => {
  applyTheme(theme.value === "dark" ? "light" : "dark");
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 16;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

let sectionObserver: IntersectionObserver | null = null;
const setupSectionObserver = () => {
  if (!("IntersectionObserver" in window)) return;

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target.id) {
        activeSection.value = visible.target.id;
      }
    },
    {
      rootMargin: "-40% 0px -50% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    },
  );

  for (const item of navItems) {
    const el = document.getElementById(item.id);
    if (el) sectionObserver.observe(el);
  }
};

onMounted(() => {
  const currentTheme = document.documentElement.dataset.theme;

  if (currentTheme === "light" || currentTheme === "dark") {
    theme.value = currentTheme;
  } else {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    applyTheme(preferredTheme, false);
  }

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  requestAnimationFrame(() => {
    setupSectionObserver();
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  sectionObserver?.disconnect();
});
</script>

<template>
  <header
    class="header-bar pointer-events-none fixed left-0 right-0 top-0 z-50 border-b border-border/80 bg-background/88 px-0 backdrop-blur-xl transition-all duration-300"
    :class="{ 'is-scrolled': isScrolled || isMenuOpen }"
  >
    <div
      class="container-page pointer-events-auto flex items-center justify-between gap-4 transition-all duration-300"
      :class="isScrolled || isMenuOpen ? 'py-2.5' : 'py-3.5'"
    >
      <RouterLink
        to="/#home"
        class="group flex min-w-0 items-center gap-2.5 text-display"
        aria-label="Peng Seyha home"
        @click="closeMenu"
      >
        <span
          class="logo-mark flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-brand text-xs font-bold text-[var(--button-primary-text)] shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          PS
        </span>
        <span class="flex min-w-0 flex-col leading-tight">
          <span
            class="truncate text-sm font-bold transition-colors group-hover:text-brand md:text-base"
          >
            Peng Seyha
          </span>
          <span class="mono hidden text-xs font-medium uppercase text-muted sm:block">
            Cybersecurity · SOC Analyst
          </span>
        </span>
      </RouterLink>

      <nav class="hidden items-center gap-0.5 lg:flex">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="nav-link"
          :class="{ 'is-active': activeSection === item.id }"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-3 lg:flex">
        <button
          type="button"
          class="button-secondary h-9 w-9 px-0"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <Sun v-if="theme === 'dark'" class="h-4 w-4 transition-transform hover:rotate-45" />
          <Moon v-else class="h-4 w-4 transition-transform hover:-rotate-12" />
        </button>
      </div>

      <div class="flex items-center gap-2 lg:hidden">
        <button
          type="button"
          class="button-secondary h-9 w-9 px-0"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        >
          <Sun v-if="theme === 'dark'" class="h-4 w-4" />
          <Moon v-else class="h-4 w-4" />
        </button>

        <button
          type="button"
          class="button-secondary h-9 w-9 px-0"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Transition name="page" mode="out-in">
            <X v-if="isMenuOpen" class="h-5 w-5" />
            <Menu v-else class="h-5 w-5" />
          </Transition>
        </button>
      </div>
    </div>

    <Transition name="page">
      <nav
        v-show="isMenuOpen"
        id="mobile-navigation"
        class="pointer-events-auto border-t border-border bg-background/98 shadow-lg backdrop-blur-xl lg:hidden"
      >
        <div class="container-page grid gap-1 px-4 py-3">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="rounded-xl px-3 py-3 text-sm font-bold text-body transition duration-300 hover:bg-brand-soft hover:text-display"
            :class="{ 'bg-brand-soft text-display': activeSection === item.id }"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </div>
      </nav>
    </Transition>
  </header>
</template>
