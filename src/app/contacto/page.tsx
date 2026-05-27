"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";
import { DiagnosticOfferPopup } from "@/components/shared/DiagnosticOfferPopup";

const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/mpqnkyvr";

export default function ContactoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main>
      <DiagnosticOfferPopup delayMs={700} />

      <section className="bg-slate-50 py-24">
        <Container>
          <SectionHeader
            eyebrow="Contacto"
            title="Da el primer paso para mejorar tu inglés."
            description="Solicita información sobre horarios, modalidad de clase, disponibilidad y nivel recomendado para iniciar."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
              <h2 className="text-3xl font-black tracking-tight">
                Fast Track English
              </h2>

              <div className="mt-8 grid gap-5 text-slate-300">
                <p className="flex items-center gap-3">
                  <MapPin className="shrink-0 text-red-400" />
                  {siteConfig.location}
                </p>

                <p className="flex items-center gap-3">
                  <MessageCircle className="shrink-0 text-red-400" />
                  Clases para principiantes, conversación, turismo y Centro de
                  Preparación Cambridge.
                </p>

                <p className="flex items-center gap-3">
                  <Send className="shrink-0 text-red-400" />
                  Respuesta por formulario de contacto o Facebook.
                </p>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">
                  Examen diagnóstico gratis
                </p>

                <p className="mt-3 leading-7 text-slate-300">
                  Podemos ayudarte a identificar tu punto de partida y
                  recomendarte una ruta de aprendizaje más clara.
                </p>
              </div>

              <div className="mt-8">
                <Button href={siteConfig.facebookUrl} target="_blank">
                  Contactar por Facebook
                </Button>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nuevo mensaje desde Fast Track English"
              />

              <div className="grid gap-5">
                <input
                  className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400"
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  required
                />

                <input
                  className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400"
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono o WhatsApp"
                  required
                />

                <input
                  className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400"
                  type="email"
                  name="email"
                  placeholder="Correo electrónico opcional"
                />

                <select
                  name="necesidad"
                  required
                  defaultValue=""
                  className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400"
                >
                  <option value="" disabled>
                    ¿Qué necesitas?
                  </option>
                  <option>Aprender desde cero</option>
                  <option>Mejorar conversación</option>
                  <option>Inglés para turismo o trabajo</option>
                  <option>Quiero prepararme para exámenes Cambridge</option>
                  <option>Regularización escolar</option>
                  <option>Examen diagnóstico gratuito</option>
                  <option>Evaluación online gratuita</option>
                </select>

                <textarea
                  name="mensaje"
                  className="min-h-32 rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400"
                  placeholder="Cuéntanos tu objetivo"
                  required
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-4 font-black text-white shadow-lg shadow-red-600/25 transition hover:-translate-y-0.5 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={18} />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar solicitud
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <div className="flex items-start gap-3 rounded-2xl border border-green-100 bg-green-50 p-4 text-green-700">
                    <CheckCircle2 className="mt-0.5 shrink-0" size={20} />
                    <p className="text-sm font-bold leading-6">
                      Mensaje enviado correctamente. Te contactaremos pronto.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-sm font-bold leading-6 text-red-700">
                    No se pudo enviar el mensaje. Intenta nuevamente o
                    contáctanos por Facebook.
                  </div>
                )}

                <p className="text-center text-xs font-bold leading-5 text-slate-400">
                  Tus datos serán usados únicamente para responder tu solicitud
                  y orientarte sobre las clases.
                </p>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}