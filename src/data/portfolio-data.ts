import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Teguh Hadi Pratama",
    title: "Senior Backend Engineer | Tech Lead",
    location: "Indonesia",
    email: "teguhh.pratama@gmail.com",
    linkedin: "https://linkedin.com/in/teguh-hadi-pratama",
    github: "https://github.com/devowl-teguh",
    statusBadge: "Open for Senior / Tech Lead Roles & Architecture Advisory",
    summary:
      "Software engineer since 2013, starting in full-stack web development and working as a dedicated backend engineer since 2018. At MEMBER.ID, owns backend services for loyalty products used by major F&B and hotel brands, serving more than 3 million members and approximately 50,000 daily transactions. Leads engineering projects from grooming to release, mentors junior engineers, and builds resilient, high-volume transaction and payment microservices with Java (Spring Boot), Go, and NestJS using Kafka, Redis, MongoDB, and MySQL on Google Cloud — with an uncompromising focus on correctness, idempotency, and observability.",
  },

  metrics: [
    {
      label: "Years in Engineering",
      value: "11+",
      description: "Full-stack roots since 2013, dedicated backend & distributed systems since 2018",
      highlight: "2013 – Present",
    },
    {
      label: "Members Served",
      value: "3M+",
      description: "High-scale multi-brand loyalty platforms powering premier F&B and hospitality groups",
      highlight: "MEMBER.ID Ecosystem",
    },
    {
      label: "Daily Transactions",
      value: "50k+",
      description: "Mission-critical payment processing, ledger updates, and point redemptions",
      highlight: "Continuous High Throughput",
    },
    {
      label: "Checkout Latency Reduction",
      value: "2s → 200ms",
      description: "Architected Kafka event-driven pipelines with idempotent consumers and safe retries",
      highlight: "10x Performance Boost",
    },
  ],

  caseStudies: [
    {
      id: "solva-loyalty-platform",
      title: "Solva: F&B Multi-Brand Loyalty & Transactions Engine",
      subtitle: "Event-driven microservices connecting national POS systems with sub-second checkout speeds",
      category: "Loyalty & Payments",
      period: "MEMBER.ID",
      overview:
        "Engineered the core membership, points accumulation, and rewards redemption services for Solva, integrating POS terminals from nationwide F&B brands including Sushi Hiro, Biko, Kawano, and Capital Bakery. Designed high-concurrency event streams on Apache Kafka with idempotent message consumers to guarantee zero double-counting of financial points or payments.",
      technologies: [
        "NestJS",
        "Apache Kafka",
        "Redis",
        "MySQL",
        "MongoDB",
        "Midtrans",
        "Xendit",
        "Postmark",
        "Docker",
      ],
      metrics: [
        { label: "Checkout API Latency", value: "200 ms (from 2s)" },
        { label: "Transaction Reliability", value: "100% Idempotent" },
        { label: "Active Brands", value: "Sushi Hiro, Biko, Kawano, etc." },
      ],
      keyArchitectures: [
        "Kafka Event Streams: Decoupled transactional checkout flow from third-party notification and POS sync.",
        "Idempotent Consumers: Implemented distributed Redis locks and unique transaction deduplication keys to eliminate duplicate point allocations on network retries.",
        "Multi-Gateway Payment Integration: Seamlessly integrated Midtrans and Xendit checkout webhooks with resilient fallback routines.",
        "Notification Pipeline: High-speed automated SMS, WhatsApp, and transactional emails via Verihubs, Qiscus, and Postmark.",
      ],
      impact: [
        "Reduced critical checkout API response latency by 90% (from ~2000ms down to 200ms).",
        "Protected loyalty balance integrity during high-concurrency brand marketing campaigns and flash promotions.",
      ],
    },
    {
      id: "hotel-loyalty-ledger",
      title: "Hospitality Loyalty Platform & Audit-Trail Ledger",
      subtitle: "High-integrity points ledger, gRPC internal services, and property management integrations",
      category: "Distributed Systems",
      period: "MEMBER.ID",
      overview:
        "Built and maintain an enterprise-grade custom loyalty platform for a premier hotel group. Developed Node.js and Fastify microservices exposing REST and gRPC interfaces for member mobile applications, admin CMS, and internal backend services. Integrated hotel property management and POS systems so guests earn and redeem points seamlessly.",
      technologies: [
        "Node.js",
        "Fastify",
        "gRPC",
        "MySQL",
        "Redis",
        "VHP Booking Engine",
        "VHP POS",
        "Raptor POS",
      ],
      metrics: [
        { label: "Internal Protocol", value: "gRPC & REST" },
        { label: "Ledger Type", value: "Double-Entry Audit Trail" },
        { label: "Integration Scope", value: "Room Stays + F&B Outlets" },
      ],
      keyArchitectures: [
        "Immutable Points Ledger: Every earn, redeem, expiration, and retroactive claim is recorded as an immutable ledger transaction.",
        "Tier Progression Engine: Automated background workers recalculate membership tiers based on rolling annual spending and promotional challenges.",
        "PMS/POS Synchronization: Two-way synchronization with VHP hotel booking engine, VHP POS, and Raptor POS.",
        "High-Speed gRPC Communication: Ultra-low latency RPC communication between internal services and admin CMS.",
      ],
      impact: [
        "Delivered a zero-reconciliation-drift points accounting system trusted by hotel finance and operations teams.",
        "Enabled instant cross-outlet point earning and voucher redemption across rooms and restaurants.",
      ],
    },
    {
      id: "sales-tracking-geofence",
      title: "Real-Time Field Sales Tracking & Geofencing System",
      subtitle: "High-frequency location ingestion with offline synchronization and geofence verification",
      category: "Distributed Systems",
      period: "MEMBER.ID",
      overview:
        "Architected the backend for a real-time field sales tracking system handling continuous 10-second GPS location pings from mobile clients across distributed client and corporate branches.",
      technologies: [
        "NestJS",
        "MySQL",
        "Redis",
        "Geofencing Algorithms",
        "Bull Queue",
        "Background Jobs",
      ],
      metrics: [
        { label: "Ping Cadence", value: "10-second intervals" },
        { label: "Sync Mode", value: "Offline & Online" },
        { label: "Validation", value: "Dynamic Radius Check" },
      ],
      keyArchitectures: [
        "Geofencing Engine: Evaluates incoming coordinates against configurable radial boundaries around branch offices and client locations.",
        "Offline-First Ingestion Pipeline: Processes queued and batched coordinates recorded during mobile signal dropouts without corrupting chronological timelines.",
        "Background Queue Processing: Offloaded time-intensive geofence checks and attendance events to Bull queue workers.",
      ],
      impact: [
        "Provided transparent real-time location and check-in auditability for corporate sales managers.",
        "Zero data loss during remote field operations with intermittent cellular connectivity.",
      ],
    },
    {
      id: "platform-observability-analytics",
      title: "Production Observability & BigQuery Data Pipeline",
      subtitle: "Distributed tracing, centralized request logging, and analytical segmentation pipelines",
      category: "Data & Observability",
      period: "MEMBER.ID",
      overview:
        "Designed and implemented centralized observability and analytical data pipelines across all production microservices, turning millions of daily API interactions into actionable member segmentation metrics.",
      technologies: [
        "Google Cloud Run",
        "BigQuery",
        "Elasticsearch",
        "OpenSearch",
        "Google Cloud Logging",
        "Sentry",
        "Cloud Run Jobs",
      ],
      metrics: [
        { label: "Telemetry", value: "Centralized Gateway" },
        { label: "Analytics Engine", value: "Google BigQuery" },
        { label: "Batch Compute", value: "Cloud Run Jobs" },
      ],
      keyArchitectures: [
        "API Gateway Request/Response Logging: Centralized logging stream to Elasticsearch and OpenSearch for instant trace discovery.",
        "Automated Error Triage: Sentry error aggregation and Google Cloud Logging alerts for incident response and root-cause analysis.",
        "BigQuery ETL Pipelines: Scheduled Cloud Run Jobs streaming transactional data into BigQuery to calculate per-member engagement and tier scores.",
      ],
      impact: [
        "Significantly reduced Mean Time to Resolution (MTTR) during production incidents.",
        "Empowered product and marketing teams with real-time member segmentation and reporting dashboards.",
      ],
    },
    {
      id: "flash-sale-engine",
      title: "E-Commerce Flash-Sale Order & Traffic Spike Absorber",
      subtitle: "High-concurrency Go services with RabbitMQ message queue buffering",
      category: "High Throughput",
      period: "Dusdusan Dotcom Indonesia",
      overview:
        "Built server-side features and REST APIs in Go for an e-commerce platform, designing an asynchronous order handling queue with RabbitMQ to protect relational databases during massive flash-sale traffic surges.",
      technologies: [
        "Go (Golang)",
        "RabbitMQ",
        "REST APIs",
        "MySQL",
        "Microservices",
      ],
      metrics: [
        { label: "Language", value: "Go (Golang)" },
        { label: "Queue Broker", value: "RabbitMQ" },
        { label: "Peak Protection", value: "100% Uptime" },
      ],
      keyArchitectures: [
        "Queue-Buffered Order Intake: Ingested purchase requests into RabbitMQ queues, decoupling instantaneous traffic spikes from database write capacity.",
        "Lightweight Go Concurrency: Utilized Go goroutines and channels for ultra-lean memory footprints and maximum request throughput.",
      ],
      impact: [
        "Prevented database connection exhaustion and cascading timeouts during scheduled flash-sale campaigns.",
      ],
    },
  ],

  experiences: [
    {
      company: "MEMBER.ID",
      role: "Senior Software Engineer (Backend) | Tech Lead",
      period: "Nov 2018 – Present",
      location: "Jakarta, Indonesia",
      leadershipHighlights: [
        "Act as Tech Lead on high-impact projects: lead grooming sessions with Product Managers and UI/UX designers, then architect technical tasks, delivery timelines, and team sizing.",
        "Mentor junior backend engineers since 2023 through systematic code reviews, system design guidance, and engineering onboarding.",
        "Step in to rescue critical timelines: when teammates were reassigned mid-project, autonomously assumed total project scope and delivered on schedule.",
        "Build enterprise transaction-handling services in Java (Spring Boot) for clients with strict enterprise microservice governance.",
      ],
      highlights: [
        "End-to-End Ownership: Own core backend services for flagship loyalty products across F&B and hotel brands (3M+ members, ~50,000 daily transactions).",
        "F&B Loyalty Platform (Solva): Built membership, points, and rewards services connecting POS systems of Sushi Hiro, Biko, Kawano, and Capital Bakery.",
        "Event-Driven Architecture: Designed Kafka-based transaction processing with idempotent consumers and safe retries, dropping checkout latency from 2s to 200ms.",
        "Hotel Loyalty Platform: Built Node.js & Fastify services with REST and gRPC APIs, integrating VHP booking engine and Raptor POS with an immutable points ledger.",
        "Field Sales Tracking: Engineered GPS tracking backend (10s pings), geofenced visit verification, and offline sync background jobs.",
        "Observability & BigQuery: Built telemetry pipelines to Elasticsearch/OpenSearch and BigQuery analytics pipelines via Cloud Run Jobs.",
      ],
      technologies: [
        "Java (Spring Boot)",
        "Go",
        "NestJS",
        "Node.js (Fastify)",
        "Apache Kafka",
        "Redis",
        "Google Cloud",
        "MySQL",
        "MongoDB",
        "BigQuery",
        "gRPC",
      ],
    },
    {
      company: "Dusdusan Dotcom Indonesia",
      role: "Backend Programmer",
      period: "May 2018 – Oct 2018",
      location: "Indonesia",
      highlights: [
        "Developed high-throughput server-side services and RESTful APIs using Go (Golang) for a major Indonesian e-commerce platform.",
        "Implemented RabbitMQ message queue architectures to buffer high-concurrency order placement during flash-sale events.",
      ],
      technologies: ["Go (Golang)", "RabbitMQ", "REST APIs", "MySQL"],
    },
    {
      company: "Dokter.ID",
      role: "Full-stack Developer",
      period: "May 2016 – Apr 2018",
      location: "Indonesia",
      highlights: [
        "Engineered React frontends and scalable Laravel REST APIs for an online health information and medical consultation platform.",
        "Maintained high reliability and data privacy for medical information distribution.",
      ],
      technologies: ["React", "Laravel", "PHP", "MySQL", "JavaScript"],
    },
    {
      company: "Printerous",
      role: "Full-stack Developer",
      period: "Jan 2016 – Apr 2016",
      location: "Indonesia",
      highlights: [
        "Built interactive React frontends, Laravel backend features, and partner API integrations for an online on-demand printing platform.",
      ],
      technologies: ["React", "Laravel", "PHP", "APIs"],
    },
    {
      company: "PT. eBdesk Teknologi",
      role: "Full-stack Developer",
      period: "Jan 2013 – Dec 2015",
      location: "Indonesia",
      highlights: [
        "Built, maintained, and delivered full-stack web applications and APIs end to end across diverse enterprise client projects.",
      ],
      technologies: ["PHP", "JavaScript", "SQL", "Web Applications", "APIs"],
    },
  ],

  skillCategories: [
    {
      category: "Programming Languages",
      skills: ["Java", "Go (Golang)", "TypeScript", "JavaScript", "Python", "PHP", "SQL"],
    },
    {
      category: "Frameworks & Runtimes",
      skills: [
        "Spring Boot",
        "NestJS",
        "Fiber",
        "Gin",
        "Fastify",
        "Node.js",
        "Next.js",
        "React",
        "FastAPI",
        "Laravel",
      ],
    },
    {
      category: "Backend & System Architecture",
      skills: [
        "Microservices Architecture",
        "Event-Driven Architecture",
        "RESTful APIs",
        "gRPC & Protocol Buffers",
        "Idempotent Consumer Patterns",
        "Distributed Locking",
        "Background Queue Processing",
        "Audit-Trail Ledgers",
      ],
    },
    {
      category: "Databases, Caching & Messaging",
      skills: [
        "Apache Kafka",
        "RabbitMQ",
        "Redis",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Elasticsearch",
        "OpenSearch",
        "Google BigQuery",
        "Bull Queue",
      ],
    },
    {
      category: "Cloud, Infrastructure & Delivery",
      skills: [
        "Google Cloud Platform (GCP)",
        "GCP Cloud Run & Cloud Run Jobs",
        "GCP Cloud Functions",
        "GCP Cloud SQL",
        "Docker & Containerization",
        "GitHub Actions",
        "CI/CD Pipelines",
        "DigitalOcean",
      ],
    },
    {
      category: "Observability & Reliability",
      skills: [
        "Google Cloud Logging",
        "Elasticsearch / Kibana",
        "OpenSearch",
        "Sentry Error Monitoring",
        "Incident Root Cause Analysis (RCA)",
      ],
    },
    {
      category: "Languages Spoken",
      skills: ["Indonesian (Native)", "English (Professional)"],
    },
  ],

  education: [
    {
      degree: "Bachelor's Degree in Informatics Engineering",
      institution: "Universitas Komputer Indonesia (UNIKOM)",
      location: "Bandung, Indonesia",
      year: "Graduated 2012",
    },
  ],

  certifications: [
    {
      name: "Braze Certified Developer",
      issuer: "Braze",
      verified: true,
    },
    {
      name: "Braze Certified Technical Marketing Expert",
      issuer: "Braze",
      verified: true,
    },
  ],
};
