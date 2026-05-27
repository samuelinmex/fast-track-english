"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Gift,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

type DiagnosticOfferPopupProps = {
  delayMs?: number;
};

export function DiagnosticOfferPopup({
  delayMs = 1300,
}: DiagnosticOfferPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const alreadyClosed = sessionStorage.getItem(
      "fast-track-diagnostic-popup-closed"
    );

    if (alreadyClosed) return;

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, delayMs);

    return () => window.clearTimeout(timer);
  }, [delayMs]);

  const closePopup = () => {
    sessionStorage.setItem("fast-track-diagnostic-popup-closed", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/75 px-5 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Oferta de examen diagnóstico gratis"
        >
          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/15 bg-white shadow-2xl shadow-red-950/40"
          >
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-red-600/25 blur-3xl" />
            <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />

            <button
              type="button"
              onClick={closePopup}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/5 text-slate-500 transition hover:bg-slate-950 hover:text-white"
              aria-label="Cerrar oferta"
            >
              <X size={20} />
            </button>

            <div className="relative bg-slate-950 px-7 py-6 text-white md:px-9">
              <motion.div
                aria-hidden="true"
                animate={{ x: ["-120%", "120%"] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-red-300/30 bg-red-600 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white shadow-lg shadow-red-600/30">
                  <Gift size={15} />
                  Oferta especial
                </div>

                <h2 className="mt-5 text-4xl font-black leading-none tracking-[-0.05em] md:text-5xl">
                  Examen de Diagnóstico de Inglés
                </h2>

                <div className="mt-5 inline-flex rotate-[-1deg] items-center gap-2 rounded-2xl bg-white px-5 py-3 text-xl font-black uppercase tracking-[0.12em] text-red-600 shadow-xl md:text-2xl">
                  <Sparkles size={22} />
                  Totalmente gratis
                </div>
              </div>
            </div>

            <div className="relative px-7 py-7 md:px-9 md:py-8">
              <p className="text-lg font-bold leading-8 text-slate-700">
                Descubre tu nivel real de inglés y recibe una orientación clara
                para saber por dónde empezar, qué reforzar y cómo avanzar con
                más confianza.
              </p>

              <div className="mt-6 grid gap-3">
                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <BadgeCheck className="mt-0.5 shrink-0 text-red-600" />
                  <p className="text-sm font-bold leading-6 text-slate-700">
                    Ideal si quieres empezar desde cero o retomar el inglés.
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <BadgeCheck className="mt-0.5 shrink-0 text-red-600" />
                  <p className="text-sm font-bold leading-6 text-slate-700">
                    Te ayuda a identificar tus áreas fuertes y lo que necesitas
                    practicar.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="/contacto"
                  className="justify-center bg-red-600 text-white shadow-xl shadow-red-600/25 hover:bg-red-700"
                >
                  Quiero mi examen gratis
                  <ArrowRight className="ml-2" size={18} />
                </Button>

                <button
                  type="button"
                  onClick={closePopup}
                  className="rounded-full px-6 py-3 text-sm font-black text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  Lo veré después
                </button>
              </div>

              <p className="mt-5 text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Cupos sujetos a disponibilidad
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}