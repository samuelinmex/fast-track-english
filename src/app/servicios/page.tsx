import {
  Award,
  BookOpenCheck,
  Briefcase,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Inglés desde cero",
    description:
      "Clases para alumnos que desean iniciar con bases claras, vocabulario útil y explicaciones sencillas.",
    icon: GraduationCap,
  },
  {
    title: "Conversación práctica",
    description:
      "Sesiones enfocadas en perder el miedo a hablar, mejorar fluidez y practicar situaciones reales.",
    icon: MessageCircle,
  },
  {
    title: "Inglés para trabajo y turismo",
    description:
      "Preparación para entrevistas, atención al cliente, hoteles, restaurantes y comunicación profesional.",
    icon: Briefcase,
  },
  {
    title: "Preparación Cambridge",
    description:
      "Acompañamiento para alumnos que desean prepararse con enfoque para certificaciones Cambridge.",
    icon: Award,
  },
];

const cambridgeFocus = [
  "Diagnóstico inicial para identificar tu nivel actual.",
  "Ruta de estudio según tu objetivo: A2, B1, B2 o superior.",
  "Práctica de lectura, escritura, escucha y conversación.",
  "Simulación de ejercicios tipo examen.",
  "Corrección de errores frecuentes y mejora de confianza.",
  "Acompañamiento constante hasta que estés mejor preparado.",
];

const premiumBenefits = [
  {
    title: "Meta clara",
    description:
      "No estudias al azar. Trabajamos con un objetivo definido y una ruta de avance.",
    icon: Target,
  },
  {
    title: "Seguimiento",
    description:
      "Observamos tu progreso y reforzamos las áreas que más necesitas trabajar.",
    icon: ClipboardCheck,
  },
  {
    title: "Confianza",
    description:
      "La preparación no solo busca conocimiento, también seguridad para responder mejor.",
    icon: ShieldCheck,
  },
];

export default function ServiciosPage() {
  return (
    <main>
      <section className="bg-slate-50 pb-24 pt-32">
        <Container>
          <SectionHeader
            eyebrow="Servicios"
            title="Clases y programas diseñados para ayudarte a avanzar con propósito."
            description="En Fast Track English ofrecemos clases prácticas para aprender desde cero, mejorar conversación, fortalecer tu inglés laboral y prepararte para objetivos más grandes como una certificación Cambridge."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <FadeIn key={service.title} delay={index * 0.08}>
                  <article className="group h-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-950/10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                      <Icon size={27} />
                    </div>

                    <h2 className="text-xl font-black tracking-tight text-slate-950">
                      {service.title}
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/25 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-red-200 backdrop-blur">
                <Award size={17} />
                Plus académico
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Preparación para certificación Cambridge.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Este programa está pensado para alumnos que quieren prepararse
                con mayor estructura, práctica y seguimiento para presentar una
                certificación Cambridge en el futuro.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Cambridge English cuenta con exámenes y materiales de
                preparación para distintos niveles, incluyendo A2 Key, B1
                Preliminary, B2 First, C1 Advanced y C2 Proficiency.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contacto">
                  Solicitar diagnóstico
                </Button>

                <Button
                  href="/clases"
                  variant="ghost"
                  className="bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15"
                >
                  Ver clases
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white">
                    <BookOpenCheck size={25} />
                  </div>

                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">
                      Ruta de preparación
                    </p>
                    <h3 className="text-2xl font-black">
                      Enfoque claro, práctica constante.
                    </h3>
                  </div>
                </div>

                <div className="grid gap-3">
                  {cambridgeFocus.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 shrink-0 text-red-300" />
                      <p className="font-bold leading-7 text-white/85">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 rounded-2xl bg-white/10 p-4 text-sm font-bold leading-6 text-slate-300">
                  Nota: Fast Track English ofrece preparación académica. La
                  inscripción, fechas y aplicación del examen dependen de los
                  centros examinadores autorizados.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-24 pt-32">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-red-600">
              Servicio premium
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Prepararte bien también es parte del compromiso.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              No se trata solo de estudiar más. Se trata de estudiar con
              dirección, práctica y acompañamiento para que el alumno llegue
              mejor preparado.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {premiumBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <FadeIn key={benefit.title} delay={index * 0.1}>
                  <article className="h-full rounded-[2rem] border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-slate-950/10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white">
                      <Icon size={27} />
                    </div>

                    <h3 className="text-2xl font-black tracking-tight text-slate-950">
                      {benefit.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {benefit.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-red-600 py-20 text-white">
        <Container>
          <FadeIn>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-black">
                  <Sparkles size={16} />
                  Diagnóstico gratis
                </div>

                <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                  ¿Quieres saber si estás listo para iniciar una ruta Cambridge?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                  Solicita tu examen diagnóstico gratuito y descubre desde qué
                  nivel conviene comenzar.
                </p>
              </div>

              <Button href="/contacto" variant="secondary">
                Quiero mi diagnóstico
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </main>
  );
}