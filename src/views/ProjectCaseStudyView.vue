<script setup lang="ts">
import { ArrowLeft, ArrowUpRight, CheckCircle2, Github } from "lucide-vue-next";
import { computed } from "vue";
import { useRoute } from "vue-router";

import Header from "@/components/site/Header.vue";
import { getProjectById } from "@/data/portfolio";

const route = useRoute();
const project = computed(() => getProjectById(String(route.params.id)));
</script>

<template>
  <div class="min-h-screen bg-background">
    <Header />

    <section v-if="project" class="pb-20 pt-28 md:pb-24 md:pt-36">
      <div class="container-page">
        <RouterLink
          to="/#projects"
          class="quiet-link mb-8 inline-flex items-center gap-2 text-sm font-bold"
        >
          <ArrowLeft class="h-4 w-4" />
          Back to projects
        </RouterLink>

        <div class="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p class="text-xs font-bold uppercase text-brand">{{ project.eyebrow }}</p>
            <h1 class="mt-4 text-4xl font-extrabold text-display md:text-6xl">
              {{ project.title }}
            </h1>
            <p class="mt-6 text-lg leading-8 text-muted">{{ project.summary }}</p>

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-extrabold text-[#071014] transition hover:-translate-y-0.5"
              >
                <Github class="h-4 w-4" />
                View repository
              </a>
              <a
                v-if="project.reportUrl"
                :href="project.reportUrl"
                class="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-bold text-display transition hover:-translate-y-0.5 hover:border-brand/45"
              >
                Read report
                <ArrowUpRight class="h-4 w-4" />
              </a>
            </div>
          </div>

          <div class="surface-panel overflow-hidden rounded-3xl">
            <img
              :src="project.image"
              :alt="`${project.title} case study preview`"
              class="aspect-[16/11] w-full object-cover"
            />
          </div>
        </div>

        <div class="mt-10 grid gap-4 md:grid-cols-3">
          <div
            v-for="metric in project.metrics"
            :key="metric.label"
            class="rounded-3xl border border-border/70 bg-surface/70 p-5"
          >
            <p class="text-xs font-bold uppercase text-muted">{{ metric.label }}</p>
            <p class="mt-2 text-2xl font-extrabold text-display">{{ metric.value }}</p>
          </div>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-2">
          <article class="surface-panel rounded-3xl p-6 md:p-8">
            <p class="text-xs font-bold uppercase text-brand">Challenge</p>
            <h2 class="mt-3 text-2xl font-extrabold text-display">What needed to be solved</h2>
            <p class="mt-5 leading-8 text-muted">{{ project.challenge }}</p>
          </article>

          <article class="surface-panel rounded-3xl p-6 md:p-8">
            <p class="text-xs font-bold uppercase text-brand">Solution</p>
            <h2 class="mt-3 text-2xl font-extrabold text-display">How I approached it</h2>
            <p class="mt-5 leading-8 text-muted">{{ project.solution }}</p>
          </article>
        </div>

        <section class="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div class="surface-panel rounded-3xl p-6 md:p-8">
            <p class="text-xs font-bold uppercase text-brand">Technologies</p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="rounded-full border border-border/70 bg-background/45 px-3 py-1.5 text-sm font-semibold text-body"
              >
                {{ tech }}
              </span>
            </div>

            <p class="mt-8 text-xs font-bold uppercase text-brand">Role</p>
            <p class="mt-3 leading-7 text-muted">{{ project.role }}</p>
          </div>

          <div class="surface-panel rounded-3xl p-6 md:p-8">
            <p class="text-xs font-bold uppercase text-brand">Architecture</p>
            <h2 class="mt-3 text-2xl font-extrabold text-display">System flow</h2>

            <div class="mt-6 grid gap-4">
              <div v-for="(step, index) in project.architecture" :key="step" class="flex gap-4">
                <span
                  class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-extrabold text-brand"
                >
                  {{ index + 1 }}
                </span>
                <p class="pt-1 text-sm leading-7 text-muted">{{ step }}</p>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-12 grid gap-6 lg:grid-cols-3">
          <article class="surface-panel rounded-3xl p-6">
            <p class="text-xs font-bold uppercase text-brand">Features</p>
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
          </article>

          <article class="surface-panel rounded-3xl p-6">
            <p class="text-xs font-bold uppercase text-brand">Lessons Learned</p>
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
          </article>

          <article class="surface-panel rounded-3xl p-6">
            <p class="text-xs font-bold uppercase text-brand">Next Steps</p>
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
          </article>
        </section>
      </div>
    </section>

    <section
      v-else
      class="container-page flex min-h-[70vh] items-center justify-center pt-24 text-center"
    >
      <div>
        <p class="text-xs font-bold uppercase text-brand">Project not found</p>
        <h1 class="mt-4 text-4xl font-extrabold text-display">This case study is not available.</h1>
        <RouterLink
          to="/#projects"
          class="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-extrabold text-[#071014]"
        >
          Back to projects
        </RouterLink>
      </div>
    </section>
  </div>
</template>
