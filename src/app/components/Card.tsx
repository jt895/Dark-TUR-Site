import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`bg-[var(--card-bg)] border border-[var(--border-strong)] p-8 transition-all duration-300 will-change-transform ${
        hover ? "hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)] hover:border-[var(--accent-bright)]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
