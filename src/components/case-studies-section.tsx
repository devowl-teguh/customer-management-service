"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import { ArchitectureCaseStudy } from "@/types/portfolio";
import {
  Server,
  Layers,
  Zap,
  Activity,
  Check,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  GitBranch,
} from "lucide-react";

export function CaseStudiesSection() {
  const { caseStudies } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModal, setActiveModal] = useState<ArchitectureCaseStudy | null>(null);

  const categories = [
    "All",
    "Loyalty & Payments",
    "Distributed Systems",
    "Data & Observability",
    "High Throughput",
  ];

  const filteredCaseStudies =
    selectedCategory === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === selectedCategory);

  return (
    <section id="architecture" className="border-t border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
              <Server className="h-3.5 w-3.5" />
              <span>System Design & Architecture</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              High-Concurrency Case Studies
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Deep dives into distributed transactional microservices, event-driven pipelines,
              and low-latency integrations engineered across 11+ years in production.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border/80 bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredCaseStudies.map((study) => (
            <div
              key={study.id}
              className="group flex flex-col justify-between rounded-xl border border-border/80 bg-card/70 p-6 backdrop-blur-sm transition-all hover:border-border hover:bg-card-hover hover:shadow-lg hover:shadow-black/20"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-primary">
                    {study.category}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {study.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {study.title}
                </h3>
                <p className="mt-1.5 text-xs font-medium text-muted-foreground">
                  {study.subtitle}
                </p>

                {/* Overview */}
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground/90">
                  {study.overview}
                </p>

                {/* Key Metrics Row */}
                <div className="mt-5 grid grid-cols-3 gap-2 rounded-lg border border-border/50 bg-secondary/40 p-3">
                  {study.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="font-mono text-xs font-bold text-foreground">
                        {m.value}
                      </div>
                      <div className="mt-0.5 text-[10px] text-muted-foreground">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Architecture Highlights Preview */}
                <div className="mt-5 space-y-1.5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Core Engineering Highlights
                  </div>
                  {study.keyArchitectures.slice(0, 2).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tech tags + Inspect button */}
              <div className="mt-6 border-t border-border/50 pt-4">
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {study.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-secondary/80 px-2 py-0.5 font-mono text-[10px] font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.technologies.length > 5 && (
                    <span className="rounded bg-secondary/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                      +{study.technologies.length - 5} more
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModal(study)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary/50 py-2 text-xs font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
                >
                  <span>View System Architecture & Impact</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for In-depth Case Study Inspection */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <span className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 font-mono text-xs font-medium text-primary">
                {activeModal.category}
              </span>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="rounded-lg border border-border p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <h3 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">
              {activeModal.title}
            </h3>
            <p className="mt-1 text-sm text-primary font-medium">
              {activeModal.subtitle}
            </p>

            <div className="mt-4 rounded-lg border border-border/60 bg-secondary/30 p-4 text-sm leading-relaxed text-muted-foreground">
              {activeModal.overview}
            </div>

            {/* Metrics */}
            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold">
                Performance & Operational Metrics
              </h4>
              <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {activeModal.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-border bg-secondary/40 p-3"
                  >
                    <div className="text-xs text-muted-foreground">{m.label}</div>
                    <div className="mt-1 font-mono text-base font-bold text-foreground">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Solutions */}
            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold flex items-center gap-2">
                <GitBranch className="h-4 w-4 text-blue-400" />
                Architectural Decisions & Implementation
              </h4>
              <ul className="mt-3 space-y-2">
                {activeModal.keyArchitectures.map((arch, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground"
                  >
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Measurable Impact */}
            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-foreground font-bold flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                Production Impact
              </h4>
              <ul className="mt-3 space-y-2">
                {activeModal.impact.map((imp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-foreground/90"
                  >
                    <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mt-6 border-t border-border pt-4">
              <div className="text-xs font-mono text-muted-foreground mb-2">
                Technologies & Tools:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeModal.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="rounded-lg bg-secondary px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary/80"
              >
                Close Breakdown
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
