import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  target?: "_blank" | "_self";
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-red-600 text-white shadow-lg shadow-red-600/25 hover:bg-red-700 hover:-translate-y-0.5",
  secondary:
    "bg-white text-slate-950 ring-1 ring-slate-200 hover:bg-slate-50 hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target = "_self",
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition-all duration-300";

  const finalClass = `${baseClass} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} className={finalClass}>
        {children}
      </Link>
    );
  }

  return <button className={finalClass}>{children}</button>;
}