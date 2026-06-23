import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "grey" | "dark";
  padding?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}

export function Section({
  children,
  className = "",
  background = "white",
  padding = "lg",
  animate = true,
}: SectionProps) {
  const backgrounds = {
    white: "bg-[#051012] text-white",
    grey: "bg-[#081517] text-white",
    dark: "bg-[#03090A] text-white",
  };

  const paddings = {
    sm: "py-6",
    md: "py-10",
    lg: "py-12",
    xl: "py-16",
  };

  return (
    <section className={`${backgrounds[background]} ${paddings[padding]} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {animate ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
