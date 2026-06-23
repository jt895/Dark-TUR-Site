import { Link } from "react-router";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({
  children,
  href,
  to,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-none transition-all duration-200 font-medium will-change-transform hover:-translate-y-0.5 active:translate-y-0";

  const variants = {
    primary: "bg-[var(--accent)] text-white hover:bg-[var(--accent-bright)] shadow-sm hover:shadow-md",
    secondary: "bg-[var(--surface-2)] text-[var(--text-main)] hover:bg-[var(--surface-3)] border border-[var(--border-strong)]",
    outline: "border-2 border-[var(--accent)] text-[var(--accent-soft)] hover:bg-[var(--accent)] hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
