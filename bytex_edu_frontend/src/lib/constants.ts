import type {
  NavLink,
  FeatureItem,
  AudienceItem,
  ProjectItem,
  StatItem,
  WhyItem,
} from "@/types";

export const SITE_CONFIG = {
  name: "Bytex Edu",
  description:
    "Bytex Edu bundles career-accelerating industry projects, mentorship and a verified portfolio with every student device — so you don't just own a laptop, you own your future.",
  url: "https://bytex.edu",
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { label: "How it works", href: "#how-it-works" },
  { label: "What's included", href: "#whats-included" },
  { label: "Career projects", href: "#projects" },
  { label: "For Enterprises", href: "#enterprises", isExternal: true },
] as const;

export const AUDIENCE_ITEMS: readonly AudienceItem[] = [
  {
    icon: "🎒",
    title: "Engineering Students",
    description:
      "CS, IT, Mechanical, Electronics — your device comes bundled with real industry projects matched to your branch. Start building your portfolio from Year 1.",
    isPrimary: true,
  },
  {
    icon: "📊",
    title: "Management & BBA Students",
    description:
      "Business strategy, finance, marketing — work on live industry briefs with guidance from professionals who actually work in the field. Not case studies. Real work.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Parents",
    description:
      "This isn't just a laptop purchase. It's career access from Day 1 — projects, mentors, and a verified portfolio that sets your child apart before final year placements begin.",
  },
] as const;

export const BUNDLED_FEATURES: readonly FeatureItem[] = [
  {
    icon: "📋",
    title: "Sponsored Industry Projects",
    description:
      "Work on real briefs sponsored by companies — not simulated textbook problems. Projects are matched to your branch and ambition level. You build something real, and industry sees it.",
  },
  {
    icon: "🏆",
    title: "Innovation Challenges & Hackathons",
    description:
      "Regular challenges co-designed with industry — with prizes, recognition, and direct visibility with hiring teams. Compete, collaborate, get noticed.",
  },
  {
    icon: "👤",
    title: "1-on-1 Industry Mentor Sessions",
    description:
      "Engineers, analysts, product managers, and researchers from active careers review your work and coach your growth. Not a teacher who's never worked outside a college.",
  },
  {
    icon: "🤝",
    title: "Placement Referral Network",
    description:
      "Students who reach higher proficiency levels get warm referrals to partner companies — not a job board, actual introductions. Companies trust the work we've verified.",
  },
  {
    icon: "📁",
    title: "Verified Portfolio — Proof of Work",
    description:
      "GitHub repos, demo videos, mentor reviews, and team evaluations — all tied to your profile. Recruiters see what you built, not just a grade. Your portfolio follows you.",
  },
  {
    icon: "🛡️",
    title: "Device Support & Warranty",
    description:
      "Official warranty, on-site support, and a dedicated student advisor on WhatsApp throughout your purchase and beyond. Delivery to your door, setup included.",
  },
] as const;

export const STATS: readonly StatItem[] = [
  { value: "50+", label: "Industry project tracks" },
  { value: "12+", label: "Active domains" },
  { value: "100%", label: "Mentor-reviewed" },
  { value: "5", label: "Proficiency levels" },
] as const;

export const PROJECTS: readonly ProjectItem[] = [
  {
    category: "FINANCE",
    categoryColor: "text-brand-teal",
    title: "Equity Research Report — EV Sector",
    meta: "6 weeks · Finance track · Industry guide",
  },
  {
    category: "CYBERSECURITY",
    categoryColor: "text-brand-coral",
    title: "Vulnerability Assessment — Web App",
    meta: "8 weeks · CS track · CTF-style",
  },
  {
    category: "PRODUCT MANAGEMENT",
    categoryColor: "text-brand-orange",
    title: "Feature Roadmap for an EdTech Startup",
    meta: "5 weeks · MBA/CS · Pitch deck",
  },
  {
    category: "AI & MACHINE LEARNING",
    categoryColor: "text-brand-green",
    title: "Predict Student Dropout Using ML",
    meta: "8 weeks · Team of 3 · Mentor-reviewed",
  },
  {
    category: "WEB DEVELOPMENT",
    categoryColor: "text-brand-purple",
    title: "Build a Campus Community Platform",
    meta: "6 weeks · Solo · Full-stack",
  },
] as const;

export const WHY_ITEMS: readonly WhyItem[] = [
  {
    icon: "📋",
    title: "Live industry briefs — not textbook simulations",
    description:
      "Every project comes from a real company challenge. You solve something that actually matters to them.",
  },
  {
    icon: "👤",
    title: "Mentors with active industry careers",
    description:
      "Engineers, analysts, and product managers review your work and coach you week by week.",
  },
  {
    icon: "📁",
    title: "Proof of work, not just a certificate",
    description:
      "GitHub repos, demo videos, mentor evaluations — a portfolio that recruiters actually care about.",
  },
  {
    icon: "🎯",
    title: "Proficiency levels industry recognises",
    description:
      "From Explorer to Research Fellow — structured levels that companies understand and value at hiring time.",
  },
] as const;
