<script setup lang="ts">
import {
  ArrowUpRight,
  BookOpenCheck,
  CheckCircle2,
  Download,
  FileText,
  Github,
  MapPin,
} from "lucide-vue-next";
import { computed } from "vue";

import CertificationCard from "@/components/portfolio/CertificationCard.vue";
import ContactLink from "@/components/portfolio/ContactLink.vue";
import PortfolioSection from "@/components/portfolio/PortfolioSection.vue";
import ProjectCard from "@/components/portfolio/ProjectCard.vue";
import SkillGroup from "@/components/portfolio/SkillGroup.vue";
import Header from "@/components/site/Header.vue";
import RevealOnScroll from "@/components/site/RevealOnScroll.vue";
import TerminalWindow from "@/components/site/TerminalWindow.vue";
import { featuredProject, portfolioData } from "@/data/portfolio";

const supportingProjects = computed(() =>
  portfolioData.projects.filter((project) => project.id !== featuredProject.id),
);

const screenshots = computed(() => portfolioData.projects.slice(1, 4));

const architectureNodes = [
  "Log sources",
  "Alert queue",
  "IOC context",
  "MITRE mapping",
  "Case report",
];

const workflowSteps = [
  "Collect logs and indicators",
  "Prioritize alert severity",
  "Map evidence to MITRE",
  "Document response notes",
];

const aboutCards = [
  {
    title: "Career Goal",
    description: "Grow into a SOC Analyst / IT Security role through practical detection work.",
  },
  {
    title: "Security Interests",
    description: "SIEM workflows, alert triage, network defense, and incident documentation.",
  },
  {
    title: "Working Style",
    description: "Clear evidence, simple interfaces, and structured technical decisions.",
  },
];
</script>

