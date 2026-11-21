"use client";

import { portfolioData } from "@/data/portfolio-data";
import { Wrench, Terminal, Cpu, Database, Cloud, Activity, Globe } from "lucide-react";

export function SkillsSection() {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Terminal className="h-4 w-4 text-blue-400" />;
      case "Frameworks & Runtimes":
        return <Cpu className="h-4 w-4 text-emerald-400" />;
      case "Backend & System Architecture":
        return <Wrench className="h-4 w-4 text-purple-400" />;
      case "Databases, Caching & Messaging":
        return <Database className="h-4 w-4 text-amber-400" />;
      case "Cloud, Infrastructure & Delivery":
        return <Cloud className="h-4 w-4 text-cyan-400" />;
      case "Observability & Reliability":
        return <Activity className="h-4 w-4 text-rose-400" />;
      case "Languages Spoken":
        return <Globe className="h-4 w-4 text-indigo-400" />;
      default:
        return <Terminal className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <section id="skills" className="border-t border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
            <Cpu className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Languages, Systems & Tooling Matrix
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Core technologies and distributed systems infrastructure leveraged to build resilient,
            high-throughput backend applications.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm transition-all hover:border-border hover:bg-card-hover hover:translate-y-[-2px]"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/80 bg-secondary/80">
                  {getCategoryIcon(group.category)}
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-foreground">
                  {group.category}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border/70 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
