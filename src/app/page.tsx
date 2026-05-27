import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { FloatingShapes } from "@/components/shared/FloatingShapes";
import Image from "next/image";

const highlights = [
  "Desde cero",
  "Conversación real",
  "Inglés para turismo",
  "Clases personalizadas",
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
      <section className="relative overflow-hidden bg-white">
        <FloatingShapes />

        <Container className="relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-black text-red-600">
              <MapPin size={16} />
              Clases de inglés en Cancún
            </div>

            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl">
              Inglés práctico para hablar con confianza en la vida real.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Aprende desde cero, mejora tu conversación y prepárate para nuevas
              oportunidades en turismo, trabajo, viajes y vida diaria.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contacto">
                Quiero información
                <ArrowRight className="ml-2" size={18} />
              </Button>

              <Button href="/clases" variant="secondary">
                Ver clases
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
  <div className="relative">
    <div className="absolute -right-4 -top-4 z-20 hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-xl md:block">
      Learn to speak ✨
    </div>

    <div className="grid gap-4">
      <div className="relative h-[430px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/10">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
          alt="Estudiantes aprendiendo inglés en una clase moderna"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/90 p-5 shadow-xl backdrop-blur">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">
            Fast Track English
          </p>
          <p className="mt-2 text-2xl font-black tracking-tight text-slate-950">
            Clases claras, prácticas y con energía.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-slate-50 p-4 text-center">
          <p className="text-2xl font-black text-red-600">0</p>
          <p className="text-xs font-bold text-slate-600">Desde cero</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4 text-center">
          <p className="text-2xl font-black text-red-600">1:1</p>
          <p className="text-xs font-bold text-slate-600">Atención</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4 text-center">
          <p className="text-2xl font-black text-red-600">A+</p>
          <p className="text-xs font-bold text-slate-600">Avance</p>
        </div>
      </div>
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
              Fast Track English no busca que memorices por obligación. Busca que
              entiendas, practiques y empieces a comunicarte con más seguridad.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
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

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {methodSteps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.1}>
                <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:bg-white/10">
                  <p className="text-5xl font-black text-red-400">
                    {step.number}
                  </p>
                  <h3 className="mt-6 text-2xl font-black">{step.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">
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
          Clases diseñadas para que avances con seguridad desde tu nivel actual.
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          No importa si empiezas desde cero, si ya llevas tiempo intentando
          aprender o si necesitas inglés para trabajar en Cancún. Las clases se
          enfocan en ayudarte a entender, practicar y comunicarte con más
          confianza.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-2xl font-black text-red-600">01</p>
            <h3 className="mt-3 font-black text-slate-950">
              Aprende paso a paso
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Cada clase parte de lo que ya sabes y te guía con explicaciones
              claras, ejercicios prácticos y avance progresivo.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-2xl font-black text-red-600">02</p>
            <h3 className="mt-3 font-black text-slate-950">
              Habla con más confianza
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Practica frases, respuestas y situaciones reales para perder el
              miedo a equivocarte y empezar a comunicarte.
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
                <Button href="/servicios" className="bg-slate-950 hover:bg-slate-900">
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