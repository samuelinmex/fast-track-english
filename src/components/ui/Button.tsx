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

function getDestinationElement(href: string) {
  const navTarget = document.querySelector<HTMLElement>(
    `[data-nav-href="${href}"]`
  );

  if (navTarget) return navTarget;

  return document.getElementById("main-menu-target");
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

  function createTravelAnimation(destinationHref: string) {
    const source = buttonRef.current;
    const targetElement = getDestinationElement(destinationHref);

    if (!source || !targetElement) return;

    const sourceRect = source.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();

    const startX = sourceRect.left + sourceRect.width / 2;
    const startY = sourceRect.top + sourceRect.height / 2;

    const endX = targetRect.left + targetRect.width / 2;
    const endY = targetRect.top + targetRect.height / 2;

    const traveler = document.createElement("div");
    const glow = document.createElement("div");
    const trail = document.createElement("div");
    const destinationPulse = document.createElement("div");

    traveler.style.position = "fixed";
    traveler.style.left = `${startX}px`;
    traveler.style.top = `${startY}px`;
    traveler.style.width = "18px";
    traveler.style.height = "18px";
    traveler.style.borderRadius = "999px";
    traveler.style.background =
      "radial-gradient(circle at 35% 35%, #ffffff 0%, #fecaca 18%, #dc2626 55%, #991b1b 100%)";
    traveler.style.zIndex = "9999";
    traveler.style.pointerEvents = "none";
    traveler.style.boxShadow =
      "0 0 18px rgba(220, 38, 38, 0.75), 0 0 48px rgba(220, 38, 38, 0.35)";
    traveler.style.transform = "translate(-50%, -50%) scale(1)";
    traveler.style.transition =
      "left 620ms cubic-bezier(0.16, 1, 0.3, 1), top 620ms cubic-bezier(0.16, 1, 0.3, 1), transform 620ms cubic-bezier(0.16, 1, 0.3, 1), opacity 620ms ease";

    glow.style.position = "fixed";
    glow.style.left = `${startX}px`;
    glow.style.top = `${startY}px`;
    glow.style.width = "54px";
    glow.style.height = "54px";
    glow.style.borderRadius = "999px";
    glow.style.background = "rgba(220, 38, 38, 0.16)";
    glow.style.zIndex = "9998";
    glow.style.pointerEvents = "none";
    glow.style.filter = "blur(8px)";
    glow.style.transform = "translate(-50%, -50%) scale(1)";
    glow.style.transition =
      "left 620ms cubic-bezier(0.16, 1, 0.3, 1), top 620ms cubic-bezier(0.16, 1, 0.3, 1), transform 620ms cubic-bezier(0.16, 1, 0.3, 1), opacity 620ms ease";

    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const angle = Math.atan2(distanceY, distanceX) * (180 / Math.PI);

    trail.style.position = "fixed";
    trail.style.left = `${startX}px`;
    trail.style.top = `${startY}px`;
    trail.style.width = `${Math.max(distance * 0.32, 120)}px`;
    trail.style.height = "4px";
    trail.style.borderRadius = "999px";
    trail.style.background =
      "linear-gradient(90deg, rgba(220,38,38,0), rgba(220,38,38,0.55), rgba(255,255,255,0.75))";
    trail.style.zIndex = "9997";
    trail.style.pointerEvents = "none";
    trail.style.transformOrigin = "left center";
    trail.style.transform = `translate(0, -50%) rotate(${angle}deg) scaleX(0)`;
    trail.style.opacity = "0";
    trail.style.transition =
      "transform 620ms cubic-bezier(0.16, 1, 0.3, 1), opacity 620ms ease";

    destinationPulse.style.position = "fixed";
    destinationPulse.style.left = `${endX}px`;
    destinationPulse.style.top = `${endY}px`;
    destinationPulse.style.width = `${Math.max(targetRect.width + 18, 80)}px`;
    destinationPulse.style.height = `${Math.max(targetRect.height + 18, 48)}px`;
    destinationPulse.style.borderRadius = "999px";
    destinationPulse.style.border = "2px solid rgba(220, 38, 38, 0.55)";
    destinationPulse.style.background = "rgba(220, 38, 38, 0.08)";
    destinationPulse.style.zIndex = "9996";
    destinationPulse.style.pointerEvents = "none";
    destinationPulse.style.transform = "translate(-50%, -50%) scale(0.75)";
    destinationPulse.style.opacity = "0";
    destinationPulse.style.transition =
      "transform 520ms cubic-bezier(0.16, 1, 0.3, 1), opacity 520ms ease";

    document.body.appendChild(trail);
    document.body.appendChild(glow);
    document.body.appendChild(traveler);
    document.body.appendChild(destinationPulse);

    requestAnimationFrame(() => {
      traveler.style.left = `${endX}px`;
      traveler.style.top = `${endY}px`;
      traveler.style.transform = "translate(-50%, -50%) scale(1.8)";
      traveler.style.opacity = "0";

      glow.style.left = `${endX}px`;
      glow.style.top = `${endY}px`;
      glow.style.transform = "translate(-50%, -50%) scale(2.5)";
      glow.style.opacity = "0";

      trail.style.transform = `translate(0, -50%) rotate(${angle}deg) scaleX(1)`;
      trail.style.opacity = "1";

      destinationPulse.style.transform = "translate(-50%, -50%) scale(1.1)";
      destinationPulse.style.opacity = "1";
    });

    window.setTimeout(() => {
      trail.style.opacity = "0";
      destinationPulse.style.opacity = "0";
    }, 360);

    window.setTimeout(() => {
      traveler.remove();
      glow.remove();
      trail.remove();
      destinationPulse.remove();
    }, 720);
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!href) return;

    const shouldAnimate =
      enableTravelAnimation && target !== "_blank" && isInternalLink(href);

    if (!shouldAnimate) return;

    event.preventDefault();

    createTravelAnimation(href);

    window.setTimeout(() => {
      router.push(href);
    }, 430);
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
    <button ref={buttonRef as Ref<HTMLButtonElement>} className={finalClass}>
      {children}
    </button>
  );
}