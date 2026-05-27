import { ArrowRight, Briefcase, GraduationCap, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";

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

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-100 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />

        <Container className="relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
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
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-950/10">
              <div className="rounded-[1.5rem] bg-red-600 p-10 text-center text-white">
                <p className="text-5xl font-black leading-none tracking-tight sm:text-6xl">
                  FAST TRACK
                  <br />
                  ENGLISH
                </p>
                <p className="mt-8 text-xs font-black uppercase tracking-[0.55em] text-white/85">
                  Learn to speak
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
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
        </Container>
      </section>

      <section className="bg-slate-50 py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
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
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-950/10"
                >
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
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}