import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`bg-[#0A1719] border border-[#173337] p-8 transition-all duration-300 will-change-transform ${
        hover ? "hover:-translate-y-1.5 hover:shadow-xl hover:border-[#26A69A]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
