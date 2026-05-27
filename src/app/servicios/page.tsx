import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/Button";

const premiumServices = [
  "Diagnóstico de nivel",
  "Clase muestra",
  "Club de conversación",
  "Capacitación para hoteles",
  "Capacitación para restaurantes",
  "Preparación para entrevistas",
  "Inglés para atención al cliente",
  "Clases para empresas",
];

export default function ServiciosPage() {
  return (
    <main>
      <section className="py-24">
        <Container>
          <SectionHeader
            eyebrow="Servicios"
            title="Servicios pensados para alumnos, profesionales y negocios."
            description="Además de clases regulares, Fast Track English puede crecer hacia servicios especializados para personas y empresas en Cancún."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {premiumServices.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-slate-200 bg-white p-6 font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-red-50"
              >
                {service}
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
            <h2 className="max-w-3xl text-3xl font-black tracking-[-0.04em] md:text-5xl">
              ¿Tienes un objetivo específico con el inglés?
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Podemos orientar las clases hacia turismo, trabajo, entrevistas,
              escuela, viajes o conversación diaria.
            </p>
            <div className="mt-8">
              <Button href="/contacto">Solicitar información</Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}