<script setup lang="ts">
import { Code2, Download, GitBranch, Mail, MapPin, ShieldCheck, Signal } from "@lucide/vue";
import { computed, ref } from "vue";

import CertificationCard from "@/components/portfolio/CertificationCard.vue";
import ContactLink from "@/components/portfolio/ContactLink.vue";
import PortfolioSection from "@/components/portfolio/PortfolioSection.vue";
import ProjectCard from "@/components/portfolio/ProjectCard.vue";
import Header from "@/components/site/Header.vue";
import TechIcon from "@/components/site/TechIcon.vue";
import {
  certifications,
  contacts,
  journey,
  projects,
  skillGroups,
  type ProjectTag,
} from "@/data/portfolio";

const tags: ProjectTag[] = ["All", "Cyber", "Web", "Research"];
const activeTag = ref<ProjectTag>("All");
const githubHref = "https://github.com/pengseyha";
const emailAddress = "pengseyha2005@gmail.com";
const featuredProject = projects[0];
const focusAreas = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    text: "Vue interfaces, REST APIs, validation, and database-backed application work.",
  },
  {
    icon: ShieldCheck,
    title: "Security Engineering",
    text: "Firewall rules, IDS testing, ATT&CK mapping, and defensive lab practice.",
  },
  {
    icon: Signal,
    title: "SIEM Monitoring",
    text: "Log collection, detection searches, dashboards, and investigation workflows.",
  },
];

const filteredProjects = computed(() =>
  activeTag.value === "All"
    ? projects
    : projects.filter((project) => project.tag === activeTag.value),
);

const stats = computed(() => [
  { value: `${projects.length}+`, label: "Projects" },
  {
    value: `${projects.filter((project) => project.tag === "Cyber").length}+`,
    label: "Labs",
  },
  { value: `${certifications.length}`, label: "Certification" },
  { value: "Open", label: "Internship" },
]);
</script>

<template>
  <div>
    <section id="home" class="hero-split">
      <Header />

      <div class="hero-left">
        <div class="hero-copy">
          <p class="hero-kicker">Computer Science Student at ITC</p>
          <h1 class="hero-display">Secure Web Apps Cyber Labs</h1>
          <p class="hero-summary">
            Year 4 Computer Science student building full-stack products and practical security labs
            for internship-ready engineering experience.
          </p>

          <div class="hero-actions">
            <a
              href="mailto:pengseyha2005@gmail.com?subject=Resume%20Request"
              class="hero-button-primary"
            >
              <Download class="h-4 w-4" /> Resume
            </a>
            <a :href="githubHref" target="_blank" rel="noreferrer" class="hero-button-secondary">
              <GitBranch class="h-4 w-4" /> GitHub
            </a>
            <a :href="`mailto:${emailAddress}`" class="hero-button-secondary">
              <Mail class="h-4 w-4" /> Contact
            </a>
          </div>
        </div>

        <div class="hero-arrow" aria-hidden="true" />
      </div>

      <aside v-if="featuredProject" class="hero-right" aria-label="Featured project showcase">
        <div class="device-stage">
          <div class="device-card device-card-main">
            <img
              :src="featuredProject.image"
              :alt="`${featuredProject.title} project screenshot`"
            />
          </div>
          <div v-if="projects[1]" class="device-card device-card-small">
            <img :src="projects[1].image" alt="pfSense Network Defense project screenshot" />
          </div>
        </div>

        <div class="hero-project-caption">
          <p>{{ featuredProject.tag }} Project</p>
          <h2>{{ featuredProject.title }}</h2>
          <span>{{ featuredProject.result }}</span>
        </div>
      </aside>
    </section>

    <section class="border-y border-border bg-surface/50 py-5">
      <div class="page-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="stat in stats" :key="stat.label" class="stat-card">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </article>
      </div>
    </section>

    <section class="core-focus-band" aria-labelledby="core-focus-title">
      <div class="page-shell">
        <div class="core-focus-header">
          <p class="eyebrow">Core Focus</p>
          <h2 id="core-focus-title">What I am building toward</h2>
        </div>

        <div class="grid gap-4 lg:grid-cols-3">
          <article v-for="item in focusAreas" :key="item.title" class="focus-card">
            <span class="focus-icon">
              <component :is="item.icon" class="h-4 w-4" />
            </span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <PortfolioSection
      id="about"
      eyebrow="About"
      title="Computer Science student with practical lab experience"
      description="A concise view of my background, current direction, and the work I am preparing for."
    >
      <div class="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article class="premium-card">
          <h3>About Me</h3>
          <p>
            I am a 21-year-old Computer Science student in Phnom Penh, currently in Year 4 at the
            Institute of Technology of Cambodia. My work combines web development with defensive
            cybersecurity practice.
          </p>
        </article>
        <article class="premium-card">
          <h3>Current Focus</h3>
          <p>
            I am focusing on full-stack development, SIEM monitoring, and practical lab work using
            Splunk, Snort, pfSense, Vue, Laravel, and NestJS.
          </p>
        </article>
        <article class="premium-card">
          <h3>Location</h3>
          <p class="inline-flex items-center gap-2">
            <MapPin class="h-4 w-4 text-brand" /> Phnom Penh, Cambodia
          </p>
        </article>
        <article class="premium-card">
          <h3>Education</h3>
          <p>Institute of Technology of Cambodia · Year 4 · Computer Science</p>
        </article>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="skills"
      eyebrow="Skills"
      title="Technical toolkit"
      description="Grouped by the kind of work each tool supports."
      muted
    >
      <div class="grid gap-5 lg:grid-cols-3">
        <article v-for="group in skillGroups" :key="group.title" class="skill-category">
          <h3>{{ group.title }}</h3>
          <p>{{ group.description }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <TechIcon v-for="skill in group.items" :key="skill" :name="skill" variant="badge" />
          </div>
        </article>
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Real project snapshots showing the problem, solution, and result behind each build."
    >
      <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
          <button
            v-for="tag in tags"
            :key="tag"
            type="button"
            class="filter-button"
            :class="{ 'filter-button-active': activeTag === tag }"
            role="tab"
            :aria-selected="activeTag === tag"
            @click="activeTag = tag"
          >
            {{ tag }}
          </button>
        </div>
        <p class="text-sm text-muted-foreground">
          Showing {{ filteredProjects.length }} of {{ projects.length }}
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.title"
          :project="project"
          :github-href="githubHref"
        />
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="experience"
      eyebrow="Experience"
      title="Professional journey"
      description="A short timeline of education, credentials, and practical work."
      muted
    >
      <ol class="timeline">
        <li v-for="item in journey" :key="`${item.period}-${item.title}`" class="timeline-item">
          <span>{{ item.period }}</span>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </li>
      </ol>
    </PortfolioSection>

    <PortfolioSection
      id="certifications"
      eyebrow="Certifications"
      title="Credentials"
      description="Learning evidence that supports my cybersecurity direction."
    >
      <div class="grid gap-5 lg:grid-cols-2">
        <CertificationCard v-for="cert in certifications" :key="cert.title" :cert="cert" />
      </div>
    </PortfolioSection>

    <PortfolioSection
      id="contact"
      eyebrow="Contact"
      title="Let’s connect"
      description="Direct links for recruiters, internship teams, and collaborators."
      muted
    >
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <ContactLink v-for="contact in contacts" :key="contact.label" :contact="contact" />
      </div>
    </PortfolioSection>
  </div>
</template>
