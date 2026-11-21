# Portfolio & CMS Design Specification

**Document Version:** 1.0  
**Target Project:** Portfolio Frontend + Content Management System (CMS)  
**Location:** `/Users/asani/Documents/personal/customer-management-service`  
**Status:** Planning & Design Phase (No Application Code Yet)

---

## 1. Design Philosophy & Aesthetic

* **Visual Style:** Modern Developer Portfolio with a **Bento Grid** layout, subtle borders, high readability, and clean micro-interactions.
* **Tone:** Professional, modern, clean, engineering-first yet visually engaging.
* **Themes:** Native **Dark Mode** (default) with seamless **Light Mode** toggle.
* **Depth & Elevation:** Flat surfaces with subtle semi-transparent borders (`border-border/40`), subtle backdrop blur (`backdrop-blur-md`), and layered card elevations rather than heavy drop shadows.

---

## 2. Design System & Visual Tokens

### 2.1 Color Palette

```
/* Dark Mode (Default) */
--background:       #09090b (Zinc 950 - Deep Charcoal/Black)
--surface:          #121215 (Elevated card background)
--surface-hover:    #18181b (Hovered card state)
--border:           #27272a (Zinc 800 - Subtle structural border)
--foreground:       #fafafa (Zinc 50 - High contrast text)
--muted:            #a1a1aa (Zinc 400 - Secondary text & descriptions)
--primary:          #3b82f6 (Electric Blue) or #6366f1 (Indigo) - Focus & CTAs
--primary-hover:    #2563eb / #4f46e5
--accent:           #10b981 (Emerald - Success / "Available for hire" status)
--destructive:      #ef4444 (Rose/Red - Delete actions & warnings)

/* Light Mode */
--background:       #ffffff (Pure White)
--surface:          #f4f4f5 (Zinc 100 - Card surface)
--surface-hover:    #e4e4e7 (Zinc 200)
--border:           #e4e4e7 (Zinc 200)
--foreground:       #09090b (Zinc 950)
--muted:            #71717a (Zinc 500)
--primary:          #2563eb (Royal Blue)
--accent:           #059669 (Emerald)
```

### 2.2 Typography Hierarchy

* **Primary Font (UI & Body):** `Inter` or `Geist Sans`
* **Heading Font:** `Geist Sans` or `Plus Jakarta Sans` (bold weights with tight tracking `-0.02em`)
* **Monospace Font (Code & Badges):** `JetBrains Mono` or `Geist Mono`

| Element | Size | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display / Hero** | `2.75rem - 3.5rem` (44-56px) | Bold (700) | 1.15 | Main Hero headline |
| **H1 (Page Titles)** | `2.00rem - 2.25rem` (32-36px) | SemiBold (600) | 1.25 | Section headers, Admin titles |
| **H2 (Card Titles)** | `1.25rem - 1.50rem` (20-24px) | SemiBold (600) | 1.35 | Project titles, modal titles |
| **Body (Default)** | `1.00rem` (16px) | Regular (400) | 1.60 | Case studies, bio descriptions |
| **Small / Meta** | `0.875rem` (14px) | Medium (500) | 1.40 | Dates, tags, metadata, table rows |
| **Micro / Badges** | `0.75rem` (12px) | SemiBold (600) | 1.20 | Tech stack chips, status pill |

### 2.3 Component Primitives

* **Buttons:**
  * *Primary:* Solid accent color (`bg-primary text-primary-foreground hover:opacity-90`), rounded-lg (8px), height 40px.
  * *Secondary:* Ghost with border (`border border-border bg-surface hover:bg-surface-hover text-foreground`).
  * *Ghost / Icon:* Minimalist transparent button for theme toggles, external links, and table action icons.
* **Cards / Bento Tiles:**
  * Bordered rounded rectangles (`rounded-xl border border-border/50 bg-surface/60 backdrop-blur-sm`).
  * Hover micro-interaction: Subtle scale (`hover:translate-y-[-2px]`), border highlight transition.
