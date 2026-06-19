<script setup lang="ts">
import { ArrowLeft, ArrowUp, ArrowUpRight, CheckCircle2, Github } from "lucide-vue-next";
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

import Navbar from "@/components/layout/Navbar.vue";
import RevealOnScroll from "@/components/layout/RevealOnScroll.vue";
import AnimatedCounter from "@/components/ui/AnimatedCounter.vue";
import { getProjectById, portfolioData } from "@/data/portfolio";

const route = useRoute();
const project = computed(() => getProjectById(String(route.params.id)));

const relatedProjects = computed(() =>
  portfolioData.projects.filter((item) => item.id !== project.value?.id).slice(0, 3),
);

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "challenge-solution", label: "Challenge & Solution" },
  { id: "architecture", label: "Tech & Architecture" },
  { id: "details", label: "Features & Lessons" },
  { id: "related", label: "Related Projects" },
];

const activeSection = ref(tocSections[0].id);
const showBackToTop = ref(false);
let sectionObserver: IntersectionObserver | null = null;

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 480;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const setupSectionObserver = () => {
  sectionObserver?.disconnect();
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
    { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
  );

  for (const section of tocSections) {
    const el = document.getElementById(section.id);
    if (el) sectionObserver.observe(el);
  }
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
  nextTick(() => requestAnimationFrame(setupSectionObserver));
});

watch(
  () => project.value?.id,
  () => {
    activeSection.value = tocSections[0].id;
    nextTick(() => requestAnimationFrame(setupSectionObserver));
  },
);

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  sectionObserver?.disconnect();
});
</script>

