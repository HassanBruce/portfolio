// ============================================================================
// SINGLE SOURCE OF TRUTH for the portfolio.
// Everything the site renders comes from this file. Edit here, the UI updates.
//
// Fields marked `TODO` are things Rana has NOT yet provided. They are left
// intentionally blank/placeholder rather than fabricated. Fill them in and the
// relevant UI (contact links, years-of-experience) appears automatically.
// ============================================================================

export const profile = {
  name: "Rana Waleed",
  title: "Full Stack Software Engineer",
  // Short tagline shown large in the hero.
  tagline: "I build complete software products — from idea to deployment.",
  // Longer positioning paragraph (About section).
  summary:
    "I'm a Full Stack Software Engineer who enjoys building complete software products from idea to deployment. I like solving real business problems through scalable web applications, clean architecture, and intuitive user experiences. My focus areas are SaaS platforms, AI-powered products, developer tools, and cloud-based systems.",
  location: "Lahore, Punjab, Pakistan",
  // Portrait shown in the hero. Save your headshot to public/portrait.jpg.
  // Set to "" to hide the portrait and show a text-only hero.
  photo: "/portrait.jpg",
  // Confirmed by Rana: 4+ years professional experience.
  yearsOfExperience: 4 as number | null,
  availability: [
    "Remote",
    "International",
    "Contract / Freelance",
    "Full-Time",
  ],
  relocation: "Open to discussing the right opportunity.",
  // Domains Rana builds in — used in the hero marquee / focus band.
  focus: [
    "SaaS Platforms",
    "AI-Powered Products",
    "Developer Tools",
    "Cloud Systems",
  ],
};

// ▼▼▼ FILL THESE IN — just put your URL between the quotes. ▼▼▼
// Anything left as "" is automatically hidden from the site (no broken/fake links).
export const links = {
  email: "", // <-- your email, e.g. "rana@example.com"  (becomes a mailto: button)
  github: "", // <-- e.g. "https://github.com/your-username"
  linkedin: "", // <-- e.g. "https://linkedin.com/in/your-handle"
  x: "", // <-- optional, e.g. "https://x.com/your-handle"
  website: "", // <-- optional, your custom domain
};

// Grouped so the Skills section renders as categorized clusters, not a flat list.
export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Flowbite",
      "Vite",
    ],
  },
  {
    category: "State Management",
    items: ["Redux Toolkit", "React Query"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "WebSockets (Socket.IO)",
      "Firebase",
    ],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Prisma", "Firestore", "Supabase", "IndexedDB"],
  },
  {
    category: "Auth & Security",
    items: [
      "JWT",
      "Firebase Auth",
      "Passwordless / OTP",
      "Role-Based Access Control",
      "Protected Routing",
    ],
  },
  {
    category: "Cloud & Deployment",
    items: [
      "Vercel",
      "Docker",
      "VPS / Nginx",
      "Firebase Hosting",
      "Cloudinary",
    ],
  },
  {
    category: "Practices",
    items: [
      "Scalable Architecture",
      "Offline-First / PWA",
      "Data Modeling",
      "Audit Logging",
      "Performance Optimization",
    ],
  },
];

