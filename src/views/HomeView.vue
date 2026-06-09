<script setup lang="ts">
import {
  ArrowUpRight,
  BookOpenCheck,
  Download,
  FileText,
  Github,
  MapPin,
  ShieldCheck,
} from "lucide-vue-next";
import { computed } from "vue";

import CertificationCard from "@/components/portfolio/CertificationCard.vue";
import ContactLink from "@/components/portfolio/ContactLink.vue";
import PortfolioSection from "@/components/portfolio/PortfolioSection.vue";
import ProjectCard from "@/components/portfolio/ProjectCard.vue";
import SkillGroup from "@/components/portfolio/SkillGroup.vue";
import Header from "@/components/site/Header.vue";
import TerminalWindow from "@/components/site/TerminalWindow.vue";
import { featuredProject, portfolioData } from "@/data/portfolio";

const supportingProjects = computed(() =>
  portfolioData.projects.filter((project) => project.id !== featuredProject.id),
);
</script>

<template>
  <div class="overflow-hidden bg-background">
    <Header />

    <section class="relative min-h-screen overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div class="absolute inset-0 subtle-grid opacity-70"></div>
      <div
        class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
      ></div>

      <div
        class="container-page relative grid min-w-0 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div class="min-w-0 animate-reveal-up">
          <div class="mb-6 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span
              class="inline-flex items-center gap-2 rounded-full border border-brand/35 bg-brand-soft px-3 py-1.5 font-bold text-brand"
            >
              <ShieldCheck class="h-4 w-4" />
              Cybersecurity internship portfolio
            </span>
            <span class="inline-flex items-center gap-2">
              <MapPin class="h-4 w-4 text-brand" />
              {{ portfolioData.identity.location }}
            </span>
          </div>

          <h1
            class="max-w-5xl break-words text-3xl font-extrabold leading-tight text-display sm:text-5xl md:text-6xl"
          >
            {{ portfolioData.identity.headline }}
          </h1>

          <p class="mt-6 max-w-2xl text-base leading-8 text-muted md:text-xl md:leading-9">
            {{ portfolioData.identity.subheading }}
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              :href="portfolioData.contact.resumeUrl"
              class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-extrabold text-[#071014] transition hover:-translate-y-0.5 hover:bg-brand/90 sm:w-auto"
            >
              <Download class="h-4 w-4" />
              Download resume
            </a>
            <a
              href="#projects"
              class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-bold text-display transition hover:-translate-y-0.5 hover:border-brand/45 sm:w-auto"
            >
              <FileText class="h-4 w-4 text-brand" />
              View case studies
            </a>
            <a
              :href="portfolioData.contact.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-bold text-display transition hover:-translate-y-0.5 hover:border-brand/45 sm:w-auto"
            >
              <Github class="h-4 w-4 text-brand" />
              GitHub
            </a>
          </div>

          <div class="mt-10 grid gap-3 sm:grid-cols-3">
            <div
              v-for="item in portfolioData.snapshot"
              :key="item.label"
              class="border-l border-border pl-4"
            >
              <p class="text-xs font-bold uppercase text-muted">{{ item.label }}</p>
              <p class="mt-1 text-sm font-bold text-display">{{ item.value }}</p>
            </div>
          </div>
        </div>

        <div class="animate-reveal-up lg:pl-4" style="animation-delay: 120ms">
          <TerminalWindow />
        </div>
      </div>
    </section>

    <PortfolioSection
      id="about"
      eyebrow="About Me"
      title="Security-minded, practical, and detail-oriented."
      :description="portfolioData.identity.summary"
    >
      <div class="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div class="surface-panel rounded-3xl p-6 md:p-8">
          <p class="text-sm font-bold uppercase text-brand">Profile</p>
          <h3 class="mt-4 text-2xl font-extrabold text-display">
            {{ portfolioData.identity.role }}
          </h3>
          <p class="mt-5 leading-8 text-muted">
            My best work sits between security operations and software engineering: finding signals,
            structuring evidence, and building tools that make analysis easier.
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div
            v-for="principle in portfolioData.principles"
            :key="principle"
            class="rounded-3xl border border-border/70 bg-surface/70 p-5"
          >
            <div class="mb-4 h-1 w-10 rounded-full bg-brand"></div>
            <p class="text-sm leading-7 text-body">{{ principle }}</p>
          </div>
        </div>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="skills"
      eyebrow="Capabilities"
      title="Focused skills, not a long checklist."
      description="Three areas that match SOC Analyst and IT Security internship work."
    >
      <div class="grid gap-5 md:grid-cols-3">
        <SkillGroup
          v-for="category in portfolioData.skills"
          :key="category.title"
          :category="category"
        />
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="projects"
      eyebrow="Featured Projects"
      title="Selected work with clear proof."
      description="The SOC Monitoring Platform is the main case study. Supporting projects show security lab practice and engineering range."
    >
      <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article class="surface-panel overflow-hidden rounded-3xl">
          <img
            :src="featuredProject.image"
            :alt="`${featuredProject.title} project preview`"
            class="aspect-[16/9] w-full object-cover opacity-90"
            loading="lazy"
          />

          <div class="p-6 md:p-8">
            <p class="text-xs font-bold uppercase text-brand">{{ featuredProject.eyebrow }}</p>
            <div class="mt-3 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 class="text-3xl font-extrabold text-display">{{ featuredProject.title }}</h3>
                <p class="mt-4 max-w-2xl leading-8 text-muted">{{ featuredProject.summary }}</p>
              </div>
              <RouterLink
                :to="`/projects/${featuredProject.id}`"
                class="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-extrabold text-[#071014] transition hover:-translate-y-0.5"
              >
                Full case study
                <ArrowUpRight class="h-4 w-4" />
              </RouterLink>
            </div>

            <div class="mt-7 grid gap-3 md:grid-cols-3">
              <div
                v-for="metric in featuredProject.metrics"
                :key="metric.label"
                class="rounded-2xl border border-border/70 bg-background/45 p-4"
              >
                <p class="text-xs font-bold uppercase text-muted">{{ metric.label }}</p>
                <p class="mt-2 text-lg font-extrabold text-display">{{ metric.value }}</p>
              </div>
            </div>

            <div class="mt-7 grid gap-4 md:grid-cols-2">
              <div>
                <p class="text-sm font-bold text-display">Challenge</p>
                <p class="mt-2 text-sm leading-7 text-muted">{{ featuredProject.challenge }}</p>
              </div>
              <div>
                <p class="text-sm font-bold text-display">Solution</p>
                <p class="mt-2 text-sm leading-7 text-muted">{{ featuredProject.solution }}</p>
              </div>
            </div>
          </div>
        </article>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <ProjectCard
            v-for="project in supportingProjects.slice(0, 2)"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="labs"
      eyebrow="Labs & Research"
      title="Lab notes that support the case studies."
      description="Short research threads behind my SOC and security projects."
    >
      <div class="grid gap-5 lg:grid-cols-3">
        <article
          v-for="lab in portfolioData.labs"
          :key="lab.id"
          class="surface-panel rounded-3xl p-6"
        >
          <p class="text-xs font-bold uppercase text-brand">{{ lab.focus }}</p>
          <h3 class="mt-3 text-xl font-extrabold text-display">{{ lab.title }}</h3>
          <p class="mt-4 text-sm leading-7 text-muted">{{ lab.summary }}</p>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tool in lab.tools"
              :key="tool"
              class="rounded-full border border-border/70 px-3 py-1 text-xs font-semibold text-body"
            >
              {{ tool }}
            </span>
          </div>

          <ul class="mt-5 space-y-2">
            <li
              v-for="outcome in lab.outcomes"
              :key="outcome"
              class="flex gap-3 text-sm text-muted"
            >
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"></span>
              {{ outcome }}
            </li>
          </ul>
        </article>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="certifications"
      eyebrow="Certifications"
      title="Learning that supports the work."
      description="Certifications are kept concise so the projects remain the main evidence."
    >
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <CertificationCard
          v-for="certification in portfolioData.certifications"
          :key="certification.id"
          :certification="certification"
        />
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="experience"
      eyebrow="Experience / Learning Journey"
      title="Focused path toward SOC and IT security."
      description="Security training, computer science fundamentals, and hands-on project practice."
    >
      <div class="relative max-w-4xl">
        <div class="absolute bottom-0 left-4 top-0 w-px bg-border"></div>
        <article
          v-for="item in portfolioData.experience"
          :key="item.id"
          class="relative mb-8 pl-12 last:mb-0"
        >
          <div
            class="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-brand/50 bg-background text-brand"
          >
            <BookOpenCheck class="h-4 w-4" />
          </div>
          <p class="text-xs font-bold uppercase text-brand">{{ item.period }}</p>
          <h3 class="mt-2 text-xl font-extrabold text-display">{{ item.title }}</h3>
          <p class="mt-1 text-sm font-semibold text-body">{{ item.organization }}</p>
          <p class="mt-3 max-w-2xl text-sm leading-7 text-muted">{{ item.description }}</p>
        </article>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="github"
      eyebrow="GitHub Activity"
      title="GitHub with a clear purpose."
      description="Repositories are organized around security labs, case studies, and clean implementation."
    >
      <div class="grid gap-5 lg:grid-cols-3">
        <article
          v-for="activity in portfolioData.githubActivity"
          :key="activity.label"
          class="surface-panel rounded-3xl p-6"
        >
          <p class="text-xs font-bold uppercase text-muted">{{ activity.label }}</p>
          <h3 class="mt-3 text-xl font-extrabold text-display">{{ activity.value }}</h3>
          <p class="mt-4 text-sm leading-7 text-muted">{{ activity.detail }}</p>
        </article>
      </div>

      <a
        :href="portfolioData.contact.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-bold text-display transition hover:-translate-y-0.5 hover:border-brand/45"
      >
        <Github class="h-4 w-4 text-brand" />
        Review GitHub profile
        <ArrowUpRight class="h-4 w-4" />
      </a>
    </PortfolioSection>

    <section id="contact" class="scroll-mt-24 border-t border-border/60 py-20 md:py-24">
      <div class="container-page">
        <div class="surface-panel rounded-3xl p-6 md:p-10">
          <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p class="text-xs font-bold uppercase text-brand">Contact</p>
              <h2 class="mt-4 text-3xl font-extrabold text-display md:text-5xl">
                Open for cybersecurity internship conversations.
              </h2>
              <p class="mt-5 leading-8 text-muted">
                {{ portfolioData.identity.availability }}. Best fit: SOC monitoring, IT security,
                network defense, or internal security tools.
              </p>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <ContactLink
                icon="Mail"
                :label="portfolioData.contact.email"
                :url="`mailto:${portfolioData.contact.email}`"
              />
              <ContactLink
                icon="Github"
                label="GitHub profile"
                :url="portfolioData.contact.githubUrl"
              />
              <ContactLink
                icon="Linkedin"
                label="LinkedIn profile"
                :url="portfolioData.contact.linkedinUrl"
              />
              <ContactLink
                icon="Phone"
                :label="portfolioData.contact.phone"
                :url="`tel:${portfolioData.contact.phone.replaceAll(' ', '')}`"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