<template>
  <div class="overflow-hidden bg-background">
    <Header />

    <section class="relative min-h-screen overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div class="absolute inset-0 subtle-grid opacity-80"></div>
      <div
        class="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background via-background/80 to-transparent"
      ></div>

      <div class="container-page relative grid items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
        <div class="animate-reveal-up">
          <div class="mb-7 flex flex-wrap items-center gap-3">
            <span class="badge">
              <span class="status-dot h-2 w-2 rounded-full bg-brand"></span>
              Available for internship
            </span>
            <span class="inline-flex items-center gap-2 text-sm font-semibold text-muted">
              <MapPin class="h-4 w-4 text-brand" />
              {{ portfolioData.identity.location }}
            </span>
          </div>

          <p class="mb-4 text-sm font-black uppercase tracking-[0.18em] text-brand">
            {{ portfolioData.identity.name }}
          </p>
          <h1 class="max-w-4xl text-5xl font-black text-display md:text-7xl">
            {{ portfolioData.identity.headline }}
          </h1>
          <p class="mt-5 text-lg font-semibold text-body md:text-xl">
            {{ portfolioData.identity.role }}
          </p>
          <p class="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
            {{ portfolioData.identity.subheading }}
          </p>

          <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a :href="portfolioData.contact.resumeUrl" class="button-primary w-full sm:w-auto">
              <Download class="h-4 w-4" />
              Download CV
            </a>
            <a href="#featured" class="button-secondary w-full sm:w-auto">
              <FileText class="h-4 w-4 text-brand" />
              View Projects
            </a>
          </div>

          <div class="mt-12 grid gap-3 sm:grid-cols-3">
            <div
              v-for="item in portfolioData.snapshot"
              :key="item.label"
              class="rounded-2xl border border-border bg-surface/45 p-4"
            >
              <p class="text-xs font-black uppercase tracking-[0.14em] text-muted">
                {{ item.label }}
              </p>
              <p class="mt-2 font-black text-display">{{ item.value }}</p>
            </div>
          </div>
        </div>

        <RevealOnScroll :delay="120">
          <TerminalWindow />
        </RevealOnScroll>
      </div>
    </section>

    <PortfolioSection
      id="about"
      eyebrow="About"
      title="A cybersecurity student building practical security systems."
      :description="portfolioData.identity.summary"
    >
      <div class="grid gap-5 lg:grid-cols-3">
        <RevealOnScroll
          v-for="(card, index) in aboutCards"
          :key="card.title"
          :delay="index * 80"
          class="premium-card surface-panel rounded-[24px] p-6"
        >
          <p class="text-sm font-black text-display">{{ card.title }}</p>
          <p class="mt-3 text-sm leading-7 text-muted">{{ card.description }}</p>
        </RevealOnScroll>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="skills"
      eyebrow="Skills"
      title="Focused capabilities for SOC and IT security."
      description="Organized around the skills recruiters expect for security internships."
    >
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <RevealOnScroll
          v-for="(category, index) in portfolioData.skills"
          :key="category.title"
          :delay="index * 70"
        >
          <SkillGroup :category="category" />
        </RevealOnScroll>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="featured"
      eyebrow="Featured Project"
      title="SOC Monitoring Platform as the centerpiece."
      description="A product-style case study showing workflow, architecture, screenshots, and lessons learned."
    >
      <RevealOnScroll class="surface-panel blue-ring overflow-hidden rounded-[32px]">
        <div class="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            class="image-sheen relative min-h-[360px] border-b border-border lg:border-b-0 lg:border-r"
          >
            <img
              :src="featuredProject.image"
              :alt="`${featuredProject.title} project screenshot`"
              class="absolute inset-0 h-full w-full object-cover opacity-80"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent"
            ></div>
            <div class="absolute bottom-6 left-6 right-6">
              <span class="badge mb-4">Cyber Shield Checker</span>
              <h3 class="max-w-xl text-4xl font-black text-display">SOC Monitoring Platform</h3>
              <p class="mt-4 max-w-xl text-sm leading-7 text-body">{{ featuredProject.summary }}</p>
            </div>
          </div>

          <div class="p-6 md:p-8">
            <div class="grid gap-3 sm:grid-cols-3">
              <div
                v-for="metric in featuredProject.metrics"
                :key="metric.label"
                class="rounded-2xl border border-border bg-background/45 p-4"
              >
                <p class="text-[11px] font-black uppercase tracking-[0.14em] text-muted">
                  {{ metric.label }}
                </p>
                <p class="mt-2 text-lg font-black text-display">{{ metric.value }}</p>
              </div>
            </div>

            <div class="mt-7">
              <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">Architecture</p>
              <div class="mt-4 grid gap-3">
                <div class="grid gap-3 md:grid-cols-5">
                  <div
                    v-for="(node, index) in architectureNodes"
                    :key="node"
                    class="rounded-2xl border border-border bg-background/45 p-3 text-center"
                  >
                    <p class="text-[11px] font-black text-muted">0{{ index + 1 }}</p>
                    <p class="mt-1 text-xs font-black text-display">{{ node }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-7 grid gap-5 md:grid-cols-2">
              <div>
                <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">
                  Key Features
                </p>
                <ul class="mt-4 space-y-3">
                  <li
                    v-for="feature in featuredProject.features.slice(0, 4)"
                    :key="feature"
                    class="flex gap-3 text-sm text-muted"
                  >
                    <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <div>
                <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">
                  Detection Workflow
                </p>
                <ul class="mt-4 space-y-3">
                  <li
                    v-for="step in workflowSteps"
                    :key="step"
                    class="flex gap-3 text-sm text-muted"
                  >
                    <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"></span>
                    {{ step }}
                  </li>
                </ul>
              </div>
            </div>

            <RouterLink
              :to="`/projects/${featuredProject.id}`"
              class="button-primary mt-8 w-full sm:w-auto"
            >
              Open full case study
              <ArrowUpRight class="h-4 w-4" />
            </RouterLink>
          </div>
        </div>
      </RevealOnScroll>

      <div class="mt-5 grid gap-4 md:grid-cols-3">
        <RevealOnScroll
          v-for="(project, index) in screenshots"
          :key="project.id"
          :delay="index * 80"
          class="image-sheen premium-card relative min-h-52 overflow-hidden rounded-[24px] border border-border bg-surface"
        >
          <img
            :src="project.image"
            :alt="`${project.title} screenshot`"
            class="absolute inset-0 h-full w-full object-cover opacity-75"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent"></div>
          <div class="absolute bottom-5 left-5 right-5">
            <p class="text-xs font-black uppercase tracking-[0.14em] text-brand">
              {{ project.eyebrow }}
            </p>
            <h3 class="mt-2 text-xl font-black text-display">{{ project.title }}</h3>
          </div>
        </RevealOnScroll>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="labs"
      eyebrow="Labs"
      title="Cybersecurity labs presented as case studies."
      description="Threat mapping, packet analysis, Linux practice, and detection notes."
    >
      <div class="grid gap-5 lg:grid-cols-3">
        <RevealOnScroll
          v-for="(lab, index) in portfolioData.labs"
          :key="lab.id"
          :delay="index * 90"
          class="premium-card surface-panel rounded-[24px] p-6"
        >
          <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">{{ lab.focus }}</p>
          <h3 class="mt-3 text-xl font-black text-display">{{ lab.title }}</h3>
          <p class="mt-4 text-sm leading-7 text-muted">{{ lab.summary }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tool in lab.tools"
              :key="tool"
              class="rounded-full border border-border bg-background/45 px-3 py-1 text-xs font-bold text-body"
            >
              {{ tool }}
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="certifications"
      eyebrow="Certifications"
      title="Structured learning that supports the work."
    >
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <RevealOnScroll
          v-for="(certification, index) in portfolioData.certifications"
          :key="certification.id"
          :delay="index * 60"
        >
          <CertificationCard :certification="certification" />
        </RevealOnScroll>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="experience"
      eyebrow="Learning Journey"
      title="Growth toward SOC and IT security roles."
    >
      <RevealOnScroll class="relative max-w-4xl">
        <div class="absolute bottom-0 left-4 top-0 w-px bg-border"></div>
        <article
          v-for="item in portfolioData.experience"
          :key="item.id"
          class="relative mb-9 pl-12 last:mb-0"
        >
          <div
            class="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-brand"
          >
            <BookOpenCheck class="h-4 w-4" />
          </div>
          <p class="text-xs font-black uppercase tracking-[0.14em] text-brand">{{ item.period }}</p>
          <h3 class="mt-2 text-xl font-black text-display">{{ item.title }}</h3>
          <p class="mt-1 text-sm font-bold text-body">{{ item.organization }}</p>
          <p class="mt-3 max-w-2xl text-sm leading-7 text-muted">{{ item.description }}</p>
        </article>
      </RevealOnScroll>
    </PortfolioSection>

    <PortfolioSection
      id="projects"
      eyebrow="GitHub & Projects"
      title="Selected projects with clear visual presentation."
    >
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <RevealOnScroll
          v-for="(project, index) in supportingProjects"
          :key="project.id"
          :delay="index * 70"
        >
          <ProjectCard :project="project" />
        </RevealOnScroll>
      </div>

      <a
        :href="portfolioData.contact.githubUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="button-secondary mt-8"
      >
        <Github class="h-4 w-4 text-brand" />
        View GitHub
      </a>
    </PortfolioSection>

    <section id="contact" class="scroll-mt-24 border-t border-border py-20 md:py-24">
      <div class="container-page">
        <RevealOnScroll class="surface-panel rounded-[32px] p-6 md:p-10">
          <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">Contact</p>
              <h2 class="mt-4 text-3xl font-black text-display md:text-5xl">
                Open to cybersecurity internship opportunities.
              </h2>
              <p class="mt-5 max-w-xl leading-8 text-muted">
                Best fit: SOC monitoring, IT security, network defense, or internal security tools.
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
        </RevealOnScroll>
      </div>
    </section>
  </div>
</template>
