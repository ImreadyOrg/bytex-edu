import {
  Award,
  BadgeCheck,
  BadgeDollarSign,
  BarChart3,
  Boxes,
  Brain,
  Building2,
  Check,
  ChevronRight,
  ClipboardList,
  Cpu,
  CreditCard,
  Factory,
  FileCheck,
  Flame,
  FolderOpen,
  GraduationCap,
  Gpu,
  Handshake,
  HardDrive,
  Headphones,
  Layers,
  LayoutGrid,
  Lock,
  Microscope,
  Monitor,
  Network,
  Package,
  Server,
  Settings,
  ShieldCheck,
  Sprout,
  Star,
  Tag,
  Target,
  Trophy,
  Truck,
  Unlock,
  UserPlus,
  UserRound,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const ICON_STROKE = 1.75;

export const ICON_NAMES = [
  "graduation-cap",
  "bar-chart-3",
  "users",
  "factory",
  "user-round",
  "folder-open",
  "trophy",
  "target",
  "shield-check",
  "sprout",
  "zap",
  "flame",
  "clipboard-list",
  "award",
  "microscope",
  "monitor",
  "brain",
  "star",
  "lock",
  "unlock",
  "truck",
  "tag",
  "headphones",
  "credit-card",
  "building-2",
  "badge-check",
  "x",
  "package",
  "user-plus",
  "badge-dollar-sign",
  "check",
  "chevron-right",
  "network",
  "gpu",
  "cpu",
  "server",
  "hard-drive",
  "settings",
  "layers",
  "file-check",
  "handshake",
  "boxes",
  "layout-grid",
] as const;

export type IconName = (typeof ICON_NAMES)[number];

export const ICONS: Record<IconName, LucideIcon> = {
  "graduation-cap": GraduationCap,
  "bar-chart-3": BarChart3,
  users: Users,
  factory: Factory,
  "user-round": UserRound,
  "folder-open": FolderOpen,
  trophy: Trophy,
  target: Target,
  "shield-check": ShieldCheck,
  sprout: Sprout,
  zap: Zap,
  flame: Flame,
  "clipboard-list": ClipboardList,
  award: Award,
  microscope: Microscope,
  monitor: Monitor,
  brain: Brain,
  star: Star,
  lock: Lock,
  unlock: Unlock,
  truck: Truck,
  tag: Tag,
  headphones: Headphones,
  "credit-card": CreditCard,
  "building-2": Building2,
  "badge-check": BadgeCheck,
  x: X,
  package: Package,
  "user-plus": UserPlus,
  "badge-dollar-sign": BadgeDollarSign,
  check: Check,
  "chevron-right": ChevronRight,
  network: Network,
  gpu: Gpu,
  cpu: Cpu,
  server: Server,
  "hard-drive": HardDrive,
  settings: Settings,
  layers: Layers,
  "file-check": FileCheck,
  handshake: Handshake,
  boxes: Boxes,
  "layout-grid": LayoutGrid,
};

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

const ICON_SIZE_MAP: Record<IconSize, number> = {
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
};

export interface AppIconProps {
  readonly name: IconName;
  readonly size?: IconSize | number;
  readonly className?: string;
  readonly strokeWidth?: number;
}

export function AppIcon({
  name,
  size = "md",
  className,
  strokeWidth = ICON_STROKE,
}: AppIconProps) {
  const Icon = ICONS[name];
  const pixelSize = typeof size === "number" ? size : ICON_SIZE_MAP[size];

  return (
    <Icon
      size={pixelSize}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden
    />
  );
}

export interface IconBoxProps extends AppIconProps {
  readonly boxClassName?: string;
}

export function IconBox({
  name,
  size = "md",
  boxClassName,
  className,
  strokeWidth = ICON_STROKE,
}: IconBoxProps) {
  return (
    <span className={boxClassName}>
      <AppIcon
        name={name}
        size={size}
        className={className}
        strokeWidth={strokeWidth}
      />
    </span>
  );
}
