import type {
  NavLink,
  FeatureItem,
  AudienceItem,
  ProjectItem,
  StatItem,
  WhyItem,
  TestimonialItem,
  StepItem,
  TierItem,
  LabItem,
} from "@/types";

export const SITE_CONFIG = {
  name: "Bytex Edu",
  description:
    "Bytex Edu bundles career-accelerating industry projects, mentorship and a verified portfolio with every student device — so you don't just own a laptop, you own your future.",
  url: "https://bytex.edu",
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { label: "How it works", href: "#how" },
  { label: "What's included", href: "#bundled" },
  { label: "Career projects", href: "#projects" },
  { label: "For Enterprises ↗", href: "https://bytex.global", isExternal: true },
] as const;

export const AUDIENCE_ITEMS: readonly AudienceItem[] = [
  {
    icon: "graduation-cap",
    title: "Engineering Students",
    description:
      "CS, IT, Mechanical, Electronics — your device comes bundled with real industry projects matched to your branch. Start building your portfolio from Year 1.",
    isPrimary: true,
  },
  {
    icon: "bar-chart-3",
    title: "Management & BBA Students",
    description:
      "Business strategy, finance, marketing — work on live industry briefs with guidance from professionals who actually work in the field. Not case studies. Real work.",
  },
  {
    icon: "users",
    title: "Parents",
    description:
      "This isn't just a laptop purchase. It's career access from Day 1 — projects, mentors, and a verified portfolio that sets your child apart before final year placements begin.",
  },
] as const;

