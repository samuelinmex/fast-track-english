import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { services } from "@/data/services";

export default function ClasesPage() {
  return (
    <main>
      <section className="bg-slate-50 pb-24 pt-32">
        <Container>
          <SectionHeader
            eyebrow="Clases"
            title="Clases de inglés para empezar, retomar o mejorar."
            description="Elige el tipo de clase que mejor se adapte a tu objetivo actual. Puedes iniciar desde cero o reforzar lo que ya sabes."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-950/10"
              >
                <h2 className="text-2xl font-black tracking-tight text-slate-950">
                  {service.title}
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}