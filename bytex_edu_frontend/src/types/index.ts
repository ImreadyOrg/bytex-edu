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
