import { portfolioData } from "@/data/portfolio-data";
import { Terminal, ArrowUp } from "lucide-react";

export function Footer() {
  const { personalInfo } = portfolioData;

  return (
    <footer className="border-t border-border/60 bg-background/50 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <Terminal className="h-3.5 w-3.5 text-primary" />
          <span>
            {personalInfo.name} • {personalInfo.title}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <span>•</span>
          <a
            href="#overview"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            <ArrowUp className="h-3 w-3" />
            <span>Top</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
