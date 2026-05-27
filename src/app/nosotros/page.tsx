import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export default function NosotrosPage() {
  return (
    <main className="bg-white">
      <section className="py-24">
        <Container>
          <SectionHeader
            eyebrow="Sobre la escuela"
            title="Una forma más cercana, práctica y humana de aprender inglés."
            description="Fast Track English nace con una idea simple: ayudar a las personas a perder el miedo al inglés y empezar a usarlo en situaciones reales."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-red-600 p-8 text-white shadow-xl shadow-red-600/20">
              <p className="text-sm font-black uppercase tracking-[0.32em] text-white/75">
                Nuestra misión
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em]">
                Que el inglés deje de sentirse imposible.
              </h2>
            </div>

            <div className="grid gap-6 text-lg leading-8 text-slate-600">
              <p>
                Muchas personas quieren aprender inglés, pero se sienten
                bloqueadas porque creen que ya es tarde, que no tienen buena
                pronunciación o que necesitan saber gramática perfecta antes de
                hablar.
              </p>

              <p>
                En Fast Track English trabajamos con explicaciones claras,
                práctica constante y objetivos reales. El enfoque es aprender
                inglés para comunicarse, trabajar, viajar, estudiar y crecer.
              </p>

              <p>
                Desde Cancún, conectamos el aprendizaje del idioma con
                situaciones cotidianas y profesionales, especialmente en turismo,
                atención al cliente y conversación diaria.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}