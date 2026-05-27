"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-2xl">
      <div className="relative overflow-hidden bg-slate-950 text-white">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-[200%] whitespace-nowrap py-2 text-xs font-black uppercase tracking-[0.28em] text-white/85"
        >
          <span className="mx-8">Aprende inglés desde cero</span>
          <span className="mx-8 text-red-300">Habla con confianza</span>
          <span className="mx-8">Inglés para turismo en Cancún</span>
          <span className="mx-8 text-red-300">Mejora tu conversación</span>
          <span className="mx-8">Aprende inglés desde cero</span>
          <span className="mx-8 text-red-300">Habla con confianza</span>
          <span className="mx-8">Inglés para turismo en Cancún</span>
          <span className="mx-8 text-red-300">Mejora tu conversación</span>
        </motion.div>
      </div>

      <Container>
        <div
          id="main-menu-target"
          className="flex h-20 items-center justify-between gap-6"
        >
          <Link href="/" className="group flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-lg font-black text-white shadow-lg shadow-red-600/25"
            >
              <span className="relative z-10">FT</span>
              <motion.span
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.45, 0, 0.45],
                }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl bg-red-500"
              />
            </motion.div>

            <div className="leading-tight">
              <p className="text-sm font-black uppercase tracking-wide text-slate-950">
                {siteConfig.name}
              </p>
              <p className="text-[10px] font-black uppercase tracking-[0.32em] text-red-600">
                {siteConfig.slogan}
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm lg:flex">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 hover:text-red-600"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-full bg-red-600"
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 28,
                      }}
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              href="/contacto"
              variant="secondary"
              enableTravelAnimation={false}
            >
              Agendar clase
            </Button>

            <Button
              href={siteConfig.facebookUrl}
              target="_blank"
              enableTravelAnimation={false}
            >
              Facebook
              <ArrowRight className="ml-2" size={17} />
            </Button>
          </div>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="border-t border-slate-200 bg-white lg:hidden"
          >
            <Container className="py-5">
              <div className="mb-4 flex items-center gap-2 rounded-3xl bg-red-50 px-4 py-3 text-sm font-black text-red-600">
                <Sparkles size={16} />
                Aprende inglés a tu ritmo
              </div>

              <nav className="grid gap-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-base font-bold ${
                      pathname === item.href
                        ? "bg-red-600 text-white"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-5 grid gap-3">
                <Button href="/contacto" enableTravelAnimation={false}>
                  Agendar clase
                </Button>

                <Button
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  variant="secondary"
                  enableTravelAnimation={false}
                >
                  Contactar por Facebook
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}