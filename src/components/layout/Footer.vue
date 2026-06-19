<script setup lang="ts">
import { Download, Github, Linkedin, Mail, Send } from "lucide-vue-next";

import { portfolioData } from "@/data/portfolio";

const year = new Date().getFullYear();
const identity = portfolioData.identity;
const contact = portfolioData.contact;

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Training", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail },
  { label: "LinkedIn", href: contact.linkedinUrl, icon: Linkedin },
  { label: "GitHub", href: contact.githubUrl, icon: Github },
  { label: "Telegram", href: contact.telegramUrl, icon: Send },
];
</script>

<template>
  <footer class="border-t border-border bg-background">
    <div class="container-page py-12">
      <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
        <!-- Brand -->
        <div>
          <p class="text-lg font-bold text-display">{{ identity.name }}</p>
          <p class="mono mt-1 text-xs text-brand">{{ identity.role }}</p>
          <p class="mt-4 max-w-xs text-sm leading-6 text-muted">
            SOC labs, detection workflows, and analyst-ready documentation — from Phnom Penh.
          </p>
          <a :href="contact.resumeUrl" class="button-primary mt-5 w-fit text-sm">
            <Download class="h-4 w-4" />
            Download CV
          </a>
        </div>

        <!-- Quick links -->
        <div>
          <p class="mono text-[11px] uppercase tracking-wide text-muted">Quick Links</p>
          <ul class="mt-4 grid gap-2.5">
            <li v-for="link in quickLinks" :key="link.label">
              <a :href="link.href" class="quiet-link text-sm font-medium">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Socials -->
        <div>
          <p class="mono text-[11px] uppercase tracking-wide text-muted">Connect</p>
          <ul class="mt-4 grid gap-2.5">
            <li v-for="social in socials" :key="social.label">
              <a
                :href="social.href"
                :target="social.href.startsWith('http') ? '_blank' : undefined"
                :rel="social.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="quiet-link inline-flex items-center gap-2.5 text-sm font-medium"
              >
                <component :is="social.icon" class="h-4 w-4 text-brand" />
                {{ social.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between"
      >
        <p>© {{ year }} {{ identity.name }}. All rights reserved.</p>
        <p class="mono">Built with Vue, TypeScript &amp; Tailwind CSS.</p>
      </div>
    </div>
  </footer>
</template>
