"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Mail,
  MessageCircle,
  Phone,
  RotateCcw,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";

const questions = [
  {
    question: "Elige la frase correcta:",
    options: ["She have a car.", "She has a car.", "She having a car."],
  },
  {
    question: "¿Cómo responderías a: “How are you?”",
    options: ["I am fine, thank you.", "I have fine.", "I fine am."],
  },
  {
    question: "Completa: “I ____ to work every day.”",
    options: ["go", "goes", "going"],
  },
  {
    question: "¿Cuál frase suena más natural?",
    options: [
      "Can you help me, please?",
      "Can help me you, please?",
      "You can please help me?",
    ],
  },
  {
    question: "Completa: “Yesterday, I ____ English.”",
    options: ["study", "studied", "studying"],
  },
  {
    question: "Elige la opción correcta:",
    options: [
      "I am interested in learning English.",
      "I interested learning English.",
      "I am interest to English.",
    ],
  },
  {
    question: "Completa: “If I have time tomorrow, I ____ you.”",
    options: ["call", "will call", "called"],
  },
  {
    question: "¿Qué frase está mejor escrita?",
    options: [
      "I have been studying English for two years.",
      "I study English since two years.",
      "I am studying English since two years.",
    ],
  },
];

const goals = [
  "Aprender desde cero",
  "Mejorar conversación",
  "Inglés para trabajo",
  "Inglés para turismo",
  "Centro de Preparación Cambridge",
  "Regularización escolar",
];

