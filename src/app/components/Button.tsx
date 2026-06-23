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
  const baseStyles = "inline-flex items-center justify-center gap-2 transition-all duration-200 font-medium will-change-transform hover:-translate-y-0.5 active:translate-y-0";

  const variants = {
    primary: "bg-[#0F7C5C] text-white hover:bg-[#12A77A] shadow-sm hover:shadow-md",
    secondary: "bg-[#0B1416] text-white hover:bg-[#122225] shadow-sm hover:shadow-md",
    outline: "border-2 border-[#17B38D] text-[#BCEFE3] hover:bg-[#0F7C5C] hover:text-white",
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
