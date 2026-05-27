"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorAura() {
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 260,
    damping: 28,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 260,
    damping: 28,
    mass: 0.4,
  });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!hasFinePointer) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);

      const target = event.target as HTMLElement;

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setIsInteractive(Boolean(interactive));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[99990] hidden rounded-full border border-red-500/30 bg-red-500/5 shadow-[0_0_28px_rgba(220,38,38,0.18)] backdrop-blur-[1px] lg:block"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        width: isInteractive ? 52 : 34,
        height: isInteractive ? 52 : 34,
        scale: isInteractive ? 1.05 : 1,
        borderColor: isInteractive
          ? "rgba(220, 38, 38, 0.55)"
          : "rgba(239, 68, 68, 0.28)",
        backgroundColor: isInteractive
          ? "rgba(220, 38, 38, 0.08)"
          : "rgba(239, 68, 68, 0.04)",
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    />
  );
}