export default function EvaluacionPage() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const progress = useMemo(() => {
    if (showContactForm) return 100;
    return ((currentQuestion + 1) / questions.length) * 100;
  }, [currentQuestion, showContactForm]);

  const selectAnswer = (answer: string) => {
    const nextAnswers = [...answers];
    nextAnswers[currentQuestion] = answer;
    setAnswers(nextAnswers);

    window.setTimeout(() => {
      if (currentQuestion + 1 >= questions.length) {
        setShowContactForm(true);
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
    }, 350);
  };

  const goBack = () => {
    if (showContactForm) {
      setShowContactForm(false);
      setCurrentQuestion(questions.length - 1);
      return;
    }

    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const resetEvaluation = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowContactForm(false);
    setSubmitted(false);
  };

  const submitEvaluation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const payload = {
      nombre: formData.get("nombre"),
      whatsapp: formData.get("whatsapp"),
      email: formData.get("email"),
      objetivo: formData.get("objetivo"),
      horario: formData.get("horario"),
      comentarios: formData.get("comentarios"),
      respuestas: answers,
    };

    console.log("Evaluación recibida:", payload);

    setSubmitted(true);
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/25 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-red-200 backdrop-blur">
              <ClipboardCheck size={17} />
              Evaluación online gratuita
            </div>

            <h1 className="mt-6 text-5xl font-black leading-none tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Descubre tu nivel aproximado de inglés.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Responde una evaluación rápida y deja tus datos para recibir una
              orientación personalizada sobre tu nivel y la mejor ruta para
              avanzar.
            </p>

            <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur">
              <p className="flex gap-3 text-sm font-bold leading-6 text-slate-300">
                <BadgeCheck className="mt-0.5 shrink-0 text-red-300" />
                Esta evaluación es orientativa. Para conocer tu nivel con mayor
                precisión, recomendamos una evaluación profesional en la escuela.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 pb-24 pt-32">
        <Container>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-950/10">
            {!submitted && (
              <div className="border-b border-slate-100 bg-white px-6 py-5 md:px-8">
                <div className="mb-3 flex items-center justify-between text-sm font-black text-slate-500">
                  <span>
                    {showContactForm
                      ? "Datos de contacto"
                      : started
                        ? `Pregunta ${currentQuestion + 1} de ${questions.length}`
                        : "Inicio"}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    className="h-full rounded-full bg-red-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${started ? progress : 0}%` }}
                    transition={{ duration: 0.35 }}
                  />
                </div>
              </div>
            )}

            <div className="p-6 md:p-10">
              {!started && !submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Sparkles size={32} />
                  </div>

                  <h2 className="text-4xl font-black tracking-[-0.05em] text-slate-950">
                    Antes de comenzar
                  </h2>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    La evaluación tiene varias preguntas rápidas. Al terminar,
                    te pediremos tus datos para enviarte tus resultados y una
                    recomendación personalizada.
                  </p>

                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    <div className="rounded-2xl bg-slate-50 p-5">
                      <p className="font-black text-slate-950">Rápida</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Toma pocos minutos responderla.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-5">
                      <p className="font-black text-slate-950">Orientativa</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Nos ayuda a conocer tu punto de partida.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-5">
                      <p className="font-black text-slate-950">Personalizada</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        Te contactaremos con una recomendación.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStarted(true)}
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 font-black text-white shadow-xl shadow-red-600/25 transition hover:-translate-y-0.5 hover:bg-red-700"
                  >
                    Iniciar evaluación
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </motion.div>
              )}

              {started && !showContactForm && !submitted && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h2 className="text-3xl font-black tracking-[-0.04em] text-slate-950">
                      {questions[currentQuestion].question}
                    </h2>

                    <div className="mt-7 grid gap-3">
                      {questions[currentQuestion].options.map((option) => {
                        const selected = answers[currentQuestion] === option;

                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => selectAnswer(option)}
                            className={`flex items-center justify-between rounded-2xl border p-5 text-left font-bold transition ${
                              selected
                                ? "border-red-600 bg-red-50 text-red-700"
                                : "border-slate-200 bg-white text-slate-700 hover:border-red-300 hover:bg-red-50/50"
                            }`}
                          >
                            <span>{option}</span>
                            {selected && <CheckCircle2 size={22} />}
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={goBack}
                        disabled={currentQuestion === 0}
                        className="inline-flex items-center rounded-full px-5 py-3 font-black text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <ArrowLeft className="mr-2" size={18} />
                        Atrás
                      </button>

                      <button
                        type="button"
                        onClick={resetEvaluation}
                        className="inline-flex items-center rounded-full px-5 py-3 font-black text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                      >
                        <RotateCcw className="mr-2" size={18} />
                        Reiniciar
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}

              {showContactForm && !submitted && (
                <motion.form
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={submitEvaluation}
                >
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">
                    Último paso
                  </p>

                  <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">
                    ¿A dónde enviamos tus resultados?
                  </h2>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Déjanos tus datos y revisaremos tus respuestas para enviarte
                    una orientación de nivel y una recomendación de clase.
                  </p>

                  <div className="mt-8 grid gap-4">
                    <label className="grid gap-2">
                      <span className="flex items-center gap-2 text-sm font-black text-slate-700">
                        <User size={17} />
                        Nombre
                      </span>
                      <input
                        name="nombre"
                        required
                        className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400"
                        placeholder="Tu nombre"
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="flex items-center gap-2 text-sm font-black text-slate-700">
                        <Phone size={17} />
                        WhatsApp
                      </span>
                      <input
                        name="whatsapp"
                        required
                        className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400"
                        placeholder="Tu número de WhatsApp"
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="flex items-center gap-2 text-sm font-black text-slate-700">
                        <Mail size={17} />
                        Correo electrónico opcional
                      </span>
                      <input
                        name="email"
                        type="email"
                        className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400"
                        placeholder="tu@email.com"
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="flex items-center gap-2 text-sm font-black text-slate-700">
                        <MessageCircle size={17} />
                        ¿Cuál es tu objetivo?
                      </span>
                      <select
                        name="objetivo"
                        required
                        className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400"
                      >
                        <option value="">Selecciona una opción</option>
                        {goals.map((goal) => (
                          <option key={goal}>{goal}</option>
                        ))}
                      </select>
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-black text-slate-700">
                        Horario preferido
                      </span>
                      <select
                        name="horario"
                        className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400"
                      >
                        <option>Mañana</option>
                        <option>Tarde</option>
                        <option>Noche</option>
                        <option>Fin de semana</option>
                      </select>
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-black text-slate-700">
                        Comentarios opcionales
                      </span>
                      <textarea
                        name="comentarios"
                        className="min-h-28 rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-red-400"
                        placeholder="Cuéntanos si tienes alguna meta específica..."
                      />
                    </label>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex items-center justify-center rounded-full px-5 py-3 font-black text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                    >
                      <ArrowLeft className="mr-2" size={18} />
                      Atrás
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-4 font-black text-white shadow-xl shadow-red-600/25 transition hover:-translate-y-0.5 hover:bg-red-700"
                    >
                      Enviar evaluación
                      <Send className="ml-2" size={18} />
                    </button>
                  </div>
                </motion.form>
              )}

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-red-600 text-white shadow-xl shadow-red-600/25">
                    <CheckCircle2 size={42} />
                  </div>

                  <p className="text-sm font-black uppercase tracking-[0.28em] text-red-600">
                    Evaluación recibida
                  </p>

                  <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-slate-950">
                    Gracias por completar tu evaluación.
                  </h2>

                  <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                    Revisaremos tus respuestas y te contactaremos para compartir
                    una orientación de nivel y recomendarte la mejor ruta para
                    avanzar.
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Button href="/contacto">
                      Ir a contacto
                      <ArrowRight className="ml-2" size={18} />
                    </Button>

                    <button
                      type="button"
                      onClick={resetEvaluation}
                      className="inline-flex items-center justify-center rounded-full px-6 py-3 font-black text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
                    >
                      <RotateCcw className="mr-2" size={18} />
                      Repetir evaluación
                    </button>
                  </div>

                  <p className="mt-8 rounded-2xl bg-slate-50 p-5 text-sm font-bold leading-6 text-slate-500">
                    Nota: esta versión registra la evaluación visualmente en el
                    navegador. El siguiente paso será conectarla a un servicio de
                    envío como Formspree, Google Forms o Cloudflare Workers.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}