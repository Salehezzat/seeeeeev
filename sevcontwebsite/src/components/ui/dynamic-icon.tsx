import {
  Zap,
  Boxes,
  Ship,
  DraftingCompass,
  HardHat,
  Factory,
  Flame,
  Landmark,
  ShieldCheck,
  type LucideProps,
} from "lucide-react";

const registry = {
  Zap,
  Boxes,
  Ship,
  DraftingCompass,
  HardHat,
  Factory,
  Flame,
  Landmark,
  ShieldCheck,
} as const;

export type IconName = keyof typeof registry;

export function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = registry[name as IconName] ?? Boxes;
  return <Icon {...props} />;
}
