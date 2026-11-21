"use client";

import { portfolioData } from "@/data/portfolio-data";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Zap,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function HeroSection() {
  const { personalInfo, metrics } = portfolioData;

  const metricIcons = [
    <Cpu key="cpu" className="h-5 w-5 text-blue-400" />,
    <Layers key="layers" className="h-5 w-5 text-emerald-400" />,
    <Database key="db" className="h-5 w-5 text-purple-400" />,
    <Zap key="zap" className="h-5 w-5 text-amber-400" />,
  ];

  return (
    <section id="overview" className="relative pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Background ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30 blur-3xl">
        <div className="h-72 w-[38rem] bg-gradient-to-tr from-blue-600/30 to-emerald-500/20" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>{personalInfo.statusBadge}</span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="mt-6 max-w-4xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mt-3 text-xl font-medium tracking-tight text-primary sm:text-2xl">
            {personalInfo.title}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {personalInfo.summary}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-primary/20"
          >
            <span>Explore Architecture Deep Dives</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-card-hover"
          >
            <LinkedinIcon className="h-4 w-4 text-blue-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-card-hover"
          >
            <GithubIcon className="h-4 w-4 text-foreground" />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-card-hover"
          >
            <Mail className="h-4 w-4 text-emerald-400" />
            <span>Email</span>
          </a>
        </div>

        {/* Bento Grid - Core Scalability Metrics */}
        <div className="mt-14">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Production Scale & Technical Impact
            </h2>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              Verified In Production
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, idx) => (
              <div
                key={metric.label}
                className="group relative overflow-hidden rounded-xl border border-border/70 bg-card/60 p-5 backdrop-blur-sm transition-all hover:border-border hover:bg-card-hover hover:translate-y-[-2px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-secondary/80">
                    {metricIcons[idx % metricIcons.length]}
                  </div>
                  {metric.highlight && (
                    <span className="font-mono text-[11px] text-muted-foreground/80">
                      {metric.highlight}
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <div className="font-mono text-3xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-foreground/90">
                    {metric.label}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
