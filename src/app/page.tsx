"use client";

import Image from "next/image";
import {
  ArrowRight,
  Award,
  Briefcase,
  GraduationCap,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { DiagnosticOfferPopup } from "@/components/shared/DiagnosticOfferPopup";

const highlights = [
  "Desde cero",
  "Conversación",
  "Turismo en Cancún",
  "Personalizadas",
];

const services = [
  {
    title: "Inglés desde cero",
    description:
      "Aprende con bases claras, vocabulario útil y explicaciones sencillas para avanzar sin sentirte perdido.",
    icon: GraduationCap,
  },
  {
    title: "Conversación práctica",
    description:
      "Pierde el miedo a hablar con ejercicios guiados, frases reales y práctica constante.",
    icon: MessageCircle,
  },
  {
    title: "Inglés para trabajo",
    description:
      "Prepárate para atención al cliente, entrevistas, hoteles, restaurantes y oportunidades en Cancún.",
    icon: Briefcase,
  },
  {
    title: "Centro de Preparación Cambridge",
    description:
      "Un programa especial para alumnos que desean prepararse con estructura para exámenes Cambridge.",
    icon: Award,
  },
];

const methodSteps = [
  {
    number: "01",
    title: "Entiende",
    description:
      "Explicaciones claras, sin vueltas y con ejemplos que puedas usar desde la primera clase.",
  },
  {
    number: "02",
    title: "Practica",
    description:
      "Ejercicios de conversación, pronunciación y escucha para ganar seguridad poco a poco.",
  },
  {
    number: "03",
    title: "Habla",
    description:
      "El objetivo es que uses el inglés en situaciones reales, no solo que memorices reglas.",
  },
];

export default function HomePage() {
  return (
    <main>
      <DiagnosticOfferPopup />

      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute left-[-12%] top-[-18%] h-[560px] w-[560px] rounded-full bg-red-600/35 blur-[130px]" />
          <div className="absolute bottom-[-22%] right-[-12%] h-[680px] w-[680px] rounded-full bg-white/10 blur-[150px]" />
          <div className="absolute left-[42%] top-[18%] h-[360px] w-[360px] rounded-full bg-red-300/10 blur-[100px]" />
        </div>

        <motion.div
          aria-hidden="true"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.14) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
          }}
        />

        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -16, 0], opacity: [0.16, 0.28, 0.16] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[22%] hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-5 text-5xl font-black tracking-[-0.06em] text-white/20 backdrop-blur-md lg:block"
        >
          🇺🇸 American
        </motion.div>

        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 18, 0], opacity: [0.14, 0.26, 0.14] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[8%] hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-5 text-5xl font-black tracking-[-0.06em] text-white/20 backdrop-blur-md lg:block"
        >
          🇬🇧 British
        </motion.div>

        <Container className="relative grid min-h-[calc(100vh-5rem)] items-center gap-14 py-20 lg:grid-cols-[1.02fr_0.98fr]">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-red-200 backdrop-blur">
              <Sparkles size={16} />
              Inglés práctico en Cancún
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.075em] text-white sm:text-6xl lg:text-8xl">
              Habla inglés con confianza y abre nuevas oportunidades.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Clases para empezar desde cero, mejorar conversación y prepararte
              para situaciones reales en turismo, trabajo, viajes y vida diaria.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href="/contacto"
                className="bg-red-600 text-white shadow-2xl shadow-red-600/35 ring-1 ring-red-400/40 hover:bg-red-500"
              >
                Quiero empezar
                <ArrowRight className="ml-2" size={18} />
              </Button>

              <Button
                href="/evaluacion"
                variant="ghost"
                className="bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                Evaluación gratis
              </Button>
            </div>

            <div className="mt-9 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 + index * 0.08, duration: 0.55 }}
                  className="flex min-h-[58px] items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-3 py-3 text-center text-sm font-black leading-tight text-white backdrop-blur"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative mx-auto w-full max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-red-950/40 backdrop-blur"
              >
                <div className="relative h-[560px] overflow-hidden rounded-[2.25rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1300&q=85"
                    alt="Grupo de estudiantes aprendiendo inglés en una clase moderna"
                    fill
                    priority
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-transparent to-slate-950/20" />

                  <motion.div
                    aria-hidden="true"
                    animate={{ x: ["-120%", "120%"] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 2,
                    }}
                    className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />

                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-slate-950/55 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-white backdrop-blur-xl">
                    Fast Track English
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.75rem] border border-white/15 bg-slate-950/82 p-6 text-white shadow-2xl backdrop-blur-xl">
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-red-300">
                      Tu siguiente nivel empieza aquí
                    </p>

                    <p className="mt-2 text-2xl font-black leading-tight tracking-[-0.04em] md:text-3xl">
                      Inglés útil para estudiar, trabajar, viajar y comunicarte
                      mejor.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/85">
                        Desde cero
                      </span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/85">
                        Conversación
                      </span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/85">
                        Turismo
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 22, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  delay: 0.55,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -right-3 top-20 hidden overflow-hidden rounded-[1.5rem] border border-white/15 bg-red-600/95 px-5 py-4 text-white shadow-2xl shadow-red-950/40 backdrop-blur-xl md:block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

                <div className="relative">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/75">
                    progreso real
                  </p>
                  <div className="mt-2 flex items-end gap-2">
                    <p className="text-4xl font-black leading-none">A+</p>
                    <p className="pb-1 text-sm font-black">más confianza</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -18, y: -8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  delay: 0.65,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -left-3 top-24 z-30 hidden rounded-full border border-white/15 bg-white/95 px-5 py-3 text-sm font-black text-slate-950 shadow-2xl backdrop-blur-xl md:block"
              >
                Empieza desde cero
              </motion.div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 md:p-14">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/30 blur-3xl" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.32em] text-red-300">
                    Evaluación online gratuita
                  </p>

                  <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                    Descubre tu nivel aproximado de inglés en pocos minutos.
                  </h2>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                    Responde una evaluación rápida y déjanos tus datos para enviarte
                    tus resultados con una recomendación personalizada.
                  </p>

                  <p className="mt-4 text-sm font-bold leading-6 text-slate-400">
                    Esta evaluación es orientativa. Para conocer tu nivel con mayor
                    precisión, recomendamos una evaluación profesional en la escuela.
                  </p>
                </div>

                <Button href="/evaluacion">
                  Hacer evaluación gratis
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-slate-50 py-24">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-red-600">
              Aprende diferente
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Una escuela de inglés pensada para personas reales.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Fast Track English no busca que memorices por obligación. Busca
              que entiendas, practiques y empieces a comunicarte con más
              seguridad.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <FadeIn key={service.title} delay={index * 0.1}>
                  <article className="group h-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-950/10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-2xl font-black tracking-tight text-slate-950">
                      {service.title}
                    </h3>

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
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <Container className="relative">
          <FadeIn className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-red-300">
              <Sparkles size={16} />
              Método Fast Track
            </div>

            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Un proceso claro para avanzar sin sentirte perdido.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              El aprendizaje se divide en pasos simples: entender, practicar y
              hablar. La meta es que cada clase se sienta útil.
            </p>
          </FadeIn>

          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
            {methodSteps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.1} className="h-full">
                <article className="flex h-full min-h-[270px] flex-col rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:bg-white/10">
                  <p className="text-5xl font-black leading-none text-red-400">
                    {step.number}
                  </p>

                  <h3 className="mt-7 text-2xl font-black leading-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-slate-300">
                    {step.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <FadeIn>
              <div className="relative h-[520px] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-950/10">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
                  alt="Clase de inglés con maestra y estudiantes"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/90 p-6 backdrop-blur">
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">
                    Clases con propósito
                  </p>

                  <p className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                    Aprende inglés para usarlo, no solo para estudiarlo.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-sm font-black uppercase tracking-[0.32em] text-red-600">
                Inglés que se siente útil
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Clases diseñadas para que avances con seguridad desde tu nivel
                actual.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                No importa si empiezas desde cero, si ya llevas tiempo
                intentando aprender o si necesitas inglés para trabajar en
                Cancún. Las clases se enfocan en ayudarte a entender, practicar
                y comunicarte con más confianza.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-2xl font-black text-red-600">01</p>

                  <h3 className="mt-3 font-black text-slate-950">
                    Aprende paso a paso
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Cada clase parte de lo que ya sabes y te guía con
                    explicaciones claras, ejercicios prácticos y avance
                    progresivo.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-2xl font-black text-red-600">02</p>

                  <h3 className="mt-3 font-black text-slate-950">
                    Habla con más confianza
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Practica frases, respuestas y situaciones reales para perder
                    el miedo a equivocarte y empezar a comunicarte.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="rounded-[2rem] bg-red-600 p-8 text-white shadow-2xl shadow-red-600/20 md:p-14">
            <FadeIn>
              <p className="text-sm font-black uppercase tracking-[0.32em] text-white/75">
                Próximo paso
              </p>

              <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Empieza con una clase, una duda o una meta clara.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                No necesitas tener buen nivel para comenzar. Solo necesitas dar
                el primer paso y construir desde ahí.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contacto" variant="secondary">
                  Contactar ahora
                </Button>

                <Button
                  href="/servicios"
                  className="bg-slate-950 hover:bg-slate-900"
                >
                  Ver servicios
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}