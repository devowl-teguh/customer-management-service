"use client";

import { portfolioData } from "@/data/portfolio-data";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export function EducationSection() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="border-t border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Academic Background</span>
            </div>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Education
            </h2>

            <div className="mt-6 space-y-4">
              {education.map((item) => (
                <div
                  key={item.institution}
                  className="rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">
                        {item.institution}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.location}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
              <Award className="h-3.5 w-3.5" />
              <span>Industry Credentials</span>
            </div>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Certifications
            </h2>

            <div className="mt-6 space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-between rounded-xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm transition-all hover:border-border hover:bg-card-hover"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/80 text-emerald-400">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>

                  {cert.verified && (
                    <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
