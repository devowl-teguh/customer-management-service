"use client";

import { portfolioData } from "@/data/portfolio-data";
import { Briefcase, Calendar, MapPin, Users, Award, Code2 } from "lucide-react";

export function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="border-t border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            11+ Years of Engineering & Technical Leadership
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            From full-stack web applications in 2013 to leading backend microservices,
            distributed transaction systems, and mentoring engineering teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12 border-l border-border/80 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.company + exp.period} className="relative group">
              {/* Timeline Node Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background ${
                  index === 0
                    ? "bg-primary ring-4 ring-primary/20"
                    : "bg-muted-foreground/60"
                }`}
              />

              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5 text-sm font-semibold text-primary">
                    <span>{exp.company}</span>
                    {exp.location && (
                      <>
                        <span className="text-muted-foreground/60">•</span>
                        <span className="flex items-center gap-1 text-xs font-normal text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-secondary/50 px-3 py-1 font-mono text-xs font-medium text-muted-foreground w-fit">
                  <Calendar className="h-3 w-3" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Leadership Block (if present) */}
              {exp.leadershipHighlights && exp.leadershipHighlights.length > 0 && (
                <div className="mt-4 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 font-mono uppercase tracking-wider">
                    <Users className="h-3.5 w-3.5" />
                    <span>Technical Leadership & Mentorship</span>
                  </div>
                  <ul className="mt-2.5 space-y-1.5">
                    {exp.leadershipHighlights.map((lead, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                        <span>{lead}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Engineering Highlights */}
              <div className="mt-4">
                <ul className="space-y-2">
                  {exp.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border group-hover:bg-primary transition-colors" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-secondary/70 px-2 py-0.5 font-mono text-[10px] text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