<template>
  <div class="min-h-screen bg-background">
    <Navbar />

    <section v-if="project" class="pb-16 pt-24 md:pb-24">
      <div class="container-page">
        <RouterLink
          to="/#projects"
          class="quiet-link mb-8 inline-flex items-center gap-2 text-sm font-bold"
        >
          <ArrowLeft class="h-4 w-4" />
          Back to case files
        </RouterLink>

        <div class="lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:items-start lg:gap-10">
          <aside class="hidden lg:sticky lg:top-28 lg:block">
            <p class="px-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              On this page
            </p>
            <nav class="mt-3 flex flex-col gap-1">
              <a
                v-for="section in tocSections"
                :key="section.id"
                :href="`#${section.id}`"
                class="toc-link"
                :class="{ 'is-active': activeSection === section.id }"
              >
                {{ section.label }}
              </a>
            </nav>
          </aside>

          <div class="space-y-12">
            <section id="overview" class="scroll-mt-28">
              <RevealOnScroll class="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                  <p class="section-kicker">{{ project.eyebrow }}</p>
                  <h1 class="mt-4 text-4xl font-bold leading-tight text-display md:text-5xl">
                    {{ project.title }}
                  </h1>
                  <p class="mt-6 text-lg leading-8 text-muted">{{ project.summary }}</p>

                  <div class="mt-8 flex flex-wrap gap-3">
                    <a
                      v-if="project.githubUrl"
                      :href="project.githubUrl"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="button-primary"
                    >
                      <Github class="h-4 w-4" />
                      View repository
                    </a>
                    <a v-if="project.reportUrl" :href="project.reportUrl" class="button-secondary">
                      Read report
                      <ArrowUpRight class="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div class="card overflow-hidden">
                  <img
                    :src="project.image"
                    :alt="`${project.title} case study preview`"
                    class="aspect-16/11 w-full object-cover"
                  />
                </div>
              </RevealOnScroll>

              <div class="mt-12 grid gap-4 md:grid-cols-3">
                <RevealOnScroll
                  v-for="(metric, index) in project.metrics"
                  :key="metric.label"
                  :delay="index * 70"
                  class="card p-6"
                >
                  <p class="text-xs font-medium uppercase tracking-widest text-muted">
                    {{ metric.label }}
                  </p>
                  <p class="mt-2 text-2xl font-bold text-display">
                    <AnimatedCounter :value="metric.value" />
                  </p>
                </RevealOnScroll>
              </div>
            </section>

            <section id="challenge-solution" class="scroll-mt-28 grid gap-6 lg:grid-cols-2">
              <RevealOnScroll as="article" class="card p-6 md:p-8">
                <p class="section-kicker">Challenge</p>
                <h2 class="mt-3 text-2xl font-bold text-display">What needed to be solved</h2>
                <p class="mt-5 leading-8 text-muted">{{ project.challenge }}</p>
              </RevealOnScroll>

              <RevealOnScroll as="article" class="card p-6 md:p-8" :delay="90">
                <p class="section-kicker">Solution</p>
                <h2 class="mt-3 text-2xl font-bold text-display">How I approached it</h2>
                <p class="mt-5 leading-8 text-muted">{{ project.solution }}</p>
              </RevealOnScroll>
            </section>

            <section id="architecture" class="scroll-mt-28 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <RevealOnScroll class="card p-6 md:p-8">
                <p class="section-kicker">Technologies</p>
                <div class="mt-5 flex flex-wrap gap-2">
                  <span v-for="tech in project.stack" :key="tech" class="tag">
                    {{ tech }}
                  </span>
                </div>

                <template v-if="project.skillsProved">
                  <p class="section-kicker mt-8">Skills Proved</p>
                  <div class="mt-3 flex flex-wrap gap-2">
                    <span
                      v-for="skill in project.skillsProved"
                      :key="skill"
                      class="inline-flex items-center rounded-full border border-brand/25 bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand"
                    >
                      {{ skill }}
                    </span>
                  </div>
                </template>

                <p class="section-kicker mt-8">Role</p>
                <p class="mt-3 leading-7 text-muted">{{ project.role }}</p>
              </RevealOnScroll>

              <RevealOnScroll class="card p-6 md:p-8" :delay="90">
                <p class="section-kicker">Architecture</p>
                <h2 class="mt-3 text-2xl font-bold text-display">System flow</h2>

                <div class="mt-6 grid gap-4">
                  <div v-for="(step, index) in project.architecture" :key="step" class="flex gap-4">
                    <span
                      class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-sm font-semibold text-brand"
                    >
                      {{ index + 1 }}
                    </span>
                    <p class="pt-1 text-sm leading-7 text-muted">{{ step }}</p>
                  </div>
                </div>
              </RevealOnScroll>
            </section>

            <section id="details" class="scroll-mt-28 grid gap-6 lg:grid-cols-3">
              <RevealOnScroll as="article" class="card p-6">
                <p class="section-kicker">Features</p>
                <ul class="mt-5 space-y-3">
                  <li
                    v-for="feature in project.features"
                    :key="feature"
                    class="flex gap-3 text-sm text-muted"
                  >
                    <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {{ feature }}
                  </li>
                </ul>
              </RevealOnScroll>

              <RevealOnScroll as="article" class="card p-6" :delay="80">
                <p class="section-kicker">Lessons learned</p>
                <ul class="mt-5 space-y-3">
                  <li
                    v-for="lesson in project.lessons"
                    :key="lesson"
                    class="flex gap-3 text-sm text-muted"
                  >
                    <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {{ lesson }}
                  </li>
                </ul>
              </RevealOnScroll>

              <RevealOnScroll as="article" class="card p-6" :delay="160">
                <p class="section-kicker">Next steps</p>
                <ul class="mt-5 space-y-3">
                  <li
                    v-for="step in project.nextSteps"
                    :key="step"
                    class="flex gap-3 text-sm text-muted"
                  >
                    <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {{ step }}
                  </li>
                </ul>
              </RevealOnScroll>
            </section>

            <section id="related" class="scroll-mt-28">
              <p class="section-kicker">Related Projects</p>
              <h2 class="mt-3 text-2xl font-bold text-display">Explore more case files</h2>

              <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <RevealOnScroll
                  v-for="(related, index) in relatedProjects"
                  :key="related.id"
                  :delay="index * 70"
                >
                  <RouterLink
                    :to="`/projects/${related.id}`"
                    class="card group flex h-full flex-col overflow-hidden"
                  >
                    <div class="relative aspect-16/10 overflow-hidden border-b border-border">
                      <img
                        :src="related.image"
                        :alt="`${related.title} preview`"
                        loading="lazy"
                        class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                      />
                    </div>
                    <div class="flex flex-1 flex-col p-5">
                      <p class="mono text-xs text-brand">{{ related.eyebrow }}</p>
                      <h3 class="mt-1.5 text-base font-bold leading-tight text-display">
                        {{ related.title }}
                      </h3>
                      <p class="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                        {{ related.summary }}
                      </p>
                      <span
                        class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                      >
                        Explore
                        <ArrowUpRight class="h-4 w-4" />
                      </span>
                    </div>
                  </RouterLink>
                </RevealOnScroll>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>

    <section
      v-else
      class="container-page flex min-h-[70vh] items-center justify-center pt-24 text-center"
    >
      <div>
        <p class="section-kicker mx-auto justify-center">Project not found</p>
        <h1 class="mt-4 text-4xl font-bold leading-tight text-display md:text-5xl">
          This case study is not available.
        </h1>
        <RouterLink to="/#projects" class="button-primary mt-8"> Back to case files </RouterLink>
      </div>
    </section>

    <button
      type="button"
      class="back-to-top h-11 w-11"
      :class="{ 'is-visible': showBackToTop }"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      <ArrowUp class="h-4 w-4" />
    </button>
  </div>
</template>
