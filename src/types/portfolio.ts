export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  statusBadge: string;
  summary: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
  highlight?: string;
}

export interface ArchitectureCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: "Loyalty & Payments" | "Distributed Systems" | "Data & Observability" | "High Throughput";
  period: string;
  overview: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  keyArchitectures: string[];
  impact: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  leadershipHighlights?: string[];
  technologies?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  verified: boolean;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  metrics: Metric[];
  caseStudies: ArchitectureCaseStudy[];
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  education: EducationItem[];
  certifications: CertificationItem[];
}
