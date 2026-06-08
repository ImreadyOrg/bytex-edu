export interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly isExternal?: boolean;
}

export interface FeatureItem {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface AudienceItem {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly isPrimary?: boolean;
}

export interface ProjectItem {
  readonly category: string;
  readonly categoryColor: string;
  readonly title: string;
  readonly meta: string;
}

export interface StatItem {
  readonly value: string;
  readonly label: string;
}

export interface WhyItem {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface TestimonialItem {
  readonly rating: number;
  readonly quote: string;
  readonly name: string;
  readonly detail: string;
  readonly avatarBg: string;
  readonly avatarText: string;
}

export interface StepItem {
  readonly num: number;
  readonly title: string;
  readonly description: string;
}

export interface BenefitItem {
  readonly icon: string;
  readonly title: string;
  readonly sub: string;
}

export interface TierItem {
  readonly key: string;
  readonly name: string;
  readonly who: string;
  readonly icon: string;
  readonly price: string;
  readonly featured?: boolean;
  readonly popText?: string;
  readonly benefits: readonly BenefitItem[];
}

export interface LabItem {
  readonly key: string;
  readonly name: string;
  readonly icon: string;
  readonly badgeBg: string;
  readonly badgeColor: string;
  readonly badgeText: string;
  readonly desc: string;
  readonly includes: readonly string[];
  readonly flagship?: boolean;
}

