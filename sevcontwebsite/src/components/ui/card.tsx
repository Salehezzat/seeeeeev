import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-navy-900/8 bg-white shadow-[0_4px_24px_-8px_rgba(7,20,38,0.08)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-xl",
        "shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      {children}
    </div>
  );
}
