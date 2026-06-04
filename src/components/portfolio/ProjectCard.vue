<script setup lang="ts">
import { computed } from "vue";
import { GitBranch, Mail } from "@lucide/vue";

import TechIcon from "@/components/site/TechIcon.vue";
import type { Project } from "@/data/portfolio";

const props = defineProps<{
  project: Project;
  githubHref: string;
}>();

const inquiryHref = computed(() => {
  const subject = encodeURIComponent(`Question about ${props.project.title}`);
  const body = encodeURIComponent(
    `Hi Seyha,\n\nI would like to learn more about your ${props.project.title} project.`,
  );
  return `mailto:pengseyha2005@gmail.com?subject=${subject}&body=${body}`;
});
</script>

<template>
  <article class="project-card">
    <div class="project-media">
      <img :src="project.image" :alt="`${project.title} project screenshot`" loading="lazy" />
    </div>

    <div class="project-body">
      <div class="flex items-start justify-between gap-4">
        <div>
          <span class="project-tag">{{ project.tag }}</span>
          <h3>{{ project.title }}</h3>
        </div>
      </div>

      <p class="project-description">{{ project.desc }}</p>

      <dl class="case-grid">
        <div>
          <dt>Problem</dt>
          <dd>{{ project.problem }}</dd>
        </div>
        <div>
          <dt>Solution</dt>
          <dd>{{ project.solution }}</dd>
        </div>
        <div>
          <dt>Result</dt>
          <dd>{{ project.result }}</dd>
        </div>
      </dl>

      <div class="achievement-list" aria-label="Key achievements">
        <span v-for="item in project.achievements" :key="item">{{ item }}</span>
      </div>

      <div class="mt-5 flex flex-wrap gap-2">
        <TechIcon v-for="tech in project.tech" :key="tech" :name="tech" variant="chip" />
      </div>

      <div class="mt-6 flex flex-col gap-2 sm:flex-row">
        <a
          :href="githubHref"
          target="_blank"
          rel="noreferrer"
          class="btn btn-secondary flex-1"
          aria-label="View Peng Seyha's GitHub profile"
        >
          <GitBranch class="h-4 w-4" /> GitHub Profile
        </a>
        <a
          :href="inquiryHref"
          class="btn btn-primary flex-1"
          :aria-label="`Ask about ${project.title}`"
        >
          <Mail class="h-4 w-4" /> Request Details
        </a>
      </div>
    </div>
  </article>
</template>
