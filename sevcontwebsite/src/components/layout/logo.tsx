import { cn } from "@/lib/utils";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <span
      className={cn(
        "font-display text-xl font-extrabold tracking-[0.08em]",
        dark ? "text-white" : "text-navy-900",
        className
      )}
    >
      <span className="text-gold-400">SEV</span>CONT
      <span className="ml-1.5 hidden text-[0.6rem] font-semibold tracking-[0.3em] text-navy-300 sm:inline">
        GLOBAL
      </span>
    </span>
  );
}
