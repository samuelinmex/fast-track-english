import {
  BookOpenCheck,
  Compass,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";

const values = [
  {
    title: "Compromiso real",
    description:
      "Nos tomamos en serio el avance de cada alumno. Cada clase está pensada para que aprendas con claridad, constancia y propósito.",
    icon: HeartHandshake,
  },
  {
    title: "Paciencia y acompañamiento",
    description:
      "Sabemos que aprender un idioma puede dar miedo. Por eso enseñamos con empatía, guía y un ambiente donde equivocarse también es parte del proceso.",
    icon: Users,
  },
  {
    title: "Aprendizaje práctico",
    description:
      "Nos enfocamos en inglés útil para la vida real: hablar, entender, responder y ganar confianza en situaciones cotidianas, escolares o laborales.",
    icon: MessageCircle,
  },
  {
    title: "Claridad en cada paso",
    description:
      "Explicamos de forma sencilla, con estructura y objetivos claros para que el alumno sepa qué está aprendiendo y cómo puede mejorar.",
    icon: Lightbulb,
  },
];

const commitments = [
  "Escuchar tus metas antes de iniciar.",
  "Adaptar las clases a tu nivel real.",
  "Explicar con paciencia y sin hacerte sentir juzgado.",
  "Practicar inglés que puedas usar fuera del salón.",
  "Acompañarte para que ganes seguridad al hablar.",
  "Mantener un ambiente respetuoso, motivador y constante.",
];

export default function NosotrosPage() {
  return (
    <main>
      <section className="bg-slate-50 py-24">
        <Container>
          <SectionHeader
            eyebrow="Nosotros"
            title="En Fast Track English creemos que aprender inglés también requiere confianza."
            description="Nuestro compromiso es acompañar a cada alumno con clases claras, prácticas y humanas, ayudándolo a avanzar desde su nivel actual hasta comunicarse con más seguridad."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <FadeIn>
              <div className="h-full rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/15 md:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white">
                  <Target size={28} />
                </div>

                <p className="text-sm font-black uppercase tracking-[0.3em] text-red-300">
                  Nuestra misión
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                  Hacer que el inglés se sienta posible, útil y alcanzable.
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Queremos que cada estudiante aprenda con bases firmes, pierda
                  el miedo a equivocarse y descubra que puede comunicarse en
                  inglés paso a paso. Nuestro enfoque combina explicación,
                  práctica y acompañamiento para que el aprendizaje tenga un
                  impacto real en su vida diaria, estudios o trabajo.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="h-full rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                  <Compass size={28} />
                </div>

                <p className="text-sm font-black uppercase tracking-[0.3em] text-red-600">
                  Nuestra visión
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-950 md:text-4xl">
                  Ser una escuela cercana, confiable y orientada al progreso real.
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Aspiramos a ser un espacio donde los alumnos no solo estudien
                  inglés, sino que construyan confianza, disciplina y seguridad
                  para usarlo en situaciones reales. Queremos que Fast Track
                  English sea reconocido por su trato humano, su claridad al
                  enseñar y su compromiso con el avance de cada estudiante.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-red-600">
              Nuestros valores
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Valores que guían cada clase.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Cada alumno aprende a su ritmo, pero nadie debería sentirse solo
              en el proceso. Por eso nuestras clases se construyen sobre
              compromiso, paciencia, claridad y práctica constante.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <FadeIn key={value.title} delay={index * 0.08}>
                  <article className="group h-full rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-slate-950/10">
                    <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-red-600 shadow-sm transition-colors group-hover:bg-red-600 group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-black tracking-tight text-slate-950">
                      {value.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {value.description}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-red-200 backdrop-blur">
                <ShieldCheck size={16} />
                Nuestro compromiso contigo
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                No prometemos magia. Prometemos acompañarte con seriedad.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Aprender inglés requiere constancia, práctica y confianza.
                Nuestro papel es darte una guía clara, un espacio seguro para
                practicar y una metodología que te ayude a avanzar de manera
                realista.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {commitments.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
                        <BookOpenCheck size={20} />
                      </div>

                      <p className="font-bold leading-7 text-white/90">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </main>
  );
}