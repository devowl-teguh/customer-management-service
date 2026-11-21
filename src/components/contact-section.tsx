"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function ContactSection() {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Direct Links & Reach out */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Get In Touch</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Let&apos;s Discuss Systems & Architecture
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Interested in collaborating on high-volume backend microservices, event-driven
              pipelines, or seeking technical leadership and architectural guidance? Reach out
              directly via email or connect on LinkedIn.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email Card with Copy button */}
              <div className="flex items-center justify-between rounded-xl border border-border/80 bg-card/60 p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/80 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Direct Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-mono text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary/80 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/40"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border/80 bg-card/60 p-4 backdrop-blur-sm transition-all hover:border-border hover:bg-card-hover"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/80 text-blue-400">
                    <LinkedinIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">LinkedIn Network</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      linkedin.com/in/teguh-hadi-pratama
                    </div>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground">
                  Connect →
                </span>
              </a>

              {/* GitHub Card */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border/80 bg-card/60 p-4 backdrop-blur-sm transition-all hover:border-border hover:bg-card-hover"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/80 text-foreground">
                    <GithubIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">GitHub Profile</div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      github.com/devowl-teguh
                    </div>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground">
                  View Repos →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="rounded-2xl border border-border/80 bg-card/60 p-6 backdrop-blur-sm sm:p-8">
            <h3 className="text-lg font-bold text-foreground">
              Send an Inquiry
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Fill out this form to initiate an introductory conversation.
            </p>

            {formSubmitted ? (
              <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-base font-bold text-foreground">
                  Inquiry Received
                </h4>
                <p className="mt-2 text-xs text-muted-foreground">
                  Thank you for reaching out, {formData.name || "friend"}. I will review your message
                  and respond via email at {formData.email || "your address"}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-5 rounded-lg border border-border bg-secondary px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary/80"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-secondary/50 px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-secondary/50 px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tech Lead Role / Architecture Consultation"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full rounded-lg border border-border bg-secondary/50 px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-border bg-secondary/50 px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
