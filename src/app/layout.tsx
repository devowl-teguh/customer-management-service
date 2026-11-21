import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teguh Hadi Pratama | Senior Backend Engineer & Tech Lead",
  description:
    "Portfolio and system architecture deep-dives of Teguh Hadi Pratama — Senior Backend Engineer & Tech Lead specializing in high-concurrency transactional systems, Kafka event streams, idempotency, and distributed microservices.",
  keywords: [
    "Teguh Hadi Pratama",
    "Senior Backend Engineer",
    "Tech Lead",
    "Kafka",
    "Go",
    "Java Spring Boot",
    "NestJS",
    "Distributed Systems",
    "Microservices",
    "Idempotency",
    "Google Cloud",
  ],
  authors: [{ name: "Teguh Hadi Pratama", url: "https://github.com/devowl-teguh" }],
  openGraph: {
    title: "Teguh Hadi Pratama | Senior Backend Engineer & Tech Lead",
    description:
      "11+ years engineering high-volume loyalty, payment, and distributed transaction platforms.",
    url: "https://github.com/devowl-teguh",
    siteName: "Teguh Hadi Pratama Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