export type Project = {
  name: string;
  oneLiner: string;
  type: string;
  problem: string;
  hardPart: string;
  stack: string[];
  highlights: string[];
  status: string;
  // Optional real links only. Never invent these.
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Agriculture E-Commerce & Marketplace Platform",
    oneLiner:
      "A multi-service agriculture marketplace — buyer web app, operations console, and a separate retail-admin — with payments, payouts, disputes, and realtime support.",
    type: "Freelance / Client Platform",
    problem:
      "Connects agricultural buyers and sellers in a complete marketplace: bookings, payments and payouts, dispute resolution, and a retail storefront — each with distinct admin tooling for platform operators and retail managers.",
    hardPart:
      "Money movement and access control at scale: an idempotent payout ledger with escrow-style fund release over a third-party gateway, role-scoped authorization across three front-ends (including closing a privilege-escalation gap), and a cross-origin JWT refresh cycle that had to stay correct in production.",
    stack: [
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "React",
      "Vite",
      "WebSockets (Socket.IO)",
      "JWT Auth",
      "Docker Compose",
      "Cloudinary",
      "VPS / Nginx",
    ],
    highlights: [
      "Three front-ends on one API: buyer web, ops console, retail admin",
      "Realtime support chat with agent escalation over WebSockets",
      "Role-scoped RBAC + server-side audit logging",
      "Payments, payouts & fee logic with dispute workflows",
    ],
    status: "Client platform · Deployed (VPS, staging + prod) · Private",
  },
  {
    name: "Offline-First Field Operations PWA",
    oneLiner:
      "A mobile-first PWA for field guides — passwordless signup, offline-capable trip logging, QR-linked public profiles, and an admin verification workflow.",
    type: "Freelance / Client PWA",
    problem:
      "Gives field guides a phone-first tool to build a verified public profile, log trips and catch-and-release data even with no signal in the field, and share a QR-linked profile — while admins review applications and monitor platform activity.",
    hardPart:
      "Trustworthy offline sync: IndexedDB as the on-device source of truth, client-generated UUIDs for idempotent (duplicate-free) syncing, dependency-ordered pushes, and automatic retries on reconnect.",
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS 4",
      "Supabase (Postgres)",
      "Twilio SMS OTP",
      "IndexedDB",
      "Service Workers",
      "PWA",
      "Vercel",
    ],
    highlights: [
      "Offline-first sync — IndexedDB source of truth, idempotent reconnect sync",
      "Passwordless SMS-OTP authentication",
      "Client-side QR generation with PNG + PDF export",
      "Admin verification with signed-URL document review",
    ],
    status: "Client PWA · Installable (PWA) · Private",
  },
  {
    name: "Practitioner Scheduling & Admin Platform",
    oneLiner:
      "A two-app platform for practitioners and platform admins — client management, timezone-aware scheduling, a resource library, Stripe payments, and 2FA-secured accounts.",
    type: "Freelance / Client Platform",
    problem:
      "Gives practitioners a portal to manage their clients, appointments, resources, and payments, backed by a separate admin application for platform operations — with secure accounts and reliable scheduling across time zones.",
    hardPart:
      "Timezone-correct scheduling across zones (the right absolute instant, not naive local time), TOTP two-factor auth, and Stripe payments — spanning two role-separated apps on one shared backend.",
    stack: [
      "React",
      "Vite",
      "Redux Toolkit",
      "React Query",
      "Ant Design",
      "Tailwind CSS",
      "Firebase",
      "Cloud Functions",
      "Stripe",
      "SendGrid",
      "Speakeasy (TOTP 2FA)",
      "jsPDF",
      "Vercel",
    ],
    highlights: [
      "Two-app architecture: practitioner portal + admin console on one backend",
      "TOTP two-factor auth + email verification flows",
      "Timezone-aware appointment scheduling with calendar",
      "Stripe payments + PDF record generation",
    ],
    status: "Client platform · Deployed (Vercel) · Private",
  },
  {
    name: "Restaurant Marketplace & Admin Platform",
    oneLiner:
      "A full-stack restaurant marketplace with a role-based admin dashboard for restaurants, products, users, and approval workflows.",
    type: "Personal Product",
    problem:
      "Gives restaurant owners a platform to manage their business while giving administrators complete control over onboarding, approvals, user management, and platform operations.",
    hardPart:
      "Modeling a relational marketplace on a query-limited NoSQL store — deliberate denormalization, composite indexes, and search paths that stay fast as data grows, with role-based access enforced across a large admin surface.",
    stack: [
      "React",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Material UI",
      "Flowbite",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "Firebase Hosting",
    ],
    highlights: [
      "Scalable Firestore collection/subcollection data model",
      "Composite indexes & search optimization under query constraints",
      "Role-based permissions with protected routing",
      "State optimization for large dashboard views",
    ],
    status: "Screenshots available · Repository private",
  },
  {
    name: "Secure Marketplace MVP",
    oneLiner:
      "A secure, role-based marketplace MVP for business workflow management using passwordless authentication.",
    type: "Freelance / Client MVP",
    problem:
      "Lets multiple user roles securely access a marketplace platform while enabling a non-technical owner to manage workflows through an intuitive administration system.",
    hardPart:
      "A secure role-based authorization model over passwordless magic-link auth, with an MVP architecture deliberately shaped to scale without a later rewrite.",
    stack: [
      "React",
      "Node.js",
      "Passwordless Email Magic Links",
      "Firebase",
      "REST APIs",
      "Cloud Deployment",
    ],
    highlights: [
      "Passwordless magic-link authentication",
      "Role-based authorization model",
      "Architecture balancing speed-to-MVP with scalability",
    ],
    status: "Confidential client project",
  },
  {
    name: "AI-Powered Media Processing Tool",
    oneLiner:
      "A custom media processing solution built to replace an expensive third-party image-editing dependency with an in-house implementation.",
    type: "Personal / Product Development",
    problem:
      "Reduces dependency on costly third-party subscriptions by implementing custom media-editing functionality, giving greater control over features and cost.",
    hardPart:
      "A build-vs-buy call: an in-house image-editing pipeline designed for extensibility and predictable performance, replacing a costly third-party dependency.",
    stack: ["React", "Node.js", "Custom Processing Logic", "Cloud-ready"],
    highlights: [
      "In-house replacement for a paid third-party service",
      "Architecture focused on extensibility and cost control",
    ],
    status: "Internal project · Repository private",
  },
  {
    name: "Role-Based Administration Framework",
    oneLiner:
      "A reusable administrative system for managing users, permissions, business entities, approvals, and operational workflows across web apps.",
    type: "Personal Framework",
    problem:
      "Eliminates repetitive development by providing a reusable architecture for secure admin panels and business-management systems.",
    hardPart:
      "Generalizing without over-abstracting — a config-driven foundation (permissions, protected routing, CRUD patterns) reusable across products without becoming a leaky abstraction.",
    stack: [
      "React",
      "Redux Toolkit",
      "React Query",
      "Firebase",
      "Firestore",
      "Tailwind CSS",
      "Material UI",
    ],
    highlights: [
      "Reusable state-management & CRUD patterns",
      "Modular, maintainable component architecture",
      "Dynamic filtering + protected routing",
      "Foundation reused across future applications",
    ],
    status: "Screenshots available · Reusable internal foundation",
  },
];
