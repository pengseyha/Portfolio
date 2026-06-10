<script setup lang="ts">
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  CheckCircle2,
  Database,
  Download,
  FileText,
  Github,
  MapPin,
  Network,
  Radar,
  SearchCheck,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-vue-next";
import { computed } from "vue";

import CertificationCard from "@/components/portfolio/CertificationCard.vue";
import ContactLink from "@/components/portfolio/ContactLink.vue";
import PortfolioSection from "@/components/portfolio/PortfolioSection.vue";
import Header from "@/components/site/Header.vue";
import RevealOnScroll from "@/components/site/RevealOnScroll.vue";
import { featuredProject, portfolioData } from "@/data/portfolio";

const supportingProjects = computed(() =>
  portfolioData.projects.filter((project) => project.id !== featuredProject.id),
);

const detectionPipeline = [
  "Logs",
  "Collection",
  "SIEM",
  "Detection Rules",
  "Alert",
  "Investigation",
  "Incident",
];

const architectureNodes = [
  { label: "Log Sources", detail: "pfSense, Snort, Linux, Windows", icon: Server },
  { label: "Collection", detail: "Events normalized for review", icon: Database },
  { label: "Splunk SIEM", detail: "Search, dashboards, detections", icon: Radar },
  { label: "SOC Platform", detail: "Alerts, cases, notes, evidence", icon: Workflow },
];

const storyPoints = [
  {
    title: "The problem that interests me",
    body: "Security work becomes valuable when messy events are turned into evidence that a team can trust.",
  },
  {
    title: "Why SOC operations",
    body: "SOC work sits at the intersection of systems, networks, attacker behavior, communication, and disciplined process.",
  },
  {
    title: "How I learn",
    body: "I build small environments, generate observable events, investigate them, document what happened, and improve the workflow.",
  },
  {
    title: "What I am building",
    body: "A monitoring platform and lab practice that show how alerts become investigations, not just screenshots.",
  },
];

const investigations = [
  "Repeated failed login review with severity and timeline notes",
  "Firewall traffic review for blocked and allowed connection patterns",
  "Snort IDS alert validation with packet and rule context",
  "Incident handoff notes that preserve evidence and next actions",
];
</script>

