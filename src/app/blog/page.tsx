"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/data/blogPosts";

const featuredPosts = blogPosts.slice(0, 3);
const secondaryPosts = blogPosts.slice(3);

const learningTips = [
  "Practica frases completas, no palabras sueltas.",
  "Escucha inglés todos los días, aunque sean pocos minutos.",
  "No esperes hablar perfecto para empezar a hablar.",
  "Aprende vocabulario relacionado con tu trabajo o vida diaria.",
];

export default function BlogPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />

        <Container>
          <div className="relative">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.32em] text-red-300">
                Blog Fast Track English
              </p>

              <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Consejos reales para aprender inglés con más confianza.
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Contenido práctico para principiantes, estudiantes, trabajadores
                del turismo y personas que quieren hablar inglés en situaciones
                reales.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {featuredPosts.map((post, index) => {
                const Icon = post.icon;

                return (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12, duration: 0.55 }}
                    whileHover={{
                      y: -14,
                      rotateX: 4,
                      rotateY: index === 1 ? 0 : index === 0 ? -3 : 3,
                    }}
                    className="group relative min-h-[390px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/20 backdrop-blur"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 transition duration-500 group-hover:opacity-95`}
                    />

                    <motion.div
                      className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10"
                      animate={{
                        scale: [1, 1.18, 1],
                        opacity: [0.25, 0.45, 0.25],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.4,
                      }}
                    />

                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative z-10 flex h-full flex-col"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-red-600 shadow-lg shadow-black/20 transition group-hover:scale-110">
                          <Icon size={26} />
                        </div>

                        <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-100 ring-1 ring-white/15 group-hover:bg-white/20">
                          {post.category}
                        </span>
                      </div>

                      <div className="mt-8">
                        <p className="text-sm font-bold text-slate-300 transition group-hover:text-white/90">
                          {post.readTime}
                        </p>

                        <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white">
                          {post.title}
                        </h2>

                        <p className="mt-5 leading-7 text-slate-300 transition group-hover:text-white/90">
                          {post.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-8">
                        <div className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-white">
                          Leer artículo
                          <ArrowRight
                            className="transition group-hover:translate-x-2"
                            size={18}
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-24 pt-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="sticky top-32 rounded-[2rem] bg-slate-950 p-8 text-white"
            >
              <p className="text-sm font-black uppercase tracking-[0.32em] text-red-300">
                Aprende con intención
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">
                Pequeños cambios que aceleran tu progreso.
              </h2>

              <p className="mt-5 leading-7 text-slate-300">
                El inglés se aprende mejor cuando lo conectas con tu vida real:
                tu trabajo, tus metas, tus conversaciones y las oportunidades
                que quieres alcanzar.
              </p>

              <div className="mt-8 grid gap-4">
                {learningTips.map((tip) => (
                  <div
                    key={tip}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-bold leading-6 text-slate-200"
                  >
                    {tip}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button href="/evaluacion">
                  Hacer evaluación gratis
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </motion.div>

            <div className="grid gap-6">
              {secondaryPosts.map((post, index) => {
                const Icon = post.icon;

                return (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    whileHover={{ x: 10, scale: 1.015 }}
                    className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:border-red-200 hover:shadow-2xl hover:shadow-red-600/10"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-red-600 opacity-0 transition group-hover:opacity-100" />
                    <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-red-50 opacity-0 transition duration-500 group-hover:opacity-100" />

                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative z-10 flex gap-5"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                        <Icon size={25} />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                            {post.category}
                          </span>

                          <span className="text-sm font-bold text-slate-400">
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-slate-950 transition group-hover:text-red-600">
                          {post.title}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                          {post.description}
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-red-600">
                          Ver consejo
                          <ArrowRight
                            className="transition group-hover:translate-x-2"
                            size={17}
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 pb-24 pt-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] bg-red-600 p-8 text-white shadow-2xl shadow-red-600/25 md:p-14"
          >
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-950/20 blur-2xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.32em] text-red-100">
                  Empieza con claridad
                </p>

                <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                  Descubre tu nivel aproximado y recibe orientación para
                  avanzar.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-red-50">
                  La mejor forma de empezar no es adivinar tu nivel, sino
                  identificar tu punto de partida y construir una ruta de
                  aprendizaje realista.
                </p>
              </div>

              <Button
                href="/evaluacion"
                variant="ghost"
                className="bg-white text-red-600 hover:bg-red-50"
              >
                Evaluación gratis
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}