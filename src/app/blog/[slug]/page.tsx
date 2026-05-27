import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado | Fast Track English",
    };
  }

  return {
    title: `${post.title} | Fast Track English`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

        <Container>
          <div className="relative mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-black text-slate-200 transition hover:bg-white/10"
            >
              <ArrowLeft size={17} />
              Volver al blog
            </Link>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-red-600 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white">
                {post.category}
              </span>

              <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-300">
                <Clock size={16} />
                {post.readTime}
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight tracking-[-0.05em] sm:text-6xl">
              {post.title}
            </h1>

            <p className="mt-6 text-xl leading-9 text-slate-300">
              {post.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <article className="mx-auto max-w-3xl">
            <p className="text-2xl font-bold leading-10 tracking-[-0.03em] text-slate-900">
              {post.intro}
            </p>

            <div className="mt-12 grid gap-12">
              {post.sections.map((section, index) => (
                <section key={section.heading}>
                  <div className="mb-5 flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-sm font-black text-white shadow-lg shadow-red-600/25">
                      {index + 1}
                    </span>

                    <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950">
                      {section.heading}
                    </h2>
                  </div>

                  <p className="text-lg leading-9 text-slate-600">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-14 rounded-[2rem] bg-slate-950 p-8 text-white">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-300">
                Conclusión
              </p>

              <p className="mt-4 text-xl font-bold leading-9">
                {post.conclusion}
              </p>
            </div>

            <div className="mt-14 rounded-[2rem] border border-red-100 bg-red-50 p-8">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">
                Siguiente paso
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950">
                Descubre tu nivel aproximado de inglés.
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Responde una evaluación rápida y recibe una orientación más clara
                sobre tu punto de partida.
              </p>

              <div className="mt-6">
                <Button href="/evaluacion">
                  Hacer evaluación gratis
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-4xl font-black tracking-[-0.04em] text-slate-950">
              También podría interesarte
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl hover:shadow-red-600/10"
                >
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    {item.category}
                  </span>

                  <h3 className="mt-4 text-xl font-black tracking-[-0.03em] text-slate-950 transition group-hover:text-red-600">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-red-600">
                    Leer más
                    <ArrowRight
                      className="transition group-hover:translate-x-2"
                      size={17}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}