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
  // TODO: Rana to confirm actual number of professional years. Leave null to hide.
  yearsOfExperience: null as number | null,
  availability: [
    "Remote",
    "International",
    "Contract / Freelance",
    "Full-Time",
  ],
  relocation: "Open to discussing the right opportunity.",
};

// TODO: replace placeholder hrefs with real URLs. Set `href` to "" to hide a link.
export const links = {
  email: "", // e.g. "rana@example.com"
  github: "", // e.g. "https://github.com/username"
  linkedin: "", // e.g. "https://linkedin.com/in/username"
  x: "", // optional
  website: "", // optional custom domain
};

// Grouped so the Skills section renders as categorized clusters, not a flat list.
export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Material UI", "Flowbite"],
  },
  {
    category: "State Management",
    items: ["Redux Toolkit", "React Query"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Firebase", "REST APIs"],
  },
  {
    category: "Database",
    items: ["Firestore", "Firebase Realtime Data"],
  },
  {
    category: "Auth & Security",
    items: [
      "Firebase Authentication",
      "Passwordless / Magic Links",
      "Role-Based Access Control",
      "Protected Routing",
    ],
  },
  {
    category: "Cloud & Deployment",
    items: ["Firebase Hosting", "Cloud Deployment"],
  },
  {
    category: "Practices",
    items: [
      "Scalable Architecture",
      "Data Modeling",
      "Reusable Component Design",
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
    name: "Restaurant Marketplace & Admin Platform",
    oneLiner:
      "A full-stack restaurant marketplace with a role-based admin dashboard for restaurants, products, users, and approval workflows.",
    type: "Personal Product",
    problem:
      "Gives restaurant owners a platform to manage their business while giving administrators complete control over onboarding, approvals, user management, and platform operations.",
    hardPart:
      "Designed a scalable Firestore structure of collections and subcollections while working around Firestore query limits — composite indexes, search optimization, role-based permissions, and protected routes. Also resolved Google Maps API initialization issues and optimized state for large dashboard views.",
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
      "Designed secure authentication flows, role-based authorization, and an MVP structure that balanced rapid delivery against future scalability.",
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
      "Researched a replacement architecture for an external image-editing service, focusing on performance, extensibility, and long-term cost optimization instead of relying on a proprietary solution.",
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
      "Built reusable state-management patterns, modular component architecture, dynamic filtering, protected routing, Firestore integration, and scalable CRUD workflows while keeping the codebase maintainable.",
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
