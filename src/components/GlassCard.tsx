import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const GlassCard = ({ children, className, hover = true, glow = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card",
        hover && "hover:border-primary/30 hover:shadow-[0_8px_32px_hsl(0_0%_0%/0.3),0_0_30px_hsl(var(--primary)/0.15)] hover:-translate-y-1",
        glow && "animate-glow-pulse",
        className
      )}
    >
      {children}
    </div>
  );
};