* **Chips / Badges:**
  * Monospace tech badges (`font-mono text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground`).
* **Inputs & Forms:**
  * Clean, border-focused states (`focus-visible:ring-2 focus-visible:ring-primary/40`).

---

## 3. Screen-by-Screen Layout & Wireframe Architecture

### 3.1 Public Portfolio Views

```
+-------------------------------------------------------------------------+
| [Logo/Initials]        Projects   Experience   Skills   Contact  [Theme/Admin] |
+-------------------------------------------------------------------------+
|                                                                         |
|  [Status Badge: ● Available for new opportunities]                     |
|                                                                         |
|  HERO SECTION                                                           |
|  Hi, I'm [Name].                                                        |
|  Full-Stack Software Engineer & System Architect                        |
|  Crafting clean web architectures, scalable services, and UX.           |
|                                                                         |
|  [ View Projects -> ]   [ Download Resume ]   [ GitHub ] [ LinkedIn ]   |
|                                                                         |
+-------------------------------------------------------------------------+
|                                                                         |
|  FEATURED PROJECTS (BENTO GRID)                                         |
|  Filters: [ All ] [ Full-Stack ] [ Frontend ] [ Cloud / Tools ]         |
|                                                                         |
|  +------------------------------+  +---------------------------------+  |
|  | [Project Thumbnail / Mockup] |  | [Project Thumbnail / Mockup]    |  |
|  | E-Commerce Microservices     |  | AI Analytics Dashboard          |  |
|  | Next.js, Go, PostgreSQL      |  | React, Python, BigQuery         |  |
|  | [Live Demo] [GitHub] [Details]  [Live Demo] [GitHub] [Details]    |  |
|  +------------------------------+  +---------------------------------+  |
|                                                                         |
+-------------------------------------------------------------------------+
|                                                                         |
|  EXPERIENCE & CAREER TIMELINE                                           |
|  • Senior Frontend Engineer — Tech Corp (2024 - Present)                |
|    Built modular design system and improved web core vitals by 40%.     |
|  • Full Stack Developer — Startup Inc (2022 - 2024)                     |
|    Engineered real-time data sync pipeline and customer portal.         |
|                                                                         |
+-------------------------------------------------------------------------+
|                                                                         |
|  SKILLS & TECH STACK                                                    |
|  Languages:   [ TypeScript ] [ JavaScript ] [ Python ] [ Go ] [ SQL ]   |
|  Frameworks:  [ Next.js ] [ React ] [ Node.js ] [ Tailwind CSS ]        |
|  DevOps/Data: [ Docker ] [ PostgreSQL ] [ Supabase ] [ Git ]            |
|                                                                         |
+-------------------------------------------------------------------------+
|                                                                         |
|  GET IN TOUCH                                                           |
|  Have a project in mind or want to collaborate?                         |
|  +-------------------------------------------------------------------+  |
|  | Name:    [ John Doe                                      ]       |  |
|  | Email:   [ john@example.com                              ]       |  |
|  | Message: [ Let's discuss a new project...                 ]       |  |
|  | [ Send Message -> ]                                               |  |
|  +-------------------------------------------------------------------+  |
|                                                                         |
+-------------------------------------------------------------------------+
|  © 2026 [Name]. Built with Next.js & Custom CMS.            [Back to Top] |
+-------------------------------------------------------------------------+
```

---

### 3.2 Public Project Case Study Page (`/projects/[slug]`)

* **Header:** Project Title, subtitle, live demo button, repository link, release year.
* **Hero Image / Video:** High-resolution preview of the application.
* **Project Metadata Sidebar:** Role, Duration, Tech Stack tags, Team/Solo.
* **Content Flow (Markdown/Rich Text):**
  1. *The Challenge & Context:* What problem did this project solve?
  2. *System Architecture & Technical Decisions:* Why this tech stack was chosen.
  3. *Key Features & Implementation Highlights:* Code snippets or breakdown.
  4. *Outcomes & Impact:* Metrics, performance scores, or user reception.
