import { MapPin, MessageCircle, Send } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export default function ContactoPage() {
  return (
    <main>
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
                  <MapPin className="text-red-400" />
                  {siteConfig.location}
                </p>

                <p className="flex items-center gap-3">
                  <MessageCircle className="text-red-400" />
                  Clases para principiantes, conversación y turismo.
                </p>

                <p className="flex items-center gap-3">
                  <Send className="text-red-400" />
                  Respuesta por Facebook o formulario de contacto.
                </p>
              </div>

              <div className="mt-8">
                <Button href={siteConfig.facebookUrl} target="_blank">
                  Contactar por Facebook
                </Button>
              </div>
            </div>

            <form className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="grid gap-5">
                <input
                  className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400"
                  type="text"
                  placeholder="Nombre"
                />

                <input
                  className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400"
                  type="tel"
                  placeholder="Teléfono o WhatsApp"
                />

                <select className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400">
                  <option>¿Qué necesitas?</option>
                  <option>Aprender desde cero</option>
                  <option>Mejorar conversación</option>
                  <option>Inglés para turismo o trabajo</option>
                  <option>Regularización escolar</option>
                </select>

                <textarea
                  className="min-h-32 rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400"
                  placeholder="Cuéntanos tu objetivo"
                />

                <button
                  type="button"
                  className="rounded-full bg-red-600 px-6 py-4 font-black text-white shadow-lg shadow-red-600/25 transition hover:-translate-y-0.5 hover:bg-red-700"
                >
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}