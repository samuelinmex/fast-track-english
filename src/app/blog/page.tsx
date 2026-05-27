import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

const posts = [
  "Cómo aprender inglés desde cero sin frustrarte",
  "Frases en inglés para trabajar en hoteles",
  "Cómo perder el miedo a hablar inglés",
  "Inglés básico para atención al cliente",
];

export default function BlogPage() {
  return (
    <main>
      <section className="py-24">
        <Container>
          <SectionHeader
            eyebrow="Blog"
            title="Consejos para aprender inglés de forma práctica."
            description="El blog ayudará a posicionar la página en Google y atraer personas interesadas en aprender inglés en Cancún."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-950/10"
              >
                <p className="text-sm font-black uppercase tracking-[0.32em] text-red-600">
                  Próximamente
                </p>
                <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">
                  {post}
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  Artículo preparado para fortalecer el SEO del sitio y atraer
                  alumnos interesados en inglés práctico.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}