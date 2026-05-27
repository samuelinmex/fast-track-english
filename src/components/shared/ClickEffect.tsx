"use client";

import { useEffect } from "react";

function isInteractiveElement(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;

  return Boolean(
    target.closest(
      "a, button, input, textarea, select, [role='button'], [data-click-effect='true']"
    )
  );
}

function createParticle(x: number, y: number, index: number) {
  const particle = document.createElement("span");

  const angle = (Math.PI * 2 * index) / 8;
  const distance = 24 + Math.random() * 18;

  const endX = Math.cos(angle) * distance;
  const endY = Math.sin(angle) * distance;

  particle.style.position = "fixed";
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.width = index % 2 === 0 ? "6px" : "4px";
  particle.style.height = index % 2 === 0 ? "6px" : "4px";
  particle.style.borderRadius = "999px";
  particle.style.pointerEvents = "none";
  particle.style.zIndex = "99999";
  particle.style.background = index % 3 === 0 ? "#facc15" : "#dc2626";
  particle.style.boxShadow =
    index % 3 === 0
      ? "0 0 14px rgba(250, 204, 21, 0.55)"
      : "0 0 14px rgba(220, 38, 38, 0.55)";
  particle.style.transform = "translate(-50%, -50%) scale(1)";
  particle.style.opacity = "1";
  particle.style.transition =
    "transform 520ms cubic-bezier(0.16, 1, 0.3, 1), opacity 520ms ease";

  document.body.appendChild(particle);

  requestAnimationFrame(() => {
    particle.style.transform = `translate(calc(-50% + ${endX}px), calc(-50% + ${endY}px)) scale(0)`;
    particle.style.opacity = "0";
  });

  window.setTimeout(() => {
    particle.remove();
  }, 620);
}

function createRipple(x: number, y: number) {
  const ripple = document.createElement("span");

  ripple.style.position = "fixed";
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.style.width = "18px";
  ripple.style.height = "18px";
  ripple.style.borderRadius = "999px";
  ripple.style.pointerEvents = "none";
  ripple.style.zIndex = "99998";
  ripple.style.border = "2px solid rgba(220, 38, 38, 0.65)";
  ripple.style.background =
    "radial-gradient(circle, rgba(220,38,38,0.16), rgba(220,38,38,0.04))";
  ripple.style.boxShadow =
    "0 0 0 8px rgba(220, 38, 38, 0.08), 0 0 28px rgba(220, 38, 38, 0.22)";
  ripple.style.transform = "translate(-50%, -50%) scale(0.4)";
  ripple.style.opacity = "1";
  ripple.style.transition =
    "transform 520ms cubic-bezier(0.16, 1, 0.3, 1), opacity 520ms ease";

  document.body.appendChild(ripple);

  requestAnimationFrame(() => {
    ripple.style.transform = "translate(-50%, -50%) scale(3.2)";
    ripple.style.opacity = "0";
  });

  window.setTimeout(() => {
    ripple.remove();
  }, 620);
}

export function ClickEffect() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!isInteractiveElement(event.target)) return;

      const x = event.clientX;
      const y = event.clientY;

      createRipple(x, y);

      for (let index = 0; index < 8; index += 1) {
        createParticle(x, y, index);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}