* **Footer Navigation:** Previous project / Next project link.

---

### 3.3 Admin CMS Dashboard (`/admin`)

#### A. Authentication (`/admin/login`)
* Minimalist centered card with username/email and secure password field.
* Session cookie protection with automatic timeout and redirect.

#### B. Dashboard Overview (`/admin`)
```
+-------------------------------------------------------------------------+
| [CMS Logo]  Portfolio Admin                  [View Live Site] [Log Out] |
+------------------+------------------------------------------------------+
| SIDEBAR          | DASHBOARD OVERVIEW                                   |
|                  |                                                      |
| [📊 Dashboard]   | [ Total Projects ]  [ Unread Messages ]  [ Skills ]  |
| [📂 Projects]    |         12                    3              24      |
| [💼 Experience]  |                                                      |
| [🛠 Skills]       | RECENT CONTACT INQUIRIES                             |
| [📩 Messages]    | • Alice Smith (alice@...) - "Project Inquiry" [View] |
| [⚙️ Settings]    | • Bob Lee (bob@...) - "Freelance Collaboration"     |
|                  |                                                      |
|                  | QUICK ACTIONS                                        |
|                  | [+ Add New Project]  [Edit Bio/Profile] [Export Data] |
+------------------+------------------------------------------------------+
```

#### C. Project Manager (`/admin/projects`)
* **List View:**
  * Search bar & category filter.
  * Drag-and-drop or rank re-ordering for display priority.
  * Columns: Thumbnail, Title, Category, "Featured" toggle switch, Date, Actions (Edit / Delete).
* **Editor View (`/admin/projects/new` or `/admin/projects/[id]`):**
  * Title & Slug auto-generation (`my-project` -> `/projects/my-project`).
  * Tagline (Short description for card previews).
  * Cover image URL / Upload preview.
  * Links: Demo URL, GitHub Repo URL.
  * Tag selector (Type to add tags e.g. `React`, `Tailwind`, `TypeScript`).
  * Full Case Study Editor: Markdown / Tiptap editor with bold, italic, headings, lists, code blocks, and embedded image support.
  * "Featured on Home" toggle.

#### D. Experience & Skills Manager (`/admin/experience`, `/admin/skills`)
* Add new jobs: Role, Company, Location, Start Date, End Date (or "Currently Working Here"), Description bullet points.
* Add/group skills: Category name (e.g., "Frontend", "Backend", "Tools"), Skill name, icon tag, priority.

#### E. Messages & Inquiries (`/admin/messages`)
* Master-detail inbox layout:
  * Left pane: Message list with unread indicator badge, sender name, timestamp, snippet.
  * Right pane: Full message text, sender email, reply button (`mailto:email`), and delete button.

---

## 4. Responsive & Interaction Design

* **Breakpoints:**
  * Mobile (`< 640px`): Single-column bento cards, slide-out drawer menu for navigation, full-width inputs.
  * Tablet (`640px - 1024px`): 2-column project grid, collapsed admin sidebar into icon bar.
  * Desktop (`> 1024px`): Full bento layout, sticky navigation bar, expanded admin sidebar.
* **Micro-Interactions (Framer Motion):**
  * Subtle fade-up on scroll for project cards and timeline nodes.
  * Active states for filter buttons (smooth sliding pill background).
  * Toast notifications (via `sonner`) for form submission, copy-to-clipboard, and CMS actions.

---

## 5. Next Steps for Implementation

Once this design plan is approved, the technical phases proceed as follows:
1. **Repository Initialization:** Set up Next.js (App Router, TypeScript, Tailwind CSS, shadcn/ui).
2. **Database Schema:** Define schema with Prisma/Drizzle (Projects, Skills, Experience, Messages, User).
3. **Admin Shell & CMS Core:** Create protected admin routes and CRUD forms.
4. **Public Portfolio Pages:** Build hero, bento project cards, case-study dynamic route, and contact form.
