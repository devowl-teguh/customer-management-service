"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";
import { Mail, Menu, X, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personalInfo } = portfolioData;

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Architecture", href: "#architecture" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Logo */}
        <Link
          href="#overview"
          className="group flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary/80 text-primary transition-transform group-hover:scale-105">
            <Terminal className="h-4 w-4" />
          </div>
          <span className="flex items-center gap-1.5">
            <span className="text-primary font-bold">teguh</span>
            <span className="text-muted-foreground">/</span>
            <span>backend-lead</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social CTAs */}
        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-secondary/50 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-secondary/50 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-3 border-t border-border pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
              >
                <GithubIcon className="h-3.5 w-3.5" /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
              >
                <LinkedinIcon className="h-3.5 w-3.5" /> LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground"
              >
                <Mail className="h-3.5 w-3.5" /> Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