export const BUNDLED_FEATURES: readonly FeatureItem[] = [
  {
    icon: "factory",
    title: "Sponsored Industry Projects",
    description:
      "Work on real briefs sponsored by companies — not simulated textbook problems. Projects are matched to your branch and ambition level. You build something real, and industry sees it.",
  },
  {
    icon: "user-round",
    title: "1-on-1 Industry Mentor Sessions",
    description:
      "Engineers, analysts, product managers, and researchers from active careers review your work and coach your growth. Not a teacher who's never worked outside a college.",
  },
  {
    icon: "folder-open",
    title: "Verified Portfolio — Proof of Work",
    description:
      "GitHub repos, demo videos, mentor reviews, and team evaluations — all tied to your profile. Recruiters see what you built, not just a grade. Your portfolio follows you.",
  },
  {
    icon: "trophy",
    title: "Innovation Challenges & Hackathons",
    description:
      "Regular challenges co-designed with industry — with prizes, recognition, and direct visibility with hiring teams. Compete, collaborate, get noticed.",
  },
  {
    icon: "target",
    title: "Placement Referral Network",
    description:
      "Students who reach higher proficiency levels get warm referrals to partner companies — not a job board, actual introductions. Companies trust the work we've verified.",
  },
  {
    icon: "shield-check",
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

export const PROJECTS_TICKER: readonly ProjectItem[] = [
  {
    category: "AI & Machine Learning",
    categoryColor: "var(--orange)",
    title: "Predict Student Dropout Using ML",
    meta: "8 weeks · Team of 3 · Mentor-reviewed",
  },
  {
    category: "Web Development",
    categoryColor: "var(--teal)",
    title: "Build a Campus Event Portal",
    meta: "6 weeks · Solo · GitHub portfolio",
  },
  {
    category: "Data Analytics",
    categoryColor: "var(--purple)",
    title: "Market Dashboard for FMCG Brand",
    meta: "5 weeks · Team of 2 · Industry brief",
  },
  {
    category: "IoT & Embedded",
    categoryColor: "var(--orange)",
    title: "Smart Campus Energy Monitor",
    meta: "10 weeks · Team of 4 · Hardware kit",
  },
  {
    category: "Business Strategy",
    categoryColor: "var(--teal)",
    title: "Go-to-Market Plan for D2C Brand",
    meta: "4 weeks · MBA track · Pitch review",
  },
  {
    category: "Finance",
    categoryColor: "var(--purple)",
    title: "Equity Research Report — EV Sector",
    meta: "6 weeks · Finance track · Industry guide",
  },
  {
    category: "Cybersecurity",
    categoryColor: "var(--orange)",
    title: "Vulnerability Assessment — Web App",
    meta: "8 weeks · CS track · CTF-style",
  },
  {
    category: "Product Management",
    categoryColor: "var(--teal)",
    title: "Feature Roadmap for an EdTech Startup",
    meta: "5 weeks · MBA/CS · Pitch deck",
  },
] as const;

export const PROJECTS_OUTCOMES: readonly WhyItem[] = [
  {
    icon: "factory",
    title: "Live industry briefs — not textbook simulations",
    description:
      "Every project comes from a real company challenge. You solve something that actually matters to them.",
  },
  {
    icon: "user-round",
    title: "Mentors with active industry careers",
    description:
      "Engineers, analysts, and product managers review your work and coach you week by week.",
  },
  {
    icon: "folder-open",
    title: "Proof of work, not just a certificate",
    description:
      "GitHub repos, demo videos, mentor evaluations — a portfolio that recruiters actually care about.",
  },
  {
    icon: "target",
    title: "Proficiency levels industry recognises",
    description:
      "From Explorer to Research Fellow — structured levels that companies understand and value at hiring time.",
  },
] as const;

export const HOW_IT_WORKS_STEPS: readonly StepItem[] = [
  {
    num: 1,
    title: "Pick your tier",
    description: "Starter, Pro, or Power — each unlocks a different set of industry project tracks matched to your stream.",
  },
  {
    num: 2,
    title: "Sign up & get pricing",
    description: "Create your profile to unlock student discount pricing and activate your project access.",
  },
  {
    num: 3,
    title: "Device delivered",
    description: "Delivery to your door, warranty registered, setup done — ready to switch on and start building.",
  },
  {
    num: 4,
    title: "Projects begin",
    description: "Your first industry project is assigned within 48 hours. Mentor introduced. Portfolio clock starts.",
  },
] as const;

export const TESTIMONIALS: readonly TestimonialItem[] = [
  {
    rating: 5,
    quote: '"I wasn\'t expecting the project access to be the highlight — but my mentor literally reviewed my ML model and told me exactly what to fix. By 3rd semester I had a portfolio I was proud of walking into interviews with."',
    name: "Rahul Kulkarni",
    detail: "CS Engineering, Pune · Pro Tier",
    avatarBg: "var(--orange)",
    avatarText: "RK",
  },
  {
    rating: 5,
    quote: '"My daughter was always sharp but had nothing to show for it in her resume. After two semesters with real projects, she had three GitHub projects and a mentor\'s recommendation. Completely different placement conversations."',
    name: "Sunita Patil",
    detail: "Parent · Nashik",
    avatarBg: "var(--teal)",
    avatarText: "SP",
  },
  {
    rating: 5,
    quote: '"Our TPO dashboard now shows project completion alongside CGPA. Companies visiting for placements actually ask for students at Level 3 and above first. It\'s changed how we track student development entirely."',
    name: "Prof. Anand Mehta",
    detail: "TPO, MIT Pune",
    avatarBg: "var(--purple)",
    avatarText: "AM",
  },
] as const;

export const DEVICE_TIERS: readonly TierItem[] = [
  {
    key: "starter",
    name: "Starter",
    who: "Budget-smart · i3 class · Everyday college tasks",
    icon: "sprout",
    price: "₹35,000",
    benefits: [
      {
        icon: "clipboard-list",
        title: "1 Sponsored Industry Project",
        sub: "Explorer level — guided, beginner-friendly brief",
      },
      {
        icon: "user-round",
        title: "1 Group Mentor Session",
        sub: "Industry professional reviews your work",
      },
      {
        icon: "folder-open",
        title: "Portfolio Profile",
        sub: "Public profile with your project & evidence",
      },
      {
        icon: "award",
        title: "Level 1 — Explorer",
        sub: "Proficiency badge on your profile",
      },
      {
        icon: "shield-check",
        title: "Warranty & Delivery",
        sub: "Official warranty, on-site support, delivered to door",
      },
    ],
  },
  {
    key: "pro",
    name: "Pro",
    who: "Mainstream · i5 class · The sweet spot for college",
    icon: "zap",
    price: "₹55,000",
    featured: true,
    popText: "Most Popular — Engineering & MBA",
    benefits: [
      {
        icon: "clipboard-list",
        title: "3 Sponsored Industry Projects",
        sub: "Levels 1–3 · Solo & team briefs · Multiple domains",
      },
      {
        icon: "user-round",
        title: "2 Personal Mentor Sessions",
        sub: "1-on-1 with industry professionals",
      },
      {
        icon: "folder-open",
        title: "Portfolio Audit & Review",
        sub: "Mentor reviews your complete profile",
      },
      {
        icon: "trophy",
        title: "Innovation Challenge Entry",
        sub: "Access to sponsored hackathons & prizes",
      },
      {
        icon: "target",
        title: "Priority Placement Referrals",
        sub: "Warm intros to partner companies at Level 3+",
      },
    ],
  },
  {
    key: "power",
    name: "Power",
    who: "High-performance · i7 + GPU · AI, gaming, deep work",
    icon: "flame",
    price: "₹85,000",
    benefits: [
      {
        icon: "clipboard-list",
        title: "5 Projects incl. Level 4–5 Tracks",
        sub: "Industry Contributor & Research Fellow briefs",
      },
      {
        icon: "user-round",
        title: "Unlimited Mentor Sessions",
        sub: "Open access to the full mentor network",
      },
      {
        icon: "microscope",
        title: "Patent Filing Guidance",
        sub: "Support for research and IP filing with faculty",
      },
      {
        icon: "badge-dollar-sign",
        title: "Research Grant Matching",
        sub: "Connect with funded research opportunities",
      },
      {
        icon: "user-plus",
        title: "Industry Hiring Fast-Track",
        sub: "Direct access to senior hiring at partner firms",
      },
    ],
  },
] as const;

export const COLLEGE_LABS: readonly LabItem[] = [
  {
    key: "budget",
    name: "Budget Lab",
    icon: "monitor",
    badgeBg: "#EEF2FF",
    badgeColor: "#3730A3",
    badgeText: "Foundation",
    desc: "A fully-functional computer lab that covers everyday academic workloads — coding, office applications, internet access, and basic multimedia. Designed for maximum student access at minimum cost.",
    includes: [
      { icon: "monitor", text: "Thin client / budget desktop setup" },
      { icon: "network", text: "Networking & LAN infrastructure" },
      { icon: "layout-grid", text: "Licensed OS & productivity suite" },
      { icon: "users", text: "Student management software" },
      { icon: "settings", text: "Faculty control console" },
    ],
  },
  {
    key: "mainstream",
    name: "AI Lab",
    icon: "brain",
    badgeBg: "var(--orange-light)",
    badgeColor: "#C04000",
    badgeText: "Mainstream",
    desc: "Purpose-built for AI, data science, and software development courses. Mid-range GPU workstations that handle ML training, computer vision, and data pipelines with ease.",
    includes: [
      { icon: "gpu", text: "Mid-range GPU workstations" },
      { icon: "cpu", text: "CUDA-enabled ML environment" },
      { icon: "layers", text: "Pre-configured AI/DS software stack" },
      { icon: "hard-drive", text: "NAS storage for datasets" },
      { icon: "factory", text: "Industry project integration" },
    ],
  },
  {
    key: "research",
    name: "Research AI Lab",
    icon: "microscope",
    badgeBg: "var(--purple-light)",
    badgeColor: "var(--purple)",
    badgeText: "Flagship",
    desc: "A high-class AI research facility designed to attract top faculty, industry collaboration, and accreditation recognition. Built for deep learning, computer vision, NLP, and funded research projects.",
    includes: [
      { icon: "server", text: "High-end GPU servers (A-series / H-series)" },
      { icon: "boxes", text: "Dedicated research computing cluster" },
      { icon: "handshake", text: "Industry collaboration setup" },
      { icon: "file-check", text: "Patent & IP filing support integration" },
      { icon: "award", text: "NAAC & NIRF documentation support" },
    ],
    flagship: true,
  },
] as const;
