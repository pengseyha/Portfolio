export interface Metric {
  label: string;
  value: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  eyebrow: string;
  year: string;
  type: "Featured" | "Lab" | "Build";
  tags: string[];
  summary: string;
  role: string;
  image: string;
  stack: string[];
  metrics: Metric[];
  features: string[];
  challenge: string;
  solution: string;
  architecture: string[];
  lessons: string[];
  nextSteps: string[];
  skillsProved?: string[];
  githubUrl?: string;
  reportUrl?: string;
  liveDemoUrl?: string;
}

export interface LabEntry {
  id: string;
  title: string;
  focus: string;
  summary: string;
  tools: string[];
  outcomes: string[];
}

export interface Capability {
  id: string;
  title: string;
  premise: string;
  evidence: string[];
  proof: string;
  tools: string[];
}

export interface LabSystem {
  id: string;
  name: string;
  role: string;
  evidence: string;
  image: string;
}

export interface Experience {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  provider: string;
  year: string;
  focus: string;
  verifyUrl?: string;
}

export interface GithubActivity {
  label: string;
  value: string;
  detail: string;
}
