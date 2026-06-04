<script setup lang="ts">
const navItems = [
  { href: "#projects", label: "PROJECTS" },
  { href: "#skills", label: "SKILLS" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#contact", label: "CONTACT" },
];
</script>

<template>
  <header class="hero-headbar" aria-label="Site header">
    <div class="hero-headbar-left">
      <a href="#home" class="site-mark" aria-label="Peng Seyha home">
        <span>PS</span>
        <strong>Peng Seyha</strong>
      </a>
    </div>

    <nav class="hero-headbar-right" aria-label="Primary navigation">
      <a v-for="item in navItems" :key="item.href" :href="item.href">
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>
