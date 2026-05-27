"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { MouseEvent, ReactNode, Ref } from "react";
import { useRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  target?: "_blank" | "_self";
  enableTravelAnimation?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-red-600 text-white shadow-lg shadow-red-600/25 hover:bg-red-700 hover:-translate-y-0.5",
  secondary:
    "bg-white text-slate-950 ring-1 ring-slate-200 hover:bg-slate-50 hover:-translate-y-0.5",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
};

function isInternalLink(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  target = "_self",
  enableTravelAnimation = true,
}: ButtonProps) {
  const router = useRouter();
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);

  const baseClass =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition-all duration-300";

  const finalClass = `${baseClass} ${variants[variant]} ${className}`;

  function createTravelAnimation() {
    const source = buttonRef.current;
    const targetElement = document.getElementById("main-menu-target");

    if (!source || !targetElement) return;

    const sourceRect = source.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();

    const startX = sourceRect.left + sourceRect.width / 2;
    const startY = sourceRect.top + sourceRect.height / 2;

    const endX = targetRect.left + targetRect.width / 2;
    const endY = targetRect.top + targetRect.height / 2;

    const traveler = document.createElement("div");

    traveler.style.position = "fixed";
    traveler.style.left = `${startX}px`;
    traveler.style.top = `${startY}px`;
    traveler.style.width = "16px";
    traveler.style.height = "16px";
    traveler.style.borderRadius = "999px";
    traveler.style.background = "#dc2626";
    traveler.style.zIndex = "9999";
    traveler.style.pointerEvents = "none";
    traveler.style.boxShadow = "0 0 0 10px rgba(220, 38, 38, 0.16)";
    traveler.style.transform = "translate(-50%, -50%) scale(1)";
    traveler.style.transition =
      "left 520ms cubic-bezier(0.22, 1, 0.36, 1), top 520ms cubic-bezier(0.22, 1, 0.36, 1), transform 520ms cubic-bezier(0.22, 1, 0.36, 1), opacity 520ms ease";

    document.body.appendChild(traveler);

    requestAnimationFrame(() => {
      traveler.style.left = `${endX}px`;
      traveler.style.top = `${endY}px`;
      traveler.style.transform = "translate(-50%, -50%) scale(2.8)";
      traveler.style.opacity = "0";
    });

    window.setTimeout(() => {
      traveler.remove();
    }, 620);
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!href) return;

    const shouldAnimate =
      enableTravelAnimation && target !== "_blank" && isInternalLink(href);

    if (!shouldAnimate) return;

    event.preventDefault();
    createTravelAnimation();

    window.setTimeout(() => {
      router.push(href);
    }, 360);
  }

  if (href) {
    return (
      <Link
        ref={buttonRef as Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        onClick={handleClick}
        className={finalClass}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef as Ref<HTMLButtonElement>}
      className={finalClass}
    >
      {children}
    </button>
  );
}