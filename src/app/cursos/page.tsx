import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { futureCourses } from "@/data/courses";

export default function CursosPage() {
  return (
    <main>
      <section className="bg-slate-50 py-24">
        <Container>
          <SectionHeader
            eyebrow="Cursos online"
            title="Cursos online próximamente."
            description="Por ahora Fast Track English funciona como sitio informativo, pero la plataforma queda preparada para ofrecer cursos digitales más adelante."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {futureCourses.map((course) => (
              <article
                key={course.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <span className="rounded-full bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-red-600">
                  {course.level}
                </span>
                <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-950">
                  {course.title}
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  {course.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] bg-red-600 p-8 text-white md:p-12">
            <h2 className="max-w-3xl text-3xl font-black tracking-[-0.04em] md:text-5xl">
              Sé de los primeros en enterarte cuando los cursos estén listos.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/80">
              Más adelante se podrán vender cursos online, materiales
              descargables, membresías y programas especializados.
            </p>
            <div className="mt-8">
              <Button href="/contacto" variant="secondary">
                Unirme a la lista de interés
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}