<template>
  <div class="overflow-hidden bg-background">
    <Header />

    <section class="relative overflow-hidden pb-14 pt-28 md:pb-20 md:pt-36">
      <div
        class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"
      ></div>
      <div
        class="container-page relative grid min-h-[calc(100vh-6rem)] items-center gap-10 lg:grid-cols-[1fr_0.92fr]"
      >
        <div class="animate-reveal-up">
          <div class="mb-7 flex flex-wrap items-center gap-3">
            <span class="badge">
              <span class="status-dot h-2 w-2 rounded-full bg-brand"></span>
              {{ portfolioData.identity.availability }}
            </span>
            <span class="inline-flex items-center gap-2 text-sm font-semibold text-muted">
              <MapPin class="h-4 w-4 text-brand" />
              {{ portfolioData.identity.location }}
            </span>
          </div>

          <p class="mb-4 text-sm font-black uppercase tracking-[0.18em] text-brand">
            {{ portfolioData.identity.name }} / SOC Portfolio
          </p>
          <h1 class="max-w-4xl text-5xl font-black text-display md:text-7xl">
            {{ portfolioData.identity.headline }}
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-body md:text-xl">
            {{ portfolioData.identity.subheading }}
          </p>

          <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a :href="portfolioData.contact.resumeUrl" class="button-primary w-full sm:w-auto">
              <Download class="h-4 w-4" />
              Resume
            </a>
            <a href="#flagship" class="button-secondary w-full sm:w-auto">
              <FileText class="h-4 w-4 text-brand" />
              SOC Platform
            </a>
          </div>

          <div class="mt-12 grid gap-3 sm:grid-cols-3">
            <div
              v-for="item in portfolioData.snapshot"
              :key="item.label"
              class="rounded-lg border border-border bg-surface/55 p-4"
            >
              <p class="text-xs font-black uppercase tracking-[0.14em] text-muted">
                {{ item.label }}
              </p>
              <p class="mt-2 font-black text-display">{{ item.value }}</p>
            </div>
          </div>
        </div>

        <RevealOnScroll :delay="120" class="surface-panel blue-ring rounded-[28px] p-4 md:p-5">
          <div class="flex items-start justify-between gap-4 border-b border-border pb-4">
            <div>
              <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">
                Operational Snapshot
              </p>
              <h2 class="mt-2 text-2xl font-black text-display">Mini SOC Environment</h2>
            </div>
            <ShieldCheck class="h-6 w-6 text-brand" />
          </div>

          <div class="mt-4 grid gap-3 sm:grid-cols-2">
            <div
              v-for="signal in portfolioData.operatingSignals"
              :key="signal.label"
              class="rounded-lg border border-border bg-background/45 p-4"
            >
              <p class="text-[11px] font-black uppercase tracking-[0.13em] text-muted">
                {{ signal.label }}
              </p>
              <p class="mt-2 text-sm font-black text-display">{{ signal.value }}</p>
            </div>
          </div>

          <div class="mt-4 rounded-lg border border-border bg-background/45 p-4">
            <div class="mb-4 flex items-center justify-between gap-3">
              <p class="text-xs font-black uppercase tracking-[0.16em] text-muted">
                Alert to Incident
              </p>
              <span
                class="rounded-full border border-border px-2 py-1 text-[11px] font-black text-brand"
              >
                Evidence first
              </span>
            </div>
            <div class="space-y-2">
              <div
                v-for="(step, index) in detectionPipeline.slice(2)"
                :key="step"
                class="flex items-center gap-3 rounded-md border border-border bg-surface/70 p-3"
              >
                <span class="text-xs font-black text-brand">0{{ index + 1 }}</span>
                <span class="text-sm font-bold text-display">{{ step }}</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <PortfolioSection
      id="narrative"
      eyebrow="Origin Story"
      title="I am not trying to look like a cybersecurity person. I am practicing the work."
      :description="portfolioData.identity.summary"
    >
      <div class="grid gap-5 lg:grid-cols-4">
        <RevealOnScroll
          v-for="(point, index) in storyPoints"
          :key="point.title"
          :delay="index * 80"
          class="premium-card surface-panel rounded-lg p-6"
        >
          <p class="text-sm font-black text-display">{{ point.title }}</p>
          <p class="mt-4 text-sm leading-7 text-muted">{{ point.body }}</p>
        </RevealOnScroll>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="flagship"
      eyebrow="Flagship Project"
      title="SOC Monitoring Platform, treated like a product launch."
      description="The centerpiece is a practical monitoring and investigation system that shows how security events move through a real analyst workflow."
    >
      <RevealOnScroll class="surface-panel blue-ring overflow-hidden rounded-[28px]">
        <div class="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div class="relative min-h-[440px] border-b border-border lg:border-b-0 lg:border-r">
            <img
              :src="featuredProject.image"
              :alt="`${featuredProject.title} dashboard screenshot`"
              class="absolute inset-0 h-full w-full object-cover opacity-72"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/10"
            ></div>
            <div class="absolute bottom-6 left-6 right-6">
              <span class="badge mb-4">Cyber Shield Checker</span>
              <h3 class="max-w-xl text-4xl font-black text-display">
                Monitoring, detection, alerting, investigation.
              </h3>
              <p class="mt-4 max-w-xl text-sm leading-7 text-body">
                {{ featuredProject.summary }}
              </p>
            </div>
          </div>

          <div class="p-6 md:p-8">
            <div class="grid gap-3 sm:grid-cols-3">
              <div
                v-for="metric in featuredProject.metrics"
                :key="metric.label"
                class="rounded-lg border border-border bg-background/45 p-4"
              >
                <p class="text-[11px] font-black uppercase tracking-[0.14em] text-muted">
                  {{ metric.label }}
                </p>
                <p class="mt-2 text-lg font-black text-display">{{ metric.value }}</p>
              </div>
            </div>

            <div class="mt-8 grid gap-6 lg:grid-cols-2">
              <div>
                <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">Problem</p>
                <p class="mt-3 text-sm leading-7 text-muted">{{ featuredProject.challenge }}</p>
              </div>
              <div>
                <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">Approach</p>
                <p class="mt-3 text-sm leading-7 text-muted">{{ featuredProject.solution }}</p>
              </div>
            </div>

            <div class="mt-8">
              <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">
                Detection Pipeline
              </p>
              <div class="mt-4 flex flex-wrap items-center gap-2">
                <template v-for="(step, index) in detectionPipeline" :key="step">
                  <span
                    class="rounded-full border border-border bg-background/45 px-3 py-2 text-xs font-black text-display"
                  >
                    {{ step }}
                  </span>
                  <ArrowRight
                    v-if="index < detectionPipeline.length - 1"
                    class="h-4 w-4 text-muted"
                  />
                </template>
              </div>
            </div>

            <div class="mt-8 grid gap-3 sm:grid-cols-2">
              <div
                v-for="feature in featuredProject.features"
                :key="feature"
                class="flex gap-3 rounded-lg border border-border bg-background/40 p-3 text-sm text-muted"
              >
                <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{{ feature }}</span>
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

      <div class="mt-6 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <RevealOnScroll class="surface-panel rounded-lg p-6 md:p-8">
          <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">Architecture</p>
          <div class="mt-6 grid gap-4 md:grid-cols-4">
            <div
              v-for="node in architectureNodes"
              :key="node.label"
              class="rounded-lg border border-border bg-background/45 p-4"
            >
              <div
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand"
              >
                <component :is="node.icon" class="h-5 w-5" />
              </div>
              <h3 class="mt-4 text-sm font-black text-display">{{ node.label }}</h3>
              <p class="mt-2 text-xs leading-6 text-muted">{{ node.detail }}</p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll class="surface-panel rounded-lg p-6 md:p-8" :delay="100">
          <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">Lessons Learned</p>
          <ul class="mt-5 space-y-3">
            <li
              v-for="lesson in featuredProject.lessons"
              :key="lesson"
              class="flex gap-3 text-sm leading-6 text-muted"
            >
              <SearchCheck class="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              {{ lesson }}
            </li>
          </ul>
        </RevealOnScroll>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="capabilities"
      eyebrow="Capabilities"
      title="Evidence-based capabilities, not a skills wall."
      description="Each capability connects a SOC responsibility to proof from the platform, lab, or investigation workflow."
    >
      <div class="grid gap-5 lg:grid-cols-2">
        <RevealOnScroll
          v-for="(capability, index) in portfolioData.capabilities"
          :key="capability.id"
          :delay="index * 80"
          class="premium-card surface-panel rounded-lg p-6"
        >
          <div class="flex items-start gap-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand"
            >
              <AlertTriangle v-if="capability.id === 'threat-detection'" class="h-5 w-5" />
              <Radar v-else-if="capability.id === 'siem-engineering'" class="h-5 w-5" />
              <ShieldCheck v-else-if="capability.id === 'incident-response'" class="h-5 w-5" />
              <Network v-else class="h-5 w-5" />
            </div>
            <div>
              <h3 class="text-xl font-black text-display">{{ capability.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-muted">{{ capability.premise }}</p>
            </div>
          </div>

          <ul class="mt-5 space-y-3">
            <li
              v-for="item in capability.evidence"
              :key="item"
              class="flex gap-3 text-sm leading-6 text-body"
            >
              <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              {{ item }}
            </li>
          </ul>

          <p class="mt-5 border-t border-border pt-4 text-sm font-semibold text-display">
            {{ capability.proof }}
          </p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tool in capability.tools"
              :key="tool"
              class="rounded-full border border-border bg-background/45 px-3 py-1 text-xs font-bold text-muted"
            >
              {{ tool }}
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="lab"
      eyebrow="Cybersecurity Lab"
      title="A mini SOC environment for building, observing, and investigating."
      description="The lab is designed to produce evidence: screenshots, diagrams, findings, detections, and investigation notes."
    >
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <RevealOnScroll
          v-for="(system, index) in portfolioData.labSystems"
          :key="system.id"
          :delay="index * 70"
          class="image-sheen premium-card relative min-h-64 overflow-hidden rounded-lg border border-border bg-surface"
        >
          <img
            :src="system.image"
            :alt="`${system.name} lab screenshot`"
            class="absolute inset-0 h-full w-full object-cover opacity-68"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-background via-background/76 to-background/15"
          ></div>
          <div class="absolute bottom-5 left-5 right-5">
            <p class="text-xs font-black uppercase tracking-[0.14em] text-brand">
              {{ system.role }}
            </p>
            <h3 class="mt-2 text-2xl font-black text-display">{{ system.name }}</h3>
            <p class="mt-3 text-sm leading-6 text-body">{{ system.evidence }}</p>
          </div>
        </RevealOnScroll>
      </div>

      <div class="mt-6 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <RevealOnScroll class="surface-panel rounded-lg p-6 md:p-8">
          <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">Investigations</p>
          <ul class="mt-5 space-y-3">
            <li
              v-for="item in investigations"
              :key="item"
              class="flex gap-3 text-sm leading-6 text-muted"
            >
              <SearchCheck class="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              {{ item }}
            </li>
          </ul>
        </RevealOnScroll>

        <RevealOnScroll class="surface-panel rounded-lg p-6 md:p-8" :delay="100">
          <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">Lab Case Notes</p>
          <div class="mt-5 grid gap-4 md:grid-cols-3">
            <div
              v-for="lab in portfolioData.labs"
              :key="lab.id"
              class="rounded-lg border border-border bg-background/45 p-4"
            >
              <p class="text-xs font-black uppercase tracking-[0.13em] text-muted">
                {{ lab.focus }}
              </p>
              <h3 class="mt-3 text-base font-black text-display">{{ lab.title }}</h3>
              <p class="mt-3 text-sm leading-6 text-muted">{{ lab.summary }}</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="certifications"
      eyebrow="Certifications"
      title="Learning progression that supports the operational work."
      description="Presented as a path toward SOC readiness, not a badge wall."
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
      id="journey"
      eyebrow="Learning Journey"
      title="A focused path from computer science fundamentals to security operations."
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
      id="evidence"
      eyebrow="Evidence Library"
      title="Supporting projects that reinforce the SOC story."
      description="Every project is framed by the operational question it helps answer."
    >
      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <RevealOnScroll
          v-for="(project, index) in supportingProjects"
          :key="project.id"
          :delay="index * 70"
          class="premium-card surface-panel overflow-hidden rounded-lg"
        >
          <img
            :src="project.image"
            :alt="`${project.title} project screenshot`"
            class="aspect-[16/10] w-full object-cover opacity-80"
            loading="lazy"
          />
          <div class="p-5">
            <p class="text-xs font-black uppercase tracking-[0.14em] text-brand">
              {{ project.eyebrow }}
            </p>
            <h3 class="mt-2 text-xl font-black text-display">{{ project.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-muted">{{ project.summary }}</p>
            <RouterLink
              :to="`/projects/${project.id}`"
              class="quiet-link mt-5 inline-flex items-center gap-2 text-sm font-black"
            >
              View evidence
              <ArrowUpRight class="h-4 w-4" />
            </RouterLink>
          </div>
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
        <RevealOnScroll class="surface-panel rounded-[28px] p-6 md:p-10">
          <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p class="text-xs font-black uppercase tracking-[0.16em] text-brand">Contact</p>
              <h2 class="mt-4 text-3xl font-black text-display md:text-5xl">
                Ready to contribute to monitoring, triage, and security operations.
              </h2>
              <p class="mt-5 max-w-xl leading-8 text-muted">
                Best fit: SOC monitoring, IT security, network defense, SIEM support, or internal
                security tools.
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
