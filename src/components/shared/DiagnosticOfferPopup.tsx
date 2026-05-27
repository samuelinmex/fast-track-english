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
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/70 px-4 py-4 backdrop-blur-md sm:px-5 sm:py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Oferta de examen diagnóstico gratis"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[88vh] w-full max-w-md flex-col overflow-hidden rounded-[1.5rem] border border-white/15 bg-white shadow-2xl shadow-red-950/40 sm:max-w-xl sm:rounded-[2rem]"
          >
            <button
              type="button"
              onClick={closePopup}
              className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-lg transition hover:bg-slate-950 hover:text-white sm:right-5 sm:top-5 sm:h-10 sm:w-10"
              aria-label="Cerrar oferta"
            >
              <X size={19} />
            </button>

            <div className="relative shrink-0 overflow-hidden bg-slate-950 px-5 py-5 text-white sm:px-8 sm:py-7">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-red-600/25 blur-3xl" />
              <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />

              <motion.div
                aria-hidden="true"
                animate={{ x: ["-120%", "120%"] }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1.2,
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />

              <div className="relative pr-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-red-300/30 bg-red-600 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-red-600/30 sm:px-4 sm:py-2 sm:text-xs">
                  <Gift size={14} />
                  Oferta especial
                </div>

                <h2 className="mt-4 text-3xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                  Examen de Diagnóstico de Inglés
                </h2>

                <div className="mt-4 inline-flex rotate-[-1deg] items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-black uppercase tracking-[0.12em] text-red-600 shadow-xl sm:px-5 sm:py-3 sm:text-2xl">
                  <Sparkles size={18} />
                  Totalmente gratis
                </div>
              </div>
            </div>

            <div className="relative min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-8 sm:py-7">
              <p className="text-base font-bold leading-7 text-slate-700 sm:text-lg sm:leading-8">
                Descubre tu nivel real de inglés y recibe una orientación clara
                para saber por dónde empezar y qué reforzar.
              </p>

              <div className="mt-5 grid gap-3">
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

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  href="/evaluacion"
                  className="justify-center bg-red-600 text-white shadow-xl shadow-red-600/25 hover:bg-red-700"
                >
                  Hacer evaluación gratis
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

              <p className="mt-4 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Cupos sujetos a disponibilidad
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}